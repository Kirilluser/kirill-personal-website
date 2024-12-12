
const bookItems = document.querySelectorAll('.book-item');
bookItems.forEach(item => {
    item.addEventListener('click', () => {
        bookItems.forEach(i => i.classList.remove('active')); // Убираем подсветку у всех
        item.classList.add('active'); // Добавляем подсветку для текущей
    });
});
