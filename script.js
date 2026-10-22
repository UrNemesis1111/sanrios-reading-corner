document.addEventListener('DOMContentLoaded', () => {

    // 1. LIGHT / DARK MODE WITH LOCALSTORAGE MEMORY
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Check saved theme on load
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeToggleBtn) themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
        if (themeToggleBtn) themeToggleBtn.textContent = '🌙 Dark Mode';
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                themeToggleBtn.textContent = '☀️ Light Mode';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggleBtn.textContent = '🌙 Dark Mode';
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // 2. INTERACTIVE LIKE BUTTON
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const heartIcon = button.querySelector('.heart-icon');
            const likeCountSpan = button.querySelector('.like-count');
            let currentLikes = parseInt(likeCountSpan.textContent);

            if (button.classList.contains('liked')) {
                button.classList.remove('liked');
                heartIcon.textContent = '🤍';
                likeCountSpan.textContent = currentLikes - 1;
            } else {
                button.classList.add('liked');
                heartIcon.textContent = '💖';
                likeCountSpan.textContent = currentLikes + 1;
            }
        });
    });

    // 3. GENRE FILTERING (FILTERS ALL BOOK CARDS)
    const filterButtons = document.querySelectorAll('.filter-button');
    const bookCards = document.querySelectorAll('.book-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active state from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const selectedGenre = btn.getAttribute('data-genre');

            bookCards.forEach(card => {
                const cardGenre = card.getAttribute('data-genre');
                if (selectedGenre === 'all' || cardGenre === selectedGenre) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 4. READ MORE / READ LESS FOR SYNOPSIS
    const readMoreButtons = document.querySelectorAll(".read-more-btn");
    readMoreButtons.forEach(button => {
        button.addEventListener("click", () => {
            const synopsis = button.parentElement;
            const moreText = synopsis.querySelector(".more-text");

            if (moreText) {
                if (moreText.classList.contains("show")) {
                    moreText.classList.remove("show");
                    button.textContent = "... Read More";
                } else {
                    moreText.classList.add("show");
                    button.textContent = " Read Less";
                }
            }
        });
    });

});