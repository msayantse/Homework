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

for (let i = 1; i <= Number; i++) {
  factorial *= i;
}

console.log(`Факториал числа ${n} равен:`, factorial);

// Задача 3

let board = "";

for (let r = 1; r <= 8; r++) {
  let row = "";
  for (let line = 1; line <= 8; line++) {
    row += "Ч";
  }
  board += row + "\n";
}

console.log(board);
