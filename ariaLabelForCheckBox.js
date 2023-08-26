$(document).ready(function () {
  $('.EnblSlct').on('click', function () {
    if ($(this).is(':checked')) {
      $(this).addClass('checked');
    } else {
      $(this).removeClass('checked');
    }
  });
});
//**************************************************************** */
function checkForYesValues(tabelControlID) {
  $('.EnblSlct').on('click', function () {
    if ($(this).is(':checked')) {
      $(this).addClass('checked');
    } else {
      $(this).removeClass('checked');
    }
  });

  var checkBoxGroup = $('.myTable .fixedTable table tbody tr');
  // $('.myTable .fixedTable table tbody tr').find('td input ')
  //$('.myTable .fixedTable table tbody tr').find('td div:eq(0)').text();

  for (var i = 0; i < checkBoxGroup.length; i++) {
    var checkBoxInput = $(checkBoxGroup[i]).find(
      'td input[type="checkbox"]:checked'
    );
    var labelValue = $(checkBoxGroup[i]);

    if (checkBoxInput.length > 0) {
      var radioLabelText = $(checkBoxGroup[i]).find('td div:eq(0) ').text();
      var alertValue = radioLabelText === 'Yes' ? 'true' : 'false';

      var isPhoneNumber = /^\d{10}$/.test(labelValue);
      var isEmailAddress = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(labelValue);

      var alertMessage = '';
      if (isPhoneNumber) {
        alertMessage = 'Receive text alert on ' + labelValue + ' ' + alertValue;
      } else if (isEmailAddress) {
        alertMessage =
          'Receive email alert on ' + labelValue + ' ' + alertValue;
      }
      $(radioInput).attr('aria-label', alertMessage);
    } else {
      $(unCheckedInput).removeAttr('aria-label');
    }
  }
}
