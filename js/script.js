const person = {}; // Objeto para armazenar os dados da pessoa

const btnCalculation = document.getElementById("btnCalculation");
btnCalculation.addEventListener("click", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const age = parseInt(document.getElementById("age").value);
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);

  // Preenchendo o objeto person (pessoa) com os dados
  person.name = name;
  person.gender = gender;
  person.age = age;
  person.height = height;
  person.weight = weight;

  // Executar as funções depois de preencher os dados
  setCategory();
  calculationImc();

  // Chamando função para Exibir os resultados no html
  displayResults();
});

const setCategory = () => {
  if (person.age <= 11) {
    person.category = "Infantil";
  } else if (person.age >= 12 && person.age <= 20) {
    person.category = "Juvenil";
  } else if (person.age >= 21 && person.age <= 65) {
    person.category = "Adulto";
  } else if (person.age >= 66) {
    person.category = "Idoso";
  } else {
    console.log("Operação inválida");
  }
};

const calculationImc = () => {
  let imc = person.weight / (person.height * 2);
  person.imc = imc.toFixed(2);

  if (imc <= 20) {
    person.scratchs =
      "Riscos: Muitas complicações de saúde como doenças pulmonares e cardiovasculares podem estar associadas ao baixo peso";
    person.recommendation =
      "Recomencações: Inclua carboidratos simples em sua dieta, além de proteínas - indispensáveis para ganho de massa magra. Procure um profissional";
    resultadoDiv.style.background = "#C4C4C4";
    resultadoDiv.style.color = "#000000";
  } else if (imc >= 21 && imc <= 24.9) {
    person.scratchs = "Riscos: Seu peso está ideal para suas referências.";
    person.recommendation =
      "Recomencações: Mantenha uma dieta saudável e faça seus exames periódicos";
    resultadoDiv.style.background = "#00943d";
    resultadoDiv.style.color = "#C4C4C4";
  } else if (imc >= 25 && imc <= 29.9) {
    person.scratchs =
      "Riscos: Aumento de peso apresenta risco moderado para outras doenças crônicas e cardiovasculares.";
    person.recommendation =
      "Recomencações: Adote um tratamento baseado em dieta balanceada, exercício físico e medicação. A ajuda de um profissional pode ser interessante";
    resultadoDiv.style.background = " #2a1b70";
    resultadoDiv.style.color = "#C4C4C4";
  } else if (imc >= 30 && imc <= 35) {
    person.scratchs =
      "Riscos: Quem tem obesidade vai estar mais exposto a doenças graves e ao risco de mortalidade.";
    person.recommendation =
      "Recomencações: Adote uma dieta alimentar rigorosa, com o acompanhamento de um nutricionista e um médico especialista (endócrino)";
    resultadoDiv.style.background = "#e57917";
    resultadoDiv.style.color = "#C4C4C4";
  } else if (imc >= 36) {
    person.scratchs =
      "Riscos: O obeso mórbido vive menos, tem alto risco de mortalidade geral por diversas causas";
    person.recommendation =
      "Recomencações: Procure com urgência o acompanhamento de um nutricionista para realizar reeducação alimentar, um psicólogo e um médico especialista (endócrino)";
    resultadoDiv.style.background = "#dc241c";
    resultadoDiv.style.color = "#C4C4C4";
  } else {
    console.log("Operação inválida");
  }
};
const resultadoDiv = document.getElementById("resultado");
const displayResults = () => {
  resultadoDiv.innerHTML = "";

  const results = [
    `Nome: ${person.name}`,
    `Sexo: ${person.gender}`,
    `Idade: ${person.age}`,
    `Altura: ${person.height}`,
    `Peso: ${person.weight}`,
    `Categoria: ${person.category}`,
    `IMC: ${person.imc}`,
    `${person.scratchs}`,
    `${person.recommendation}`,
  ];

  results.forEach((result) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = result;
    resultadoDiv.appendChild(paragraph);
  });

  resultadoDiv.style.display = "block";
};
