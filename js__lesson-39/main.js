// Задача 1

const person = {
  name: "Sayana",
  age: 22,
  isStudent: true,
};

console.log(person);

// Задача 2

const isEmpty = (obj) => {
  for (const key in obj) {
    return false;
  }
  return true;
};

console.log(isEmpty());
console.log(isEmpty({ name: "Sayana" }));

// Задача 3

const task = {
  title: "score",
  description: "keep score",
  isCompleted: false,
};

function cloneAndModify(obj, modifications) {
  return { ...obj, ...modifications };
}

const newTask = cloneAndModify(task, { isCompleted: true, priority: "High" });

task.title = "compare score";

console.log(task);
console.log(newTask);

// Задача 4

const callAllMethods = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "function") {
      obj[key]();
    }
  }
};

const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};

callAllMethods(myObject);
