//удалить первый и последний символ
function removeChar(str) {
  let newStr = Array.from(str);
  newStr.pop();
  newStr.shift();
  let newStr2 = newStr.join("");
  return newStr2;
}
console.log(removeChar("adfg"));

function removeChar(str) {
  let newStr = str.substring(1, str.length - 1);
  return newStr;
}
console.log(removeChar("ghbdtn"));

function removeChar(str) {
  return str.slice(1, -1); /*вриант лучше без задавания переменных*/
  function removeChar(str) {
    return str.substring(1, str.length - 1);
  }
}
function removeChar(str) {
  return str.substring(1, str.length - 1);
}

// найдите наименьшее целое число в массиве
function findSmallestInt(arr) {
  let minimum = Math.min(...arr); /*распаковка архива*/
  return minimum;
}

function findSmallestInt(args) {
  return Math.min(...args); /*вариант без лишних переменных*/
}

//посчитайте количество присутствующих овец в массиве, где true Присутствует fals отсутствует
function countSheeps(sheep) {
  let sum = 0;
  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i] === true) {
      sum += 1;
    } else {
      sum;
    }
  }
  return sum;
}

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

//преобразовать число в обратный массив цифр
function digitize(n) {
  let array1 = Array.from(String(n), Number);
  array1.reverse();
  return array1;
}

function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

function makeString(s) {
  return s
    .split(" ") /*разбивает строку на массив строк, где сепаратор пробел*/
    .map(el => el.charAt(0)) /* создание нового массива с элементами первой буквы слов */
    .join(""); /*объединяет все элементы массива*/
}
let s = "С новым годом";
console.log(makeString(s));
