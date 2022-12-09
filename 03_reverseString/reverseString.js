const reverseString = function(string) {
    let len = string.length;
    let list = [];
    let output = "";
    for (let i = 0; i < len;i++){
        list.push(string.charAt(i));
    }
    for (let j = len-1; j>=0; j--){
        output = output + list[j];
    }
    return output;

};
//solution on TOP return string.split('').reverse().join('');
//.split('') turns a string into a list splitting at every specified character, if left blank it will split each character individually
//now that its a list you can reverse() the list
//.join('') returns a string that is an array concatenated. .join('') means join at each character
// Do not edit below this line
module.exports = reverseString;
