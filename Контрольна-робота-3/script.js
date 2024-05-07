//обчислення суми, різниці і добутку
document.addEventListener("DOMContentLoaded", function() {
  let op1Input = document.getElementById("op1");
  let op2Input = document.getElementById("op2");
  let resultHeading = document.getElementById("res");

  document.getElementById("add-button").addEventListener("click", function() {
    let result = parseFloat(op1Input.value) + parseFloat(op2Input.value);
    resultHeading.textContent = "Result: " + Number(result).toString();
  });

  document.getElementById("sub-button").addEventListener("click", function() {
    let result = parseFloat(op1Input.value) - parseFloat(op2Input.value);
    resultHeading.textContent = "Result: " + Number(result).toString();
  });

  document.getElementById("mul-button").addEventListener("click", function() {
    let result = parseFloat(op1Input.value) * parseFloat(op2Input.value);
    resultHeading.textContent = "Result: " + Number(result).toString();
  });

  document.getElementById("div-button").addEventListener("click", function() {
    let result = parseFloat(op1Input.value) / parseFloat(op2Input.value);
    resultHeading.textContent = "Result: " + Number(result).toString();
  });
});
// обчислення частки, натурального логарифма, синуса і тангенса
document.addEventListener("DOMContentLoaded", function() {
  let op1Input = document.getElementById("op1");
  let op2Input = document.getElementById("op2");
  let resultHeading = document.getElementById("res");

  document.getElementById("div-button").addEventListener("click", function() {
    let operand1 = parseFloat(op1Input.value);
    let operand2 = parseFloat(op2Input.value);
    if (operand2 === 0) {
      resultHeading.textContent = "Result: Operand 2 is equal to 0";
    } else {
      let result = operand1 / operand2;
      resultHeading.textContent = "Result: " + result;
    }
  });

  document.getElementById("log-button").addEventListener("click", function() {
    let operand1 = parseFloat(op1Input.value);
    if (operand1 <= 0) {
      resultHeading.textContent = "Result: Operand 1 is less or equal to 0";
    } else {
      let result = Math.log(operand1);
      resultHeading.textContent = "Result: " + result;
    }
  });

  document.getElementById("sin-button").addEventListener("click", function() {
    let degrees = parseFloat(op1Input.value);
    let radians = degrees * (Math.PI / 180); // Переведення градусів в радіани
    let result = Math.sin(radians);
    resultHeading.textContent = "Result: " + result;
  });

  document.getElementById("tan-button").addEventListener("click", function() {
    let degrees = parseFloat(op1Input.value);
    let radians = degrees * (Math.PI / 180); // Переведення градусів в радіани
    let result = Math.tan(radians);
    resultHeading.textContent = "Result: " + result;
  });
});
//Виведення довідки з сервера для натурального логарифма, синуса і тангенса
document.addEventListener("DOMContentLoaded", function() {
  let op1Input = document.getElementById("op1");
  let op2Input = document.getElementById("op2");
  let resultHeading = document.getElementById("res");


  function fetchData(url, callback) {
    fetch(url)
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.log("Error fetching data:", error));
  }

  // Обробник події для кнопки логарифма
  document.getElementById("log-button").addEventListener("click", function() {
    let operand1 = parseFloat(op1Input.value);
    if (operand1 <= 0) {
      resultHeading.textContent = "Result: Operand 1 is less or equal to 0";
    } else {
      let result = Math.log(operand1);
      resultHeading.textContent = "Result: " + result;
      fetchData('log.json', function(data) {
        console.log(data);
      });
    }
  });

  // Обробник події для кнопки синуса
  document.getElementById("sin-button").addEventListener("click", function() {
    let degrees = parseFloat(op1Input.value);
    let radians = degrees * (Math.PI / 180); 
    let result = Math.sin(radians);
    resultHeading.textContent = "Result: " + result;
    fetchData('sin.json', function(data) {
      console.log(data);
    });
  });

  // Обробник події для кнопки тангенса
  document.getElementById("tan-button").addEventListener("click", function() {
    let degrees = parseFloat(op1Input.value);
    let radians = degrees * (Math.PI / 180); 
    let result = Math.tan(radians);
    resultHeading.textContent = "Result: " + result;
    fetchData('tan.json', function(data) {
      console.log(data);
    });
  });
});
