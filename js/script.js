// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initMobileMenu();
    initScrollAnimations();
    initSmoothScrolling();
    initWhatsAppPhone();
    initContactForm();
    initServiceButtons();
    initPricingButtons();
    initStatsCounter();
    initTypingEffect();
    initMobileOptimizations();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scrolling when menu is open
            if (navMenu.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                body.style.overflow = '';
            }
        });
        
        // Close menu on resize if window becomes large
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                body.style.overflow = '';
            }
        });
    }
}

// Mobile Optimizations
function initMobileOptimizations() {
    // Detect if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Add mobile class to body
        document.body.classList.add('mobile-device');
        
        // Optimize touch scrolling
        document.body.style.webkitOverflowScrolling = 'touch';
        
        // Prevent zoom on input focus (iOS)
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            if (input.type !== 'file') {
                input.setAttribute('autocomplete', 'off');
                input.setAttribute('autocorrect', 'off');
                input.setAttribute('autocapitalize', 'off');
                input.setAttribute('spellcheck', 'false');
            }
        });
    }
    
    // Handle orientation change
    window.addEventListener('orientationchange', function() {
        setTimeout(function() {
            window.scrollTo(0, window.scrollY);
        }, 100);
    });
    
    // Improve scrolling performance
    let ticking = false;
    function updateScrollPosition() {
        // Add scroll-based animations or effects here
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateScrollPosition);
            ticking = true;
        }
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Add fade-in class to elements
    const elements = document.querySelectorAll('.service-card, .feature-item, .pricing-card, .contact-item');
    elements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// WhatsApp and Phone Integration
function initWhatsAppPhone() {
    // Add click tracking for WhatsApp buttons
    document.querySelectorAll('.btn-whatsapp').forEach(btn => {
        btn.addEventListener('click', function() {
            trackEvent('Contact', 'WhatsApp Click', 'WhatsApp Button');
        });
    });
    
    // Add click tracking for phone buttons
    document.querySelectorAll('.btn-phone').forEach(btn => {
        btn.addEventListener('click', function() {
            trackEvent('Contact', 'Phone Click', 'Phone Button');
        });
    });
}

// Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                service: formData.get('service'),
                message: formData.get('message')
            };
            
            // Basic validation
            if (!data.name || !data.email || !data.phone) {
                alert('Please fill all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Phone validation
            const phoneRegex = /^[6-9]\d{9}$/;
            if (!phoneRegex.test(data.phone)) {
                alert('Please enter a valid phone number.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you! Your message has been sent successfully. We will contact you soon.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Service Buttons
function initServiceButtons() {
    document.querySelectorAll('.btn-service').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceName = this.closest('.service-card').querySelector('h3').textContent;
            alert(`Thank you for contacting us about ${serviceName}! Our team will get in touch with you soon.`);
        });
    });
}

// Pricing Buttons
function initPricingButtons() {
    document.querySelectorAll('.pricing-card .btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const planName = this.closest('.pricing-card').querySelector('h3').textContent;
            if (this.textContent.includes('Contact Us')) {
                alert(`Contact us to create a custom package for ${planName} plan.`);
            } else {
                alert(`Thank you for choosing ${planName} plan! Redirecting to payment page.`);
            }
        });
    });
}

// Stats Counter Animation
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat h3');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                const text = stat.textContent;
                const number = parseInt(text.replace(/[^0-9]/g, ''));
                const suffix = text.replace(/[0-9]/g, '');
                
                animateNumber(stat, 0, number, 2000, suffix);
                observer.unobserve(stat);
            }
        });
    });
    
    stats.forEach(stat => observer.observe(stat));
}

// Number Animation Helper
function animateNumber(element, start, end, duration, suffix) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current.toLocaleString('hi-IN') + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// Typing Effect for Hero Title
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const text = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroTitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }
}

// Header Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// CTA Button Effects
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Phone Number Click Handler
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function(e) {
        if (confirm('Do you want to make a call?')) {
            // Allow default behavior
        } else {
            e.preventDefault();
        }
    });
});

// WhatsApp Integration (if needed)
function openWhatsApp(message) {
    const phoneNumber = '919876543210'; // Replace with actual number
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

// Newsletter Subscription (if needed)
function subscribeNewsletter(email) {
    // Simulate newsletter subscription
    console.log('Newsletter subscription:', email);
    alert('Thank you for subscribing to our newsletter!');
}

// Social Media Share Functions
function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('VR Digital India - Best Digital Marketing Platform for Elections');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
}

function shareOnLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
}

// Performance Optimization
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if images are present
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
});

// Service Worker Registration (for PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Analytics Integration (placeholder)
function trackEvent(category, action, label) {
    // Google Analytics or other analytics tracking
    console.log('Track Event:', category, action, label);
    
    // Example: gtag('event', action, { category, label });
}

// Track button clicks
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        const buttonText = e.target.textContent.trim();
        trackEvent('Button', 'Click', buttonText);
    }
});

// Keyboard Navigation Support
document.addEventListener('keydown', function(e) {
    // ESC key to close modal
    if (e.key === 'Escape') {
        const modal = document.getElementById('dashboardModal');
        if (modal && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    }
});

// Print Styles Support
function printPage() {
    window.print();
}

// Copy to Clipboard Function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        alert('Text copied!');
    }).catch(function(err) {
        console.error('Copy failed:', err);
    });
}

// Form Auto-save (localStorage)
function autoSaveForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        // Load saved data
        const savedValue = localStorage.getItem(`${formId}_${input.name}`);
        if (savedValue) {
            input.value = savedValue;
        }
        
        // Save on change
        input.addEventListener('change', function() {
            localStorage.setItem(`${formId}_${input.name}`, input.value);
        });
    });
    
    // Clear saved data on successful submission
    form.addEventListener('submit', function() {
        inputs.forEach(input => {
            localStorage.removeItem(`${formId}_${input.name}`);
        });
    });
}

// Initialize auto-save for contact form
document.addEventListener('DOMContentLoaded', function() {
    autoSaveForm('contactForm');
});

// Dark Mode Toggle (if needed)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Load dark mode preference
document.addEventListener('DOMContentLoaded', function() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
});

// Browser Detection
function getBrowserInfo() {
    const ua = navigator.userAgent;
    let browser = 'Unknown';
    
    if (ua.indexOf('Chrome') > -1) browser = 'Chrome';
    else if (ua.indexOf('Firefox') > -1) browser = 'Firefox';
    else if (ua.indexOf('Safari') > -1) browser = 'Safari';
    else if (ua.indexOf('Edge') > -1) browser = 'Edge';
    
    return browser;
}

// Device Detection
function getDeviceType() {
    const width = window.innerWidth;
    if (width <= 480) return 'mobile';
    if (width <= 768) return 'tablet';
    return 'desktop';
}

// Log device and browser info
console.log('Browser:', getBrowserInfo());
console.log('Device:', getDeviceType());
console.log('Screen Resolution:', screen.width + 'x' + screen.height);
