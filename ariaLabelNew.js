function editButton(tableControlID, targetLabelIndex, targetColumnIndex) {
  debugger;
  var editButtonRows = $('#' + tableControlID + ' .fixedTable table tbody tr');

  editButtonRows.each(function () {
    debugger;
    var targetindex = parseInt(targetColumnIndex);
    var labelIndex = parseInt(targetLabelIndex);
    var labelText = $(this)
      .find('td div:eq(' + labelIndex + ')')
      .text()
      .trim();
    var editButton = $(this).find('td:eq(' + targetindex + ') a');

    var isPhoneNumber = /^\(\d{3}\) \d{3}-\d{4}$|^\d{3}-\d{3}-\d{4}$/.test(
      labelText
    );
    var isEmailAddress = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(labelText);

    var alertMessage = '';
    if (isPhoneNumber) {
      alertMessage = 'Set Time for text alerts to Phone number ' + labelText;
    } else if (isEmailAddress) {
      alertMessage = 'Set Time for mail alerts to Email ' + labelText;
    }

    editButton.attr('aria-label', alertMessage);
  });
}
$('.myTable .fixedTable table tbody tr:eq(0)').find('td:eq(4) a');
$('.myTable .fixedTable table tbody tr:eq(0) td:eq(5) a');
