#!/bin/bash

# Install dependencies
npm install --save @google/clasp

# Run the codebase
clasp login
clasp create --type sheets --title "Register Google Sheet Content to Google Calendar"
clasp push -f Code.gs
clasp push -f test.gs
clasp run registerSheetContentToCalendar
clasp run getRegisteredData
clasp run testRegisterSheetContentToCalendar
clasp run testGetRegisteredData
