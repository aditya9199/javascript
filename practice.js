// write a for palindrome string

// declare a string
// check in the loop , if the reverse string is same
// if same , print output as "not palindrome"
// to print in javascript you need console.log()

function isPalindrome(str){

    let len = word.length;
    for (let i = 0; i < len / 2; i++) {
        if (word[i] !== word[len - 1 - i]) {
            return "Not a Palindrome";
        }
    }
    return "Palindrome";
}
let word ="hello";
console.log(isPalindrome(word));


