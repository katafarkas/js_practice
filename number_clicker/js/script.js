function btnClickHandler(operator) {
  const display = document.getElementById("number");
  const displayValue = display.innerHTML;
  if (operator === "-") {
    decrease(displayValue);
  } else {
    increase(displayValue);
  }
}

function increase(displayValue) {
  if (displayValue < 10) {
    displayValue++;
    document.getElementById("number").innerHTML = displayValue;
  } else {
    alert("hülye vagy, csak 10 lehet");
  }
}

function decrease(displayValue) {
  if (displayValue > 0) {
    displayValue--;
    document.getElementById("number").innerHTML = displayValue;
  } else {
    alert("Normális vagy, 0 alá!?");
  }
}
