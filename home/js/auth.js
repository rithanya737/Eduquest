/* ===========================================================
   EduQuest — Login / Register client-side validation
   No backend, no account data is stored anywhere — the only
   thing kept in localStorage is a plain "logged in" flag
   (eduquest_loggedIn), used purely to hide the Login/Register
   buttons in the header once someone has logged in or
   registered. See site-auth.js.
   =========================================================== */

document.addEventListener("DOMContentLoaded", function () {
    setupPasswordToggles();

    const loginForm = document.getElementById("login-form");
    if (loginForm) setupLoginForm(loginForm);

    const registerForm = document.getElementById("register-form");
    if (registerForm) setupRegisterForm(registerForm);

    const forgotLink = document.getElementById("forgot-link");
    if (forgotLink) {
        forgotLink.addEventListener("click", function (e) {
            e.preventDefault();
            const status = document.getElementById("login-status");
            if (status) {
                showStatus(status, "Password recovery isn't available in this demo — please check with your instructor.", "error");
            }
        });
    }
});

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_PATTERN = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

function setupPasswordToggles() {
    document.querySelectorAll(".toggle-password").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const input = document.getElementById(btn.dataset.target);
            if (!input) return;
            const willShow = input.type === "password";
            input.type = willShow ? "text" : "password";
            btn.textContent = willShow ? "🙈" : "👁️";
            btn.setAttribute("aria-label", willShow ? "Hide password" : "Show password");
        });
    });
}

function markLoggedIn() {
    try {
        localStorage.setItem("eduquest_loggedIn", "true");
    } catch (e) {}
}

function setFieldError(input, errorEl, message) {
    if (message) {
        input.classList.add("invalid");
        if (errorEl) errorEl.textContent = message;
        return false;
    }
    input.classList.remove("invalid");
    if (errorEl) errorEl.textContent = "";
    return true;
}

function showStatus(el, message, type) {
    if (!el) return;
    el.textContent = message;
    el.classList.remove("success", "error");
    if (type) el.classList.add(type);
}

function clearOnInput(inputs) {
    inputs.forEach(function (input) {
        input.addEventListener("input", function () {
            input.classList.remove("invalid");
        });
    });
}

function setupLoginForm(form) {
    const email = document.getElementById("login-email");
    const emailError = document.getElementById("login-email-error");
    const password = document.getElementById("login-password");
    const passwordError = document.getElementById("login-password-error");
    const status = document.getElementById("login-status");
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let valid = true;

        if (!email.value.trim()) {
            valid = setFieldError(email, emailError, "Enter your email address.") && valid;
        } else if (!EMAIL_PATTERN.test(email.value.trim())) {
            valid = setFieldError(email, emailError, "Enter a valid email address.") && valid;
        } else {
            setFieldError(email, emailError, "");
        }

        if (!password.value) {
            valid = setFieldError(password, passwordError, "Enter your password.") && valid;
        } else if (password.value.length < 6) {
            valid = setFieldError(password, passwordError, "Password must be at least 6 characters.") && valid;
        } else {
            setFieldError(password, passwordError, "");
        }

        if (!valid) {
            showStatus(status, "Please fix the errors above.", "error");
            return;
        }

        showStatus(status, "Logging you in…", "success");
        submitBtn.disabled = true;
        markLoggedIn();
        setTimeout(function () {
            window.location.href = "index.html";
        }, 900);
    });

    clearOnInput([email, password]);
}

function setupRegisterForm(form) {
    const name = document.getElementById("reg-name");
    const nameError = document.getElementById("reg-name-error");
    const email = document.getElementById("reg-email");
    const emailError = document.getElementById("reg-email-error");
    const password = document.getElementById("reg-password");
    const passwordError = document.getElementById("reg-password-error");
    const confirm = document.getElementById("reg-confirm");
    const confirmError = document.getElementById("reg-confirm-error");
    const terms = document.getElementById("reg-terms");
    const termsError = document.getElementById("reg-terms-error");
    const status = document.getElementById("register-status");
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let valid = true;

        if (name.value.trim().length < 2) {
            valid = setFieldError(name, nameError, "Enter your full name.") && valid;
        } else {
            setFieldError(name, nameError, "");
        }

        if (!email.value.trim()) {
            valid = setFieldError(email, emailError, "Enter your email address.") && valid;
        } else if (!EMAIL_PATTERN.test(email.value.trim())) {
            valid = setFieldError(email, emailError, "Enter a valid email address.") && valid;
        } else {
            setFieldError(email, emailError, "");
        }

        if (!password.value) {
            valid = setFieldError(password, passwordError, "Create a password.") && valid;
        } else if (!PASSWORD_PATTERN.test(password.value)) {
            valid = setFieldError(password, passwordError, "At least 8 characters, with a letter and a number.") && valid;
        } else {
            setFieldError(password, passwordError, "");
        }

        if (!confirm.value) {
            valid = setFieldError(confirm, confirmError, "Confirm your password.") && valid;
        } else if (confirm.value !== password.value) {
            valid = setFieldError(confirm, confirmError, "Passwords don't match.") && valid;
        } else {
            setFieldError(confirm, confirmError, "");
        }

        if (!terms.checked) {
            termsError.textContent = "You need to agree before creating an account.";
            valid = false;
        } else {
            termsError.textContent = "";
        }

        if (!valid) {
            showStatus(status, "Please fix the errors above.", "error");
            return;
        }

        showStatus(status, "Creating your account…", "success");
        submitBtn.disabled = true;
        markLoggedIn();
        setTimeout(function () {
            window.location.href = "index.html";
        }, 900);
    });

    clearOnInput([name, email, password, confirm]);
    terms.addEventListener("change", function () {
        if (terms.checked) termsError.textContent = "";
    });
}
