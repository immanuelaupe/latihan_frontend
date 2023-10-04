function checkNumberType(number) {
    let isEligible;

    if (typeof number !== 'number') {
        isEligible = 'input sebuah angka';
    } else if (number > 0) {
        isEligible = 'Bilangan positif';
    } else if (number < 0) {
        isEligible = 'Bilangan negatif';
    } else {
        isEligible = 'bukan angka';
    }

    return isEligible;
}

const inputNumber = 10;
const result = checkNumberType(inputNumber);
console.log(result);