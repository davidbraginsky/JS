/*
1. функция с 3 параметрами
    1.1 значение 1-го числа
    1.2 значение 2-го числа
    1.3 вид арифметической операции
2. возвращает результат арифметической операции
3. switch
*/

let sumNumbers = (a, b) => a + b;
let subtractNumbers = (a, b) => a - b;
let multiplyNumbers = (a, b) => a * b;
let divideNumbers = (a, b) => a / b;

let num1 = Number(prompt("Введите первое число"));
let num2 = Number(prompt("Введите второе число"));
let typeOfOperation = prompt("Какой вид операции вы хотите совершить?\nДля суммирования: sum\nДля вычитания: sub\nДля умножения: mul\nДля деления: div");

let mathOperation = (arg1, arg2, operation) => {
    let answer = 0;
    switch (operation) {
        case "sum":
            answer = sumNumbers(arg1, arg2);
            alert(`Cумма ваших чисел: ${answer}`);
            break;
        case "sub":
            answer = subtractNumbers(arg1, arg2);
            alert(`Разница ваших чисел: ${answer}`);
            break;
        case "mul":
            answer = multiplyNumbers(arg1, arg2);
            alert(`Произведение ваших чисел: ${answer}`);
            break;
        case "div":
            answer = divideNumbers(arg1, arg2);
            alert(`Результат деления ваших чисел: ${answer}`);
            break;
    }
};

mathOperation(num1, num2, typeOfOperation);