// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

function palindrome(str) {
    var stripped = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
    let striplen = stripped.length;
    let striphalf = striplen / 2;
    if (checkpal(stripped, Math.round(striphalf))) {
      return true;
    } else {
      return false;
    }
  }
  
  function checkpal(strl, striphf) {
    let first = '';
    let second = '';
  
    if (strl.length % 2 == 0) {
      for (let i = 0; i <= striphf-1; i++) {
        first += strl[i]
      }
  
      for (let j = strl.length - 1; j >= striphf; j--) {
        second += strl[j]
      }
  
  
      if (first == second) {
        return true
      } else {
        return false
      }
  
    }else{
      for(let i = 0 ; i < striphf ; i++){
    first += strl[i]
  }
  console.log(first)
   for(let j = strl.length-1 ; j >= striphf-1 ; j--){
     second += strl[j]
   }
  console.log(second)
  
  if (first == second ){
    return true
  }else{
    return false
  }
    }
  }