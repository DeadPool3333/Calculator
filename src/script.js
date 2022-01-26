function func(result) {
    form.display_result.value = form.display_result.value + result;
};

function evalute(equation) {
    const properties = Object.entries({
        '+': '+',
        '−': '-',
        '×': '*',
        '÷': '/'
        }
    );

    for (let [key, value] of properties) {
        var equation = equation.replace(key, value);
    };

    try {
        form.display_result.value = eval(equation)
    }
    catch (error) {
        form.display_result.value = 'Invalid expression'
    };
};