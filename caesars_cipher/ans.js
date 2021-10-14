// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
function rot13(str) {

    var solved = '';
  
    for (var i = 0; i < str.length; i++) {
      console.log(str[i]);
      var charCp = str.charCodeAt(i)
      if (str.charCodeAt(i) == 32) {
        solved += ' ';
      }
      else if (str.charCodeAt(i) == 33) {
        solved += '!';
      } else if (str.charCodeAt(i) == 63) {
        solved += '?';
      } else if (str.charCodeAt(i) == 46) {
        solved += '.';
      }
  
      else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77) {
        console.log(charCp)
        solved += String.fromCharCode(charCp + 13)
      } else if (str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90) {
        solved += String.fromCharCode(charCp - 13)
      }
  
  
    }
    return solved;
  }