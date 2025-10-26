// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select the form using its ID
    const form = document.getElementById('registration-form');

    // Select the feedback div using its ID
    const feedbackDiv = document.getElementById('form-feedback');

    // (Later, you'll add form validation and submission logic here)
});

// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select the form and feedback div
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Add a submit event listener to the form
    form.addEventListener('submit', function(event) {
        // Prevent form from submitting to the server
        event.preventDefault();

        // Retrieve and trim user input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation status and messages array
        let isValid = true;
        let messages = [];

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Make feedbackDiv visible
        feedbackDiv.style.display = "block";

        // Display feedback based on validation result
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green for success
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; // Red for error
        }
    });
});
