document.addEventListener("DOMContentLoaded", function() {
    const numberContainer = document.getElementById('number-container');
    const phoneNumberInput = document.getElementById('phone-number');

    for (let i = 0; i <= 10; i++) {
        let number = document.createElement('div');
        number.classList.add('number');
        number.textContent = i;
        number.style.left = `${Math.random() * 85}vw`;
        number.style.top = `${Math.random() * 85}vh`;
        numberContainer.appendChild(number);

        number.addEventListener('click', function() {
            if (phoneNumberInput.value.length < 15) {
                phoneNumberInput.value += i;
            }
        });

        moveNumber(number);
    }

    function moveNumber(number) {
        setInterval(() => {
            number.style.left = `${Math.random() * 85}vw`;
            number.style.top = `${Math.random() * 85}vh`;
        }, 2000);
    }
});
