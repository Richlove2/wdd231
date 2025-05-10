document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const navList = document.querySelector('nav ul');
    
    // Toggle mobile menu
    menuButton.addEventListener('click', function() {
        navList.classList.toggle('show');
        menuButton.textContent = navList.classList.contains('show') ? '✕' : '☰';
        menuButton.setAttribute('aria-expanded', navList.classList.contains('show'));
    });
    
    // Set active link based on current page
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.parentElement.classList.add('active');
        }
    });
    
    // Close menu when clicking on a link (for mobile)
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            if (navList.classList.contains('show')) {
                navList.classList.remove('show');
                menuButton.textContent = '☰';
                menuButton.setAttribute('aria-expanded', 'false');
            }
        });
    });
});