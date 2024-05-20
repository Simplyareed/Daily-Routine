document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('#login-form');
  const signupForm = document.querySelector('#signup-form');

  if (loginForm) {
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
            window.location.href = '/dashboard';
          } else {
            alert('Invalid credentials');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('An error occurred. Please try again.');
        });
    });
  } else {
    console.error('Login form not found');
  }

  if (signupForm) {
    signupForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const email = document.querySelector('#signup-email').value;
      const password = document.querySelector('#signup-password').value;
      const name = document.querySelector('#name-signup').value;

      console.log(email + ' Stored email');
      console.log(password + ' Stored pw');

      fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data) {
            window.location.href = '/dashboard';
          } else {
            alert('Signup failed');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('An error occurred. Please try again.');
        });
    });
  } else {
    console.error('Signup form not found');
  }
});
