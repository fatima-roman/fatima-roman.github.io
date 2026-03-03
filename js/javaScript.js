const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursorDot.style.left = `${e.clientX}px`;
    cursorDot.style.top = `${e.clientY}px`;
});

// Suavizar el movimiento del outline
function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;
    
    cursorOutline.style.left = `${outlineX}px`;
    cursorOutline.style.top = `${outlineY}px`;
    
    requestAnimationFrame(animateOutline);
}
animateOutline();

// Efectos hover en elementos interactivos
const hoverElements = document.querySelectorAll('a, button, .badge, .project');

hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
    });
    
    el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
    });
});