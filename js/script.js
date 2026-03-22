document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbar = document.querySelector('.navbar');
    
    mobileMenuBtn.addEventListener('click', function() {
        navbar.classList.toggle('active');
        mobileMenuBtn.innerHTML = navbar.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Sticky Header on Scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Sample Filtering
    const sampleItems = [
        {
            id: 1,
            title: "Consumer Behavior Analysis",
            category: "marketing",
            desc: "Comprehensive study of FMCG sector buying patterns",
            pages: 45
        },
        {
            id: 2,
            title: "Portfolio Optimization",
            category: "finance",
            desc: "Risk assessment model for equity investments",
            pages: 60
        },
        {
            id: 3,
            title: "Employee Retention Strategies",
            category: "hr",
            desc: "Tech industry case study with predictive modeling",
            pages: 38
        },
        {
            id: 4,
            title: "Market Segmentation",
            category: "marketing",
            desc: "Geodemographic clustering for retail expansion",
            pages: 52
        },
        {
            id: 5,
            title: "Credit Risk Analysis",
            category: "finance",
            desc: "Machine learning approach to loan approvals",
            pages: 72
        },
        {
            id: 6,
            title: "HR Analytics Dashboard",
            category: "analytics",
            desc: "Power BI implementation with predictive insights",
            pages: 30
        }
    ];
    
    const samplesGrid = document.querySelector('.samples-grid');
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    function displaySamples(category = 'all') {
        samplesGrid.innerHTML = '';
        
        const filteredSamples = category === 'all' ? 
            sampleItems : 
            sampleItems.filter(item => item.category === category);
        
        filteredSamples.forEach(item => {
            const sampleItem = document.createElement('div');
            sampleItem.className = 'sample-item';
            sampleItem.innerHTML = `
                <div class="sample-img">
                    <img src="images/sample-${item.id}.jpg" alt="${item.title}">
                </div>
                <div class="sample-info">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                    <span class="sample-tag">${item.category.toUpperCase()}</span>
                    <span class="sample-tag">${item.pages} Pages</span>
                </div>
            `;
            samplesGrid.appendChild(sampleItem);
        });
    }
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const category = this.dataset.category;
            displaySamples(category);
        });
    });
    
    // Initialize with all samples
    displaySamples();
    
    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.slider-dot');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentTestimonial = index;
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showTestimonial(index));
    });
    
    // Auto-rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
    
    // Form Submission
    const contactForm = document.getElementById('projectForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value
        };
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your inquiry! We will contact you shortly.');
        contactForm.reset();
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});