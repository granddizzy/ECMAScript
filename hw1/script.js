// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве,
// решение задание должно состоять из одной строки
arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и
// decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение
// счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
  let counter = 0;

  return {
    decrement: function () {
      counter++;
    },
    increment: function () {
      counter--;
    },
    getValue: function () {
      return counter;
    },
  }
}

const counter1 = createCounter();
const counter2 = createCounter();
counter1.decrement();
counter2.increment();
console.log(counter1.getValue());
console.log(counter2.getValue());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса
// в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

function findElementByClass(el, className) {
  if (el.classList.contains(className)) {
    return el;
  }

  for (let i = 0; i < el.children.length; i++) {
    const foundEl = findElementByClass(el.children[i], className);
    if (foundEl) return foundEl;
  }
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);