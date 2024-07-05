document.addEventListener("DOMContentLoaded", function() {
    const numberContainer = document.getElementById('number-container');
    const phoneNumberInput = document.getElementById('phone-number');
    const resetButton = document.getElementById('reset-button');
    const submitButton = document.getElementById('submit-button');

    for (let i = 0; i <= 8; i++) {
        let number = document.createElement('div');
        number.classList.add('number');
        number.textContent = i;
        number.style.left = `${Math.random() * 95}vw`;
        number.style.top = `${Math.random() * 97}vh`;
        numberContainer.appendChild(number);

        number.addEventListener('click', function() {
            if (phoneNumberInput.value.length < 10) {
                phoneNumberInput.value += i;
            }
        });

        moveNumber(number);
        toggleVisibility(number);
    }

    function moveNumber(number) {
        setInterval(() => {
            number.style.left = `${Math.random() * 95}vw`;
            number.style.top = `${Math.random() * 96}vh`;
        }, 3000);
    }

    function toggleVisibility(number) {
        setInterval(() => {
            number.classList.toggle('hidden');
        }, 2500);
    }

    resetButton.addEventListener('click', function() {
        phoneNumberInput.value = '';
    });

    submitButton.addEventListener('click', function() {
        alert(`Phone Number Submitted: ${phoneNumberInput.value}`);
        phoneNumberInput.value = '';
    });
});
