//1.2.4
document.addEventListener('DOMContentLoaded', function() {
    let submitButton = document.querySelector('button[type="submit"]');
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); 


        let username = document.getElementById('username').value.trim() || "Анонім";
        let email = document.getElementById('email').value.trim() || "невідома пошта";
        let mealRadio = document.querySelector('input[name="meal"]:checked');
        let meal = mealRadio ? mealRadio.value : "час прийому не вказано";
        let dishesCheckboxes = document.querySelectorAll('input[name="dish"]:checked');
        let selectedDishes = Array.from(dishesCheckboxes).map(dish => dish.value);
        let comment = document.getElementById('comment').value.trim() || "користувач не залишив коментаря";


        let resultText = `${username} (${email}) з’їв на ${meal}`;
        if (selectedDishes.length > 0) {
            resultText += ' ' + selectedDishes.join(', ');
        }
        resultText += ` та залишив такий коментар: "${comment}"`;

   
        let resultDiv = document.createElement('div');
        resultDiv.textContent = resultText;

       
        let emptyDiv = document.getElementById('result');
        emptyDiv.innerHTML = ''; 
        emptyDiv.appendChild(resultDiv);
    });
});

//1.2.5
function validateForm() {

    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let meal = document.querySelector('input[name="meal"]:checked');
    let dishes = document.querySelectorAll('input[name="dish"]:checked');
    let comment = document.getElementById('comment').value.trim();

    if (!username || !email || !meal || dishes.length === 0 || !comment) {
        alert('Будь ласка, заповніть усі поля форми.');
        return false;
    }
    return true;
}
