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
  // Text <ph no> checked/not checked;
  var checkBoxGroup = $('.myTable .fixedTable table tbody tr');
  // $('.myTable .fixedTable table tbody tr').find('td input ')
  //$('.myTable .fixedTable table tbody tr').find('td div:eq(0)').text();

  for (var i = 0; i < checkBoxGroup.length; i++) {
    var checkBoxInput = $(checkBoxGroup[i]).find(
      'td input[type="checkbox"]:checked'
    );
    var checkBoxUnchecked = $(checkBoxGroup[i]).find(
      'td input[type="checkbox"]:not(:checked'
    );
    if (checkBoxInput.length > 0) {
      var radioLabelText = $(checkBoxGroup[i]).find('td div:eq(0) ').text();
      var alertValue = radioLabelText != '' ? 'checked' : 'not checked';

      var isPhoneNumber = /^\d{10}$/.test(radioLabelText);
      var isEmailAddress = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(radioLabelText);

      var alertMessage = '';
      if (isPhoneNumber) {
        alertMessage = 'Text ' + radioLabelText + 'is ' + alertValue;
      } else if (isEmailAddress) {
        alertMessage = 'Email ' + radioLabelText + 'is ' + alertValue;
      }
      $(checkBoxInput).attr('aria-label', alertMessage);
    } else {
      $(checkBoxUnchecked).removeAttr('aria-label');
    }
  }
}
/*************************************************************** */
function checkBoxValues(tabelControlID) {
  debugger;
  var checkBoxGroup = $('#' + tabelControlID + ' .fixedTable table tbody tr');
  for (var i = 0; i < checkBoxGroup.length; i++) {
    var checkBoxInput = $(checkBoxGroup[i]).find(
      'td input[type="checkbox"]:checked'
    );
    var checkBoxUnchecked = $(checkBoxGroup[i]).find(
      'td input[type="checkbox"]:not(:checked)'
    );
    if (checkBoxInput.length > 0) {
      var tabelText = $(checkBoxGroup[i]).find('td div:eq(0) ').text();
      var alertValue = tabelText != '' ? 'checked' : 'not checked';

      var isPhoneNumber = /^\(\d{3}\) \d{3}-\d{4}$/.test(tabelText);
      var isEmailAddress = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(tabelText);

      var alertMessage = '';
      if (isPhoneNumber) {
        alertMessage = 'Text ' + tabelText + 'is ' + alertValue;
      } else if (isEmailAddress) {
        alertMessage = 'Email ' + tabelText + 'is ' + alertValue;
      }
      $(checkBoxInput).attr('aria-label', alertMessage);
    } else {
      $(checkBoxUnchecked).removeAttr('aria-label');
    }
  }
}
//******************************************************************* */
function checkBoxValues(tabelControlID) {
  debugger;
  var checkBoxGroup = $('#' + tabelControlID + ' .fixedTable table tbody tr');
  for (var i = 0; i < checkBoxGroup.length; i++) {
    var checkBoxInput = $(checkBoxGroup[i]).find(
      'td input[type="checkbox"]:checked'
    );
    if (checkBoxInput.length > 0) {
      var tabelText = $(checkBoxGroup[i]).find('td div:eq(0) ').text();
      var isPhoneNumber = /^\(\d{3}\) \d{3}-\d{4}$/.test(tabelText);
      var isEmailAddress = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(tabelText);
      var alertMessage = '';
      if (isPhoneNumber) {
        alertMessage = 'Text ' + tabelText + 'is  checked';
      } else if (isEmailAddress) {
        alertMessage = 'Email ' + tabelText + 'is  checked';
      }
      $(checkBoxInput).attr('aria-label', alertMessage);
    } else {
      var tabelText = $(checkBoxGroup[i]).find('td div:eq(0) ').text();
      var isPhoneNumber = /^\(\d{3}\) \d{3}-\d{4}$/.test(tabelText);
      var isEmailAddress = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(tabelText);
      var alertMessage = '';
      if (isPhoneNumber) {
        alertMessage = 'Text ' + tabelText + ' is  unchecked';
      } else if (isEmailAddress) {
        alertMessage = 'Email ' + tabelText + ' is  unchecked';
      }
      $(checkBoxInput).attr('aria-label', alertMessage);
    }
  }
}
//******************************************************************** */
function checkBoxValues(tableControlID) {
  var checkBoxRows = $('#' + tableControlID + ' .fixedTable table tbody tr');
  checkBoxRows.each(function () {
    var checkBoxInput = $(this).find('td input[type="checkbox"]');
    var tableText = $(this).find('td div:eq(0)').text().trim();

    var isPhoneNumber = /^\(\d{3}\) \d{3}-\d{4}$/.test(tableText);
    var isEmailAddress = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(tableText);

    var alertMessage = '';
    if (checkBoxInput.prop('checked')) {
      if (isPhoneNumber) {
        alertMessage = 'Text ' + tableText + ' is checked';
      } else if (isEmailAddress) {
        alertMessage = 'Email ' + tableText + ' is checked';
      }
    } else {
      if (isPhoneNumber) {
        alertMessage = 'Text ' + tableText + ' is unchecked';
      } else if (isEmailAddress) {
        alertMessage = 'Email ' + tableText + ' is unchecked';
      }
    }
    checkBoxInput.attr('aria-label', alertMessage);
  });
}
