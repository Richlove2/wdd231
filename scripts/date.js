document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Update last modified date
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Updated: ${lastModified}`;
});