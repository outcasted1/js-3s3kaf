function setForAttribute(controlId, targetId) {
  const targetControl = $('#' + targetId).attr('id');
  $('#' + controlId).attr('for', targetControl);
}
setForAttribute('labelElement', 'inputElement');
InvokeJavaScript(
  setForAttribute,
  GetControlId(lblName),
  GetControlId(txtBoxName)
);
