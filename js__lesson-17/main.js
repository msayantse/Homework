// Задача 1

let number = 2;

if (number % 2 == 0) {
  console.log("Четное");
} else if (number % 2 !== 0) {
  console.log("Нечетное");
}

//Задача 2

const age = 20;
let discount = 0;

if (age < 18) {
  discount = 10;
} else if (age >= 18 && age < 65) {
  discount = 20;
} else if (age >= 65) {
  discount = 30;
}

console.log(`${discount}%`);

// Задача 2.2
// const age = 20;
// const discount = age < 18 ? 10 : age >= 18 && age < 65 ? 20 : age >=65 ? 30;

// console.log(`${discount}%`);

//Задача 3

const username = prompt(`Введите имя пользователя`);
const password = prompt(`Введите пароль`);
const message =
  (username === `user` || username === `admin`) && password === `123456`
    ? `Доступ разрешен`
    : `Доступ запрещен`;

alert(message);

//Задача 4

const weight = prompt(`Укажите вес посылки в кг`)
const type = prompt(`Укажите тип доставки (Стандарт, Экспресс, Премиум):`)
let text = ``

  
  if (weight <= 0) {
    text = `Некорректный вес посылки`
  } 
  if (type === `Cтандарт` ) {
  text =
  } else {
    text = `Неверный тип доставки`
  }



