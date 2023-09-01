document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-button");
  const inputsContainer = document.getElementById("inputs-container");

  addButton.addEventListener("click", function () {
    if (inputsContainer.childElementCount < 10) {
      const inputRow = document.createElement("div");
      inputRow.className = "input-row";

      const input = document.createElement("input");
      input.type = "number";
      input.className = "number-input";
      input.placeholder = "Insira um número";
      input.required = true;

      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.className = "remove-button";
      removeButton.textContent = "-";
      removeButton.addEventListener("click", function () {
        inputsContainer.removeChild(inputRow);
      });

      inputRow.appendChild(input);
      inputRow.appendChild(removeButton);
      inputsContainer.appendChild(inputRow);
    } else {
      alert("Máximo de 10 números permitidos.");
    }
  });

  document
    .getElementById("tabuada-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const numberInputs = document.querySelectorAll(".number-input");
      const resultsDiv = document.getElementById("tabuada-results");

      resultsDiv.innerHTML = "";

      numberInputs.forEach((input) => {
        const number = parseInt(input.value);
        const tabuadaDiv = document.createElement("div");
        tabuadaDiv.className = "tabuada";

        for (let i = 1; i <= 10; i++) {
          const result = number * i;
          const resultElement = document.createElement("p");
          resultElement.textContent = `${number} x ${i} = ${result}`;
          tabuadaDiv.appendChild(resultElement);
        }

        resultsDiv.appendChild(tabuadaDiv);
      });
    });
});
