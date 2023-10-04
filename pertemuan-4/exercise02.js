// Nama : Immanuela Gloria Grifin
// Menggunakan IIFE dan CallBack

(function (number, callback) {
    let isEligible;

    if (typeof number !== 'number') {
        isEligible = 'input sebuah angka';
    } else if (number > 0) {
        isEligible = 'bilangan '+ 10 + ' adalah positif';
    } else if (number < 0) {
        isEligible = 'bilangan '+ 10 + ' adalah positif';
    } else {
        isEligible = 'bukan angka';
    }
    callback(isEligible);
})(10, function (result) {
    console.log(result);
});
