// Simple JavaScript for a dynamic message on the website
document.addEventListener("DOMContentLoaded", function() {
    const dynamicElement = document.createElement('p');
    dynamicElement.textContent = "Welcome to my portfolio!";
    document.body.insertBefore(dynamicElement, document.body.firstChild);
});
