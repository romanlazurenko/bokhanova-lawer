// Language selector
const languageSelect = document.getElementById('language-select');
let currentLanguage = 'ru'; // Default language

function updateContent(language) {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[language][key]) {
            if (Array.isArray(translations[language][key])) {
                // For service items, preserve the existing HTML structure
                const items = translations[language][key];
                const listItems = element.querySelectorAll('li');
                listItems.forEach((li, index) => {
                    if (items[index]) {
                        // Keep the existing HTML structure and only update the text content
                        const img = li.querySelector('img');
                        if (img) {
                            li.innerHTML = img.outerHTML + items[index];
                        } else {
                            li.textContent = items[index];
                        }
                    }
                });
            } else {
                element.textContent = translations[language][key];
            }
        } else {
            // Handle array items with indices (e.g., how-i-work.items.0)
            const parts = key.split('.');
            if (parts.length > 2) {
                const parentKey = parts.slice(0, -1).join('.');
                const index = parseInt(parts[parts.length - 1]);
                if (!isNaN(index) && translations[language][parentKey] && Array.isArray(translations[language][parentKey])) {
                    element.textContent = translations[language][parentKey][index];
                }
            }
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[language][key]) {
            element.placeholder = translations[language][key];
        }
    });

    // Update document title
    document.title = translations[language]['hero.title'];

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', translations[language]['hero.description']);
    }

    // Update html lang attribute
    document.documentElement.lang = language;

    // Store the selected language
    localStorage.setItem('selectedLanguage', language);
    currentLanguage = language;
}

// Initialize language from localStorage or default to Russian
const savedLanguage = localStorage.getItem('selectedLanguage');
if (savedLanguage) {
    currentLanguage = savedLanguage;
    languageSelect.value = currentLanguage;
    updateContent(currentLanguage);
}

// Handle language selection
languageSelect.addEventListener('change', (e) => {
    const language = e.target.value;
    if (language && language !== currentLanguage) {
        updateContent(language);
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu handling
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');

if (mobileMenuButton && mobileMenu && mobileMenuClose) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close mobile menu when clicking on a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// Form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');
    });
}

// Add active class to header links on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.header-link');

function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavOnScroll);

// Add intersection observer for animation on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
    console.log('Page loaded and initialized');
}); 