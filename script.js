const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm-password");


function validatePassword () {
    const password = passwordField.value;
    const confirmPassword = confirmPasswordField.value;

    if (password !== confirmPassword) {
        confirmPasswordField.setCustomValidity("Passwords do not match!");
    } else {
        confirmPasswordField.setCustomValidity("");
    }
}

confirmPasswordField.addEventListener("input", validatePassword);

