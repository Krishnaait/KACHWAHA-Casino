# KACHWAHA - Social Casino Gaming Platform

## 🎰 Overview

KACHWAHA is a **100% free-to-play social casino gaming platform** built with HTML, CSS, PHP, and JavaScript. It provides entertainment through virtual casino games with no real money involvement, no login required, and completely anonymous play.

**Company:** KACHWAHA ENGINEERING SERVICES (OPC) PRIVATE LIMITED  
**Domain:** www.kachwahaengg.com  
**Location:** Bokaro, Jharkhand & Bengaluru, Karnataka, India

---

## ✨ Key Features

### 🎮 Games Included
1. **3 Patti** - Traditional Indian card game with hand rankings
2. **Roulette** - Classic casino wheel with multiple betting options
3. **Spin Wheel** - Lucky spinning wheel with instant prizes
4. **Bingo** - Number matching game with pattern completion

### 💰 Credit System
- **Starting Credits:** 1000 virtual coins
- **Daily Bonus:** 200 free credits (resets every 24 hours)
- **Free Top-up:** 500 free credits when balance reaches 0 (unlimited uses)
- **No Database Required:** All credits stored in browser's local storage

### 🛡️ Safety & Compliance
- ✅ No real money involved
- ✅ No login/registration required
- ✅ Anonymous play (no personal data collection)
- ✅ No gambling licenses needed (entertainment only)
- ✅ Fair gaming with certified RNG
- ✅ 18+ age restriction
- ✅ Fully responsive (mobile, tablet, desktop)

### 🎨 Design
- **Theme:** Professional casino aesthetic with gold, purple, and dark colors
- **Responsive:** Works perfectly on all devices
- **Modern UI:** Smooth animations and intuitive controls
- **Sound System:** Toggle-able sound effects

---

## 📁 Project Structure

```
kachwaha-casino/
├── index.php                          # Homepage
├── assets/
│   ├── css/
│   │   └── style.css                 # Main stylesheet (professional theme)
│   ├── js/
│   │   ├── main.js                   # Credit system & utilities
│   │   ├── game-3patti.js            # 3 Patti game logic
│   │   ├── game-roulette.js          # Roulette game logic
│   │   ├── game-spinwheel.js         # Spin Wheel game logic
│   │   └── game-bingo.js             # Bingo game logic
│   ├── images/                       # (Optional) Game images
│   └── sounds/                       # (Optional) Sound effects
├── pages/
│   ├── games.php                     # Games listing page
│   ├── game-3patti.php               # 3 Patti game page
│   ├── game-roulette.php             # Roulette game page
│   ├── game-spinwheel.php            # Spin Wheel game page
│   ├── game-bingo.php                # Bingo game page
│   ├── about.php                     # About Us page
│   ├── how-to-play.php               # How to Play guide
│   ├── faq.php                       # FAQ page
│   ├── contact.php                   # Contact Us page
│   ├── responsible-gaming.php        # Responsible Gaming policy
│   ├── terms.php                     # Terms & Conditions
│   ├── privacy.php                   # Privacy Policy
│   └── disclaimer.php                # Disclaimer page
└── README.md                         # This file
```

---

## 🚀 Installation & Setup

### Requirements
- **Web Server:** Apache/Nginx with PHP support
- **PHP Version:** 7.4 or higher
- **Browser:** Modern browser with JavaScript enabled
- **No Database Required:** All data stored client-side

### Installation Steps

1. **Clone or Download the Project**
   ```bash
   git clone <repository-url>
   cd kachwaha-casino
   ```

2. **Deploy to Web Server**
   ```bash
   # Copy files to your web server directory
   cp -r kachwaha-casino/* /var/www/html/kachwaha/
   ```

3. **Set Permissions**
   ```bash
   chmod 755 /var/www/html/kachwaha/
   chmod 644 /var/www/html/kachwaha/*.php
   ```

4. **Access the Website**
   ```
   http://localhost/kachwaha/
   # or
   http://your-domain.com/kachwaha/
   ```

### Local Development

Using PHP's built-in server:
```bash
cd /path/to/kachwaha-casino
php -S localhost:8000
```

Then visit: `http://localhost:8000`

---

## 🎮 Game Details

### 3 Patti (Teen Patti)
- **Objective:** Beat the dealer with the best 3-card hand
- **Hand Rankings:** Trail > Pure Sequence > Sequence > Flush > Pair > High Card
- **Betting:** Call (2x payout) or Raise (4x payout)
- **Min Bet:** 10 credits

### Roulette
- **Objective:** Predict where the ball lands on the wheel
- **Betting Options:**
  - Straight (Number): 36x payout
  - Color (Red/Black): 2x payout
  - Odd/Even: 2x payout
- **Min Bet:** 10 credits

### Spin Wheel
- **Objective:** Spin and win instant credits
- **Cost:** 50 credits per spin
- **Prizes:** 25, 50, 75, 100, 125, 150, 175, 200 credits
- **Average Payout:** 2x+ your bet

### Bingo
- **Objective:** Complete rows, columns, or diagonals
- **Card:** 5x5 grid with FREE center space
- **Winning Patterns:** Row, Column, or Diagonal
- **Payout:** 5x your bet
- **Min Bet:** 10 credits

---

## 💻 Technology Stack

### Frontend
- **HTML5:** Semantic markup
- **CSS3:** Professional styling with animations
- **JavaScript:** Game logic and interactivity
- **Canvas API:** For Roulette and Spin Wheel visualization

### Backend
- **PHP:** Server-side rendering (minimal usage)
- **Local Storage API:** Client-side data persistence

### No External Dependencies
- No jQuery required
- No database needed
- No payment gateways
- No authentication system

---

## 🎯 Key JavaScript Classes

### CreditSystem
Manages virtual credits and daily bonuses
```javascript
creditSystem.getCredits()           // Get current balance
creditSystem.addCredits(amount)     // Add credits
creditSystem.deductCredits(amount)  // Deduct credits
creditSystem.checkDailyBonus()      // Claim daily bonus
creditSystem.topupCredits()         // Get free top-up
```

### SoundSystem
Controls game sound effects
```javascript
soundSystem.toggleSound()           // Toggle sound on/off
soundSystem.playSound('win')        // Play win sound
soundSystem.playSound('loss')       // Play loss sound
soundSystem.playSound('click')      // Play click sound
```

### Game Classes
- `ThreePatti` - 3 Patti game logic
- `Roulette` - Roulette game logic
- `SpinWheel` - Spin Wheel game logic
- `Bingo` - Bingo game logic

---

## 🎨 Customization

### Colors
Edit the CSS variables in `assets/css/style.css`:
```css
:root {
    --primary-dark: #0a0e27;
    --primary-light: #1a1f3a;
    --accent-gold: #d4af37;
    --accent-purple: #8b5cf6;
    --accent-purple-dark: #6d28d9;
    --text-light: #e5e7eb;
    --text-muted: #9ca3af;
    --success: #10b981;
    --danger: #ef4444;
    --warning: #f59e0b;
}
```

### Company Information
Update company details in:
- `index.php` - Footer section
- `pages/about.php` - Company information
- `pages/contact.php` - Contact details

### Game Payouts
Modify game payouts in respective game files:
- `assets/js/game-3patti.js` - Line ~150
- `assets/js/game-roulette.js` - Line ~200
- `assets/js/game-spinwheel.js` - Line ~40
- `assets/js/game-bingo.js` - Line ~250

---

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Desktop:** 1200px and above
- **Tablet:** 768px to 1199px
- **Mobile:** Below 768px

All games and pages adapt seamlessly to different screen sizes.

---

## ⚖️ Legal & Compliance

### Compliance Features
- ✅ Clear "For Entertainment Only" disclaimers
- ✅ No gambling language (uses "Play," "Spin," "Virtual Coins")
- ✅ 18+ age restriction
- ✅ Responsible Gaming policy
- ✅ Privacy Policy
- ✅ Terms & Conditions
- ✅ Disclaimer page
- ✅ Contact information

### Pages Included
1. **Homepage** - Hero section with features and games
2. **Games** - Game listing with comparison table
3. **About Us** - Company info, mission, values
4. **How to Play** - Detailed game guides
5. **FAQ** - Common questions answered
6. **Contact** - Contact form and information
7. **Responsible Gaming** - Responsible play guidelines
8. **Terms & Conditions** - Legal terms
9. **Privacy Policy** - Data handling
10. **Disclaimer** - Entertainment-only notice

---

## 🔒 Security Considerations

### Client-Side Security
- All data stored in browser's local storage
- No sensitive information collected
- No authentication required
- No payment processing

### Best Practices
- Use HTTPS in production
- Implement Content Security Policy (CSP)
- Regular security audits
- Keep dependencies updated

---

## 🐛 Troubleshooting

### Credits Not Showing
- Clear browser cache and refresh
- Check browser's local storage settings
- Try a different browser

### Games Not Loading
- Refresh the page
- Check internet connection
- Verify JavaScript is enabled
- Check browser console for errors

### Sound Not Working
- Click the sound button to enable
- Check device volume settings
- Some browsers require user interaction first

---

## 📊 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🚀 Deployment

### Hosting Options
1. **Shared Hosting** - Any PHP-enabled hosting
2. **VPS** - Virtual Private Server
3. **Cloud** - AWS, Google Cloud, Azure
4. **Docker** - Containerized deployment

### Deployment Steps
1. Upload files to web server
2. Set appropriate file permissions
3. Configure web server (Apache/Nginx)
4. Enable HTTPS
5. Test all games and pages

---

## 📈 Performance Optimization

- Minified CSS and JavaScript
- Optimized images
- Lazy loading for game assets
- Efficient DOM manipulation
- Local storage caching

---

## 🔄 Updates & Maintenance

### Regular Maintenance
- Monitor server logs
- Update security patches
- Test games regularly
- Check for broken links
- Update company information

### Future Enhancements
- More games (Slots, Blackjack, Poker)
- Leaderboards (optional)
- Achievements/Badges
- Social sharing
- Mobile app version

---

## 📞 Support & Contact

**Email:** support@kachwaha.com  
**Phone:** Available during business hours  
**Address:** Bokaro, Jharkhand, India

---

## 📄 License

KACHWAHA is owned and operated by KACHWAHA ENGINEERING SERVICES (OPC) PRIVATE LIMITED.

---

## ⚠️ Disclaimer

KACHWAHA is a social casino platform for **entertainment purposes only**. 
- No real money gambling
- Virtual coins have no real-world value
- Cannot be withdrawn or exchanged for money
- Intended for 18+ users only

For more information, see the [Disclaimer Page](pages/disclaimer.php).

---

## 🎉 Getting Started

1. Visit the homepage
2. Choose a game
3. Enter your bet amount
4. Play and have fun!
5. Claim daily bonuses
6. Use free top-ups when needed

**Enjoy KACHWAHA - Your Free Social Casino!** 🎰

---

**Last Updated:** January 2025  
**Version:** 1.0  
**Status:** Production Ready
