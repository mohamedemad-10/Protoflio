       // Loading Screen
       window.addEventListener('load', () => {
        setTimeout(() => {
            const loading = document.getElementById('loading');
            loading.style.opacity = '0';
            setTimeout(() => {
                loading.style.display = 'none';
            }, 500);
        }, 1500);
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Skill Progress Animation
    const skillProgress = document.querySelectorAll('.skill-progress');
    const animateSkills = () => {
        skillProgress.forEach(progress => {
            const value = progress.getAttribute('data-progress');
            progress.style.width = `${value}%`;
        });
    };

    // Fade-in Animation on Scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.closest('#skills')) {
                    animateSkills();
                }
            }
        });
    }, { threshold: 0.2 });

    fadeElements.forEach(element => observer.observe(element));

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact Form WhatsApp Redirect
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;
        const whatsappNumber = '+1234567890'; // Replace with your WhatsApp number
        const whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        const whatsappUrl = `https://wa.me/${"1558042651"}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
        contactForm.reset();
    });

    // Dark Mode Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const toggleIcon = themeToggle.querySelector('i');
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        toggleIcon.classList.toggle('fa-moon', theme === 'light');
        toggleIcon.classList.toggle('fa-sun', theme === 'dark');
    };

    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });

    // Typewriter Effect for Hero
    const typewriter = document.getElementById('typewriter');
    const text = "Designing Websites with <span>Barça</span> Soul";
    let isTyping = true;
    let index = 0;

    function typeWriter() {
        if (isTyping) {
            if (index < text.length) {
                typewriter.innerHTML = text.substring(0, index + 1) + '<span style="border-right: 4px solid var(--barca-yellow);"></span>';
                index++;
                setTimeout(typeWriter, 100);
            } else {
                isTyping = false;
                setTimeout(typeWriter, 2000); // Pause before erasing
            }
        } else {
            if (index > 0) {
                typewriter.innerHTML = text.substring(0, index - 1) + '<span style="border-right: 4px solid var(--barca-yellow);"></span>';
                index--;
                setTimeout(typeWriter, 50);
            } else {
                isTyping = true;
                setTimeout(typeWriter, 500); // Pause before retyping
            }
        }
    }

    // Start typewriter effect after page load
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 2000); // Delay to sync with loading screen
    });
