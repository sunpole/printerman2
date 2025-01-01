// Получаем элементы
const characters = document.querySelectorAll('.character');
const modal = document.createElement('div');
const overlay = document.createElement('div');

// Добавляем классы модального окна и затемнения
modal.classList.add('modal');
overlay.classList.add('overlay');

// Структура модального окна
modal.innerHTML = `
    <button class="close-btn">&times;</button>
    <img class="modal-image" src="" alt="">
    <div class="description"></div>
    <div class="controls">
        <button class="prev-btn">&larr; Предыдущий</button>
        <button class="select-btn">Выбрать</button>
        <button class="next-btn">Следующий &rarr;</button>
    </div>
`;

// Добавляем модальное окно и затемнение в DOM
document.body.appendChild(modal);
document.body.appendChild(overlay);

// Переменные для текущего персонажа
let currentCharacterIndex = 0;

// Функция обновления контента в модальном окне
function updateModalContent(index) {
    const character = characters[index];
    const image = character.querySelector('img').src;
    const description = character.querySelector('p:last-child').textContent;

    modal.querySelector('.modal-image').src = image;
    modal.querySelector('.description').textContent = description;
}

// Функция открытия модального окна
function openModal(index) {
    currentCharacterIndex = index;
    updateModalContent(index);
    modal.classList.add('active');
    overlay.classList.add('active');
}

// Функция закрытия модального окна
function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

// Слушатели событий на персонажах
characters.forEach((character, index) => {
    character.addEventListener('click', () => openModal(index));
});

// Слушатели событий на кнопках модального окна
modal.querySelector('.close-btn').addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

modal.querySelector('.prev-btn').addEventListener('click', () => {
    currentCharacterIndex =
        (currentCharacterIndex - 1 + characters.length) % characters.length;
    updateModalContent(currentCharacterIndex);
});

modal.querySelector('.next-btn').addEventListener('click', () => {
    currentCharacterIndex = (currentCharacterIndex + 1) % characters.length;
    updateModalContent(currentCharacterIndex);
});

modal.querySelector('.select-btn').addEventListener('click', () => {
    alert(`Вы выбрали персонажа: ${characters[currentCharacterIndex].dataset.name}`);
    closeModal();
});
