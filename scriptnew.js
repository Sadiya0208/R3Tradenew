
    document.addEventListener("DOMContentLoaded", function() {
        const menuToggle = document.querySelector(".menu-toggle");
        const navMenu = document.querySelector("nav ul");

        menuToggle.addEventListener("click", function() {
            navMenu.classList.toggle("show");
        });
    });

    menuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("show");
        menuToggle.style.backgroundColor = navMenu.classList.contains("show") 
            ? "#4CAF50" // Background when menu is open
            : "#ff9800"; // Background when menu is closed
    });
    


const ball = document.querySelector('.ball');

document.addEventListener('mousemove', (e) => {
    // Use pageX and pageY to account for scrolling
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    // Move the ball with the cursor, adjusting for its size
    ball.style.transform = `translate(${mouseX - 25}px, ${mouseY - 25}px)`; // Adjust based on ball size (assuming 50px width/height)
});
