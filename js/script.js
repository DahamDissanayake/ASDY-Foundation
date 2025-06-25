// Sticky Header 
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header') || document.querySelector('.hp-header');
    
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});