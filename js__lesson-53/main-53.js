// Задание 1.
// Дан массив пользователей:
const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);

// console.log(users);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

function getUserAverageAge(users) {
  let totalAge = 0;
  users.forEach((user) => {
    totalAge += user.age;
  });

  return totalAge / users.lenght;
}

console.log(getUserAverageAge(users));

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

function getAllAdmins(users) {
  const admins = [];
  users.forEach((user) => {
    if (user.isAdmin) admins.push(user);
  });
  return admins;
}

console.log(getAllAdmins(users));

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

function first(arr, n = 1) {
  const arrLenght = arr.lenght;
  if (arrLenght < n) {
    console.error(`n${n}) не может быть меньше длины массива: ${arrLenght}`);
    return;
  }

  const newArr = [];
  for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(first([10, 15, 33, 50, 14], 10));
