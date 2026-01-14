/* ===========================
   SPIN WHEEL GAME
   Lucky Spin Wheel
   =========================== */

class SpinWheel {
    constructor() {
        this.segments = [
            { label: '50 Credits', value: 50, color: '#FF6B6B' },
            { label: '100 Credits', value: 100, color: '#4ECDC4' },
            { label: '75 Credits', value: 75, color: '#FFE66D' },
            { label: '150 Credits', value: 150, color: '#95E1D3' },
            { label: '25 Credits', value: 25, color: '#F38181' },
            { label: '200 Credits', value: 200, color: '#AA96DA' },
            { label: '125 Credits', value: 125, color: '#FCBAD3' },
            { label: '175 Credits', value: 175, color: '#A8D8EA' },
        ];
        this.isSpinning = false;
        this.currentRotation = 0;
        this.initGame();
    }

    initGame() {
        this.renderWheel();
        this.setupEventListeners();
    }

    renderWheel() {
        const container = document.getElementById('spinwheel-container');
        if (!container) return;

        const html = `
            <div class="spinwheel-layout">
                <div class="wheel-container">
                    <div class="wheel-pointer"></div>
                    <canvas id="spinwheel-canvas" width="400" height="400"></canvas>
                </div>

                <div class="spinwheel-info">
                    <h3>Lucky Spin Wheel</h3>
                    <p>Spin the wheel and win instant credits! Each spin costs <strong>50 Credits</strong>.</p>
                    
                    <div class="spin-stats">
                        <div class="stat-box">
                            <label>Cost Per Spin:</label>
                            <span>50 Credits</span>
                        </div>
                        <div class="stat-box">
                            <label>Your Credits:</label>
                            <span id="current-credits" class="credits-value">0</span>
                        </div>
                    </div>

                    <div class="segments-list">
                        <h4>Possible Wins:</h4>
                        <ul>
        `;

        this.segments.forEach(segment => {
            html += `<li><span class="segment-dot" style="background: ${segment.color};"></span> ${segment.label}</li>`;
        });

        html += `
                        </ul>
                    </div>

                    <button class="btn btn-primary" id="spin-btn" style="width: 100%; margin-top: 1.5rem; font-size: 1.1rem; padding: 1rem;">
                        🎡 SPIN NOW
                    </button>

                    <div id="spin-result" class="result-box" style="display: none; margin-top: 1.5rem;"></div>
                </div>
            </div>
        `;

        container.innerHTML = html;
        this.drawWheel();
        this.updateCreditsDisplay();
        this.setupEventListeners();
    }

    drawWheel() {
        const canvas = document.getElementById('spinwheel-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 180;

        const segmentAngle = (Math.PI * 2) / this.segments.length;

        this.segments.forEach((segment, index) => {
            const startAngle = index * segmentAngle;
            const endAngle = (index + 1) * segmentAngle;

            // Draw segment
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.lineTo(centerX, centerY);
            ctx.fillStyle = segment.color;
            ctx.fill();

            // Draw border
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 3;
            ctx.stroke();

            // Draw text
            const textAngle = (startAngle + endAngle) / 2;
            const textX = centerX + Math.cos(textAngle) * (radius - 50);
            const textY = centerY + Math.sin(textAngle) * (radius - 50);

            ctx.save();
            ctx.translate(textX, textY);
            ctx.rotate(textAngle + Math.PI / 2);
            ctx.fillStyle = 'white';
            ctx.font = 'bold 14px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(segment.label, 0, 0);
            ctx.restore();
        });

        // Draw center circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, 30, 0, Math.PI * 2);
        ctx.fillStyle = '#FFD700';
        ctx.fill();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.fillStyle = 'white';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('SPIN', centerX, centerY);
    }

    setupEventListeners() {
        const spinBtn = document.getElementById('spin-btn');
        if (spinBtn) {
            spinBtn.addEventListener('click', () => this.spin());
        }
    }

    spin() {
        if (this.isSpinning) return;

        if (!creditSystem.deductCredits(50)) {
            soundSystem.playSound('loss');
            creditSystem.showNotification('Insufficient credits! You need 50 credits to spin.', 'error');
            return;
        }

        this.isSpinning = true;
        soundSystem.playSound('click');

        const spinBtn = document.getElementById('spin-btn');
        spinBtn.disabled = true;
        spinBtn.textContent = 'SPINNING...';

        const randomSegment = Math.floor(Math.random() * this.segments.length);
        const targetRotation = (randomSegment / this.segments.length) * 360 + 1800; // 5 full rotations + target

        this.animateSpin(targetRotation, randomSegment);
    }

    animateSpin(targetRotation, winningSegmentIndex) {
        const canvas = document.getElementById('spinwheel-canvas');
        if (!canvas) return;

        const duration = 4000; // 4 seconds
        const startTime = Date.now();
        const startRotation = this.currentRotation;

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth deceleration
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            const rotation = startRotation + (targetRotation - startRotation) * easeProgress;

            canvas.style.transform = `rotate(${rotation}deg)`;
            this.currentRotation = rotation;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                this.showResult(winningSegmentIndex);
            }
        };

        animate();
    }

    showResult(segmentIndex) {
        this.isSpinning = false;

        const winningSegment = this.segments[segmentIndex];
        creditSystem.addCredits(winningSegment.value);

        const resultArea = document.getElementById('spin-result');
        resultArea.innerHTML = `
            <div class="win-result">
                <h3>🎉 Congratulations! 🎉</h3>
                <p>You won: <strong>${winningSegment.label}</strong></p>
                <p class="win-message">Your credits have been added!</p>
                <button class="btn btn-primary" onclick="location.reload()">Spin Again</button>
            </div>
        `;
        resultArea.style.display = 'block';

        soundSystem.playSound('win');
        this.updateCreditsDisplay();

        const spinBtn = document.getElementById('spin-btn');
        spinBtn.disabled = false;
        spinBtn.textContent = '🎡 SPIN NOW';
    }

    updateCreditsDisplay() {
        const creditsDisplay = document.getElementById('current-credits');
        if (creditsDisplay) {
            creditsDisplay.textContent = creditSystem.getCredits();
        }
    }
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('spinwheel-container')) {
        window.spinWheel = new SpinWheel();
    }
});

// Add CSS for spin wheel
const spinwheelStyles = document.createElement('style');
spinwheelStyles.textContent = `
    .spinwheel-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin: 2rem 0;
        align-items: center;
    }

    .wheel-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--primary-dark);
        padding: 2rem;
        border-radius: 12px;
        border: 3px solid var(--accent-gold);
    }

    .wheel-pointer {
        position: absolute;
        top: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-top: 25px solid var(--accent-gold);
        z-index: 10;
        filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5));
    }

    #spinwheel-canvas {
        max-width: 100%;
        height: auto;
        transition: transform 0.1s linear;
    }

    .spinwheel-info {
        background: var(--primary-light);
        padding: 2rem;
        border-radius: 12px;
        border: 2px solid var(--accent-purple);
    }

    .spinwheel-info h3 {
        color: var(--accent-gold);
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }

    .spinwheel-info p {
        color: var(--text-muted);
        margin-bottom: 1.5rem;
        line-height: 1.6;
    }

    .spin-stats {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-bottom: 1.5rem;
    }

    .stat-box {
        background: var(--primary-dark);
        padding: 1rem;
        border-radius: 8px;
        border: 1px solid var(--accent-purple);
        text-align: center;
    }

    .stat-box label {
        display: block;
        color: var(--text-muted);
        font-size: 0.85rem;
        margin-bottom: 0.5rem;
    }

    .stat-box span {
        display: block;
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--accent-gold);
    }

    .segments-list {
        background: var(--primary-dark);
        padding: 1rem;
        border-radius: 8px;
        border: 1px solid var(--accent-gold);
        margin-bottom: 1.5rem;
    }

    .segments-list h4 {
        color: var(--accent-gold);
        margin-bottom: 0.8rem;
        font-size: 0.95rem;
    }

    .segments-list ul {
        list-style: none;
    }

    .segments-list li {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        padding: 0.5rem 0;
        color: var(--text-muted);
        font-size: 0.9rem;
    }

    .segment-dot {
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 2px solid white;
    }

    #spin-btn {
        font-weight: 700;
        letter-spacing: 1px;
    }

    #spin-btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .win-result {
        text-align: center;
    }

    .win-result h3 {
        color: var(--success);
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .win-result p {
        color: var(--text-light);
        margin-bottom: 0.5rem;
    }

    .win-result p strong {
        color: var(--accent-gold);
        font-size: 1.2rem;
    }

    .win-message {
        color: var(--success) !important;
        font-weight: 600;
        margin-bottom: 1.5rem !important;
    }

    @media (max-width: 768px) {
        .spinwheel-layout {
            grid-template-columns: 1fr;
        }

        .wheel-container {
            padding: 1rem;
        }

        #spinwheel-canvas {
            max-width: 300px;
        }

        .spin-stats {
            grid-template-columns: 1fr;
        }

        .spinwheel-info {
            padding: 1.5rem;
        }
    }
`;
document.head.appendChild(spinwheelStyles);
