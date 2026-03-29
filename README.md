# Insight Towers - Research Solutions Website

## 📋 Overview
Insight Towers is a professional landing page website offering premium research services for academic students (especially MBA), research firms, and corporate executives (CXOs). The site showcases services like ready-to-submit projects, market analysis reports, strategic whitepapers, and data-driven insights.

**Live Demo:** Open `index.html` in your browser or serve via XAMPP (already in htdocs).

## ✨ Key Features
- **Hero Section** - Compelling call-to-action with dual buttons
- **Services Grid** - 3 premium service cards (MBA Projects, Research Reports, Executive Strategy)
- **Interactive Samples** - Filterable portfolio (Marketing, Finance, HR, Analytics) with 6 sample projects
- **5-Step Process** - Visual workflow from requirement to delivery
- **Testimonials Slider** - Auto-rotating client reviews
- **Contact Form** - Fully functional JS form submission
- **Mobile-First Responsive** - Optimized for all devices
- **Smooth Interactions** - Sticky header, mobile hamburger menu, smooth scrolling

## 🛠️ Tech Stack
| Category | Technologies |
|----------|--------------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Styling** | Custom CSS with CSS Variables, Flexbox/Grid |
| **Icons/Fonts** | Font Awesome 6, Google Fonts (Poppins, Playfair Display) |
| **Responsive** | Mobile-first media queries |
| **Images** | Placeholder-ready (samples expect `images/sample-1.jpg` to `sample-6.jpg`) |

## 📁 Project Structure
```
Insight Towers/
├── index.html          # Main landing page
├── css/
│   ├── style.css       # Core styles & components
│   └── responsive.css  # Mobile-first media queries
└── js/
    └── script.js       # All interactivity (menu, tabs, slider, form, scroll)
```

**Note:** Sample images referenced in JS are not included. Add `images/sample-1.jpg` through `sample-6.jpg` for full visual samples.

## 🚀 Quick Start (XAMPP)
1. **Already Setup:** Project is in `c:/xampp/htdocs/Insight Towers`
2. **Start Apache:** XAMPP Control Panel → Start Apache
3. **Access Site:** Open `http://localhost/Insight Towers/` in browser
4. **Edit Locally:** Modify files directly, refresh browser to see changes

### Development Workflow
```bash
# Serve locally (if not using XAMPP)
# Option 1: Live Server (VSCode extension)
# Option 2: Python server
cd "c:/xampp/htdocs/Insight Towers"
python -m http.server 8000
# Visit: http://localhost:8000

# Or use PHP built-in server
php -S localhost:8000
```

## 📱 Fully Responsive
| Breakpoint | Devices | Features |
|------------|---------|----------|
| ≤600px | Phones | Stacked layouts, hamburger menu |
| 600-992px | Tablets | 2-column grids |
| ≥992px | Desktop | 3-column services, full process timeline |
| ≥1200px | Large screens | Enhanced spacing |

## 🎨 Customization
1. **Colors:** Edit CSS `:root` variables (`--primary-color`, etc.)
2. **Content:** Update `index.html` sections directly
3. **Samples:** Add real images to `images/` folder
4. **Form:** Replace `console.log` in `script.js` with real backend (EmailJS, Netlify Forms, PHP)

## 📸 Screenshots
```
[Hero Section]          [Services Grid]         [Samples Filter]
    [Image]                [Image]                 [Image]

[Process Timeline]      [Testimonials]          [Contact Form]
    [Image]                [Image]                 [Image]
```

## 🔧 Scripts Overview (script.js)
- Mobile menu toggle & sticky header
- Sample filtering/tabs with dynamic grid population
- Testimonial auto-slider (5s interval)
- Contact form validation & submission
- Smooth scrolling for anchor links

## 📞 Contact
- **Email:** insighttowers@outlook.com
- **Phone/WhatsApp:** +91-XXXXXXXXXX
- **Services:** [View Services](#services)

## 🤝 Contributing
1. Fork/Clone the repo
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push & Submit PR

## 📄 License
This project is open-source under MIT License. See [LICENSE](LICENSE) file for details.

```
**Built with ❤️ for research excellence** | © 2025 Insight Towers

