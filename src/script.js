const sample_input = ["2", "+", "2", "+", "2", "*", "2", "-", "6", "/", "0"];
function evaluate(lst) {
    let value = parseInt(lst[0]);
    let operation = '+';

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

console.log(evaluate(sample_input));