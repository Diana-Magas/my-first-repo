document.addEventListener("DOMContentLoaded", function () {
    let op1Input = document.getElementById("op1");
    let op2Input = document.getElementById("op2");
    let resultHeading = document.getElementById("res");
    let logInfoDiv = document.getElementById("log-info");
    let sinInfoDiv = document.getElementById("sin-info");
    let tanInfoDiv = document.getElementById("tan-info");

    function clearInfoDivs() {
        logInfoDiv.innerHTML = '';
        sinInfoDiv.innerHTML = '';
        tanInfoDiv.innerHTML = '';
    }

    function fetchData(url, callback) {
        fetch(url)
            .then(response => response.json())
            .then(data => callback(data))
            .catch(error => console.error("Error fetching data:", error));
    }

    function handleButtonClick(event, operation) {
        event.preventDefault();
        clearInfoDivs();

        let operand1 = parseFloat(op1Input.value);
        let operand2 = parseFloat(op2Input.value);
        let result;

     // Перевірка, чи введений Операнд 2 для операцій логарифму, синуса та тангенсу
        if ((operation === 'log' || operation === 'sin' || operation === 'tan') && !isNaN(operand2)) {
            resultHeading.textContent = "Enter only Operand1!";
            return;
        }

   // Перевірка, чи введені обидва операнди для додавання, віднімання, множення та ділення
        if ((operation === 'add' || operation === 'sub' || operation === 'mul' || operation === 'div') && (isNaN(operand1) || isNaN(operand2))) {
            resultHeading.textContent = "Action is not possible! Please enter both operands.";
            return;
        }

        switch (operation) {
            //додавання
            case 'add':
                result = operand1 + operand2;
                resultHeading.textContent = "Result: " + result;
                break;

            //віднімання
            case 'sub':
                result = operand1 - operand2;
                resultHeading.textContent = "Result: " + result;
                break;

            //множення
            case 'mul':
                result = operand1 * operand2;
                resultHeading.textContent = "Result: " + result;
                break;

            //ділення
            case 'div':
                if (operand2 === 0) {
                    resultHeading.textContent = "Result: Attention can not be divided by 0!!!";
                    return;
                } else {
                    result = operand1 / operand2;
                    resultHeading.textContent = "Result: " + result;
                }
                break;

            //Логарифм і довідка
            case 'log':
                if (op1Input.value.trim() === '') {
                    resultHeading.textContent = "You didn`t enter an operand!";
                    return;
                }
                if (operand1 <= 0) {
                    resultHeading.textContent = "Result: Operand 1 is less or equal to 0";
                    return;
                } else {
                    result = Math.log(operand1);
                    fetchData('JSON/log.json', function (data) {
                        resultHeading.textContent = "Result: " + result;
                        logInfoDiv.innerHTML = `<strong>${data.name}</strong><br><img src="${data.image_name}" alt="${data.name}"><br> ${data.description}`;
                    });
                }
                break;

            //Синус і довідка
            case 'sin':
                if (op1Input.value.trim() === '') {
                    resultHeading.textContent = "You didn`t enter an operand!";
                    return;
                }
                operand1 = operand1 * Math.PI / 180;
                result = Math.sin(operand1);
                fetchData('JSON/sin.json', function (data) {
                    resultHeading.textContent = "Result: " + result;
                    sinInfoDiv.innerHTML = `<strong>${data.name}</strong><br><img src="${data.image_name}" alt="${data.name}"><br> ${data.description}`;
                });
                break;

            //Тангенс і довідка
            case 'tan':
                if (op1Input.value.trim() === '') {
                    resultHeading.textContent = "You didn`t enter an operand!";
                    return;
                }
                operand1 = operand1 * Math.PI / 180;
                result = Math.tan(operand1);
                fetchData('JSON/tan.json', function (data) {
                    resultHeading.textContent = "Result: " + result;
                    tanInfoDiv.innerHTML = `<strong>${data.name}</strong><br><img src="${data.image_name}" alt="${data.name}"><br> ${data.description}`;
                });
                break;
        }
    }

    document.getElementById("add-button").addEventListener("click", (e) => handleButtonClick(e, 'add'));
    document.getElementById("sub-button").addEventListener("click", (e) => handleButtonClick(e, 'sub'));
    document.getElementById("mul-button").addEventListener("click", (e) => handleButtonClick(e, 'mul'));
    document.getElementById("div-button").addEventListener("click", (e) => handleButtonClick(e, 'div'));
    document.getElementById("log-button").addEventListener("click", (e) => handleButtonClick(e, 'log'));
    document.getElementById("sin-button").addEventListener("click", (e) => handleButtonClick(e, 'sin'));
    document.getElementById("tan-button").addEventListener("click", (e) => handleButtonClick(e, 'tan'));
});



