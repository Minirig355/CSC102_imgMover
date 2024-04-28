var elDiceOne       = document.getElementById('dice1');
var elDiceTwo       = document.getElementById('dice2');
var elComeOut       = document.getElementById('roll');

var colDefault      = document.getElementById('diceDefault');
var colOutrun       = document.getElementById('diceOutrun');
var colGold         = document.getElementById('diceGold');
var colRGB          = document.getElementById('diceRGB');

var elSumOne       = document.getElementById('sum1')
var elSumTwo       = document.getElementById('sum2')
var numWin          = 0;
var numLoss         = 0;
var numTie          = 0;

//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+-|| FUNCTION: PLAY CRAPS ||--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+


function playCraps(tick) {

var elDiceOne       = document.getElementById('dice1');
var elDiceTwo       = document.getElementById('dice2');
var elComeOut       = document.getElementById('roll');

console.log("Craps game started.");
var diceOne = Math.ceil(6 * Math.random());  
var diceTwo = Math.ceil(6 * Math.random());

if (diceOne == 1) {var diceOneA = 1}; if (diceTwo == 1) {var diceTwoA = 1};
if (diceOne == 2) {var diceOneA = 5}; if (diceTwo == 2) {var diceTwoA = 5};
if (diceOne == 3) {var diceOneA = 6}; if (diceTwo == 3) {var diceTwoA = 6};
if (diceOne == 4) {var diceOneA = 3}; if (diceTwo == 4) {var diceTwoA = 3};
if (diceOne == 5) {var diceOneA = 4}; if (diceTwo == 5) {var diceTwoA = 4};
if (diceOne == 6) {var diceOneA = 2}; if (diceTwo == 6) {var diceTwoA = 2};
var sum = diceOneA + diceTwoA;


document.getElementsByClassName("tick").setAttribute("data-value", "5555");

console.log(diceOne + ' ' + diceTwo);
console.log("sum: " + sum);

for (var i = 1; i <= 6; i++) {
    elDiceOne.classList.remove('show-' + i);
    if (diceOne === i) {
    elDiceOne.classList.add('show-' + i);
    }
}

for (var k = 1; k <= 6; k++) {
    elDiceTwo.classList.remove('show-' + k);
    if (diceTwo === k) {
    elDiceTwo.classList.add('show-' + k);
    }
}

setTimeout(playCraps(), 100);
}

//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+-|| FUNCTION: COLOR PICKER ||+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
//--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+

colDefault.onclick   = function () {pickDefault();};

function pickDefault() {
    var cols = document.getElementsByClassName('side');
    for(i = 0; i < cols.length; i++) {
        cols[i].style.backgroundImage = 'radial-gradient(#ffffff 20%, #c7c7c7)';
        cols[i].style.border = '1px solid #e5e5e5';
    }
    var cold = document.getElementsByClassName('dot');
    for(i = 0; i < cold.length; i++) {
        cold[i].style.backgroundColor = '#1a1a1a';
        cold[i].style.boxShadow = 'inset 2px 2px #000000';
        cold[i].style.animation = '';
    }
    var colc = document.getElementsByClassName('tick-flip-panel');
    for(i = 0; i < colc.length; i++) {
        colc[i].style.backgroundColor = '#f0f0f0';
        colc[i].style.color = '#1b1b1b';
        colc[i].style.animation = '';
    }
}

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

function test(){
    document.getElementByClassName("sum-text").innerHTML = "test";
}