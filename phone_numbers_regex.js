//   Create a function convertPhone that validates a str and converts it to
//   a valid phone number.You MUST use.match and pass a regular expression.Whatever
//   string is passed in, the function must format it into format: 555 - 555 - 5555. 
//   Extra numbers are assumed a mistake and dropped.If not enough numbers are provided 
//   in the string, return an error message.It is a good idea to make use of join, split, 
//   and other array functions as you are likely to hop back and forth.

//     BONUS: if not enough numbers are provided, check to see if there are any letters 
//     that can be converted to numbers via the number pad mapping.



// Consider the possible inputs:
// 555 - 555 - 5555
//     (555)555 - 5555
// 555 555 5555
// 555 555 - 555
// 1 - 555 - 555 - 5555
//     (1)555 - 555 - 5555
// 5555555555
// 555 - five - 55 - aebdgtxi;; 3tt4greqr6seven
// 5 - trumprules - 555 - 5 - 5 - 5 - 5 - 5 - 5
// 2798504trumpforprez23587928579428795458792
// 1 - 800 - ninjas - are - cool
// 1900 - acdc4life.

function convertPhone(phoneStr) {
    var regExp = /[\d]/g
    var numsFromPhone = phoneStr.match(regExp);
    if (numsFromPhone[0] == '1') {
        numsFromPhone.shift();
    }
    if (numsFromPhone.length < 10) {
        var lettersAreNowNumbers = lettersToNums(phoneStr).match(regExp);
        if (lettersAreNowNumbers[0] == '1') {
            lettersAreNowNumbers.shift();
        }
        if (lettersAreNowNumbers.length < 10) {
            return ("Not enough numbers!");
        } else {
            return finalProduct(lettersAreNowNumbers);
        }
    } else {
        return finalProduct(numsFromPhone);
    }
};
function lettersToNums(strAgain) {
    var abc = strAgain.replace(/[abc]/gi, "2");
    var def = abc.replace(/[def]/gi, "3");
    var ghi = def.replace(/[ghi]/gi, "4");
    var jkl = ghi.replace(/[jkl]/gi, "5");
    var mno = jkl.replace(/[mno]/gi, "6");
    var pqrs = mno.replace(/[pqrs]/gi, "7");
    var tuv = pqrs.replace(/[tuv]/gi, "8");
    var wxyz = tuv.replace(/[wxyz]/gi, "9");
    return (wxyz);
}
function finalProduct(array) {
    var str = "";
    for (let i = 0; i < 10; i++) {
        if (i != 3 && i != 6) {
            str += array[i]
        } else {
            str += "-" + array[i]
        }
    }
    return str;
}
var numbers = [
    "555-555-5555",
    "(555)555-5555",
    "555 555 5555",
    "555 555-555",
    "1-555-555-5555",
    "(1)555-555-5555",
    "5555555555",
    "555-five-55-aebdgtxi;;3tt4greqr6seven",
    "5-trumprules-555-5-5-5-5-5-5",
    "2798504trumpforprez23587928579428795458792",
    "1-800-ninjas-are-cool",
    "1900-acdc4life.",
]
numbers.map((number) => {
    console.log(convertPhone(number));
});