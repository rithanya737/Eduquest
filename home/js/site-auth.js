/* ===========================================================
   EduQuest — shared header login state
   Reads the "eduquest_loggedIn" flag (set by js/auth.js on a
   successful login or register) and, if present, swaps the
   header's Login/Register buttons for a single Logout link.
   No account data lives here — just a UI flag.
   =========================================================== */

document.addEventListener("DOMContentLoaded", function () {
    let loggedIn = false;
    try {
        loggedIn = localStorage.getItem("eduquest_loggedIn") === "true";
    } catch (e) {}

    if (!loggedIn) return;

    const account = document.getElementById("account-area") || document.querySelector(".account");
    if (!account) return;

    account.innerHTML = '<a href="#" class="account-login" id="logout-link">Logout</a>';

    const logoutLink = document.getElementById("logout-link");
    if (logoutLink) {
        logoutLink.addEventListener("click", function (e) {
            e.preventDefault();
            try {
                localStorage.removeItem("eduquest_loggedIn");
            } catch (err) {}
            window.location.href = "index.html";
        });
    }
});
