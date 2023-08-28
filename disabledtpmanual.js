$('.myControl tbody tr  td input[type="text"]');

function disableDateInputs(controlID) {
  $('#' + controlID + ' tbody tr td input[type="text"]').prop('disabled', true);
}
disableDateInputs(controlID);
