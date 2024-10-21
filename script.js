const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerText === '=') {
            display.value = eval(display.value); // Evaluate the expression
        } else if (button.innerText === 'C') {
            display.value = ''; // Clear the display
        } else {
            display.value += button.innerText; // Append the button text to the display
        }
    });
});
