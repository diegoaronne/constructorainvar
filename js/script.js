// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Functionality
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    function toggleMobileMenu() {
        mobileMenu.classList.toggle('hidden');
        // Prevent scrolling when menu is open
        document.body.classList.toggle('overflow-hidden');
        // Update aria-expanded for accessibility
        if (mobileMenuBtn) {
            const isOpen = !mobileMenu.classList.contains('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        }
    }

    if(mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    if(mobileMenuCloseBtn) {
        mobileMenuCloseBtn.addEventListener('click', toggleMobileMenu);
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMobileMenu);
    });

    // 2. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 3. Scroll Reveal Animations (Fade In Up)
    const revealElements = document.querySelectorAll('.reveal');

    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.85;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('active');
            }
        });
    }

    // Initial check and on scroll
    checkReveal();
    window.addEventListener('scroll', checkReveal);

    // 4. Navbar Background Change on Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow-md', 'py-1');
            header.classList.remove('py-2');
        } else {
            header.classList.remove('shadow-md', 'py-1');
            header.classList.add('py-2');
        }
    });
});
