let userInput = prompt('Введите любое число:');
let userNumber = +userInput;
let squareOfTheNumber = userNumber * userNumber;
let cubeOfNumber = userNumber * userNumber * userNumber;
let answer = 'Введённое число - '+ userNumber + '\nКвадрат числа - ' + squareOfTheNumber + '\nКуб числа - ' + cubeOfNumber;
alert(answer);