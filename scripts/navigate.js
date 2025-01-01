<!-- Скрипт navigate.js -->
let isOnDebugPage = window.location.pathname.endsWith("debug.html");

const navigateToDebug = (refreshOnly = false) => {
    if (isOnDebugPage) {
        location.reload();
        return;
    }

    const password = prompt("Введите пароль для доступа к странице отладки:");
    if (password === "0000") {
        window.location.href = "debug.html";
    } else {
        alert("Неверный пароль!");
    }
};
