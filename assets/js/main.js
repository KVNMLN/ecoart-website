// EcoArt Website - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navLinks && navLinks.classList.contains('active')) {
            if (!event.target.closest('.mobile-menu-toggle') && !event.target.closest('.nav-links')) {
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        }
    });
    
    // Add animation classes on scroll
    const animateElements = document.querySelectorAll('.feature-card, .principle-card');
    
    function checkScroll() {
        animateElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.9) {
                el.classList.add('fade-in');
            }
        });
    }
    
    // Run once to check initial state
    checkScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', checkScroll);
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                e.preventDefault();
                
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL
                history.pushState(null, null, this.getAttribute('href'));
            }
        });
    });
    
    // Cloud animation with variables
    const clouds = document.querySelectorAll('.cloud');
    
    // Randomize initial cloud positions
    clouds.forEach(cloud => {
        const randomDelay = Math.random() * 15; // Random delay up to 15 seconds
        cloud.style.animationDelay = `-${randomDelay}s`;
    });
    
    // Theme toggle if added in future
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
    
    // Highlight current page in navigation
    const currentLocation = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (currentLocation.endsWith(href)) {
            item.classList.add('active');
        } else if (currentLocation.endsWith('/') && href === 'index.html') {
            item.classList.add('active');
        }
    });
}); 