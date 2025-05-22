// Set copyright year
document.getElementById('copyright-year').textContent = new Date().getFullYear();

// Set last modified date
document.getElementById('last-modified').textContent = document.lastModified;

// Mobile menu toggle
document.getElementById('menu-button').addEventListener('click', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
});