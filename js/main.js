// Smooth scroll animations
document.addEventListener('DOMContentLoaded', function() {
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.style.getPropertyValue('--progress');
                entry.target.style.width = progress;
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        bar.style.width = '0';
        skillObserver.observe(bar);
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add active state to navigation on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Parallax effect for gradient orbs
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const orbs = document.querySelectorAll('.gradient-orb');
        
        orbs.forEach((orb, index) => {
            const speed = 0.5 + (index * 0.2);
            orb.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Add hover effect to cards
    const cards = document.querySelectorAll('.expertise-card, .stat-card, .skill-category');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Typing effect for hero title (optional enhancement)
    const observeHero = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.3 });
    
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        observeHero.observe(heroText);
    }
    
    // Performance: Reduce animations on mobile
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
        document.querySelectorAll('.floating-card').forEach(card => {
            card.style.animation = 'none';
        });
    }
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    console.log('Portfolio de Angela Rocío Rico Ortega - Inicializado ✨');
});

// Utility function for smooth animations
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Animate stats on scroll
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const targetValue = parseInt(statNumber.textContent);
            if (!isNaN(targetValue)) {
                animateValue(statNumber, 0, targetValue, 2000);
            }
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(card => {
    statsObserver.observe(card);
});