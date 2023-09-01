function containsUnicodeCharacters(controlID) {
  const radioButtons = $('#' + controlID + ' table tbody tr td');

  for (let i = 0; i < radioButtons.length; i++) {
    const text = radioButtons.eq(i).text();
    const hasUnicodeCharacters = /[^\x00-\x7F]+/.test(text);

    if (hasUnicodeCharacters) {
      radioButtons.eq(i).find('span span').addClass('reqWord');
      superScript();
    }
  }
}

function superScript() {
  $('.reqWord').each(function () {
    var text = $(this).text();
    var pattern = new RegExp('[a-zA-Z0-9]+|\\s+', 'g');
    var words = text.match(pattern);
    var wordsString = words.join(' ').trim();
    var superText = text.replace(/[a-zA-Z0-9\s]+/g, '');
    var newHTML = '<span class="superScript">' + superText + '</span>';
    $(this)
      .empty()
      .append(wordsString + newHTML);
  });
}

//for top label
$('#' + controlID + ' label');
$('#' + controlID + ' label').text();

function labelcontainsUnicodeCharacters(controlID) {
  const requiredControl = $('#' + controlID + ' label');
  const text = requiredControl.text();
  const hasUnicodeCharacters = /[^\x00-\x7F]+/.test(text);

  if (hasUnicodeCharacters) {
    requiredControl.addClass('reqWord');
    superScript();
  }
}
