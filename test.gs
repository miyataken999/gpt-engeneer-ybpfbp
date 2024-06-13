/**
 * Test function for registerSheetContentToCalendar.
 */
function testRegisterSheetContentToCalendar() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.clearContents();
  
  var data = [
    ["Event 1", "2023-03-01 10:00:00", "2023-03-01 11:00:00"],
    ["Event 2", "2023-03-01 11:00:00", "2023-03-01 12:00:00"]
  ];
  
  sheet.getRange(1, 1, data.length, data[0].length).setValues(data);
  
  registerSheetContentToCalendar();
  
  var calendarId = 'your_calendar_id';
  var calendar = CalendarApp.getCalendarById(calendarId);
  var events = calendar.getEvents();
  
  assertEquals(2, events.length);
}

/**
 * Test function for getRegisteredData.
 */
function testGetRegisteredData() {
  var data = getRegisteredData();
  var jsonData = JSON.parse(data);
  
  assertEquals(2, jsonData.length);
}