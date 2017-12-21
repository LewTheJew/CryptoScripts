function update() {
  var range = SpreadsheetApp.getActiveSheet().getRange("c26");
  range.setValue(range.getValue()+1)
}
