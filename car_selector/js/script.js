let types = ["Tesla", "Mazda", "Trabant"];
let typeIndex = 0;

function btnHandler(button) {
  const buttonType = button.dataset.type;
  if (buttonType === "type-minus") {
    chooseType("minus");
  } else if (buttonType === "type-plus") {
    chooseType("plus");
  }
}

function chooseType(direction) {
  if (direction === "minus") {
    console.log(typeIndex)
    if (typeIndex === 0) {
      typeIndex = types.length - 1;
    } else {
      typeIndex--;
    }
  } else {
    if (typeIndex === types.length - 1) {
      typeIndex = 0;
    } else {
      typeIndex++;
    }
  }

  document.getElementById("type").value = types[typeIndex];
}
