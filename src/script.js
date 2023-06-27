// DOM part

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
  button.addEventListener('click', update)
});





// math part

let current_string = ""
let answer = ''
// updates current strings
function update(e) {
    if (current_string == 'uwu' || current_string == 'NaN') {
        current_string = ''
    }
    result_div = document.querySelector('.result');
    expression_div = document.querySelector('.expression');

    pressed = e.target.id;
    if (!isNaN(pressed)) {
        current_string += pressed
    } else if (pressed == 'clear') {
        current_string = ""
        answer = ''
        result.textContent = answer

    } else if (pressed == 'equals') {
        answer = `${evaluate(convert(current_string))}`
        current_string = answer
        result_div = document.querySelector('.result');
        result_div.removeChild(result_div.lastChild)
        result = document.createElement('h1')
        result.textContent = answer
        result_div.appendChild(result)
    } else if (pressed == 'decimal') {
        current_string += '.'
    } else if (pressed == 'add') {
        current_string += '+'
    } else if (pressed == 'subtract') {
        current_string += '-'
    } else if (pressed == 'multiply') {
        current_string += '*'
    } else if (pressed == 'divide') {
        current_string += '/'
    } else if (pressed == 'delete') {
        current_string = current_string.slice(0, -1)
    }


    expression_div.removeChild(expression_div.lastChild);
    expression = document.createElement('p')
    expression.textContent = `${current_string}`
    expression_div.appendChild(expression);


    console.log(current_string)
}

// converts string to array of strings
function convert(str) {
    let current_arr = []
    let current_str = ""

    for (let i = 0; i < str.length; i++) {
        if (str[i] != '+' && str[i] != '-' && str[i] != '*' && str[i] != '/') {
            current_str += str[i]
        } else {
            current_arr.push(current_str)
            current_arr.push(str[i])
            current_str = ""
        }
    }
    current_arr.push(current_str)
    return current_arr
}

// evaluates function
    // const sample_input = ["2", "+", "2", "+", "2", "*", "2", "-", "6", "/", "0"];
function evaluate(lst) {
    let value = parseInt(lst[0]);

    for (let i = 1; i < lst.length; i++) {
        if (i % 2) {
            operation = lst[i];
        } else {
            let current = parseInt(lst[i])
            switch (operation) {
                case '+':
                    value = value + current;
                    break;
                case '-':
                    value = value - current;
                    break;
                case '*':
                    value = value * current;
                    break;
                case '/':
                    if (!current) return 'uwu' // divide by zero
                    value = value / current;
                    break;
            }
        }
    }

    return `${value}`;
}

sample_input="0.2+2";
console.log(evaluate(convert));
//console.log(evaluate(sample_input));