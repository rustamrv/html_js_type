let result = 0.1 + 0.2;

const minResult = document.getElementById("res");

minResult.innerHTML = result.toFixed(2);

let str = "1";
let numb = 2;
const resultSum = +str + numb;

const result_two = document.getElementById("res_two");

result_two.innerHTML = resultSum.toFixed();

function calculateFlesh() {
  const count = document.getElementById("count").value;
  const output = document.getElementById("output-func");

  if (isNaN(count) || count <= 0) {
    output.innerHTML = "Будь ласка, введіть коректне значення!";
    return;
  }

  const flashSizeMb = count * 1024;
  const fileSizeMb = 820;
  const numberOfFiles = Math.floor(flashSizeMb / fileSizeMb);

  output.innerHTML = `На флешку обсягом ${count} Гб поміститься ${numberOfFiles} файлів розміром 820 Мб.`;
}

function getChocolate() {
  const count = document.getElementById("countMoney").value;
  const countPrice = document.getElementById("countPrice").value;

  const output = document.getElementById("output-first");

  if (isNaN(count) || count <= 0 || isNaN(countPrice) || countPrice <= 0) {
    output.innerHTML = "Будь ласка, введіть коректне значення!";
    return;
  }

  const number = Math.floor(count / countPrice);
  const resta = count - countPrice * number;
  output.innerHTML = `Ви можете купити ${Math.floor(
    number
  )} одиниць товару. Решта ${resta.toFixed(2)} `;
}

function reverseNumberWithMod() {
  let num = document.getElementById("num").value;
  const output = document.getElementById("output-min-second");

  const sign = Math.sign(num);
  num = Math.abs(num);
  let reversed = 0;

  while (num > 0) {
    const digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  output.innerHTML = sign * reversed;
}


function getSummaVklad() {
  let num = document.getElementById("sumVklada").value;
  const output = document.getElementById("output-bnk");
  
  let i = num * 0.05 * (2/12)
  output.innerHTML =  i.toFixed(2)
}