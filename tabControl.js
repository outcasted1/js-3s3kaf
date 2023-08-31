$('.customTab .tabheaditems ');
$('.customTab .tabheaditems  .ui-tabs-anchor');
$('.customTab .tabpanelitems  .clcontrol-form');
$('.customTab .button_style');
$('.customTab .tabpanelitems input').eq(0);
/*/****************************************************** */
$(document).ready(function () {
  $('.customTab .button_style').on('click', function () {
    debugger;
    var attribute = $('.customTab .tabpanelitems input').eq(0).val();
    var value = $('.customTab .tabpanelitems input').eq(1).val();
    var elements = $('.customTab .tabheaditems .ui-tabs-anchor');
    elements.each(function () {
      $(this).attr(attribute, value);
    });
    $('.customTab .tabpanelitems input').eq(0).val('');
    $('.customTab .tabpanelitems input').eq(1).val('');
  });
});
//**************************************************/
function setAttrValues(attribute, value) {
  $('.customTab .tabheaditems li').addClass('tabHeaders');
  // var elements = $('.customTab .tabheaditems .tabHeaders');
  var elements = $('.tabHeaders').eq(i);
  elements.each(function () {
    $(this).attr(attribute, value);
  });
}
//*******************************************************/
/****************************************************** */

$(document).ready(function setAttrValues() {
  debugger;
  $('.customTab .tabheaditems li').addClass('tabHeaders');
  var elements = $('.tabHeaders');
  for (var i = 0; i < arguments.length; i += elements.length) {
    var targetClass = arguments[i];
    var attribute = arguments[i + 1];
    var value = arguments[i + 2];

    var elements = $('.' + targetClass);

    elements.each(function () {
      $(this).attr(attribute, value);
    });
  }
});

// Example usage:
setAttrValues(
  'tabHeader1',
  'color',
  'red',
  'tabHeader2',
  'color',
  'blue',
  'tabHeader3',
  'color',
  'green'
);
//***************************************** /

function setAttrValues(...args) {
  debugger;
  $('.customTab .tabheaditems li').addClass('tabHeaders');
  for (var i = 0; i < args.length; i += $('.tabHeaders').length) {
    var elementIndex = args[i];
    var attribute = args[i + 1];
    var value = args[i + 2];
    var elements = $('.tabHeaders').eq(elementIndex);
    elements.each(function () {
      $(this).attr(attribute, value);
    });
  }
}
setAttrValues(0, 'color', 'red', 1, 'color', 'blue', 2, 'color', 'green');
/*************************************************************************** */
function setAttrValues(controlID, ...args) {
  debugger;
  const tabHeaders = $('#' + controlID + ' .tabheaditems li');
  for (var i = 0; i < args.length; i += tabHeaders.length) {
    var elementIndex = args[i];
    var attribute = args[i + 1];
    var value = args[i + 2];
    var elements = tabHeaders.eq(elementIndex);
    elements.each(function () {
      $(this).attr(attribute, value);
    });
  }
}
//************************************************************************************* */



function tabHeaderValues(controlID) {
  debugger;
    const tabHeaders = $('#' + controlID + '_TabHead ul li .ui-tabs-anchor');
   var tabindex = 1;
   tabHeaders .each(function () {
      var $input = $(this);
      $input.attr('tabindex', tabindex);
      tabindex++;
    });

function updateTabHeaderValues(controlID, headerValues) {
  debugger;
  const tabHeaders = $('#' + controlID + '_TabHead ul li .ui-tabs-anchor');
  var tabindex = 1;
  tabHeaders .each(function () {
     var $input = $(this);
     $input.attr('tabindex', tabindex);
     tabindex++;
   });
   debugger;
  var headerArray = headerValues.split(';'); 
  $.each(headerArray, function (index, value) {
    var parts = value.split(':');
    var tabNumber = parts[0];
    var headerText = parts[1];   
   var initialText =  $('#' + controlID + ' ul li:nth-child(' + tabNumber + ') .ui-tabs-anchor').text();
   var finalText = initialText+' '+ headerText;
    $('#' + controlID + ' ul li:nth-child(' + tabNumber + ') .ui-tabs-anchor').text(finalText);
  });
}


updateTabHeaderValues("yourTabControlID", "1:New Tab 1;2:Updated Tab 2;3:Modified Tab 3;");