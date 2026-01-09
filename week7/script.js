 // --- Navigation Toggle ---
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        const links = document.querySelectorAll('.nav-links li');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Animate hamburger icon change
            const icon = hamburger.querySelector('i');
            if(navLinks.classList.contains('active')){
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when a link is clicked
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.querySelector('i').classList.remove('fa-times');
                hamburger.querySelector('i').classList.add('fa-bars');
            });
        });

        // --- Navbar Scroll Effect ---
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.style.padding = '10px 0';
                nav.style.background = 'rgba(17, 17, 17, 1)';
            } else {
                nav.style.padding = '20px 0';
                nav.style.background = 'rgba(17, 17, 17, 0.95)';
            }
        });

        // --- Scroll Reveal Animation ---
        const revealElements = document.querySelectorAll('.reveal');

        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const elementVisible = 150;

            revealElements.forEach((reveal) => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        // Trigger once on load
        revealOnScroll();

        // --- BMI Calculator Logic ---
        const bmiForm = document.getElementById('bmiForm');
        const bmiResult = document.getElementById('bmiResult');

        bmiForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const height = parseFloat(document.getElementById('height').value);
            const weight = parseFloat(document.getElementById('weight').value);

            if (height > 0 && weight > 0) {
                // Calculate BMI: weight (kg) / (height (m) ^ 2)
                const heightInMeters = height / 100;
                const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
                
                let category = '';
                let color = '';

                if (bmi < 18.5) {
                    category = 'Underweight';
                    color = '#3498db'; // Blue
                } else if (bmi >= 18.5 && bmi < 24.9) {
                    category = 'Normal Weight';
                    color = '#2ecc71'; // Green
                } else if (bmi >= 25 && bmi < 29.9) {
                    category = 'Overweight';
                    color = '#f1c40f'; // Yellow
                } else {
                    category = 'Obese';
                    color = '#e74c3c'; // Red
                }

                bmiResult.innerHTML = `Your BMI is <span style="color:${color}; font-size:1.5rem;">${bmi}</span> (${category})`;
                bmiResult.style.opacity = '0';
                setTimeout(() => {
                    bmiResult.style.opacity = '1';
                    bmiResult.style.transition = 'opacity 0.5s ease';
                }, 50);
            }
        });

        // --- Toast Notification Function ---
        function showToast(message) {
            const toast = document.getElementById('toast');
            toast.textContent = message;
            toast.className = "toast show";
            
            setTimeout(function(){ 
                toast.className = toast.className.replace("show", ""); 
            }, 3000);
        }

        // --- Plan Selection ---
        function selectPlan(planName) {
            showToast(`You selected the ${planName} Plan! Redirecting to signup...`);
            // Logic to redirect to a signup page would go here
        }

        // --- Newsletter Form ---
        const newsletterForm = document.getElementById('newsletterForm');
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast("Thanks for subscribing to our newsletter!");
            newsletterForm.reset();
        });
