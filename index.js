function isPalindrome(word) {
  // Write your algorithm here
  for (let starti = 0; starti < word.length / 2; starti++) {
    const endi= word.length - 1 - starti;
    if (word[starti] !== word[endi]) {
      
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
  comparing the letters form start and from end till reach the middle one
*/

/*
  Add written explanation of your solution here
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
