function btnClickHandler(operator) {
    const random = Math.floor(Math.random() * 6)  + 1;
    document.getElementById("input").value = random;

    if (random === 6) {
        alert("You won!");
    }
  }



