let userAge = +prompt('Введите свой возраст');
if (userAge <= 17) {
    alert('К сожалению, мы не можем выдать Вам кредит!');
} else if(userAge >= 18 && userAge <=21) {
    let userSum = +prompt('Мы можем выдать Вам максимум 50000\n Введите сумму кратную 1000');
    sum = userSum % 1000;
    if(sum === 0 && userSum <= 50000) {
        alert('Поздравляем! Вам одобрен кредит на ' + userSum);
    } else {
        let multiple = userSum - sum;
        alert('Вы ввели число не кратное 1000. Мы можем выдать ' + multiple);
    }
} else if(userAge >= 22 && userAge <= 35) {
    let userSum =  +prompt('Мы можем выдать Вам максимум 400000\n Введите сумму кратную 1000');
    sum = userSum % 1000;
    if(sum === 0 && userSum <= 400000) {
        alert('Поздравляем! Вам одобрен кредит на ' + userSum);
    } else {
        let multiple = userSum - sum;
        alert('Вы ввели число не кратное 1000. Мы можем выдать ' + multiple);
    }
} else if(userAge >= 36 && userAge <= 65) {
    let userSum = +prompt('Мы можем выдать Вам максимум 1000000\n Введите сумму кратную 1000');
    sum = userSum % 1000;
    if(sum === 0 && userSum <= 1000000) {
        alert('Поздравляем! Вам одобрен кредит на ' + userSum);
    } else {
        let multiple = userSum - sum;
        alert('Вы ввели число не кратное 1000. Мы можем выдать ' + multiple);
    }
}