// 🌗 Theme Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 🎯 Button Counter Game
let score = 0;
document.getElementById("scoreBtn").addEventListener("click", () => {
  score++;
  document.getElementById("score").textContent = score;
});

// ❓ FAQ Toggle
const questions = document.querySelectorAll(".question");
questions.forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// 📋 Form Validation
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  // Name Validation
  const name = document.getElementById("name").value.trim();
  const nameError = document.getElementById("nameError");
  if (!/^[A-Za-z\s]+$/.test(name)) {
    nameError.textContent = "Name must contain only letters.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email Validation
  const email = document.getElementById("email").value.trim();
  const emailError = document.getElementById("emailError");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password Validation
  const password = document.getElementById("password").value;
  const passwordError = document.getElementById("passwordError");
  const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
  if (!passRegex.test(password)) {
    passwordError.textContent = "Password must be 6+ chars, include uppercase, number, and symbol.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Confirm Password
  const confirmPassword = document.getElementById("confirmPassword").value;
  const confirmError = document.getElementById("confirmError");
  if (confirmPassword !== password) {
    confirmError.textContent = "Passwords do not match.";
    valid = false;
  } else {
    confirmError.textContent = "";
  }

  // Success Message
  const formSuccess = document.getElementById("formSuccess");
  if (valid) {
    formSuccess.textContent = "Form submitted successfully!";
  } else {
    formSuccess.textContent = "";
  }
});