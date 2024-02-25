// CALCULATOR PROGRAM

const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}
function calculate() {
    try {
        display.value = eval(display);
    }
    catch (error) {
        display.value = 'Error';
    }
}