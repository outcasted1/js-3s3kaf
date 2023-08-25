function updateTabHeaderValues() {
  debugger;
  const tabHeaders = $('.customTab .tabheaditems li .ui-tabs-anchor');

  tabHeaders.each(function (index) {
    const currentValue = $(this).text().trim(); // Trim whitespace
    const inputValue = $('.tabInput').eq(index).val().trim();
    const newValue = currentValue + ' ' + inputValue; // Use space to separate values
    $(this).text(newValue);
  });
}

/******************************************* */
function updateTabHeaderValues() {
  debugger;
  const tabHeaders = $('.customTab .tabheaditems li .ui-tabs-anchor');
  tabHeaders.each(function (index) {
    const currentValue = tabHeaders.eq(index).text().trim();

    var inputValue = $('.tabInput').eq(index).val().trim();
    var notify = 0 + inputValue;

    const newValue = currentValue + ' ' + notify;
    $(this).text(newValue);
  });
}
$('.tabInput').val('');

/****************************************************** */
function updateTabHeaderValues() {
  debugger;
  const tabHeaders = $('.customTab .tabheaditems li .ui-tabs-anchor');
  tabHeaders.each(function (index) {
    const currentValue = tabHeaders.eq(index).text().trim();
    const inputValue = $('.tabInput').eq(index).val().trim();
    const regex = /([a-zA-Z]+)([0-9]+)/;
    const match = currentValue.match(regex);
    if (match) {
      const letters = match[1];
      const numbers = parseInt(match[2]); // Parse the numbers to integers
      const inputNumber = parseInt(inputValue); // Parse the input value to an integer
      const total = numbers + inputNumber; // Add the two integers
      const newValue = letters + ' ' + total; // Construct the new value
      $(this).text(newValue);
    } else {
      const newValue = currentValue + inputValue;
      $(this).text(newValue);
    }
  });
  $('.tabInput').val('');
}
