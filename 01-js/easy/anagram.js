/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()

  if(str1.length!=str2.length) return false

  newStr1 = new Array(256).fill(0)
  newStr2 = new Array(256).fill(0)

  for(let i =0; i<str1.length; i++){
    newStr1[str1.charCodeAt(i)]++
    newStr2[str2.charCodeAt(i)]++
  }

  for(let i =0; i<256; i++){
    if(newStr1[i]!=newStr2[i]) 
      return false
  }

  return true
}

module.exports = isAnagram;
