function setAttribute(controlId, targetId) {
  const targetControl = $('#' + targetId).attr('id');
  $('#' + controlId).attr('for', targetControl);
}
setAttribute('labelElement', 'inputElement');
/**********************************************/
function setAttribute(controlId,attribute,value) {
 // const value = $('#' + targetId).attr('id');
  $('#' + controlId).attr(attribute, value);
}

//**************** */
function setAttribute(controlId, targetId, attributeName) {
  const targetControl = $('#' + targetId).attr('id');
  $('#' + controlId).attr(attributeName, targetControl);
}
// Example usage
setAttribute('labelElement', 'inputElement', 'for');
/******************************************************* */
InvokeJavaScript(
  setForAttribute,
  GetControlId(lblName),
  GetControlId(txtBoxName)
);
