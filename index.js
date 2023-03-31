function isPalindrome(word) {
  // Write your algorithm here
  // Remove any non-letter characters from the word and convert to lowercase
  let cleanWord = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
  
  // Get the length of the word
  let len = cleanWord.length;
  
  // Iterate over the first half of the word
  for (let i = 0; i < len / 2; i++) {
    // If the i-th character from the start is not equal to the i-th character from the end, return false
    if (cleanWord[i] !== cleanWord[len - 1 - i]) {
      return false;
    }
  }
  
  // If we haven't returned false, the word is a palindrome, so return true
  return true;
}


/* 
  Add your pseudocode here
  1. Remove any non-letter characters from the input word and convert to lowercase
  2. Get the length of the cleaned word
  3. Iterate over the first half of the cleaned word
  4. For each character, compare it to the corresponding character from the end of the word
  5. If any characters do not match, return false (the word is not a palindrome)
  6. If we reach the end of the loop without returning false, the word is a palindrome, so return true

  Add written explanation of your solution here
  This implementation uses a regular expression to remove any non-letter characters from the input word and converts it to lowercase. It then iterates over the first half of the cleaned word and compares each character to the corresponding character from the end of the word. If any characters do not match, the function returns false, indicating that the word is not a palindrome. If the loop completes without returning false, the function returns true, indicating that the word is a palindrome.



// You can run `node index.js` to view these console logs*/
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
