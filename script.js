// Get the cursor-dot element
const dot = document.querySelector('.cursor-dot');

// Track the mouse movement and update the position of the dot
document.addEventListener('mousemove', (event) => {
    dot.style.left = `${event.clientX}px`;
    dot.style.top = `${event.clientY}px`;
});
