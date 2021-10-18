/**
 * Create a calculator
 */

const show = (val) => {
  document.getElementById("textInput").value += val;
};

const calculate = () => {
  let result = eval(document.getElementById("textInput").value);
  document.getElementById("textInput").value = result;
};
