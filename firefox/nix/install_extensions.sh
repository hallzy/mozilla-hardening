#!/bin/bash

# Extensions to download and install
declare -a extensions=(
"noscript"
"umatrix"
"ublock-origin"
"canvasblocker"
)

latest="https://addons.mozilla.org/firefox/downloads/latest/"


# do_install#{{{
function do_install() {
  if [ -z "${1}" ]; then
    echo "Missing argument."
    return
  fi

  # The second argument is just used to display something to the user. If it
  # isn't provided then just use the filename given in the first argument
  if [ -z "${2}" ]; then
    providedFile="${1}"
  else
    providedFile="${2}"
  fi

  # Check that the file actually exists on disk
  ls "${1}" 2> /dev/null
  if [ $? -ne 0 ]; then
    echo "File '${providedFile}' doesn't exist."
    return
  fi

  filename="${1}"

  # Get the addon ID from the manifest.json file
  addonID=$(unzip -p "${filename}" manifest.json 2> /dev/null | grep "\"id\":" \
            | head -n 1 | sed 's/^.*\"id\":\s*"\(.*\)".*$/\1/g')

  # Make sure we got an addonID
  if [ -z "$addonID" ]; then
    echo "Couldn't find addonID for '${providedFile}'"
    return
  fi

  echo "Addon ID: ${addonID}"

  PATH_FIREFOX="/usr/lib/firefox-addons/extensions"

  # Move and rename the file to install it globally.
  sudo mv "${filename}" "${PATH_FIREFOX}/${addonID}"
  sudo chown -R root:root "${PATH_FIREFOX}/${addonID}"
  sudo chmod -R a+rX "${PATH_FIREFOX}/${addonID}"
}
#}}}

# If no argument provided, then use the extensions array
if [ -z "${1}" ]; then
  # If an argument wasn't provided to the script, then use the extensions array
  # instead.
  for addon in "${extensions[@]}"; do
    wget -O "${addon}.xpi" "${latest}/${addon}" -o /dev/null
    do_install "${addon}.xpi"
  done
  # Exit the script
  exit 0
fi

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
