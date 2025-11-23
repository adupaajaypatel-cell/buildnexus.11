document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const message = document.getElementById('message-output');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop page reload

        const email = document.getElementById('email').value;

        if(email) {
            // Success State
            message.style.color = '#28a745'; // Green
            message.textContent = Success! You've joined Build Nexus.;
            form.reset(); // Clear the input
        } else {
            // Error State
            message.style.color = '#dc3545'; // Red
            message.textContent = 'Please enter a valid email.';
        }
    });
});