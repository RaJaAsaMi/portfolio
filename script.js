// Toggle mobile menu
const hamburger = document.getElementById('hamburger');
const cross = document.getElementById('cross');
const navbar = document.querySelector('.navbar');

// Function to toggle menu visibility
const toggleMenu = () => {
    navbar.classList.toggle('active');
    hamburger.style.display = navbar.classList.contains('active') ? 'none' : 'block';
    cross.style.display = navbar.classList.contains('active') ? 'block' : 'none';
};

// Event listeners for hamburger and cross icons
if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
}
if (cross) {
    cross.addEventListener('click', toggleMenu);
}

// Hide menu when a link is clicked
const links = document.querySelectorAll('.navbar a');
links.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) { 
            toggleMenu();
        }
    });
});

// Optional: Handle page refresh to hide the menu on larger screens
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        navbar.classList.remove('active'); 
        hamburger.style.display = 'none'; 
        cross.style.display = 'none'; 
    }
});

// Typed.js Initialization
const options = {
    strings: ["Web Developer", "MERN Stack Developer", "Software Engineer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
};

const typed = new Typed(".text", options);

// Function to show error icon
function showErrorIcon() {
    const errorIcon = document.querySelector('.error-icon');
    if (errorIcon) { // Ensure the error icon exists
        errorIcon.classList.add('show');
    }
}


setTimeout(showErrorIcon, 3000);

// Set the current year in the footer
const yearSpan = document.getElementById('year');
if (yearSpan) { // Check if the year span exists
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
}

document.getElementById("year").textContent = new Date().getFullYear();