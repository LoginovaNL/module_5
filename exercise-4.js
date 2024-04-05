let userName = prompt('Введите своё имя:');
let userYearOfBirth = +prompt('Введите свой год рождения:');
let userAge = `${2024 - userYearOfBirth}`;
let age = userAge;
if (age >=10 && age <=20) {
    alert(userName + ': ' + userAge + ' лет');
} else {
    age = userAge % 10;
    if (age === 1) {
        alert(userName + ': ' + userAge + ' год');
    }  else if (age >= 2 && age <= 4) {
        alert(userName + ': ' + userAge + ' года');
    } else {
        alert(userName + ': ' + userAge + ' лет');
    }
}