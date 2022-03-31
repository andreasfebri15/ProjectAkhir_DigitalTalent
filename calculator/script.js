let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const calculatorScreen = document.querySelector(".calculator-layar");

// Fungsi Update Screen
const updateScreen = number => {
  calculatorScreen.value = number;
};

const numbers = document.querySelectorAll(".number");
// Fungsi event click ke setiap element
numbers.forEach(number => {
  number.addEventListener("click", event => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

const inputNumber = number => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

// Menambah click Event ke operator tombol-tombol
const operators = document.querySelectorAll(".operator");

const inputOperator = operator => {
  prevNumber = currentNumber;
  calculationOperator = operator;
  currentNumber = "";
};

operators.forEach(operator => {
  operator.addEventListener("click", event => {
    inputOperator(event.target.value);
  });
});

// End Menambah click Event ke operator tombol-tombol

// Menambah click Event ke TOmbol sama dnegan =
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

// End Menambah click Event ke TOmbol sama dnegan =

// Fungsi calculator
const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseInt(prevNumber) + parseInt(currentNumber);
      break;
    case "-":
      result = parseInt(prevNumber) - parseInt(currentNumber);
      break;
    case "*":
      result = parseInt(prevNumber) * parseInt(currentNumber);
      break;
    case "/":
      result = parseInt(prevNumber) / parseInt(currentNumber);
      break;
    default:
      return;
  }
  currentNumber = result;
  calculationOperator = "";
};

// End Fungsi calculator

// Fungsi AC atau All Clear

const clearBtn = document.querySelector(".all-clear");

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

clearBtn.addEventListener("click", () => {
  clearAll;
  updateScreen(currentNumber);
});
