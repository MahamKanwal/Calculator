let inputGet = document.getElementById("input");
let lastOperator = "";

const element = (inputValue) => {
  inputGet.value += inputValue.innerText;
};

// result
const result = () => {
  try {
    inputGet.value = eval(inputGet.value);
  } catch {
    inputGet.value = "Error";
  }
};

// for AC (clear)
const clearOp = () => {
  inputGet.value = "";
};

// for delete
const deleteOp = () => {
  inputGet.value = inputGet.value.slice(0, -1);
};

// operator logic
const operator = (key) => {
  const inputValue = inputGet.value;
  const newOperator = key.innerText;
  const validOperators = ["+", "-", "*", "/", "%"];

  if (inputValue.length > 0) {
    const lastChar = inputValue.charAt(inputValue.length - 1);

    if (validOperators.includes(lastChar)) {
      // Replace the last operator
      inputGet.value = inputValue.slice(0, -1) + newOperator;
    } else if (validOperators.includes(newOperator)) {
      // Add the new operator
      inputGet.value += newOperator;
    }
  }
};
