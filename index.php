<?php
// KACHWAHA CASINO - Main Homepage
// No database required - all client-side
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KACHWAHA - Free Social Casino Games | Play for Fun</title>
    <meta name="description" content="Play free social casino games with virtual coins. No real money, no gambling. Enjoy 3 Patti, Roulette, Spin Wheel, and Bingo - 100% free-to-play entertainment!">
    <meta name="keywords" content="social casino, free games, virtual coins, 3 patti, roulette, bingo, spin wheel">
    <meta name="robots" content="index, follow">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <!-- HEADER & NAVIGATION -->
    <header>
        <div class="header-container">
            <a href="index.php" class="logo"><img src="assets/images/kachwaha-logo.webp" alt="KACHWAHA Casino" style="height: 50px;"></a>
            <nav>
                <ul>
                    <li><a href="index.php">Home</a></li>
                    <li><a href="pages/games.php">Games</a></li>
                    <li><a href="pages/about.php">About Us</a></li>
                    <li><a href="pages/how-to-play.php">How to Play</a></li>
                    <li><a href="pages/faq.php">FAQ</a></li>
                    <li><a href="pages/contact.php">Contact</a></li>
                </ul>
            </nav>
            <div class="credits-display">
                <span class="coin-icon">💰</span>
                <span>1000 Credits</span>
            </div>
            <button class="sound-toggle">🔊</button>
        </div>
    </header>

    <!-- HERO SECTION -->
    <section class="hero">
        <div class="hero-banner" style="background-image: url('assets/images/hero-banner.webp');">
            <div class="hero-banner-content">
                <h1>🎰 KACHWAHA CASINO 🎰</h1>
                <p>Play Free Social Casino Games - Pure Entertainment!</p>
            </div>
        </div>
        <div class="hero-content">
            <h1>Play Free Social Casino Games</h1>
            <p>Experience thrilling casino games with virtual coins. No real money, no gambling, just pure entertainment and fun!</p>
            
            <div class="disclaimer">
                <strong>⚠️ For Entertainment Purposes Only</strong><br>
                This is a social casino platform. No real money gambling is involved. Virtual coins have no real-world value and cannot be withdrawn or exchanged for cash.
            </div>

            <div class="cta-buttons">
                <a href="pages/games.php" class="btn btn-primary">🎮 Play Free Games</a>
                <a href="pages/how-to-play.php" class="btn btn-secondary">📖 How It Works</a>
            </div>
        </div>
    </section>

    <!-- FEATURES SECTION -->
    <section class="features">
        <h2 class="section-title">Why Choose KACHWAHA?</h2>
        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">💰</div>
                <h3>100% Free to Play</h3>
                <p>No real money involved. Start with 1000 virtual coins and enjoy unlimited entertainment without any financial risk.</p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🎮</div>
                <h3>Variety of Games</h3>
                <p>Choose from 4 exciting games: 3 Patti, Roulette, Spin Wheel, and Bingo. Each game is unique and thrilling.</p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">📱</div>
                <h3>Fully Responsive</h3>
                <p>Play on any device - laptop, tablet, or mobile. Our games are optimized for all screen sizes and resolutions.</p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">⭐</div>

            <div class="feature-card">
                <div class="feature-icon">🎯</div>
                <h3>Fair Gaming</h3>
                <p>All games use random number generation to ensure fair and unbiased results. No hidden algorithms or cheating.</p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🛡️</div>
                <h3>Safe & Secure</h3>
                <p>No personal information required. Play anonymously and enjoy complete privacy. Your data is never stored or shared.</p>
            </div>
        </div>
    </section>

    <!-- GAMES SECTION -->
    <section class="games-section">
        <h2 class="section-title">Our Games</h2>
        <div class="games-grid">
            <div class="game-card" onclick="window.location.href='pages/game-3patti.php'">
                <div class="game-card-header">
                    <h3>3 Patti</h3>
                    <span class="game-badge">Popular</span>
                </div>
                <div class="game-card-body">
                    <p>Traditional Indian card game. Beat the dealer with your best hand combination!</p>
                    <button class="btn btn-primary btn-small" style="width: 100%;">Play Now</button>
                </div>
            </div>

            <div class="game-card" onclick="window.location.href='pages/game-roulette.php'">
                <div class="game-card-header">
                    <h3>Roulette</h3>
                    <span class="game-badge">Classic</span>
                </div>
                <div class="game-card-body">
                    <p>Spin the wheel and predict the winning number. Bet on colors, numbers, or odd/even!</p>
                    <button class="btn btn-primary btn-small" style="width: 100%;">Play Now</button>
                </div>
            </div>

            <div class="game-card" onclick="window.location.href='pages/game-spinwheel.php'">
                <div class="game-card-header">
                    <h3>Spin Wheel</h3>
                    <span class="game-badge">Lucky</span>
                </div>
                <div class="game-card-body">
                    <p>Spin the lucky wheel and win instant credits! Simple, fun, and rewarding!</p>
                    <button class="btn btn-primary btn-small" style="width: 100%;">Play Now</button>
                </div>
            </div>

            <div class="game-card" onclick="window.location.href='pages/game-bingo.php'">
                <div class="game-card-header">
                    <h3>Bingo</h3>
                    <span class="game-badge">Exciting</span>
                </div>
                <div class="game-card-body">
                    <p>Mark numbers on your card and complete rows, columns, or diagonals to win big!</p>
                    <button class="btn btn-primary btn-small" style="width: 100%;">Play Now</button>
                </div>
            </div>
        </div>
    </section>

    <!-- CREDIT SYSTEM SECTION -->
    <section class="features">
        <h2 class="section-title">Credit System</h2>
        <div style="max-width: 1000px; margin: 0 auto;">
            <div class="credit-section">
                <h2>How Credits Work</h2>
                <div class="credit-info">
                    <div class="credit-box">
                        <label>Starting Credits</label>
                        <div class="amount">1000</div>
                    </div>
                    <div class="credit-box">
                    </div>
                    <div class="credit-box">
                        <label>Free Top-up</label>
                        <div class="amount">+500</div>
                    </div>
                </div>

                <div class="topup-section">
                    <p>💡 <strong>Pro Tip:</strong> When your credits reach zero, click the "Free Top-up" button to get 500 free credits and continue playing!</p>
                    <button class="btn btn-secondary" data-action="topup-credits" style="width: 100%;">Get Free Credits Now</button>
                </div>
            </div>
        </div>
    </section>

    <!-- HOW IT WORKS SECTION -->
    <section class="features" style="margin-top: 4rem;">
        <h2 class="section-title">How It Works</h2>
        <div style="max-width: 1000px; margin: 0 auto;">
            <div class="game-explanation">
                <h2>Getting Started</h2>
                <ol>
                    <li><strong>No Registration Required:</strong> Simply visit our website and start playing immediately. No sign-up, no login, no personal information needed.</li>
                    <li><strong>Start with 1000 Credits:</strong> You begin with 1000 virtual credits to play any of our games.</li>
                    <li><strong>Choose Your Game:</strong> Select from 3 Patti, Roulette, Spin Wheel, or Bingo.</li>
                    <li><strong>Place Your Bet:</strong> Decide how many credits you want to wager on each game.</li>
                    <li><strong>Play & Win:</strong> Play the game and win credits based on the outcome. All games use fair random number generation.</li>
        </div>
    </section>

    <!-- FOOTER -->
    <footer>
        <div class="footer-container">
            <div class="footer-grid">
                <div class="footer-section">
                    <h3>KACHWAHA</h3>
                    <p>Your trusted platform for free social casino games. Play responsibly and have fun!</p>
                </div>

                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.php">Home</a></li>
                        <li><a href="pages/games.php">Games</a></li>
                        <li><a href="pages/about.php">About Us</a></li>
                        <li><a href="pages/faq.php">FAQ</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="pages/terms.php">Terms & Conditions</a></li>
                        <li><a href="pages/privacy.php">Privacy Policy</a></li>
                        <li><a href="pages/disclaimer.php">Disclaimer</a></li>
                        <li><a href="pages/responsible-gaming.php">Responsible Gaming</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h3>Contact</h3>
                    <ul>
                        <li><a href="pages/contact.php">Contact Us</a></li>
                        <li><a href="mailto:info@kachwaha.com">Email: info@kachwaha.com</a></li>
                        <li>Bokaro, Jharkhand, India</li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2025 KACHWAHA ENGINEERING SERVICES (OPC) PRIVATE LIMITED. All rights reserved.</p>
                <p>This is a social casino platform for entertainment purposes only. No real money gambling is involved.</p>
            </div>
        </div>
    </footer>

    <!-- SCRIPTS -->
    <script src="assets/js/main.js"></script>
</body>
</html>
