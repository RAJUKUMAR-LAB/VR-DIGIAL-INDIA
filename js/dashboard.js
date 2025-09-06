// Dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
    initDashboard();
    initCharts();
    initSidebar();
    initModals();
});

// Initialize Dashboard
function initDashboard() {
    // Set default active section
    showSection('dashboard');
    
    // Initialize navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('href').substring(1);
            showSection(section);
            setActiveNav(this);
            updatePageTitle(section);
        });
    });
    
    // Initialize sidebar toggle
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024) {
            if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });
}

// Show specific section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// Set active navigation item
function setActiveNav(activeItem) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    activeItem.classList.add('active');
}

// Update page title
function updatePageTitle(section) {
    const titles = {
        'dashboard': 'Dashboard',
        'campaigns': 'Campaigns',
        'sms': 'SMS Marketing',
        'calls': 'Voice Calls',
        'ads': 'Digital Ads',
        'analytics': 'Analytics',
        'contacts': 'Voter Database',
        'templates': 'Templates',
        'reports': 'Reports',
        'settings': 'Settings'
    };
    
    const pageTitle = document.getElementById('page-title');
    if (pageTitle && titles[section]) {
        pageTitle.textContent = titles[section];
    }
}

// Initialize Charts
function initCharts() {
    // Campaign Performance Chart
    const campaignCtx = document.getElementById('campaignChart');
    if (campaignCtx) {
        new Chart(campaignCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'SMS Campaigns',
                    data: [12000, 19000, 15000, 25000, 22000, 30000],
                    borderColor: '#ff6b35',
                    backgroundColor: 'rgba(255, 107, 53, 0.1)',
                    tension: 0.4
                }, {
                    label: 'Call Campaigns',
                    data: [8000, 12000, 10000, 18000, 16000, 22000],
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    
    // Monthly Report Chart
    const monthlyCtx = document.getElementById('monthlyChart');
    if (monthlyCtx) {
        new Chart(monthlyCtx, {
            type: 'doughnut',
            data: {
                labels: ['SMS', 'Calls', 'Ads', 'Others'],
                datasets: [{
                    data: [300, 150, 100, 50],
                    backgroundColor: [
                        '#ff6b35',
                        '#667eea',
                        '#28a745',
                        '#ffc107'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                    }
                }
            }
        });
    }
    
    // Initialize other analytics charts
    initAnalyticsCharts();
}

// Initialize Analytics Charts
function initAnalyticsCharts() {
    // Reach Analysis Chart
    const reachCtx = document.getElementById('reachChart');
    if (reachCtx) {
        new Chart(reachCtx, {
            type: 'bar',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{
                    label: 'Reach',
                    data: [50000, 75000, 60000, 90000],
                    backgroundColor: 'rgba(255, 107, 53, 0.7)',
                    borderColor: '#ff6b35',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    
    // Engagement Trend Chart
    const engagementCtx = document.getElementById('engagementChart');
    if (engagementCtx) {
        new Chart(engagementCtx, {
            type: 'line',
            data: {
                labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
                datasets: [{
                    label: 'Engagement Rate',
                    data: [12, 15, 18, 14, 20, 25, 22],
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 30
                    }
                }
            }
        });
    }
    
    // ROI Chart
    const roiCtx = document.getElementById('roiChart');
    if (roiCtx) {
        new Chart(roiCtx, {
            type: 'pie',
            data: {
                labels: ['Positive ROI', 'Break Even', 'Negative ROI'],
                datasets: [{
                    data: [70, 20, 10],
                    backgroundColor: ['#28a745', '#ffc107', '#dc3545']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
    
    // Demographics Chart
    const demographicsCtx = document.getElementById('demographicsChart');
    if (demographicsCtx) {
        new Chart(demographicsCtx, {
            type: 'radar',
            data: {
                labels: ['18-25', '26-35', '36-45', '46-55', '56-65', '65+'],
                datasets: [{
                    label: 'Voter Distribution',
                    data: [85, 90, 75, 60, 45, 30],
                    borderColor: '#ff6b35',
                    backgroundColor: 'rgba(255, 107, 53, 0.2)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }
}

// Initialize Sidebar
function initSidebar() {
    // Highlight current section based on URL hash
    const hash = window.location.hash.substring(1);
    if (hash) {
        showSection(hash);
        const navItem = document.querySelector(`.nav-item[href="#${hash}"]`);
        if (navItem) {
            setActiveNav(navItem);
            updatePageTitle(hash);
        }
    }
}

// Initialize Modals
function initModals() {
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
    
    // Close modal with close button
    document.querySelectorAll('.modal .close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    // Initialize forms
    initForms();
}

// Initialize Forms
function initForms() {
    // SMS Form
    const smsForm = document.getElementById('smsForm');
    if (smsForm) {
        smsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleSMSSubmission();
        });
        
        // Character counter for SMS
        const textarea = smsForm.querySelector('textarea');
        const charCount = smsForm.querySelector('.char-count');
        if (textarea && charCount) {
            textarea.addEventListener('input', function() {
                const count = this.value.length;
                charCount.textContent = `${count}/160`;
                if (count > 160) {
                    charCount.style.color = '#dc3545';
                } else {
                    charCount.style.color = '#666';
                }
            });
        }
    }
    
    // Contact selection
    const selectAllCheckbox = document.getElementById('selectAll');
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', function() {
            const checkboxes = document.querySelectorAll('.contacts-table input[type="checkbox"]:not(#selectAll)');
            checkboxes.forEach(checkbox => {
                checkbox.checked = this.checked;
            });
        });
    }
}

// Modal Functions
function openSMSModal() {
    const modal = document.getElementById('smsModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeSMSModal() {
    const modal = document.getElementById('smsModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function openCallModal() {
    alert('Call Campaign Modal - Implementation pending');
}

function openAdModal() {
    alert('Ad Campaign Modal - Implementation pending');
}

// Form Handlers
function handleSMSSubmission() {
    const form = document.getElementById('smsForm');
    const formData = new FormData(form);
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        alert('SMS Campaign started successfully!');
        closeSMSModal();
        form.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Update dashboard stats (simulate)
        updateDashboardStats();
    }, 2000);
}

// Contact Management
function importContacts() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.csv,.xlsx,.xls';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            alert(`File "${file.name}" is being imported...`);
            // Implement file import logic
        }
    };
    input.click();
}

function addContact() {
    alert('Add new contact form - Implementation pending');
}

// Update Dashboard Stats
function updateDashboardStats() {
    // Simulate real-time updates
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        const number = card.querySelector('h3');
        if (number) {
            const currentValue = parseInt(number.textContent.replace(/,/g, ''));
            const newValue = currentValue + Math.floor(Math.random() * 100) + 1;
            number.textContent = newValue.toLocaleString('hi-IN');
        }
    });
}

// Search functionality
function initSearch() {
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            performSearch(query);
        });
    }
}

function performSearch(query) {
    // Implement search logic across different sections
    console.log('Searching for:', query);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Real-time updates (WebSocket simulation)
function initRealTimeUpdates() {
    setInterval(() => {
        // Simulate real-time data updates
        const notifications = document.querySelector('.notifications');
        if (notifications) {
            const count = notifications.querySelector('.notification-count');
            if (count) {
                const currentCount = parseInt(count.textContent);
                if (Math.random() > 0.9) { // 10% chance of new notification
                    count.textContent = currentCount + 1;
                    showNotification('New activity received!', 'info');
                }
            }
        }
    }, 10000); // Check every 10 seconds
}

// Data export functionality
function exportData(type) {
    switch(type) {
        case 'contacts':
            exportContacts();
            break;
        case 'campaigns':
            exportCampaigns();
            break;
        case 'reports':
            exportReports();
            break;
        default:
            alert('Please specify export type');
    }
}

function exportContacts() {
    alert('Contacts are being exported...');
    // Implement CSV/Excel export
}

function exportCampaigns() {
    alert('Campaign data is being exported...');
    // Implement campaign data export
}

function exportReports() {
    alert('Reports are being exported...');
    // Implement reports export
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K for search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('.search-box input');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    // Escape to close modals
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }
    
    // Ctrl + N for new campaign
    if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
        e.preventDefault();
        const activeSection = document.querySelector('.content-section.active');
        if (activeSection) {
            const sectionId = activeSection.id;
            if (sectionId === 'sms') {
                openSMSModal();
            } else if (sectionId === 'calls') {
                openCallModal();
            } else if (sectionId === 'ads') {
                openAdModal();
            }
        }
    }
});

// Initialize all dashboard features
document.addEventListener('DOMContentLoaded', function() {
    initSearch();
    initRealTimeUpdates();
    
    // Add loading states to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.disabled) {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }
        });
    });
});

// Utility functions
function formatNumber(num) {
    return num.toLocaleString('hi-IN');
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('hi-IN');
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('hi-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(amount);
}

// Performance monitoring
function trackPageLoad() {
    window.addEventListener('load', function() {
        const loadTime = performance.now();
        console.log('Dashboard loaded in:', loadTime + 'ms');
        
        // Send analytics if available
        if (typeof gtag !== 'undefined') {
            gtag('event', 'timing_complete', {
                name: 'dashboard_load',
                value: Math.round(loadTime)
            });
        }
    });
}

trackPageLoad();
