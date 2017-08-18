#!/bin/bash

# This script is just to help ME create the Windows version of the user.js file
# and is not needed by regular users.

# if a line does not contain either a user_pref of the correct syntax, or
# doesn't contain a comment with // as the comment identifier, or the user_pref
# line does not end in a comment I want this script to fail so that I can fix
# it.
# At the very least it will help to identify inconsistencies in the code, at
# most it will help identify syntactical errors.
grep -vn "^user_pref(\".*\", .*);$" firefox/nix/user.js | \
grep -v "^[0-9]*://" | grep -v "^[0-9]*:$" | \
grep -v "^[0-9]*:user_pref(\".*\", .*); //.*$"

# if the grep above exited with code "0" then it found something which is bad
if [ $? -eq 0 ]; then
  echo ""
  echo "======================================================================="
  echo "Fix the above lines in the user.js file before continuing."
  exit 1
fi

# If any of these fail to complete then exit.
# These commands imply that this script must be run from the root of the repo.
cd firefox/windows
if [ $? -ne 0 ]; then
  echo "Failed to change into \"firefox/windows\""
  exit 2
fi

cp -f ../nix/user.js ./
if [ $? -ne 0 ]; then
  echo "Failed to copy user.js to the Windows Folder"
  exit 3
fi

unix2dos user.js
if [ $? -ne 0 ]; then
  echo "Failed to convert user.js file to dos"
  exit 4
fi

echo "DONE!"
