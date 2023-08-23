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
  var elements = $('.customTab .tabheaditems .ui-tabs-anchor');
  elements.each(function () {
    $(this).attr(attribute, value);
  });
}
//*******************************************************/
