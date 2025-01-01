<!-- Скрипт navigate.js -->
let isOnDebugPage = window.location.pathname.endsWith("debug.html");

const navigateToDebug = () => {
    if (isOnDebugPage) {
        // Если мы уже на странице отладки, просто обновляем её
        location.reload();
        return;
    }

    // Если мы не на странице отладки, запрашиваем пароль
    const password = prompt("Введите пароль для доступа к странице отладки:");
    if (password === "0000") {
        window.location.href = "debug.html";
    } else {
        alert("Неверный пароль!");
    }
};
