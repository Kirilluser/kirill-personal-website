document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burger-menu");
    const sidebar = document.getElementById("sidebar");

    // Toggle sidebar visibility
    burgerMenu.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });

    // Close sidebar when clicking outside
    document.addEventListener("click", (e) => {
        if (!sidebar.contains(e.target) && !burgerMenu.contains(e.target)) {
            sidebar.classList.remove("open");
        }
    });
});
