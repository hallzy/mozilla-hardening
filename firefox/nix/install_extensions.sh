#!/bin/bash

# Extensions to download and install
declare -a extensions=(
"noscript"
"umatrix"
"ublock-origin"
"canvasblocker"
)

readonly VERSION=2

latest="https://addons.mozilla.org/firefox/downloads/latest/"
PATH_FIREFOX="/usr/lib/firefox-addons/extensions"

# do_install#{{{
function do_install() {
  if [ -z "${1}" ]; then
    echo "Missing argument."
    return
  fi

  # The second argument is just used to display something to the user. If it
  # isn't provided then just use the filename given in the first argument
  if [ -z "${2}" ]; then
    local providedFile="${1}"
  else
    local providedFile="${2}"
  fi

  # Check that the file actually exists on disk
  ls "${1}" > /dev/null 2>&1
  if [ $? -ne 0 ]; then
    echo "File '${providedFile}' doesn't exist."
    return
  fi

  local filename="${1}"

  # Get the addon ID from the manifest.json file
  local addonID
  addonID=$(unzip -p "${filename}" manifest.json 2> /dev/null | grep "\"id\":" \
            | head -n 1 | sed 's/^.*\"id\":\s*"\(.*\)".*$/\1/g')

  # Make sure we got an addonID
  if [ -z "$addonID" ]; then
    echo "Couldn't find addonID for '${providedFile}'"
    return
  fi

  echo "Addon ID: ${addonID}"

  # Move and rename the file to install it globally.
  sudo mv "${filename}" "${PATH_FIREFOX}/${addonID}"
  if [ $? -ne 0 ]; then
    echo "Failed to move file to destination directory. Skipping Extension."
    rm "${filename}"
    return
  fi
  sudo chown -R root:root "${PATH_FIREFOX}/${addonID}"
  if [ $? -ne 0 ]; then
    echo "Failed to change ownership of extension file. Skipping Extension."
    rm "${PATH_FIREFOX}/${addonID}"
    return
  fi
  sudo chmod -R a+rX "${PATH_FIREFOX}/${addonID}"
  if [ $? -ne 0 ]; then
    echo "Failed to change permissions of extension file. Skipping Extension."
    rm "${PATH_FIREFOX}/${addonID}"
    return
  fi
}
#}}}

# getUniqueFilename#{{{
function getUniqueFilename() {
  local tmpFile="${1}"
  # If the temp file already exists, change it until it doesn't
  while : ; do
    # if this file doesn't exist, then we can use it.
    ls "${tmpFile}" > /dev/null 2>&1
    if [ $? -ne 0 ]; then
      echo "${tmpFile}"
      break
    fi
    tmpFile="${tmpFile}1"
  done
}
#}}}

# getNewVersionNumber#{{{
function getNewVersionNumber() {
  local newVersionNumber
  newVersionNumber=$(grep "readonly VERSION=" "${1}" | head -n 1 | \
                     sed 's/^.*VERSION=\(.*\)$/\1/g')
  if [ -z "${newVersionNumber}" ]; then
    newVersionNumber=0
  fi
  echo "${newVersionNumber}"
}
#}}}

# get_updated_script#{{{
function get_updated_script() {
  local tmpFile="${1}"
  while : ; do
    read -p "Provide a filename for the updated script: " newName
    if [ -z "${newName}" ]; then
      echo "Invalid Filename!"
      continue
    fi
    break
  done
  newName=$(getUniqueFilename "${newName}")
  mv "${tmpFile}" "${newName}"
  echo -e "Saved the new script file as: ${newName}\n"
  echo -e "Not installing extensions. Please run again, or use new script.\n"

  # Get the user extensions from this currently running script into a string.
  local userExt
  userExt="\n"
  for addon in "${extensions[@]}"; do
    userExt="${userExt}\"${addon}\"\n"
  done


  # Replace the contents of the extensions array for the new script file with
  # the user's extensions.
  local declaration="declare -a extensions"
  sed -i "/${declaration}=(/{:next;/)/{s/(.*)/($userExt)/;b;};N;b next;}" \
         "${newName}"
}
#}}}

# get_changelog
function get_changelog() {
  local oldVersion
  local newVersion
  local url
  local changelog
  oldVersion="${1}"
  oldVersion=$((oldVersion+1))
  newVersion="${2}"
  url="https://raw.githubusercontent.com/hallzy/mozilla-hardening/master"
  url="${url}/firefox/nix/install_extensions_changelog/"

  if [ "${oldVersion}" -eq 0 ]; then
    oldVersion=1
  fi
  if [ "${newVersion}" -eq 0 ]; then
    newVersion=1
  fi

  echo "Changelog:"
  echo -e "==========\n"
  for i in $(seq $newVersion -1 $oldVersion); do
    changelog=$(getUniqueFilename "changelog")
    wget -O "${changelog}" "${url}/${i}.txt" -o /dev/null
    if [ $? -ne 0 ]; then
      echo "Error getting changelog for version ${i}"
    else
      echo "Version ${i}"
      cat ${changelog}
    fi
    rm ${changelog}
  done

}

# check_for_updates#{{{
function check_for_updates() {
  echo -e "Checking for Updates...\n"
  local url="https://raw.githubusercontent.com/hallzy/mozilla-hardening/master"
  url="${url}/firefox/nix/install_extensions.sh"

  local tmpFile
  tmpFile=$(getUniqueFilename "tmp")

  wget -O "${tmpFile}" "${url}" -o /dev/null

  local newVersionNumber
  newVersionNumber=$(getNewVersionNumber "${tmpFile}")

  if [ "${newVersionNumber}" -le "${VERSION}" ]; then
    echo "No updates available. Continuing with extension install."
    rm "${tmpFile}"
    return
  fi

  echo "Updates are available for the script. Would you like to download them?"
  select yn in "Yes" "No"; do
    case $yn in
      Yes )
        get_updated_script "${tmpFile}"
        get_changelog "${VERSION}" "${newVersionNumber}"
        exit 0
        ;;
      No )
        rm "${tmpFile}"
        echo "Continuing with extension Install"
        break;
        ;;
    esac
  done
}
#}}}

# main#{{{
function main() {
  # Do you want to check for updates?
  echo "Do you want to check for updates to this script?"
  select yn in "Yes" "No"; do
    case $yn in
      Yes )
        check_for_updates
        # If updated, the script exits here
        break;
        ;;
      No )
        break;
        ;;
    esac
  done

  # Check to make sure that the extensions directory exists
  ls "${PATH_FIREFOX}" > /dev/null 2>&1
  if [ $? -ne 0 ]; then
    echo "Global Extensions directory does not exist: '${PATH_FIREFOX}'"
    return
  fi

  # If no argument provided, then use the extensions array
  if [ -z "${1}" ]; then
    # If an argument wasn't provided to the script, then use the extensions
    # array instead.
    for addon in "${extensions[@]}"; do
      wget -O "${addon}.xpi" "${latest}/${addon}" -o /dev/null
      do_install "${addon}.xpi"
    done
    # Exit the script
    exit 0
  fi

  local message
  local addon
  case "${1}" in
    "http*" )
      message="Using provided URL..."
      addon="addon.xpi"
      wget -O "${addon}" "${1}" -o /dev/null
      ;;
    "*.xpi" )
      message="Using provided file..."
      addon="${1}"
      ;;
    * )
      message="Trying to find latest version of extension '${1}'"
      addon="addon.xpi"
      wget -O ${addon} "${latest}/${1}" -o /dev/null
      ;;
  esac

  echo "${message}"
  do_install "${addon}" "${1}"
}
#}}}

main "$@"
