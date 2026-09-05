// ============================================
// SELFSTUDY - INTERACTIVE SCRIPTS
// ============================================

// Replace these values with your actual contact links
const PLACEHOLDERS = {
    WHATSAPP_NUMBER: '+8801766476038',
    WHATSAPP_LINK: 'https://wa.me/8801766476038',
    GOOGLE_FORM_URL: 'https://forms.gle/idPJxFW4zKUWnfaH9',
    EMAIL: 'contact@selfstudy.com'
};

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        }
    });
}

// Close menu when navigation link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        }
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.closest('.faq-item');
        const isActive = faqItem.classList.contains('active');
        
        // Close all other items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Smooth scroll offset calculation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = 70;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Auto-populate links from PLACEHOLDERS object
document.querySelectorAll('a[href*="PLACEHOLDER_WHATSAPP"]').forEach(link => {
    link.href = PLACEHOLDERS.WHATSAPP_LINK;
});

document.querySelectorAll('a[href*="PLACEHOLDER_FORM"]').forEach(link => {
    link.href = PLACEHOLDERS.GOOGLE_FORM_URL;
});

// Logo click scroll to top
const logoSection = document.querySelector('.logo-section');
if (logoSection) {
    logoSection.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}