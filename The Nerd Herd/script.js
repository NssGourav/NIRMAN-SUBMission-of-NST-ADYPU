const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
// Get a reference to the button element with the class 'adu'
const reloadButton = document.querySelector('.adu');

// Add an event listener to the button
reloadButton.addEventListener('click', () => {
  // Reload the page
  window.location.reload();
});