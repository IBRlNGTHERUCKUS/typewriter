// string is the text that will be outputted
// outputElement is the DOM element who's textContent will be modified
// delay is ms inbetween each character
function typewrite(string, outputElement, msDelay) {
    // Clear the element's text
    outputElement.textContent = '';
    let i = 0;
    const timer = setInterval(() => { 
        if (i < string.length) {
            outputElement.textContent += string[i];
            i++;
        }
        else {
            clearInterval(timer);
            console.log('timer stopped')
        }
    }, msDelay)
} 