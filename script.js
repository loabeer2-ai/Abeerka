// DOM Elements
const auroraTitle = document.getElementById('auroraTitle');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose = document.getElementById('menuClose');
const menuOptions = document.querySelectorAll('.menu-option');
const pages = document.querySelectorAll('.page');
const foodMenuBack = document.getElementById('foodMenuBack');
const priceListBack = document.getElementById('priceListBack');
const contactBack = document.getElementById('contactBack');
const contactForm = document.getElementById('contactForm');

// Menu Images - Using placeholder images from Unsplash
const dishImages = {
    // Starters
    'Miso Soup': 'https://images.unsplash.com/photo-1607301405390-d831c242f59b?w=400&h=300&fit=crop',
    'Edamame': 'https://images.unsplash.com/photo-1527324997648-56dc5d5e8318?w=400&h=300&fit=crop',
    'Gyoza': 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
    
    // Main Courses
    'Dragon Roll': 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    'Rainbow Roll': 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop',
    'Spicy Tuna Roll': 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&h=300&fit=crop',
    'Salmon Nigiri': 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop',
    'Tempura Udon': 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&h=300&fit=crop',
    'Chicken Teriyaki': 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop',
    
    // Desserts
    'Mochi Ice Cream': 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop',
    'Green Tea Cake': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
    
    // Drinks
    'Sake': 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=300&fit=crop',
    'Green Tea': 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=400&h=300&fit=crop',
    'Japanese Beer': 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=300&fit=crop'
};

// Open Menu Overlay
auroraTitle.addEventListener('click', () => {
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close Menu Overlay
menuClose.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close menu when clicking outside
menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Navigate to pages
menuOptions.forEach(option => {
    option.addEventListener('click', () => {
        const targetPage = option.getAttribute('data-page');
        navigateToPage(targetPage);
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Navigation function
function navigateToPage(pageId) {
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// Back buttons
foodMenuBack.addEventListener('click', () => {
    navigateToPage('homepage');
});

priceListBack.addEventListener('click', () => {
    navigateToPage('homepage');
});

contactBack.addEventListener('click', () => {
    navigateToPage('homepage');
});

// Add images to dish cards
function addDishImages() {
    const dishCards = document.querySelectorAll('.dish-card');
    
    dishCards.forEach(card => {
        const dishName = card.querySelector('.dish-name').textContent;
        const dishImage = card.querySelector('.dish-image');
        
        if (dishImages[dishName]) {
            dishImage.style.backgroundImage = `url('${dishImages[dishName]}')`;
        }
    });
}

// Contact Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    
    // Simulate form submission
    alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon.`);
    
    // Reset form
    contactForm.reset();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    addDishImages();
});
