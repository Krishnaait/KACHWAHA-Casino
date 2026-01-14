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
    }

    renderWheel() {
        const container = document.getElementById('spinwheel-container');
        if (!container) {
            console.error('Spin wheel container not found!');
            return;
        }

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
                            ${this.segments.map(seg => `<li><span class="segment-dot" style="background: ${seg.color};"></span> ${seg.label}</li>`).join('')}
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
        
        // Draw wheel after HTML is inserted
        setTimeout(() => {
            this.drawWheel();
            this.updateCreditsDisplay();
            this.setupEventListeners();
        }, 100);
    }

    drawWheel() {
        const canvas = document.getElementById('spinwheel-canvas');
        if (!canvas) {
            console.error('Canvas not found!');
            return;
        }

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

    updateCreditsDisplay() {
        // Update both game display and header via main credit system
        if (window.creditSystem) {
            window.creditSystem.updateDisplay();
        }
        
        // Also update local game display
        const credits = window.creditSystem ? window.creditSystem.getCredits() : 1000;
        const display = document.getElementById('current-credits');
        if (display) {
            display.textContent = credits;
        }
    }

    spin() {
        if (this.isSpinning) return;

        const credits = window.creditSystem ? window.creditSystem.getCredits() : 1000;
        const spinCost = 50;

        if (credits < spinCost) {
            this.showResult('Not enough credits! You need at least 50 credits to spin.', 'error');
            return;
        }

        // Deduct spin cost
        if (window.creditSystem) {
            window.creditSystem.deductCredits(spinCost);
        }

        this.isSpinning = true;
        const resultSegment = this.segments[Math.floor(Math.random() * this.segments.length)];
        
        // Animate spin
        const canvas = document.getElementById('spinwheel-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const spins = 5 + Math.random() * 3;
        const targetRotation = this.currentRotation + (spins * 360) + (Math.random() * 360);
        const duration = 3000;
        const startTime = Date.now();
        const startRotation = this.currentRotation;

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            this.currentRotation = startRotation + (targetRotation - startRotation) * easeOut;
            
            ctx.save();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate((this.currentRotation * Math.PI) / 180);
            ctx.translate(-canvas.width / 2, -canvas.height / 2);
            
            this.drawWheel();
            
            ctx.restore();

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                this.isSpinning = false;
                this.handleWin(resultSegment);
            }
        };

        animate();
    }

    handleWin(segment) {
        if (window.creditSystem) {
            window.creditSystem.addCredits(segment.value);
        }
        
        this.updateCreditsDisplay();
        this.showResult(`🎉 You won ${segment.value} credits!`, 'success');
    }

    showResult(message, type) {
        const resultDiv = document.getElementById('spin-result');
        if (resultDiv) {
            resultDiv.textContent = message;
            resultDiv.className = `result-box ${type}`;
            resultDiv.style.display = 'block';
            
            setTimeout(() => {
                resultDiv.style.display = 'none';
            }, 5000);
        }
    }
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, checking for spin wheel container...');
    const container = document.getElementById('spinwheel-container');
    if (container) {
        console.log('Container found, initializing spin wheel...');
        window.spinWheel = new SpinWheel();
    } else {
        console.error('Spin wheel container not found!');
    }
});

// Add CSS for spin wheel
const spinWheelStyles = document.createElement('style');
spinWheelStyles.textContent = `
    .spinwheel-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        margin: 2rem 0;
    }
    .wheel-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 50%;
        padding: 2rem;
    }
    .wheel-pointer {
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-top: 25px solid #d4af37;
        z-index: 10;
    }
    #spinwheel-canvas {
        display: block;
        max-width: 100%;
        height: auto;
    }
    .spinwheel-info {
        display: flex;
        flex-direction: column;
    }
    .spinwheel-info h3 {
        color: #d4af37;
        margin-bottom: 1rem;
    }
    .spin-stats {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin: 1.5rem 0;
    }
    .stat-box {
        background: rgba(139, 92, 246, 0.1);
        padding: 1rem;
        border-radius: 8px;
        border: 2px solid #8b5cf6;
        text-align: center;
    }
    .stat-box label {
        display: block;
        font-size: 0.9rem;
        color: #d4af37;
        margin-bottom: 0.5rem;
    }
    .stat-box span {
        font-size: 1.2rem;
        font-weight: 700;
        color: white;
    }
    .segments-list {
        background: rgba(10, 14, 39, 0.6);
        padding: 1.5rem;
        border-radius: 8px;
        border: 1px solid #8b5cf6;
        margin: 1rem 0;
    }
    .segments-list h4 {
        color: #d4af37;
        margin-bottom: 1rem;
    }
    .segments-list ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .segments-list li {
        padding: 0.5rem 0;
        color: rgba(255, 255, 255, 0.9);
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    .segment-dot {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        display: inline-block;
    }
    .result-box {
        padding: 1rem;
        border-radius: 8px;
        text-align: center;
        font-weight: 600;
    }
    .result-box.success {
        background: rgba(34, 197, 94, 0.2);
        border: 2px solid #22c55e;
        color: #22c55e;
    }
    .result-box.error {
        background: rgba(239, 68, 68, 0.2);
        border: 2px solid #ef4444;
        color: #ef4444;
    }
    @media (max-width: 768px) {
        .spinwheel-layout {
            grid-template-columns: 1fr;
        }
        .spin-stats {
            grid-template-columns: 1fr;
        }
    }
`;
document.head.appendChild(spinWheelStyles);
