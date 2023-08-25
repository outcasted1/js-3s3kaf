function setAttribute(controlId, targetId, attributeName) {
  const targetControl = $('#' + targetId).attr('id');
  $('#' + controlId).attr(attributeName, targetControl);
}
$('.myControl table tbody tr td');
$('.myControl table tbody tr td span input:eq(i)');
$('.myControl table tbody tr td span span:eq(i)').text();
$('.myControl table tbody tr td').length;
/*************************************************** */
function checkForYesValues() {
  debugger;
  var radioGroup = $('.myControl table tbody tr td');
  for (var i = 0; i < radioGroup.length; i++) {
    var radioText = $(radioGroup[i] + 'span input').val();
    if (radioText) {
      var radioText = $(radioGroup[i] + 'span span').text();
      if (radioText === 'Yes') {
        console.log('Input at index ' + i + ' has a value of "Yes"');
      } else if (radioText === 'No') {
        console.log('Input at index ' + i + ' has a value of "No"');
      }
    }
  }
}
checkForYesValues();
/****************************************** */
function checkForYesValues() {
  debugger;
  var radioGroup = $('.myControl table tbody tr td');
  for (var i = 0; i < radioGroup.length; i++) {
    var radioInput = $(radioGroup[i]).find('span input'); // Fix the selector here
    var radioText = radioInput.val();
    if (radioText) {
      var radioSpan = $(radioGroup[i]).find('span span'); // Fix the selector here
      var radioLabelText = radioSpan.text();
      if (radioLabelText === 'Yes') {
        console.log('Input at index ' + i + ' has a value of "Yes"');
      } else if (radioLabelText === 'No') {
        console.log('Input at index ' + i + ' has a value of "No"');
      }
    }
  }
}
checkForYesValues();
//************************************************************/
function checkForYesValues() {
  debugger;
  var radioGroup = $('.myControl table tbody tr td');
  for (var i = 0; i < radioGroup.length; i++) {
    var radioInput = $(radioGroup[i]).find('span input[type="radio"]:checked'); // Check if the radio input is checked
    if (radioInput.length > 0) {
      var radioSpan = $(radioGroup[i]).find('span span');
      var radioLabelText = radioSpan.text();
      if (radioLabelText === 'Yes') {
        console.log('Input at index ' + i + ' has a value of "Yes"');
      } else if (radioLabelText === 'No') {
        console.log('Input at index ' + i + ' has a value of "No"');
      }
    }
  }
}

checkForYesValues();

//************************************************ */
function checkForYesValues(radioControlID, labelControlID) {
  debugger;
  var radioGroup = $('#' + radioControlID + ' table tbody tr td');
  for (var i = 0; i < radioGroup.length; i++) {
    var radioInput = $(radioGroup[i]).find('span input[type="radio"]:checked');
    if (radioInput.length > 0) {
      var radioSpan = $(radioGroup[i]).find('span span');
      var radioLabelText = radioSpan.text();
      if (radioLabelText === 'Yes') {
        var labelElement = $('#' + labelControlID);
        var labelValue = labelElement.val();
        labelElement.attr(
          'aria-label',
          'Receive text alert on' + labelValue + 'true'
        );
        console.log('Input at index ' + i + ' has a value of "Yes"');
      } else if (radioLabelText === 'No') {
        var labelElement = $('#' + labelControlID);
        var labelValue = labelElement.val();
        labelElement.attr(
          'aria-label',
          'Receive text alert on' + labelValue + 'false'
        );
        console.log('Input at index ' + i + ' has a value of "No"');
      }
    }
  }
}

checkForYesValues(radioControlID, labelControlID);

//************************************************************* */
function checkForYesValues(radioControlID, labelControlID) {
  var radioGroup = $('#' + radioControlID + ' table tbody tr td');
  for (var i = 0; i < radioGroup.length; i++) {
    var radioInput = $(radioGroup[i]).find('span input[type="radio"]:checked');
    var labelValue = $('#' + labelControlID).text();
    if (radioInput.length > 0) {
      var radioLabelText = $(radioGroup[i]).find('span span').text();
      var alertValue = radioLabelText === 'Yes' ? 'true' : 'false';
      $('#' + labelControlID).attr(
        'aria-label',
        'Receive text alert on ' + labelValue + ' ' + alertValue
      );
    }
  }
}
checkForYesValues('radioControlID', 'labelControlID');

//*************************************************************** */
function checkForYesValues(radioControlID, labelControlID) {
  var radioGroup = $('#' + radioControlID + ' table tbody tr td');
  for (var i = 0; i < radioGroup.length; i++) {
    var radioInput = $(radioGroup[i]).find('span input[type="radio"]:checked');
    var labelValue = $('#' + labelControlID).text();
    if (radioInput.length > 0) {
      var radioLabelText = $(radioGroup[i]).find('span span').text();
      var alertValue = radioLabelText === 'Yes' ? 'true' : 'false';
      // Check if labelValue is a phone number or an email address
      var isPhoneNumber = /^\d{10}$/.test(labelValue);
      var isEmailAddress = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(labelValue);
      var alertMessage = '';
      if (isPhoneNumber) {
        alertMessage = 'Receive text alert on ' + labelValue + ' ' + alertValue;
      } else if (isEmailAddress) {
        alertMessage =
          'Receive email alert on ' + labelValue + ' ' + alertValue;
      } else {
        // Handle other cases if needed
      }
      $('#' + labelControlID).attr('aria-label', alertMessage);
    }
  }
}
//******************************************************************************************** */
function checkForYesValues(radioControlID, labelControlID) {
  debugger;
  var radioGroup = $('#' + radioControlID + ' table tbody tr td');
  var input = $(radioGroup).find('span input[type="radio"]:checked');
  for (var i = 0; i < radioGroup.length; i++) {
    var radioInput = $(radioGroup[i]).find('span input[type="radio"]:checked');
    var labelValue = $('#' + labelControlID).text();
    if (radioInput.length > 0) {
      var radioLabelText = $(radioGroup[i]).find('span span').text();
      var alertValue = radioLabelText === 'Yes' ? 'true' : 'false';
      // Check if labelValue is a phone number or an email address
      var isPhoneNumber = /^\d{10}$/.test(labelValue);
      var isEmailAddress = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(labelValue);
      var alertMessage = '';
      if (isPhoneNumber) {
        alertMessage = 'Receive text alert on ' + labelValue + ' ' + alertValue;
      } else if (isEmailAddress) {
        alertMessage =
          'Receive email alert on ' + labelValue + ' ' + alertValue;
      } else {
      }
      $(input).attr('aria-label', alertMessage);
    }
  }
}
/*$('.myControl table tbody tr td')
  .find('span input[type="radio"]:checked')
  .attr('aria-label', 'Hello');*/
//***************************************************************************************** */
function checkForYesValues(radioControlID, labelControlID) {
  var radioGroup = $('#' + radioControlID + ' table tbody tr td');
  var checkedInput = $(radioGroup).find('span input[type="radio"]:checked');
  var unCheckedInput = $(radioGroup).find(
    'span input[type="radio"]:not(:checked)'
  );

  for (var i = 0; i < radioGroup.length; i++) {
    var radioInput = $(radioGroup[i]).find('span input[type="radio"]:checked');
    var labelValue = $('#' + labelControlID).text();

    if (radioInput.length > 0) {
      var radioLabelText = $(radioGroup[i]).find('span span').text();
      var alertValue = radioLabelText === 'Yes' ? 'true' : 'false';

      var isPhoneNumber = /^\d{10}$/.test(labelValue);
      var isEmailAddress = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(labelValue);
      debugger;
      var alertMessage = '';
      if (isPhoneNumber) {
        alertMessage = 'Receive text alert on ' + labelValue + ' ' + alertValue;
      } else if (isEmailAddress) {
        alertMessage =
          'Receive email alert on ' + labelValue + ' ' + alertValue;
      }

      $(unCheckedInput).removeAttr('aria-label');
      $(checkedInput).attr('aria-label', alertMessage);
    }
  }
}
/********************************************************************* */
function checkForYesValues(radioControlID, labelControlID) {
  var radioGroup = $('#' + radioControlID + ' table tbody tr td');
  var unCheckedInput = $(radioGroup).find(
    'span input[type="radio"]:not(:checked)'
  );

  for (var i = 0; i < radioGroup.length; i++) {
    var radioInput = $(radioGroup[i]).find('span input[type="radio"]:checked');
    var labelValue = $('#' + labelControlID).text();

    if (radioInput.length > 0) {
      var radioLabelText = $(radioGroup[i]).find('span span').text();
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

      $(unCheckedInput).removeAttr('aria-label');
      $(radioInput).attr('aria-label', alertMessage);
    }
  }
}
/******************************************************************* */
function checkForYesValues(radioControlID, labelControlID) {
  var radioGroup = $('#' + radioControlID + ' table tbody tr td');
  var unCheckedInput = $(radioGroup).find('span input[type="radio"]:not(:checked)'
  );

  for (var i = 0; i < radioGroup.length; i++) {
    var radioInput = $(radioGroup[i]).find('span input[type="radio"]:checked');
    var labelValue = $('#' + labelControlID).text();

    if (radioInput.length > 0) {
      var radioLabelText = $(radioGroup[i]).find('span span').text();
      var alertValue = radioLabelText === 'Yes' ? 'true' : 'false';
    
      var isPhoneNumber = /^\d{10}$/.test(labelValue);
      var isEmailAddress = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(labelValue);

      var alertMessage = '';
      if (isPhoneNumber) {
        alertMessage = 'Receive text alert on ' + labelValue + ' ' + alertValue;
      } else if (isEmailAddress) {
        alertMessage = 'Receive email alert on ' + labelValue + ' ' + alertValue;
      }
      $(radioInput).attr('aria-label', alertMessage);
    } else {
      $(unCheckedInput).removeAttr('aria-label');
    }
  }
}
//**************************************************************************** */
