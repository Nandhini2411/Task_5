// Create and append the login form dynamically
function createLoginForm() {
    const formContainer = document.createElement("div");
    formContainer.style.display = "flex";
    formContainer.style.justifyContent = "center";
    formContainer.style.alignItems = "center";
    formContainer.style.height = "100vh";
    formContainer.style.background = "linear-gradient(to right, #ff7e5f, #feb47b)";
    
    const form = document.createElement("form");
    form.style.padding = "20px";
    form.style.background = "white";
    form.style.borderRadius = "15px";
    form.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.2)";
    form.style.display = "flex";
    form.style.flexDirection = "column";
    form.style.width = "320px";
    
    // Heading
    const heading = document.createElement("h2");
    heading.innerText = "Login";
    heading.style.textAlign = "center";
    heading.style.color = "#333";
    heading.style.marginBottom = "15px";
    form.appendChild(heading);
    
    // Email Label and Input
    const emailLabel = document.createElement("label");
    emailLabel.innerText = "Email:";
    emailLabel.style.color = "#555";
    form.appendChild(emailLabel);
    
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.placeholder = "Enter your email";
    emailInput.style.padding = "12px";
    emailInput.style.margin = "5px 0";
    emailInput.style.border = "2px solid #ff7e5f";
    emailInput.style.borderRadius = "8px";
    emailInput.style.background = "#fceee9";
    emailInput.style.outline = "none";
    emailInput.style.transition = "0.3s";
    emailInput.addEventListener("focus", () => {
        emailInput.style.borderColor = "#feb47b";
        emailInput.style.background = "#fff5f0";
    });
    form.appendChild(emailInput);
    
    // Password Label and Input
    const passwordLabel = document.createElement("label");
    passwordLabel.innerText = "Password:";
    passwordLabel.style.color = "#555";
    form.appendChild(passwordLabel);
    
    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.placeholder = "Enter your password";
    passwordInput.style.padding = "12px";
    passwordInput.style.margin = "5px 0";
    passwordInput.style.border = "2px solid #ff7e5f";
    passwordInput.style.borderRadius = "8px";
    passwordInput.style.background = "#fceee9";
    passwordInput.style.outline = "none";
    passwordInput.style.transition = "0.3s";
    passwordInput.addEventListener("focus", () => {
        passwordInput.style.borderColor = "#feb47b";
        passwordInput.style.background = "#fff5f0";
    });
    form.appendChild(passwordInput);
    
    // Login Button
    const loginButton = document.createElement("button");
    loginButton.innerText = "Login";
    loginButton.style.padding = "12px";
    loginButton.style.marginTop = "10px";
    loginButton.style.background = "#ff7e5f";
    loginButton.style.color = "white";
    loginButton.style.border = "none";
    loginButton.style.borderRadius = "8px";
    loginButton.style.cursor = "pointer";
    loginButton.style.fontSize = "16px";
    loginButton.style.transition = "0.3s";
    
    loginButton.addEventListener("mouseover", () => {
        loginButton.style.background = "#feb47b";
    });
    loginButton.addEventListener("mouseout", () => {
        loginButton.style.background = "#ff7e5f";
    });
    
    // Form Submission Handling
    loginButton.addEventListener("click", (event) => {
        event.preventDefault();
        if (emailInput.value === "" || passwordInput.value === "") {
            alert("Please fill in both fields.");
            return;
        }
        alert(`Email: ${emailInput.value}\nPassword: ${passwordInput.value}`);
    });
    
    form.appendChild(loginButton);
    formContainer.appendChild(form);
    document.body.appendChild(formContainer);
}

// Load the form when the page is ready
document.addEventListener("DOMContentLoaded", createLoginForm);