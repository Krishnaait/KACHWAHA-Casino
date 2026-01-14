<?php
// CONTACT PAGE
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - KACHWAHA Casino</title>
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <!-- HEADER -->
    <header>
        <div class="header-container">
            <a href="../index.php" class="logo">♠️ KACHWAHA ♠️</a>
            <nav>
                <ul>
                    <li><a href="../index.php">Home</a></li>
                    <li><a href="games.php">Games</a></li>
                    <li><a href="about.php">About Us</a></li>
                    <li><a href="how-to-play.php">How to Play</a></li>
                    <li><a href="faq.php">FAQ</a></li>
                    <li><a href="contact.php">Contact</a></li>
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
        <div class="hero-content">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Get in touch with any questions or feedback.</p>
        </div>
    </section>

    <!-- CONTENT -->
    <section class="features">
        <div style="max-width: 1000px; margin: 0 auto; padding: 0 2rem;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-bottom: 3rem;">
                <!-- CONTACT INFO -->
                <div>
                    <h2 style="color: var(--accent-gold); margin-bottom: 1.5rem;">Contact Information</h2>

                    <div class="game-explanation" style="margin-bottom: 1.5rem;">
                        <h3>Head Office</h3>
                        <p>
                            <strong>KACHWAHA ENGINEERING SERVICES (OPC) PRIVATE LIMITED</strong><br>
                            C/O ASHA SINGH, CHAS BOKARO<br>
                            PATEL NAGAR<br>
                            Bokaro Steel City<br>
                            Bokaro, Jharkhand 827013<br>
                            India
                        </p>
                    </div>

                    <div class="game-explanation" style="margin-bottom: 1.5rem;">
                        <h3>Regional Office</h3>
                        <p>
                            553 15th Cross, F Block<br>
                            Sahakara Nagar<br>
                            Opposite Vodafone Store<br>
                            Above Indian Overseas Bank<br>
                            Bengaluru, Karnataka 560092<br>
                            India
                        </p>
                    </div>

                    <div class="game-explanation">
                        <h3>Email</h3>
                        <p>
                            <strong>Support:</strong> <a href="mailto:support@kachwaha.com" style="color: var(--accent-gold); text-decoration: underline;">support@kachwaha.com</a><br>
                            <strong>General:</strong> <a href="mailto:info@kachwaha.com" style="color: var(--accent-gold); text-decoration: underline;">info@kachwaha.com</a>
                        </p>
                    </div>
                </div>

                <!-- CONTACT FORM -->
                <div>
                    <h2 style="color: var(--accent-gold); margin-bottom: 1.5rem;">Send us a Message</h2>
                    <form id="contact-form" style="background: var(--primary-light); padding: 2rem; border-radius: 12px; border: 2px solid var(--accent-purple);">
                        <div style="margin-bottom: 1.5rem;">
                            <label style="display: block; margin-bottom: 0.5rem; color: var(--text-muted); font-weight: 600;">Name</label>
                            <input type="text" name="name" required style="width: 100%; padding: 0.8rem; border: 1px solid var(--accent-purple); border-radius: 8px; background: var(--primary-dark); color: var(--text-light); font-size: 1rem;">
                        </div>

                        <div style="margin-bottom: 1.5rem;">
                            <label style="display: block; margin-bottom: 0.5rem; color: var(--text-muted); font-weight: 600;">Email</label>
                            <input type="email" name="email" required style="width: 100%; padding: 0.8rem; border: 1px solid var(--accent-purple); border-radius: 8px; background: var(--primary-dark); color: var(--text-light); font-size: 1rem;">
                        </div>

                        <div style="margin-bottom: 1.5rem;">
                            <label style="display: block; margin-bottom: 0.5rem; color: var(--text-muted); font-weight: 600;">Subject</label>
                            <input type="text" name="subject" required style="width: 100%; padding: 0.8rem; border: 1px solid var(--accent-purple); border-radius: 8px; background: var(--primary-dark); color: var(--text-light); font-size: 1rem;">
                        </div>

                        <div style="margin-bottom: 1.5rem;">
                            <label style="display: block; margin-bottom: 0.5rem; color: var(--text-muted); font-weight: 600;">Message</label>
                            <textarea name="message" rows="5" required style="width: 100%; padding: 0.8rem; border: 1px solid var(--accent-purple); border-radius: 8px; background: var(--primary-dark); color: var(--text-light); font-size: 1rem; font-family: inherit;"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>
                        <p id="form-message" style="margin-top: 1rem; text-align: center; display: none;"></p>
                    </form>
                </div>
            </div>

            <!-- FAQ SECTION -->
            <div class="game-explanation">
                <h2>Frequently Asked Questions</h2>
                <p>Before contacting us, please check our <a href="faq.php" style="color: var(--accent-gold); text-decoration: underline;">FAQ page</a> for answers to common questions.</p>
            </div>

            <!-- BUSINESS HOURS -->
            <div class="game-explanation" style="margin-top: 2rem;">
                <h2>Business Hours</h2>
                <p>
                    <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM IST<br>
                    <strong>Saturday:</strong> 10:00 AM - 4:00 PM IST<br>
                    <strong>Sunday:</strong> Closed
                </p>
                <p style="margin-top: 1rem; color: var(--text-muted);">We aim to respond to all inquiries within 24 business hours.</p>
            </div>
        </div>
    </section>

    <!-- BACK BUTTON -->
    <div style="text-align: center; margin: 3rem 0;">
        <a href="../index.php" class="btn btn-secondary">← Back to Home</a>
    </div>

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
                        <li><a href="../index.php">Home</a></li>
                        <li><a href="games.php">Games</a></li>
                        <li><a href="about.php">About Us</a></li>
                        <li><a href="faq.php">FAQ</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="terms.php">Terms & Conditions</a></li>
                        <li><a href="privacy.php">Privacy Policy</a></li>
                        <li><a href="disclaimer.php">Disclaimer</a></li>
                        <li><a href="responsible-gaming.php">Responsible Gaming</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h3>Contact</h3>
                    <ul>
                        <li><a href="contact.php">Contact Us</a></li>
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
    <script src="../assets/js/main.js"></script>
    <script>
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };

            // Show success message (in real implementation, send to server)
            const messageEl = document.getElementById('form-message');
            messageEl.textContent = '✅ Thank you for your message! We will get back to you soon.';
            messageEl.style.color = 'var(--success)';
            messageEl.style.display = 'block';

            // Reset form
            this.reset();

            // Hide message after 5 seconds
            setTimeout(() => {
                messageEl.style.display = 'none';
            }, 5000);
        });
    </script>
</body>
</html>
