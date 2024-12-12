document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const searchQuery = event.target.search.value.toLowerCase();
    const books = document.querySelectorAll('.book-card');

    books.forEach(book => {
        const title = book.querySelector('h3').textContent.toLowerCase();
        const description = book.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchQuery) || description.includes(searchQuery)) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
});