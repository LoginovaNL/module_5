let userName = prompt('Введите своё имя:');
let userYearOfBirth = +prompt('Введите свой год рождения:');
let userAge = `${2024 - userYearOfBirth}`;
let answer = userName + ': ' + userAge;
alert(answer);