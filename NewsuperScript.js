/*.superScript {
    font-family: 'Segoe UI Symbol';
    font-size: 15px !important;
    font-weight: normal !important;
  }
*/
//****************************************************** */
//baseversion
function superScript(targetWord) {
  $('.reqWord').each(function () {
    var text = $(this).text();
    var pattern = new RegExp('[a-zA-Z0-9]+|\\s+', 'g');
    var words = text.match(pattern);
    var superText = text.replace(/[a-zA-Z0-9\s]+/g, '');
    var newHTML = '<span class="superScript">' + superText + '</span>';
    if (words.includes(targetWord)) {
      var index = words.indexOf(targetWord);
      words[index] = targetWord + newHTML;
    }
    $(this).empty().append(words.join(' '));
  });
}
//************************************************************* */
// for radioButtons
function radioGroupContainsUnicodeCharacters(controlID, targetWord) {
  const requiredControl = $('#' + controlID + ' table tbody tr td');

  for (let i = 0; i < requiredControl.length; i++) {
    const text = requiredControl.eq(i).text();
    const regex = /[\u2102-\u214D]/gu;
    const hasUnicodeCharacters = regex.test(text);

    if (hasUnicodeCharacters) {
      requiredControl.eq(i).find('span span').addClass('reqWord');
      superScript(targetWord);
    }
  }
}

//for top label
$('#' + controlID + ' label');
$('#' + controlID + ' label').text();

function labelContainsUnicodeCharacters(controlID, targetWord) {
  const requiredControl = $('#' + controlID + ' label');
  const text = requiredControl.text();
  const regex = /[\u2102-\u214D]/gu;
  const hasUnicodeCharacters = regex.test(text);

  if (hasUnicodeCharacters) {
    requiredControl.addClass('reqWord');
    superScript(targetWord);
  }
}
const hasUnicodeCharacter = /[\u2102-\u214D]/gu.test(text);
//******************************************************************************** */
function superScript(targetWord) {
  $('.reqWord').each(function () {
    var text = $(this).text();
    var pattern = new RegExp('[a-zA-Z0-9]+|\\s+', 'g');
    var words = text.match(pattern);
    var superText = text.replace(/[a-zA-Z0-9\s]+/g, '');
    var newHTML = '<span class="superScript">' + superText + '</span>';
    if (words.includes(targetWord)) {
      var index = words.indexOf(targetWord);
      words[index] = targetWord + newHTML;
    }
    $(this).empty().append(words.join(' '));
  });
}

/************************************************************************* */
function superScript(targetWord) {
  $('.reqWord').each(function () {
    debugger;
    var text = $(this).text();
    var pattern = new RegExp('[a-zA-Z0-9]+|\\s+', 'g');
    const regex = /[\u2102-\u214D]/gu;
    var words = text.match(pattern);
    var superText = text.match(regex);
    var newHTML = '<span class="superScript">' + superText + '</span>';
    if (words.includes(targetWord)) {
      var index = words.indexOf(targetWord);
      words[index] = targetWord + newHTML;
    }
    $(this).empty().append(words.join(' '));
  });
}
//*\**********************************************************************
function superScript(targetWord) {
  $('.reqWord').each(function () {
    debugger;
    var text = $(this).text();
    const regex = /[\u2102-\u214D]/gu;
    var superText = text.match(regex);

    // Use a regular expression pattern to split text into words
    var words = text.split(/\s+/);

    for (var i = 0; i < words.length; i++) {
      if (words[i] === targetWord) {
        words[i] =
          targetWord + '<span class="superScript">' + superText + '</span>';
      }
    }

    // Join the modified words back together with spaces
    var modifiedText = words.join(' ');

    $(this).empty().append(modifiedText);
  });
}
/*************************************************************************** */
const labelText = $('#' + controlID + ' label')
  .clone()
  .find('a')
  .remove()
  .end()
  .text();

console.log(labelText);
//******************************************************************************** */
function labelContainsUnicodeCharacters(controlID, targetWord) {
  const requiredControl = $('#' + controlID + ' label');
  const text = requiredControl.clone().find('a').remove().end().text();
  const regex = /[\u2102-\u214D]/gu;
  const hasUnicodeCharacters = regex.test(text);

  if (hasUnicodeCharacters) {
    requiredControl.addClass('reqWord');
    superScript(targetWord);
  }
}
//******************************************************************************* */
const text =
  '(Please click, open and review) disclosures that apply to your Savings Account℠. You can download the disclosures and save or print a copy for your records. You will need a PDF reader to view the disclosures.';

const regex = /[\u2102-\u214D]/gu;
const superText = text.match(regex);
const words = superText ? superText.join('') : '';
console.log(words);

function superScript(targetWord) {
  $('.reqWord').each(function () {
    debugger;
    var text = $(this).clone().find('a').remove().end().text();

    const normalTextRegex = /[^\u2102-\u214D]/gu;
    const normalText = text.match(normalTextRegex);
    var words = normalText ? normalText.join('') : '';

    const superScriptRegex = /[\u2102-\u214D]/gu;
    var superText = text.match(superScriptRegex);

    var newHTML = '<span class="superScript">' + superText + '</span>';
    if (words.includes(targetWord)) {
      var index = words.indexOf(targetWord);
      words[index] = targetWord + newHTML;
    }
    $(this).empty().append(words.join(' '));
  });
}
//********************************************************************* */
function superScript(targetWord) {
  $('.reqWord').each(function () {
    debugger;
    var text = $(this).clone().find('a').remove().end().text();

    const normalTextRegex = /[^\u2102-\u214D]/gu;
    const normalText = text.match(normalTextRegex);
    var words = normalText ? normalText.join('') : '';

    const superScriptRegex = /[\u2102-\u214D]/gu;
    var superText = text.match(superScriptRegex);

    var newHTML = '<span class="superScript">' + superText + '</span>';
    if (words.includes(targetWord)) {
      words = words.replace(targetWord, targetWord + newHTML);
    }
    $(this).empty().append(words);
  });
}
//********************************************************************* */
function superScript(targetWord) {
  $('.reqWord').each(function () {
    debugger;
    var $this = $(this);
    var text = $this.clone().find('a').remove().end().text();

    const normalTextRegex = /[^\u2102-\u214D]/gu;
    const normalText = text.match(normalTextRegex);
    var words = normalText ? normalText.join('') : '';

    const superScriptRegex = /[\u2102-\u214D]/gu;
    var superText = text.match(superScriptRegex);

    var newHTML = '<span class="superScript">' + superText + '</span>';
    if (words.includes(targetWord)) {
      var index = words.indexOf(targetWord);
      var finalWords =
        words.slice(0, index) +
        targetWord +
        newHTML +
        words.slice(index + targetWord.length);
    }

    // Append the <a> elements back to the modified words
    var finalHTML = text.replace(text, finalWords);
  });
}
//*********************************************************** */
//Working
function superScript(targetWord) {
  $('.reqWord').each(function () {
    var text = $(this).html();

    const normalTextRegex = /[^\u2102-\u214D]/gu;
    const normalText = text.match(normalTextRegex);
    var words = normalText ? normalText.join('') : '';

    const superScriptRegex = /[\u2102-\u214D]/gu;
    var superText = text.match(superScriptRegex);

    var newHTML = '<span class="superScript">' + superText + '</span>';
    if (words.includes(targetWord)) {
      var index = words.indexOf(targetWord);
      var finalWords =
        words.slice(0, index) +
        targetWord +
        newHTML +
        words.slice(index + targetWord.length);
    }

    $(this).empty().append(finalWords);
  });
}
//****************************************************************** */
