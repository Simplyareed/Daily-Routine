// web APIs ex: addEventListeners, document.querySelector, ...etc.
// Select logout button
const logoutButton = document.querySelector('#logout-button');

// Add event listener for logout
logoutButton.addEventListener('click', (event) => {
  event.preventDefault();

  fetch('/api/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Redirect to login page or wherever you want
        window.location.href = '/login';
      } else {
        // Show error message
        alert('Logout failed');
      }
    });
});