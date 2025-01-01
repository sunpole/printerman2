<!-- Скрипт navigate.js -->
const navigateToDebug = () => {
    const password = prompt("Введите пароль для доступа к странице отладки:");
    if (password === "0000") {
        window.location.href = "debug.html";
    } else {
        alert("Неверный пароль!");
    }
};
