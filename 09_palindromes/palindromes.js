const palindromes = function (stringArr) {

return stringArr.split("").filter(character=>character.match(/[a-z]/i)).toString().toLowerCase() == stringArr.split("").filter(character=>character.match(/[a-z]/i)).reverse().toString().toLowerCase();
};
/*
the difference between this and mine is readability.
I converted string to array and filtered out all non alphabetical characters and then turned back into a string
they created variable processedString which they converted to lowercase and removed non aplha characters

const palindromes = function(string) {
  const processedString = string.toLowerCase().replace(/[^a-z]/g, "");
  return (
    processedString
      .split("")
      .reverse()
      .join("") == processedString
  );
};
*/

// Do not edit below this line
module.exports = palindromes;
