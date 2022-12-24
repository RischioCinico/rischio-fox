#!/bin/sh

cp -f policies.json /usr/lib/firefox/distribution/policies.json
echo Copiato policies.json

cp -f my-settings.js /usr/lib/firefox/defaults/pref/my-settings.js
echo Copiato my-settings.js

cp -f mozilla.cfg /usr/lib/firefox/mozilla.cfg
echo Copiato mozilla.cfg
