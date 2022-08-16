let firstValue = undefined;
let operator = undefined;

function btnClickHandler(btn) {
  const value = document.getElementById("input").value;
  const specials = ["+", "-", "x", "/"];

  if (btn.innerHTML === "=") {
    const calculated = calculate(firstValue, value, operator);
    firstValue = calculated
    second = undefined
    operator = undefined
    document.getElementById("input").value = calculated;
  } else if (specials.includes(btn.innerHTML)) {
    firstValue = value;
    operator = btn.innerHTML;
    document.getElementById("input").value = "";
  } else {
    const nextValue = value + btn.innerHTML;
    document.getElementById("input").value = nextValue;
  }
}

function calculate(first, second, operator) {
  first = parseFloat(first);
  second = parseFloat(second);

  if (operator === "+") {
    return first + second;
  } else if (operator === "-") {
    return first - second;
  } else if (operator === "x") {
    return first * second;
  } else if (operator === "/") {
    return first / second;
  }
}
