const hashes = [                                                            // 
    "57ab4620ab4f85868ed20fc118221b8abb8bc9501fe483c0de186f08b5beb44b",     // I know this is NOT ideal to directly code hashes like this, I originally used a              ChrisJavier123
    "88571d7fb00877a7afba9495c80e163661084a96d8af3806e3483ec18941a2d3",     //  JSON file to accomplish this, however since we're not using Node.js and instead             ChrisJavier1234
    "992e5d503ac4e407429d9ce8d53b38cca27d6bd0dc6e9bba49e65441523cc7e8",     //  handling everything locally, I am receiving CORS policy errors (cross origin                JordanKelly123
    "db83f2fa72c9fa47bca950bd0615bbc5c49d302b9f464d49166b7eccd05e9bb8",     //  requests). So to mitigate I just loaded the hashes directly in the code.                    JaelBattana123
    "a447743c0c226aed1bee0a7efad491919836f5ae1932c70a8494311db74c70b5",     //                                                                                              ChristianJavier123
    "f6e0a1e2ac41945a9aa7ff8a8aaa0cebc12a3bcc981a929ad5cf810a090e11ae"      //                                                                                              111
  ]                                                                         //




//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+-|| FUNCTION: HASH ||--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
                                                                                                            //
async function hashString(inputString) {                                                                    //
                                                                                                            //
    const encoder = new TextEncoder();                                                                      //
    const data = encoder.encode(inputString);                                                               // Encoding the string, necessary before hashing
                                                                                                            //
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);                                         // Using the Crypto module (Cryptography, not the other type of crypto) to hash the string. This was *annoying*
                                                                                                            //  to get working since Crypto prefers to be ran server-side rather than browser-side.
    const hashArray = Array.from(new Uint8Array(hashBuffer));                                               // Converting the hash buffer to hexadecimal
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');                           // Same, converting the array to hexadecimal by translating the bytes to hexadecimal strings and then using join
    console.log(hashArray + "AND" + hashBuffer)
                                                                                                            //  to bring it all together
    return hashHex;                                                                                         //
}                                                                                                           //
                                                                                                            //
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+-|| FUNCTION: UPDATE NAME ||-+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
                                                                                                            //
var fullFirstName = ""                                                                                      //
var fullLastName = ""                                                                                       //
                                                                                                            //
function updateName(){                                                                                      //
    let fullFirstName = document.getElementById("firstName").value;                                         // Getting the input value after the user unfocuses the field (onchange value in HTML)
    let fullLastName = document.getElementById("lastName").value;                                           // ||
    document.getElementById("fullName").value = fullFirstName + " " + fullLastName;                         // Combinining First/Last name with a space between and updating the page to show it
    console.log(fullFirstName + " " + fullLastName);                                                        //
}                                                                                                           //
                                                                                                            //
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+-|| FUNCTION: VALIDATION ||--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
                                                                                                            //
async function validateLogin(){                                                                             // Called when pressing the submit button
                                                                                                            //
    let fullFirstName = document.getElementById("firstName").value;                                         // Same as previous function, gathering name data
    let fullLastName = document.getElementById("lastName").value;                                           //
    let fullName = fullFirstName + " " + fullLastName;                                                      // Combining First/Last name into one function to output upon submission (for debugging)
    console.log(fullName.length);                                                                           // Console output
                                                                                                            //
    let badge = document.getElementById("badgeNum").value;                                                  // Getting the value for the badge number !!THIS IS ALREADY CONFIRMED TO BE NUMERICAL BY CHANGING THE INPUT FIELD!!
    console.log(badge.length);                                                                              // Console output for debugging
                                                                                                            //
    let preHash = fullFirstName + fullLastName + badge;                                                     // Assembling the inputs into what will be hashed (First/Last/Badge with no spaces)
                                                                                                            //
                                                                                                            //
    if(badge.length > 3){                                                                                   // Else if to ensure the badge is 3 digits or less
        alert("Badge number length is too long, ensure your badge number is between 0-999");                // If it's greater than 3 digits it displays this error
        return false;                                                                                       // You shall not pass
    }                                                                                                       //
    hashString(preHash).then(userHash => {                                                                  // Sends the preHash string to be hashed
        if (hashes.includes(userHash)) {                                                                    // Compares the hash to the list of approved hashes
            document.loginForm.submit();                                                                    // If it matches, sends the user to the main page. I specifically had onsubmit="event.preventDefault(); (line 21 index.html) so that it would require explicit instructions to continue
        } else {                                                                                            //
            alert('No match found. CASE SENSITIVE, capitalize first letters')                               // In all other cases this error is given that reminds the user that input is case sensitive
            return false;                                                                                   // You shall not pass
        }                                                                                                   //
    })                                                                                                      //
}                                                                                                           //
