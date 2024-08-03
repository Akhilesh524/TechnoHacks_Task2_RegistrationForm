document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(function(element) {
        element.style.display = 'none';
    });

    // Validate username
    const username = document.getElementById('username').value;
    if (username.length < 3 || username.length > 15) {
        isValid = false;
        document.getElementById('usernameError').innerText = 'Username must be between 3 and 15 characters';
        document.getElementById('usernameError').style.display = 'block';
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        isValid = false;
        document.getElementById('emailError').innerText = 'Invalid email address';
        document.getElementById('emailError').style.display = 'block';
    }

    // Validate password
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        isValid = false;
        document.getElementById('passwordError').innerText = 'Password must be at least 6 characters';
        document.getElementById('passwordError').style.display = 'block';
    }

    // Validate confirm password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        isValid = false;
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match';
        document.getElementById('confirmPasswordError').style.display = 'block';
    }

    if (isValid) {
        alert('Registration successful!');
        // You can submit the form data to the server here
    }
});

