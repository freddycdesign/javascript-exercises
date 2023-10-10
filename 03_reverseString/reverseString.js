const reverseString = function (word) {
    let string = "";
    for (let i = word.length - 1; i >= 0; i--) {
        string += word[i];
    }
    return string
}
reverseString('hello');
reverseString('hello there');
reverseString('123! abc!');
reverseString(' ');

// Do not edit below this line
module.exports = reverseString;
