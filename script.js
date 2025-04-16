let display = document.querySelector('.display');
let buttons = document.querySelector('.buttons');

buttons.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        let value = event.target.value;
        if (value === 'clear') {
            display.value = '';
        } else if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            display.value += value;
        }
    }
});