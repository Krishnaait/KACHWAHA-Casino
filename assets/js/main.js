/* ===========================
   KACHWAHA CASINO - Main JavaScript
   Credit System & Utilities
   =========================== */

// ===== CREDIT SYSTEM =====
class CreditSystem {
    constructor() {
        this.storageKey = 'kachwaha_credits';
        this.lastBonusKey = 'kachwaha_last_bonus';
        this.initializeCredits();
    }

    initializeCredits() {
        if (!this.getCredits()) {
            this.setCredits(1000);
        }
        // Update display after initialization to show correct credits
        this.updateDisplay();
    }

    getCredits() {
        return parseInt(localStorage.getItem(this.storageKey)) || 0;
    }

    setCredits(amount) {
        localStorage.setItem(this.storageKey, Math.max(0, amount));
        this.updateDisplay();
    }

    addCredits(amount) {
        const current = this.getCredits();
        this.setCredits(current + amount);
    }

    deductCredits(amount) {
        const current = this.getCredits();
        if (current >= amount) {
            this.setCredits(current - amount);
            return true;
        }
        return false;
    }



    resetCredits() {
        this.setCredits(500);
        this.showNotification('Credits Reset: +500 Credits!', 'success');
    }

    topupCredits() {
        this.addCredits(500);
        this.showNotification('Free Top-up: +500 Credits!', 'success');
    }

    updateDisplay() {
        const credits = this.getCredits();
        
        // Update header credit display
        const creditDisplay = document.querySelector('.credits-display');
        if (creditDisplay) {
            creditDisplay.innerHTML = `<span class="coin-icon">💰</span> <span>${credits} Credits</span>`;
        }
        
        // Update game page credit display
        const currentBalance = document.getElementById('current-balance');
        if (currentBalance) {
            currentBalance.textContent = credits;
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            font-weight: 600;
            z-index: 3000;
            animation: slideInRight 0.3s ease;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// ===== SOUND SYSTEM =====
class SoundSystem {
    constructor() {
        this.soundEnabled = localStorage.getItem('kachwaha_sound') !== 'false';
        this.initToggle();
    }

    initToggle() {
        const toggle = document.querySelector('.sound-toggle');
        if (toggle) {
            toggle.textContent = this.soundEnabled ? '🔊' : '🔇';
            toggle.addEventListener('click', () => this.toggleSound());
        }
    }

    toggleSound() {
        this.soundEnabled = !this.soundEnabled;
        localStorage.setItem('kachwaha_sound', this.soundEnabled);
        const toggle = document.querySelector('.sound-toggle');
        if (toggle) {
            toggle.textContent = this.soundEnabled ? '🔊' : '🔇';
        }
    }

    playSound(type) {
        if (!this.soundEnabled) return;

        // Create simple beep sounds using Web Audio API
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        switch (type) {
            case 'win':
                oscillator.frequency.value = 800;
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.5);
                break;
            case 'loss':
                oscillator.frequency.value = 300;
                gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.3);
                break;
            case 'click':
                oscillator.frequency.value = 600;
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.1);
                break;
        }
    }
}

// ===== GLOBAL INSTANCES =====
// Make these globally accessible to all game files
// Initialize immediately so games can use them
window.creditSystem = new CreditSystem();
window.soundSystem = new SoundSystem();

// Setup event listeners on page load
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
});

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Reset credits button
    const resetBtn = document.querySelector('[data-action="reset-credits"]');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (window.creditSystem.getCredits() === 0) {
                window.creditSystem.resetCredits();
            }
        });
    }

    // Topup credits button
    const topupBtn = document.querySelector('[data-action="topup-credits"]');
    if (topupBtn) {
        topupBtn.addEventListener('click', () => {
            window.creditSystem.topupCredits();
        });
    }

    // Modal close buttons
    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.modal').classList.remove('show');
        });
    });

    // Modal outside click
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    });
}

// ===== UTILITY FUNCTIONS =====
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('show');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
    }
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0
    }).format(amount);
}

// ===== ANIMATION HELPERS =====
function animateNumber(element, start, end, duration = 1000) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
    // Press 'S' to toggle sound
    if (e.key === 's' || e.key === 'S') {
        window.soundSystem.toggleSound();
    }
});

// ===== RESPONSIVE ADJUSTMENTS =====
function handleResize() {
    const isMobile = window.innerWidth < 768;
    document.body.classList.toggle('mobile', isMobile);
}

window.addEventListener('resize', handleResize);
handleResize();

// ===== CSS ANIMATIONS =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }
`;
document.head.appendChild(style);
