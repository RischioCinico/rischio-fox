#!/bin/sh

mv -f policies.json /usr/lib/firefox/distribution/policies.json
echo Copiato policies.json

mv -f my-settings.js /usr/lib/firefox/defaults/pref/my-settings.js
echo Copiato my-settings.js

mv -f mozilla.cfg /usr/lib/firefox/mozilla.cfg
echo Copiato mozilla.cfg
