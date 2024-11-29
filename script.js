document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-container input');
    const searchDropdown = document.querySelector('.search-dropdown');

    searchInput.addEventListener('focus', function () {
        searchDropdown.style.display = 'block';
    });

    searchInput.addEventListener('blur', function () {
        setTimeout(() => {
            searchDropdown.style.display = 'none';
        }, 200); // Delay to allow click on dropdown
    });

    searchDropdown.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            searchInput.value = event.target.textContent;
            searchDropdown.style.display = 'none';
        }
    });
});
