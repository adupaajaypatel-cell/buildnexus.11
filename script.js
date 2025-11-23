document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const messageOutput = document.getElementById('message-output');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent reload

        const emailInput = document.getElementById('email').value;

        if(emailInput) {
            // Success simulation
            messageOutput.style.color = "green";
            messageOutput.textContent = "Thank you! We will contact you at " + emailInput;
            document.getElementById('email').value = ''; // Clear input
        } else {
            messageOutput.style.color = "red";
            messageOutput.textContent = "Please enter a valid email.";
        }
    });
});document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const messageOutput = document.getElementById('message-output');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent reload

        const emailInput = document.getElementById('email').value;

        if(emailInput) {
            // Success simulation
            messageOutput.style.color = "green";
            messageOutput.textContent = "Thank you! We will contact you at " + emailInput;
            document.getElementById('email').value = ''; // Clear input
        } else {
            messageOutput.style.color = "red";
            messageOutput.textContent = "Please enter a valid email.";
        }
    });
});