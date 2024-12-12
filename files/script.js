document.getElementById("menu-icon").addEventListener("click", function() {
    document.getElementById("navbar-links").classList.toggle("active");
});
const contactLink = document.getElementById('contact-link');
const contactInfo = document.getElementById('contact-info');
contactLink.addEventListener('click', function () {
    if (contactInfo.style.display === 'block') {
        contactInfo.style.display = 'none';
    } else {
        contactInfo.style.display = 'block';
    }
});

document.addEventListener('click', function (event) {
    if (!contactLink.contains(event.target) && !contactInfo.contains(event.target)) {
        contactInfo.style.display = 'none';
    }
});
