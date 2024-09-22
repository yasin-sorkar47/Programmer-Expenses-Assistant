function getInputToReturnValue(id) {
  let inputValue = parseFloat(document.getElementById(id).value);
  return inputValue;
}

function validateTheInputFiled(id) {
  document.getElementById(id).classList.remove("hidden");
}
