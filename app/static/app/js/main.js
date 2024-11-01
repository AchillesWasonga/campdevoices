""
// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Change navbar appearance on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Interactive testimonials carousel
document.addEventListener('DOMContentLoaded', function () {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showNextTestimonial() {
        if (testimonials.length > 0) {
            testimonials[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % testimonials.length;
            testimonials[currentIndex].classList.add('active');
        }
    }

    if (testimonials.length > 0) {
        testimonials[currentIndex].classList.add('active');
        setInterval(showNextTestimonial, 5000); // Change testimonial every 5 seconds
    }
});

// Form validation for the registration form
document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.querySelector('#register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            const username = document.getElementById('username')?.value.trim() || '';
            const email = document.getElementById('email')?.value.trim() || '';
            const password = document.getElementById('password')?.value.trim() || '';
            const confirmPassword = document.getElementById('confirm_password')?.value.trim() || '';

            if (!username || !email || !password || !confirmPassword) {
                alert('All fields are required.');
                event.preventDefault();
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                event.preventDefault();
                return;
            }

            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                event.preventDefault();
                return;
            }
        });
    }
});

// Making the Articles page dynamic
document.addEventListener('DOMContentLoaded', function () {
    // Add highlight effect when hovering over each segment
    const segments = document.querySelectorAll('section');

    segments.forEach(segment => {
        segment.addEventListener('mouseenter', function () {
            segment.style.backgroundColor = '#E8F5E9'; // Light green highlight on hover
        });

        segment.addEventListener('mouseleave', function () {
            segment.style.backgroundColor = ''; // Remove background color on hover out
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Toggle visibility of FAQ answers
    const faqItems = document.querySelectorAll('.faq-item h4');

    faqItems.forEach(item => {
        item.addEventListener('click', function () {
            const answer = item.nextElementSibling;
            if (answer) {
                answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
            }
        });
    });

    // Add highlight effect to contact items on hover
    const contactItems = document.querySelectorAll('.contact-item');

    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            item.style.backgroundColor = '#E8F5E9'; // Light green highlight on hover
        });

        item.addEventListener('mouseleave', function () {
            item.style.backgroundColor = ''; // Remove background color on hover out
        });
    });
});
""
