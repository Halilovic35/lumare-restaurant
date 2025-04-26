# Lumare Restaurant Website

A modern, responsive website for Lumare Restaurant built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design for all devices
- Modern UI with smooth animations
- Interactive menu section
- Photo gallery
- Contact form with email integration
- Mobile-friendly navigation

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- EmailJS
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/lumare-restaurant-website.git
cd lumare-restaurant-website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
  ├── components/         # React components
  │   ├── MobileNav.tsx   # Mobile navigation
  │   ├── MenuSection.tsx # Menu section
  │   ├── GallerySection.tsx # Gallery section
  │   └── ContactSection.tsx # Contact section
  ├── App.tsx            # Main App component
  ├── main.tsx           # Entry point
  └── index.css          # Global styles
public/
  └── images/            # Image assets
    ├── menu/            # Menu item images
    └── gallery/         # Gallery images
```

## Customization

### Colors

You can customize the color scheme by modifying the `tailwind.config.js` file:

```js
theme: {
  extend: {
    colors: {
      primary: "#FF6B6B",
      secondary: "#4ECDC4",
      dark: "#2D3436",
      light: "#F5F5F5",
    },
  },
},
```

### Fonts

The project uses Inter and Playfair Display fonts. You can change them in the `tailwind.config.js` file:

```js
fontFamily: {
  sans: ['Inter', 'sans-serif'],
  serif: ['Playfair Display', 'serif'],
},
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/lumare-restaurant-website](https://github.com/yourusername/lumare-restaurant-website)
