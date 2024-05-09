const loginForm = document.querySelector('#login-form');
const signupForm = document.querySelector('#signup-form');

// Add event listener for login
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.querySelector('#login-email').value;
  const password = document.querySelector('#login-password').value;

  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Redirect to dashboard or wherever you want
        window.location.href = '/dashboard';
      } else {
        // Show error message
        alert('Invalid credentials');
      }
    });
});

// Add event listener for signup
signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.querySelector('#signup-email').value;
  const password = document.querySelector('#signup-password').value;

  fetch('/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Redirect to dashboard or wherever you want
        window.location.href = '/dashboard';
      } else {
        // Show error message
        alert('Signup failed');
      }
    });
});