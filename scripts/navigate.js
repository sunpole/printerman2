<!-- Скрипт navigate.js -->
let isOnDebugPage = false;

const navigateToDebug = (refreshOnly = false) => {
    if (refreshOnly && isOnDebugPage) {
        location.reload();
        return;
    }

    if (!isOnDebugPage) {
        const password = prompt("Введите пароль для доступа к странице отладки:");
        if (password === "0000") {
            isOnDebugPage = true;
            window.location.href = "debug.html";
        } else {
            alert("Неверный пароль!");
        }
    }
};
