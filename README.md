# 📅 Age Calculator

A sleek and modern web-based age calculator that precisely computes your age in years, months, and days. Built with vanilla JavaScript, this application features comprehensive input validation, special birthday detection, and a beautiful dark-themed user interface.

## 🌐 Live Demo

**[View Live Demo](https://code-alpha-kles.vercel.app/)**

## ✨ Features

- **Precise Age Calculation** - Calculates exact age in years, months, and days
- **Birthday Detection** - Special congratulatory message when it's your birthday
- **Input Validation** - Validates date, month, and year inputs with regex patterns
- **Invalid Date Detection** - Prevents impossible dates (e.g., February 30th)
- **Future Date Prevention** - Ensures birth date cannot be in the future
- **Responsive Design** - Works seamlessly on all device sizes
- **Dark Theme UI** - Modern, eye-friendly interface with smooth animations
- **Real-time Feedback** - Instant validation messages for incorrect inputs

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with gradients, transitions, and animations
- **JavaScript (ES6)** - Vanilla JS for all functionality
- **Regex** - Input validation patterns
- **Date API** - JavaScript Date object for calculations

## 🚀 How It Works

1. Enter your birth date (day: 1-31)
2. Enter your birth month (month: 1-12)
3. Enter your birth year (format: 1900-2099)
4. Click "Calculate Age" button
5. View your precise age or special birthday message

The calculator validates:
- ✅ Valid date range (1-31)
- ✅ Valid month range (1-12)
- ✅ Valid year format (1900-2099)
- ✅ Real dates (prevents Feb 30, etc.)
- ✅ Past dates only (no future dates)

## 📦 Installation & Usage

### Local Setup

1. Clone the repository:
```bash
git clone https://github.com/Akash235711/CodeAlpha.git
```

2. Navigate to the project directory:
```bash
cd CodeAlpha
```

3. Open `index.html` in your browser:
```bash
# On Windows
start index.html

# On Mac
open index.html

# On Linux
xdg-open index.html
```

Or simply drag and drop `index.html` into your browser.

## 📁 Project Structure

```
├── index.html      # Main HTML file
├── cal1.css        # Stylesheet with dark theme
├── cal1.js         # JavaScript logic and validation
└── README.md       # Project documentation
```

## 🎨 Color Palette

- **Primary Background**: `#1A1A2E` - Deep navy
- **Secondary Background**: `#16213E` - Dark blue
- **Accent Background**: `#0F3460` - Ocean blue
- **Primary Accent**: `#E94560` - Coral red
- **Text**: White with various opacities

## 🧮 Calculation Logic

The calculator uses JavaScript's Date object to:
1. Create a Date from user inputs
2. Validate the date actually exists
3. Compare with current date
4. Calculate year, month, and day differences
5. Handle edge cases (negative days/months)
6. Display special message on birthdays

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Akash235711**
- GitHub: [@Akash235711](https://github.com/Akash235711)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🌟 Acknowledgments

- Developed as part of CodeAlpha internship
- Inspired by the need for accurate age calculations
- Designed with modern web standards and best practices

---

**Made with ❤️ by Akash235711**
