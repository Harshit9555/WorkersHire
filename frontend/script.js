// Service details functionality
function showServiceDetails(serviceName) {
    // Set the modal title
    document.getElementById('serviceTitle').textContent = serviceName;
    
    // Set the appropriate description based on service type
    let description = '';
    switch(serviceName) {
        case 'Painter':
            description = `<p>Our skilled painters can help with:</p>
                          <ul>
                            <li>Interior and exterior painting</li>
                            <li>Wall preparation and repair</li>
                            <li>Color consultation</li>
                            <li>Texture application</li>
                            <li>Special finishes and effects</li>
                          </ul>
                          <p>Starting at $20/hour</p>
                          <button class="btn btn-primary w-100 mt-3" onclick="hireWorker('${serviceName}')">Hire a ${serviceName}</button>`;
            break;
        case 'Carpenter':
            description = `<p>Our experienced carpenters specialize in:</p>
                          <ul>
                            <li>Custom furniture building</li>
                            <li>Cabinet installation</li>
                            <li>Wood repairs</li>
                            <li>Framing and construction</li>
                            <li>Door and window installation</li>
                          </ul>
                          <p>Starting at $25/hour</p>
                          <button class="btn btn-primary w-100 mt-3" onclick="hireWorker('${serviceName}')">Hire a ${serviceName}</button>`;
            break;
        case 'Electrician':
            description = `<p>Our certified electricians can handle:</p>
                          <ul>
                            <li>Electrical repairs and troubleshooting</li>
                            <li>Lighting installation</li>
                            <li>Wiring and rewiring</li>
                            <li>Panel upgrades</li>
                            <li>Safety inspections</li>
                          </ul>
                          <p>Starting at $30/hour</p>
                          <button class="btn btn-primary w-100 mt-3" onclick="hireWorker('${serviceName}')">Hire an ${serviceName}</button>`;
            break;
        case 'Plumber':
            description = `<p>Our professional plumbers provide:</p>
                          <ul>
                            <li>Pipe installation and repair</li>
                            <li>Drain cleaning</li>
                            <li>Fixture installation</li>
                            <li>Water heater services</li>
                            <li>Leak detection</li>
                          </ul>
                          <p>Starting at $28/hour</p>
                          <button class="btn btn-primary w-100 mt-3" onclick="hireWorker('${serviceName}')">Hire a ${serviceName}</button>`;
            break;
        case 'Mason':
            description = `<p>Our skilled masons specialize in:</p>
                          <ul>
                            <li>Brick and stone laying</li>
                            <li>Wall construction</li>
                            <li>Concrete work</li>
                            <li>Outdoor hardscaping</li>
                            <li>Repairs and restoration</li>
                          </ul>
                          <p>Starting at $26/hour</p>
                          <button class="btn btn-primary w-100 mt-3" onclick="hireWorker('${serviceName}')">Hire a ${serviceName}</button>`;
            break;
        case 'Housekeeper':
            description = `<p>Our reliable housekeepers offer:</p>
                          <ul>
                            <li>Regular cleaning services</li>
                            <li>Deep cleaning</li>
                            <li>Organization</li>
                            <li>Laundry assistance</li>
                            <li>Window cleaning</li>
                          </ul>
                          <p>Starting at $18/hour</p>
                          <button class="btn btn-primary w-100 mt-3" onclick="hireWorker('${serviceName}')">Hire a ${serviceName}</button>`;
            break;
        case 'Cook':
            description = `<p>Our talented cooks can provide:</p>
                          <ul>
                            <li>Meal preparation</li>
                            <li>Catering for events</li>
                            <li>Specialized diets</li>
                            <li>Cooking lessons</li>
                            <li>Menu planning</li>
                          </ul>
                          <p>Starting at $22/hour</p>
                          <button class="btn btn-primary w-100 mt-3" onclick="hireWorker('${serviceName}')">Hire a ${serviceName}</button>`;
            break;
        case 'Agricultural Labour':
            description = `<p>Our agricultural laborers can assist with:</p>
                          <ul>
                            <li>Planting and harvesting</li>
                            <li>Field maintenance</li>
                            <li>Irrigation setup</li>
                            <li>Equipment operation</li>
                            <li>Seasonal work</li>
                          </ul>
                          <p>Starting at $16/hour</p>
                          <button class="btn btn-primary w-100 mt-3" onclick="hireWorker('${serviceName}')">Hire Agricultural Labor</button>`;
            break;
        case 'Driver':
            description = `<p>Our professional drivers offer:</p>
                          <ul>
                            <li>Personal transportation</li>
                            <li>Delivery services</li>
                            <li>Airport transfers</li>
                            <li>Event transportation</li>
                            <li>Long distance driving</li>
                          </ul>
                          <p>Starting at $18/hour</p>
                          <button class="btn btn-primary w-100 mt-3" onclick="hireWorker('${serviceName}')">Hire a ${serviceName}</button>`;
            break;
        default:
            description = `<p>Information about this service is currently unavailable. Please contact customer support for details.</p>`;
    }
    
    // Update the modal content
    document.getElementById('serviceDescription').innerHTML = description;
    
    // Show the modal
    const serviceModal = new bootstrap.Modal(document.getElementById('serviceModal'));
    serviceModal.show();
}

// Function to handle hiring a worker
function hireWorker(workerType) {
    // Check if user is logged in
    const user = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!user) {
        alert('Please login or sign up to hire a worker.');
        // Close service modal
        bootstrap.Modal.getInstance(document.getElementById('serviceModal')).hide();
        // Open login modal
        const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.show();
        return;
    }
    
    // If logged in, proceed with hiring process
    alert(`Thank you for choosing to hire a ${workerType}. A confirmation has been sent to your email, and our team will contact you shortly to arrange details.`);
}

// Login functionality
document.getElementById('loginButton').addEventListener('click', function() {
    const email = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simple validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Get users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Hash the password for comparison
    const hashedPassword = CryptoJS.SHA256(password).toString();
    
    // Check if user exists
    const user = users.find(u => u.email === email && u.password === hashedPassword);
    
    if (user) {
        // Store current user info (except password)
        const userInfo = {
            name: user.name,
            email: user.email,
            contact: user.contact
        };
        localStorage.setItem('currentUser', JSON.stringify(userInfo));
        
        // Alert successful login
        alert('Login successful. Welcome back ' + user.name + '!');
        
        // Redirect to services.html
        window.location.href = 'services.html';
    } else {
        alert('Invalid email or password');
    }
});

// Signup functionality
document.getElementById('signupButton').addEventListener('click', function() {
    const name = document.getElementById('signupFullName').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    // Simple validation
    if (!name || !contact || !email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Contact validation (assuming 10-digit number)
    if (!isValidContact(contact)) {
        alert('Please enter a valid 10-digit contact number');
        return;
    }
    
    // Get existing users
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if email already exists
    if (users.some(user => user.email === email)) {
        alert('Email already registered. Please use a different email or login.');
        return;
    }
    
    // Hash the password for storage
    const hashedPassword = CryptoJS.SHA256(password).toString();
    
    // Create new user object
    const newUser = {
        name,
        contact,
        email,
        password: hashedPassword
    };
    
    // Add to users array
    users.push(newUser);
    
    // Save back to localStorage
    localStorage.setItem('users', JSON.stringify(users));
    
    // Store current user info (except password)
    const userInfo = {
        name: newUser.name,
        email: newUser.email,
        contact: newUser.contact
    };
    localStorage.setItem('currentUser', JSON.stringify(userInfo));
    
    // Alert successful registration
    alert('Registration successful! Welcome to WorkersHire, ' + name + '!');
    
    // Redirect to services.html
    window.location.href = 'services.html';
});

// Helper functions for validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidContact(contact) {
    const contactRegex = /^\d{10}$/;
    return contactRegex.test(contact);
}

// Check if user is already logged in on page load
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        updateUIForLoggedInUser(currentUser.name);
    }
});

// Function to update UI for logged-in users
function updateUIForLoggedInUser(name) {
    const navbarNav = document.getElementById('navbarNav');
    const navUl = navbarNav.querySelector('ul');
    
    // Check if login and signup links exist before removing
    const loginLink = navUl.querySelector('a[data-bs-target="#loginModal"]');
    const signupLink = navUl.querySelector('a[data-bs-target="#signupModal"]');
    
    if (loginLink) {
        navUl.removeChild(loginLink.parentNode);
    }
    
    if (signupLink) {
        navUl.removeChild(signupLink.parentNode);
    }
    
    // Check if user profile dropdown already exists
    if (!navUl.querySelector('.dropdown-toggle')) {
        // Add user profile and logout links
        const profileLi = document.createElement('li');
        profileLi.className = 'nav-item dropdown';
        profileLi.innerHTML = `
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                ${name}
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="services.html" id="profileLink">My Profile</a></li>
                <li><a class="dropdown-item" href="services.html" id="myOrdersLink">My Orders</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#" id="logoutLink">Logout</a></li>
            </ul>
        `;
        navUl.appendChild(profileLi);
        
        // Add event listener for logout
        document.getElementById('logoutLink').addEventListener('click', function() {
            localStorage.removeItem('currentUser');
            window.location.href = 'index.html'; // Redirect to home page on logout
        });
    }
}

// Add event listeners for dropdown links after they're added to the DOM
document.addEventListener('click', function(e) {
    // Check if the clicked element is the profile link and it exists
    if (e.target && e.target.id === 'profileLink') {
        e.preventDefault();
        window.location.href = 'services.html';
    }
    
    // Check if the clicked element is the orders link and it exists
    if (e.target && e.target.id === 'myOrdersLink') {
        e.preventDefault();
        window.location.href = 'services.html';
    }
});