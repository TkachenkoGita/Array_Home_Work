/* eslint-disable indent */
// Створити числовий масив та проініціалізувати його (*випадковими числами).
const arr = [10, -8, 20, 0, 30, Math.random(), 100];

// Видалити останній і початковий елемент з масиву, додати елемент до початку і кінця.
arr.shift();
console.log(arr);
arr.pop();
console.log(arr);
arr.push(13);
console.log(arr);
arr.unshift(17);
console.log(arr);

// Вивести розмір масиву
console.log(arr.length);

// Зробити копію масиву
const coppyArr = arr.slice();
console.log(coppyArr);
const coppyArr2 = [...arr];
console.log(coppyArr2);
const coppyArr3 = Array.from(arr);
console.log(coppyArr3);

// Вивести елементи з парними індексами.
for (let i = 2; i <= arr.length; i += 2) {
  console.log(arr[i]);
}

// Вивести лише парні елементи (парні числа діляться на 2 без залишку).
for (let j = 0; j <= arr.length; j++) {
  if (arr[j] % 2 == Number.isInteger()) {
    console.log(arr[j]);
  }
}

// // Вивести індекси нульових елементів (елемент дорівнює нулю).
let arr2 = [];
for (let k = 0; k < arr.length; k++) {
  if (arr[k] == 0) {
    console.log(k);
    // Підрахувати кількість нульових елементів (елемент дорівнює нулю)
    arr2.push(arr[k]);
    console.log(arr2.length);
  }
}

// // Отримати новий масив із заданого, який міститиме лише ненульові числа (-1, 5, 0, 9, -10 => -1, 5, 9, -10). // filter
const numbers = [-1, 5, 0, 9, -10 - 1, 5, 9, -10];
const numbers2 = numbers.filter(function (currentValue) {
  return currentValue > 0;
});
console.log(numbers2);

// Отримати новий масив їх заданого, який міститиме всі елементи вихідного, поділені на 100 (99, 5, 0, 9, 30 => 0.99, 0.05, 0, 0.09, 0.3). // map
const elementsArray = [99, 5, 0, 9, 30, 0.99, 0.05, 0, 0.09, 0.3];
const sumEllementArray = elementsArray.map(function (value) {
  return value / 100;
});
console.log(sumEllementArray);

// Вивести елементи масиву, зведені у куб. // forEach
const elementsArray2 = [];
elementsArray.forEach((sumNumbers3) => {
  elementsArray2.push(sumNumbers3 ** 3);
});
console.log(elementsArray2);

// Визначити індекс елемента, квадрат якого дорівнює 100, і видалити його, або видати діагностичне повідомлення, якщо такого елементу не існує. // findIndex
const fuondIndex = elementsArray.findIndex(function (isOurNumber) {
  if (isOurNumber ** 2 === 100) {
    elementsArray.splice(fuondIndex, 1);
  } else {
    return "Index Undefind";
  }
});

console.log(fuondIndex);

// Перевірити, чи всі елементи масиву є парними числами (* або простими числами). // every
const elementaryElementsArray = elementsArray.every(function (
  numbersElementary
) {
  return numbersElementary % 2 === 0;
});
console.log(elementaryElementsArray);

// Перевірити, чи є у масиві бодай один від'ємний елемент. // some

const negativeElementArray = elementsArray.some(function (negativeElement) {
  return negativeElement < 0;
});
console.log(negativeElementArray);
