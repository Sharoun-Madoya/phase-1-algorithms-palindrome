function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = word.split('').reverse().join('')
  if(word === reversedWord){
    return true;
  }else 
  return false
}
// function isPalindrome(word){
//   let reversedWord = '';
//   for (const character of word){
//     reversedWord= character +reversedWord
//   }
// }
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/
// // using if condition 
// split the word given into letters 
// rewrite the letters 
// compare the words 
// use if condition to tell if true or false  


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
