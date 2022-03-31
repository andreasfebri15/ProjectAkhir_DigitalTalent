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

const inputNUmber = number => {
  currentNumber += number;
};

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
  console.log("Equal button is pressed");
});

// End Menambah click Event ke TOmbol sama dnegan =

// Fungsi calculator
