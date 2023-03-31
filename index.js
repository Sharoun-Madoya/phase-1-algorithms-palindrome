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
// using for loop 
// make sure length of array are same 
// make sure beginnig and end pont are same, 
// if true compare until beggin and end point are equal
// or beginnigis > than end point for words that are not even 
// if false return false /if true = pseudocode 


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
