// Toggle between dark and light mode

const toggleIcon = document.getElementById('toggleIcon');
let toggleClass = document.body.classList.value;

toggleIcon.addEventListener('click', function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains('dark-mode')) {
        toggleIcon.src = './assets/images/sun.png';
    } else {
        toggleIcon.src = './assets/images/moon.png';
    }
})