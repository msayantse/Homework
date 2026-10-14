// Задача 1
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    continue;
  }

  console.log(i);
}

// Задача 2

const number = Number(prompt("Введите число:"));

let factorial = 1;

for (let i = 1; i <= number; i++) {
  factorial *= i;
}

console.log(`Факториал числа ${number} равен:`, factorial);

// Задача 3

const boardSize = 8;
let board = "";

for (let i = 1; 1 <= boardSize; i++) {
  let row = "";
  for (let j = 1; j <= boardSize; j++) {
    row += (i + j) % 2 === 0 ? "Ч " : "Б";
  }
  board += row + "\n";
}

console.log(board);
