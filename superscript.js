$('.myControl table tbody tr td:eq(1) span span ');

$(document).ready(function () {
  $('.myControl table tbody tr td:eq(1) span span').addClass('reqWord');
});
$(document).ready(function () {
  var text = $('.reqWord').text();

  var parts = text.split('℠');

  var newHTML = parts[0] + '<span class="superScript">℠</span>' + parts[1];

  $('.reqWord').html(newHTML);
});
$(document).ready(function () {
  var superScriptElement = $('.superScript');

  superScriptElement.css('font-family', 'Segoe UI Symbol');
});
//*********************************************************** */
$(document).ready(function () {
  $('.myControl table tbody tr td:eq(1) span span').addClass('reqWord');
  $('.reqWord').each(function () {
    var text = $(this).text();
    var parts = text.split('℠');
    var newHTML = parts[0] + '<span class="superScript">℠</span>' + parts[1];
    $(this).html(newHTML);
  });
  $('.superScript').css('font-family', 'Segoe UI Symbol');
});

$(document).ready(function () {
  $('.customControl')
    .eq(3)
    .click(function () {
      var text = $('.customControl').eq(0).val();

      var pattern = new RegExp('[a-zA-Z0-9]+|\\s+', 'g');

      var words = text.match(pattern);
      var wordsString = words.join(' ').trim();
      var superText = text.replace(/[a-zA-Z0-9\s]+/g, '');

      $('.customControl').eq(1).val(wordsString);
      $('.customControl').eq(2).val(superText);
    });
});

/*************************************************************** */
$(document).ready(function () {
  $('.myControl table tbody tr td:eq(1) span span').addClass('reqWord');
  $('.reqWord').each(function () {
    var text = $(this).text();
    // var parts = text.split('℠');
    var pattern = new RegExp('[a-zA-Z0-9]+|\\s+', 'g');
    var words = text.match(pattern);
    var wordsString = words.join('').trim();
    var superText = text.replace(/[a-zA-Z0-9\s]+/g, '');
    var newHTML =
      parts[0] +
      '<span class="superScript">' +
      superText +
      '</span>' +
      parts[1];
    $(this).html(newHTML);
  });
  $('.superScript').css('font-family', 'Segoe UI Symbol');
});
/*********************************** */
$(document).ready(function () {
  $('.myControl table tbody tr td:eq(1) span span').addClass('reqWord');
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
  $('.superScript').css('font-family', 'Segoe UI Symbol');
});

function addClass() {
  $('.myControl table tbody tr td:eq(1) span span').addClass('reqWord');
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
  $('.superScript').css('font-family', 'Segoe UI Symbol');
}
/*************************************************/
function containsUnicodeCharacters(elements) {
  for (let i = 0; i < elements.length; i++) {
    const text = elements.eq(i).text();
    const hasUnicodeCharacters = /[^\x00-\x7F]+/.test(text); // Matches Unicode characters

    if (hasUnicodeCharacters) {
      // Add the 'reqWord' class to the elements that contain Unicode characters
      elements.eq(i).find('span span').addClass('reqWord');
    }
  }
}
const headers = $('.myControl table tbody tr td');
containsUnicodeCharacters(headers);
console.log('Checking for Unicode characters completed.');
//****************************************************************** */
/************************************************************************************************* */

//**** */
$(document).ready(function () {
  const headers = $('.myControl table tbody tr td');
  const hasUnicode = containsUnicodeCharacters(headers);
  function containsUnicodeCharacters(elements) {
    for (let i = 0; i < elements.length; i++) {
      const text = elements.eq(i).text();
      const hasUnicodeCharacters = /[^\x00-\x7F]+/.test(text);
      if (hasUnicodeCharacters) {
        elements.eq(i).find('span span').addClass('reqWord');
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
    $('.superScript').css('font-family', 'Segoe UI Symbol');
  }
});
//** */
//**************************************************************** */

function containsUnicodeCharacters() {
  const headers = $('.myControl table tbody tr td');

  for (let i = 0; i < headers.length; i++) {
    const text = headers.eq(i).text();
    const hasUnicodeCharacters = /[^\x00-\x7F]+/.test(text);

    if (hasUnicodeCharacters) {
      headers.eq(i).find('span span').addClass('reqWord');
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
  applySuperScriptStyle();
}

function applySuperScriptStyle() {
  $('.superScript').css('font-family', 'Segoe UI Symbol');
}




function containsUnicodeCharacters(controlID) {
  debugger;
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
