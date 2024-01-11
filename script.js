document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const toggleButton = document.getElementById('toggleDarkMode');

    toggleButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        // Save light or dark mode preference in localStorage
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', isDarkMode.toString());
    });

    // Check dark mode preference stored in localStorage
    const storedDarkMode = localStorage.getItem('dark-mode');
    if (storedDarkMode && storedDarkMode === 'true') {
        document.body.classList.add('dark-mode');
    };
});