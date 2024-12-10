document.getElementById("menu-icon").addEventListener("click", function() {
    document.getElementById("navbar-links").classList.toggle("active");
});
// Получаем ссылки и элементы
const contactLink = document.getElementById('contact-link');
const contactInfo = document.getElementById('contact-info');

// Обработчик клика на контактную ссылку
contactLink.addEventListener('click', function () {
    // Переключаем видимость блока с контактной информацией
    if (contactInfo.style.display === 'block') {
        contactInfo.style.display = 'none';
    } else {
        contactInfo.style.display = 'block';
    }
});

// Закрытие окна при клике вне элемента
document.addEventListener('click', function (event) {
    if (!contactLink.contains(event.target) && !contactInfo.contains(event.target)) {
        contactInfo.style.display = 'none';
    }
});
