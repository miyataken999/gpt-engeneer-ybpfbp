# Google Apps Script: Register Google Sheet Content to Google Calendar

This script registers Google Sheet content to Google Calendar.

## How to use

1. Create a new Google Sheet.
2. Create a new Google Calendar.
3. In the Google Sheet, create a table with the following columns:
	* Title
	* Start Date Time
	* End Date Time
4. In the script editor, create a new script and paste the code.
5. Set the `calendarId` variable to your Google Calendar ID.
6. Run the `registerSheetContentToCalendar` function to register the sheet content to the calendar.
7. Run the `getRegisteredData` function to get the registered data as JSON.

## Functions

* `registerSheetContentToCalendar()`: Registers Google Sheet content to Google Calendar.
* `getRegisteredData()`: Returns the registered data as JSON.