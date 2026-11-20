
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const errorMessage = document.getElementById("errorMessage");

    // DEMO LOGIN CREDENTIALS
    const correctUsername = "student";
    const correctPassword = "12345";

    if (
        username === correctUsername &&
        password === correctPassword
    ) {
        sessionStorage.setItem("isLoggedIn", "true");

        window.location.href = "home.html";
    } else {
        errorMessage.textContent =
            "Invalid username or password. Please try again.";
    }
});


const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", function(event) {
        event.preventDefault();

        sessionStorage.removeItem("isLoggedIn");

        window.location.replace("login.html");
    });
}
