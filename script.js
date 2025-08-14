const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
let isLightMode = false;

function toggleTheme() {
    isLightMode = !isLightMode;

    if (isLightMode) {
        body.classList.add('light-mode');
        themeToggle.src = 'sun.svg'; 
    } else {
        body.classList.remove('light-mode');
        themeToggle.src = 'moon.svg'; 
    }
}

themeToggle.addEventListener('click', toggleTheme);
