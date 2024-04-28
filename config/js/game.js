window.onload = function(){
    var elDiceOne       = document.getElementById('dice1');                         //\
    var elDiceTwo       = document.getElementById('dice2');                         // > Declaring variables for dice rolling
    var elComeOut       = document.getElementById('roll');                          ///

    var colDefault      = document.getElementById('diceDefault');                   //\
    var colOutrun       = document.getElementById('diceOutrun');                    // \ Declaring variables for the color changer
    var colGold         = document.getElementById('diceGold');                      // /
    var colRGB          = document.getElementById('diceRGB');                       ///

    var numWin          = 0;                                                        //\
    var numLoss         = 0;                                                        // > Declaring variables for determining outcome
    var numTie          = 0;                                                        ///

    const audioDice = new Audio("../content/diceroll.mp3");                         //\ Simply declaring two new audio files to play for dice rolls (see: Lines 59-63)
    const audioSnake = new Audio("../content/snake.mp3");                           ///

//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+-|| FUNCTION: PLAY CRAPS ||--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+


    elComeOut.onclick   = function () {playCraps();};                               // When the button is clicked it will perform the function

    function playCraps() {

    console.log("Craps game started.");                                             // Mostly for debugging, denotes the start of the function in console
    var diceOne = Math.ceil(6 * Math.random());                                     // Making a random number 1-6 of the first die
    var diceTwo = Math.ceil(6 * Math.random());                                     // Same for the second

    if (diceOne == 1) {var diceOneA = 1}; if (diceTwo == 1) {var diceTwoA = 1};     //\
    if (diceOne == 2) {var diceOneA = 5}; if (diceTwo == 2) {var diceTwoA = 5};     // \
    if (diceOne == 3) {var diceOneA = 6}; if (diceTwo == 3) {var diceTwoA = 6};     //  \ Just some math to find the number that's facing up, the first variable
    if (diceOne == 4) {var diceOneA = 3}; if (diceTwo == 4) {var diceTwoA = 3};     //  / is only there to determine the face down number so it knows where to roll
    if (diceOne == 5) {var diceOneA = 4}; if (diceTwo == 5) {var diceTwoA = 4};     // /
    if (diceOne == 6) {var diceOneA = 2}; if (diceTwo == 6) {var diceTwoA = 2};     ///

    var sum = diceOneA + diceTwoA;                                                  // Getting the sum
    if (sum <= 9){sum1 = "0" + sum} else if (sum >= 8){sum1 = sum}                  // If the sum is single-digit, add a 0 for the counter
    document.getElementById("ticksum").setAttribute("data-value", sum1);            // Update the flip counter
    
    console.log(diceOneA + ' ' + diceTwoA);                                         // More debugging, displaying the number
    console.log("sum: " + sum);                                                     // Debugging to show sum

    for (var i = 1; i <= 6; i++) {                                                  //\
        elDiceOne.classList.remove('show-' + i);                                    // \
        if (diceOne === i) {                                                        //  \ This is the function responsible for rolling the dice. It essentially loops
        elDiceOne.classList.add('show-' + i);                                       //  / through the iterations, removing the .show-i (i being a changing numerical var)
        }                                                                           // /  class with each iteration until only the correct one is added. The transforms
    }                                                                               ///   and other lines required to rotate the dice are in game.css

    for (var k = 1; k <= 6; k++) {                                                  //\
        elDiceTwo.classList.remove('show-' + k);                                    // \
        if (diceTwo === k) {                                                        //  \ Same as line 42-47, but for dice two. It makes much more sense in tandem
        elDiceTwo.classList.add('show-' + k);                                       //  / with the css sheet and HTML file.
        }                                                                           // /
    }                                                                               ///

    if (sum == 2){                                                                  //\ The first two lines handle if the user rolls snake eyes, in which cause a special audio is played saying "yeehaw got snake eyes"
        audioSnake.play();                                                          ///
    } else {                                                                        //\
        audioDice.play();                                                           // > Lines 61-63 handle every other instance that isn't snake eyes, where a normal dice roll is played.
    }                                                                               ///

    if (sum == 7 || sum == 11){                                                     //\
        audioDice.play();        
        numLoss++;                                                                  // \
        if (numLoss <= 9){numLoss = "0" + numLoss}                                  //  > Checks if the sum is 7 or 11, if it is it increments the numLoss var by one. The
        if (numLoss >= 100){numLoss = "00"}                                         // /  same check for single digit is ran and a 0 is added if it is, in addition to allow
            document.getElementById("ticklose").setAttribute("data-value", numLoss);///   for overflow at 99 losses it is reset to 00, setAttribute updates the counter
    } else if (diceOneA == diceTwoA && diceOneA % 2 == 0){                          //\
        numWin++;                                                                   // \
        if (numWin <= 9){numWin = "0" + numWin}                                     //  > Same as line 56-60 but for the wins. It checks if the two dice are the same
        if (numWin >= 100){numWin = "00"}                                           // /  number AND even (% 2 == 0)
            document.getElementById("tickwin").setAttribute("data-value", numWin);  ///
    } else {                                                                        //\
        numTie++;                                                                   // \
        if (numTie <= 9){numTie = "0" + numTie}                                     //  > Same as the previous two segments but for ties, no math is done here since
        if (numTie >= 100){numTie = "00"}                                           // /  if it wasn't caught by the other two if statements then it is 100% a tie.
            document.getElementById("tickties").setAttribute("data-value", numTie); ///
    }                                                                               //
    }
    

//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+-|| FUNCTION: COLOR PICKER ||+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+

    colDefault.onclick   = function () {pickDefault();};                            // When the 'default' dice is clicked, run this function

    function pickDefault() {                                                        
        var cols = document.getElementsByClassName('side');                         //\
        for(i = 0; i < cols.length; i++) {                                          // \ Selects the .side class and changes the background gradient and the border
            cols[i].style.backgroundImage = 'radial-gradient(#ffffff 20%, #c7c7c7)';// /
            cols[i].style.border = '1px solid #e5e5e5';                             ///
        }                                                       
        var cold = document.getElementsByClassName('dot');                          //\
        for(i = 0; i < cold.length; i++) {                                          // \
            cold[i].style.backgroundColor = '#1a1a1a';                              //  > Selects the .dot class and changes the color, shadow and sets the animation
            cold[i].style.boxShadow = 'inset 2px 2px #000000';                      // /  to null since the default dice does not have any animation. It still needs
            cold[i].style.animation = '';                                           ///   to be set though to clear the animation from any other colors
        }
        var colc = document.getElementsByClassName('tick-flip-panel');              //\
        for(i = 0; i < colc.length; i++) {                                          // \
            colc[i].style.backgroundColor = '#f0f0f0';                              //  > Selects the flip counters and changes their attributes.
            colc[i].style.color = '#1b1b1b';                                        // /  KNOWN BUG: Colors don't persist through numbers unfortunately.
            colc[i].style.animation = '';                                           ///
        }
    }                                                                               // !!! The rest of the code is identical to line 79-99 but just for different !!!
                                                                                    // !!! colors because of that I won't be commenting it since it's the same !!!

    colOutrun.onclick   = function () {pickOutrun();};

    function pickOutrun() {
        var cols = document.getElementsByClassName('side');
        for(i = 0; i < cols.length; i++) {
            cols[i].style.backgroundImage = 'radial-gradient(#e900ca 20%, #7a006a)';
            cols[i].style.border = '2px ridge #00dddd';
        }
        var cold = document.getElementsByClassName('dot');
        for(i = 0; i < cold.length; i++) {
            cold[i].style.backgroundColor = '#131313';
            cold[i].style.boxShadow = 'inset 2px 2px #397c7c';
            cold[i].style.animation = '';
        }
        var colc = document.getElementsByClassName('tick-flip-panel');
        for(i = 0; i < colc.length; i++) {
            colc[i].style.backgroundColor = '#e900ca';
            colc[i].style.color = '#131313';
            colc[i].style.animation = '';
        }
    }

    colGold.onclick   = function () {pickGold();};

    function pickGold() {
        var cols = document.getElementsByClassName('side');
        for(i = 0; i < cols.length; i++) {
            cols[i].style.backgroundImage = 'radial-gradient(#1d1d1d 20%, #0a0a0a)';
            cols[i].style.border = '1px solid #1d1d1b';
        }
        var cold = document.getElementsByClassName('dot');
        for(i = 0; i < cold.length; i++) {
            cold[i].style.backgroundColor = 'gold';
            cold[i].style.boxShadow = 'inset 2px 2px #3d3c00';
            cold[i].style.animation = '';
        }
        var colc = document.getElementsByClassName('tick-flip-panel');
        for(i = 0; i < colc.length; i++) {
            colc[i].style.backgroundColor = '#1d1d1d';
            colc[i].style.color = 'gold';
            colc[i].style.animation = '';
        }
    }

    colRGB.onclick   = function () {pickRGB();};

    function pickRGB() {
        var cols = document.getElementsByClassName('side');
        for(i = 0; i < cols.length; i++) {
            cols[i].style.backgroundImage = 'radial-gradient(#757575 10%, #1a1a1a)';
            cols[i].style.border = '2px solid #1d1d1b';
        }
        var cold = document.getElementsByClassName('dot');
        for(i = 0; i < cold.length; i++) {
            cold[i].style.backgroundColor = '#1a1a1a';
            cold[i].style.boxShadow = 'inset 2px 2px #000000ad';
            cold[i].style.animation = 'dotColor 10s infinite linear';
        }
        var colc = document.getElementsByClassName('tick-flip-panel');
        for(i = 0; i < colc.length; i++) {
            colc[i].style.backgroundColor = '#1d1d1d';
            colc[i].style.color = 'gold';
            colc[i].style.animation = 'txtColor 10s infinite linear';
        }
    }
};