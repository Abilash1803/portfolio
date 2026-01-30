// Simple script to add slight interactivity
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links is handled by CSS, 
    // but we can add an active class to navbar links on scroll if needed in V2.
    
    console.log('Portfolio Loaded');

    // Add a simple reveal on scroll effect
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select elements to animate
    const elements = document.querySelectorAll('.project-card, .section-title, .about-text');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Helper to trigger the animation
    document.addEventListener('scroll', () => {
       elements.forEach(el => {
           if(el.classList.contains('visible')){
               el.style.opacity = '1';
               el.style.transform = 'translateY(0)';
           }
       })
    });
});
