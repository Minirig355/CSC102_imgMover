function checkPalindrome() {                                                                                //
    var userInput = document.getElementById("inputString").value;                                           // Get user input
    var output = document.getElementById("result");                                                         // Get where the results will be displayed
    if (userInput.trim().length === 0) {                                                                    // \
        output.innerHTML = "<span style='color: red;'>Please enter a string.</span>";                       //  \ If the userInput variable has a length of 0 then
        return;                                                                                             //  / remind them to enter a string before checking.
    }                                                                                                       // /
    if (userInput.trim().length === 1) {                                                                    // \
        output.innerHTML = "<span style='color: green;'>Individual letters are always palindromes.</span>"; //  \ If the userInput variable has a length of 1 then
        return;                                                                                             //  / remind them that individual letters are always palindromes
    }                                                                                                       // /
    if (isPalindrome(userInput)) {                                                                          // \ If the user input is a palindrome, say "userInput is a palindrome"
        output.innerHTML = "<p style='color: green;'>'" + userInput + "' is a palindrome</p>";              // /
    } else {                                                                                                // \
        output.innerHTML = "<p style='color: red;'>'" + userInput + "' is not a palindrome</p>";            //  > If the first if statement isn't true, then return "userInput is not a palindrome"
    }                                                                                                       // /
}                                                                                                           //
                                                                                                            //
function isPalindrome(str) {                                                                                //
    var cleanStr = str.replace(/\s+/g, '').toLowerCase();                                                   // Make everything lowercase and remove any spaces
    var reverseStr = cleanStr.split('').reverse().join('');                                                 // Reverse the userInput (actually the cleanStr)
    return cleanStr === reverseStr;                                                                         // Compare if cleanStr is the same as reverseStr (palindrome), return true if true, false otherwise.
}                                                                                                           //