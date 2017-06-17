function getSum() {
    let localStorageForNumbers = [],
        inputNumber = $('#input').val().split(''),
        sumWithPushMethod = 0,
        sumWithoutPushMethod = 0;

    for (let i = 0; i < inputNumber.length; i++) {
        localStorageForNumbers.push(inputNumber[i]);

    }
    for (let i = 0; i < localStorageForNumbers.length; i++) {
        sumWithPushMethod += parseInt(localStorageForNumbers[i]);
    }
    printSum('#space_for_sum_with_method', "Сумма чисел с использованием метода Push для массива", sumWithPushMethod);


    for (let i = 0; i < inputNumber.length; i++) {
        sumWithoutPushMethod += parseInt(inputNumber[i])
    }
    printSum('#space_for_sum_without_method', "Сумма чисел без использования метода Push для массива:",
        sumWithoutPushMethod);
}

function printSum(id, string, sum) {
    $(id).html(`<br>${string} ${sum}.`);
}