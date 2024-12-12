// Получаем элементы
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');

// Добавляем обработчик событий для кнопки
menuToggle.addEventListener('click', () => {
    // Добавляем или удаляем класс "active", чтобы показать или скрыть боковую панель
    sidebar.classList.toggle('active');
});
