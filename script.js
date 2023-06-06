// write a function, that accept 2 arguments: array of numbers and number.
// Function return count of repeats of the number that we provide.
// If number that we provide not fount, return text 'Даного числа в масиві немає!'.

const numbers = [1, 3, 5, 7, 9, 1, 2, 8, 9, 1];

function findCountRepeatOfNumber(numbersArr, number) {
    let count = 0;

    for (const element of numbersArr) {
        if (element === number) {
            count++;
        }
    }

    return count > 0 ? count : 'Даного числа в масиві немає!';
}

console.log(findCountRepeatOfNumber(numbers, 1));

