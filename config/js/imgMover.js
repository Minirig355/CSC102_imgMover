let timer = null;                                                                           //
let deltaX = 50;                                                                            // Max size of random X movement
let deltaY = 50;                                                                            // Max size of random Y movement
let moveInt = 25;                                                                           // Interval of the timer (much higher than 25 and it gets choppy)
                                                                                            //
let ranX = deltaX * 2                                                                       // A variable to allow for pos/neg output for random movement (essentially ran 20 and then minus 10 to get a range of -10 to 10 instead of 0 to 20)
let ranY = deltaY * 2                                                                       // Same but for Y
                                                                                            //
function startMoving() {                                                                    //
    const img = document.getElementById('meme');                                            // Finding the image to move
    if (!timer) {                                                                           //
        timer = setInterval(function () {                                                   // Set interval to repeatedly call for the function
            let newTop = img.offsetTop + Math.round(Math.random() * ranY - deltaY);         // Math to move the image a random amount, based on the delta value set on line 2-3 (positive and negative, explained in line 5)
            let newLeft = img.offsetLeft + Math.round(Math.random() * ranX - deltaX);       // Same but for the other axis
                                                                                            //
            if (newLeft >= 1212) newLeft -= 200;                                            // Bounding box right (Will bump the image 200 pixels in)
            if (newLeft <= -1212) newLeft += 200;                                            // Bounding box left
            if (newTop >= 820) newTop -= 200;                                               // Bounding box bottom
            if (newTop <= -110) newTop += 200;                                              // Bounding box top
                                                                                            //
            img.style.left = newLeft + 'px';                                                // The actual moving of the image left/right
            img.style.top = newTop + 'px';                                                  // Same but top/bottom
        }, moveInt);                                                                        // Interval
    }                                                                                       //
    document.getElementById('startButton').disabled = true;                                 // Disable the start button when the image is moving
    document.getElementById('stopButton').disabled = false;                                 // Enable the stop button when the image is moving
}                                                                                           //
                                                                                            //
function stopMoving() {                                                                     //
    clearInterval(timer);                                                                   // Clearing the interval set on like 12 (and 23)
    timer = null;                                                                           // Set timer to null
    document.getElementById('startButton').disabled = false;                                // Enable the start button when the image is still
    document.getElementById('stopButton').disabled = true;                                  // Disable the stop button when the image is still
}                                                                                           //