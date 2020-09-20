let getUserInput = function () {
    return Number(prompt("Введите число в диапазоне от 0 до 999"));
}

let checkUserInput = function (num) {
    if (num < 0 || num > 999 || !Number.isInteger(num) || isNaN(num)) {
        console.log("Вы ввели неправильное число");
        return false;
    };
}

class NumberObject {
    constructor(units, tens, hundreds) {
        this.units = units;
        this.tens = tens;
        this.hundreds = hundreds;
    }
}

let transformUserInput = function (num) {
    let units = 0;
    let tens = 0;
    let hundreds = 0;

    if (num >= 100) {
        hundreds = Math.floor(num / 100);
        tens = Math.floor(((num - (hundreds * 100)) / 10))
        units = num - (hundreds * 100) - (tens * 10);
    }

    if (num < 100 && num >= 10) {
        tens = Math.floor(num / 10);
        units = num - (tens * 10);
    }

    if (num < 10) {
        units = num;
    }

    return new NumberObject(units, tens, hundreds);
}

let transformNumberToObject = function () {
    let number = getUserInput();
    let check = checkUserInput(number);
    if (check === false) {
        return {};
    }
    return transformUserInput(number);
}

let answer = transformNumberToObject();
console.log(answer);