function Graphing() {
  //gets current sheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  //gets the home page
  var source = ss.getSheets()[0];
  
  //gets the graphing sheet
  var destination = ss.getSheets()[1];
  
  //gets gain value
  var value = source.getRange(20, source.getMaxColumns());
  
  //gets cell that has value
  var x = destination.getRange("c1");
  //gets value that is used as row to edit
  var point = x.getValue();
  
  var datePoint = destination.getRange(point, 2);
  
  //sets the new point to the value of gain
  value.copyTo(destination.getRange(point, 1), {contentsOnly:true});
  
  //Getting Time
  var d = new Date();
  var currentHour = d.getHours();
  var currentMinute = d.getMinutes();
  var currentMonth = d.getMonth();
  var currentDay = d.getDate();
  var currentYear = d.getFullYear();
  
  //Assembling time into a readable format
  var timeAndDate = (currentMonth+1) + "/" + currentDay + "/" + currentYear + " " + currentHour + ":" + currentMinute;
  
  //Setting that value to appropriate position, datePoint, in chart
  datePoint.setValue(timeAndDate);
  
  //Notify
  ss.toast("Graphs Updated! Go to 'Charts' tab to view new values at line: " + x.getValue() +"!", "CryptoNotifier", 5);
  x.setValue(point+1);
}
