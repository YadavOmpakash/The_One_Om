// Clock
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById('clock').textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

// Add Name Function
function addName() {
  const nameInput = document.getElementById('nameInput').value;
  const displayName = document.getElementById('displayName');
  if (nameInput.trim() !== '') {
    displayName.textContent = `Hello, ${nameInput}! 👋`;
  } else {
    displayName.textContent = '';
  }
}

// Dark Mode Toggle
const toggleBtn = document.getElementById('toggleTheme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

