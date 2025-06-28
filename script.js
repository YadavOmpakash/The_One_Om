
// ✅ Real-time Clock
setInterval(() => {
  const clock = document.getElementById("clock");
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}, 1000);

// ✅ Add Name Function
function addName() {
  const name = document.getElementById("nameInput").value.trim();
  const display = document.getElementById("displayName");
  if (name) {
    display.textContent = `Welcome, ${name}!`;
  } else {
    display.textContent = "Please enter your name.";
  }
}

// ✅ Theme Toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// ✅ Load saved theme
window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
};

