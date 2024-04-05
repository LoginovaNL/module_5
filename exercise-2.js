let userInput = prompt('Введите промокод');
userInput = userInput.toLowerCase()
let promotionalCode = 'скидка';
if(userInput === promotionalCode) {
    alert('Промокод применён');
} else {
    alert('Промокод не работает');
}