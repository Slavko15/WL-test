# WellnessLiving Explorer - Setup Guide

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 16.0 or higher
  - Check version: `node --version`
  - Download from: https://nodejs.org/

- **npm**: Usually comes with Node.js
  - Check version: `npm --version`

- **Git**: For version control (optional)
  - Check version: `git --version`

- **Modern Web Browser**:
  - Chrome 90+, Firefox 88+, Safari 14+, or Edge 90+

---

## 🚀 Installation Steps

### Step 1: Navigate to Project Directory

```bash
cd /workspace
```

### Step 2: Install Dependencies

This will install all required packages listed in `package.json`:

```bash
npm install
```

**What's being installed:**
- React & React DOM (UI library)
- React Router (routing)
- Vite (build tool)
- Tailwind CSS (styling)
- Lucide React (icons)
- PostCSS & Autoprefixer (CSS processing)

**Expected output:**
```
added 234 packages in 23s
```

### Step 3: Start Development Server

```bash
npm run dev
```

**Expected output:**
```
  VITE v5.0.8  ready in 432 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

### Step 4: Open in Browser

1. Open your web browser
2. Navigate to `http://localhost:3000`
3. You should see the WellnessLiving Explorer home page

---

## 🛠️ Development Workflow

### File Watching
Vite automatically watches for file changes. When you edit and save any file:
- Changes are reflected instantly in the browser (Hot Module Replacement)
- No need to manually refresh

### Making Changes

1. **Edit Components**: Navigate to `src/components/` or `src/pages/`
2. **Save File**: Changes auto-reload in browser
3. **Check Console**: Open browser DevTools (F12) for any errors

### Project Structure Navigation

```
src/
├── components/           # Reusable UI components
│   ├── Header.jsx       # Top navigation
│   ├── Footer.jsx       # Site footer
│   ├── BusinessCard.jsx # Business listing display
│   ├── FilterBar.jsx    # Search filter controls
│   ├── MapView.jsx      # Map with pins
│   └── OfferCard.jsx    # Special offer display
│
├── pages/               # Full page components
│   ├── HomePage.jsx     # Landing page (/)
│   ├── SearchResultsPage.jsx  # Search results (/search)
│   ├── OffersPage.jsx   # Offers listing (/offers)
│   └── BusinessDetailPage.jsx # Business detail (/business/:id)
│
├── data/
│   └── mockData.js      # Sample data
│
├── App.jsx              # Main app with routing
├── main.jsx             # Entry point
└── index.css            # Global styles
```

---

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#0ea5e9',  // Change this
        600: '#0284c7',  // And this
        // ...
      }
    }
  }
}
```

### Adding New Pages

1. Create new file in `src/pages/`, e.g., `AboutPage.jsx`
2. Add route in `src/App.jsx`:

```jsx
import AboutPage from './pages/AboutPage';

// In Routes component:
<Route path="/about" element={<AboutPage />} />
```

3. Add navigation link in `src/components/Header.jsx`

### Modifying Mock Data

Edit `src/data/mockData.js` to:
- Add/remove businesses
- Change pricing
- Update offers
- Modify categories

---

## 🏗️ Building for Production

### Create Production Build

```bash
npm run build
```

**Output:**
- Optimized files in `dist/` directory
- Minified JavaScript and CSS
- Optimized images and assets

### Preview Production Build

```bash
npm run preview
```

Then visit `http://localhost:4173`

### Deploy to Hosting

**Option 1: Netlify**
1. Sign up at https://netlify.com
2. Drag and drop `dist/` folder
3. Done!

**Option 2: Vercel**
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

**Option 3: Traditional Hosting**
1. Upload contents of `dist/` to web server
2. Point domain to `dist/index.html`
3. Configure server for SPA routing (redirect all to index.html)

---

## 🐛 Troubleshooting

### Issue: `npm install` fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Port 3000 already in use

**Solution:**
```bash
# Kill process on port 3000 (Linux/Mac)
lsof -ti:3000 | xargs kill -9

# Or specify different port
npm run dev -- --port 3001
```

### Issue: Browser shows blank page

**Check:**
1. Open browser console (F12) - look for errors
2. Verify dev server is running
3. Check network tab for failed requests
4. Ensure JavaScript is enabled

### Issue: Styles not applying

**Solution:**
```bash
# Rebuild Tailwind
npm run dev

# If still not working, clear cache
rm -rf node_modules/.vite
npm run dev
```

### Issue: Changes not reflecting

**Try:**
1. Hard refresh browser: `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)
2. Clear browser cache
3. Restart dev server
4. Check console for errors

---

## 📦 Package Management

### Adding New Dependencies

```bash
# Production dependency
npm install package-name

# Development dependency
npm install -D package-name
```

### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update all packages
npm update

# Update specific package
npm update package-name
```

### Removing Dependencies

```bash
npm uninstall package-name
```

---

## 🔍 Code Quality

### Linting (Optional)

To add ESLint for code quality:

```bash
npm install -D eslint eslint-plugin-react
npx eslint --init
```

### Formatting (Optional)

To add Prettier for code formatting:

```bash
npm install -D prettier
echo '{"semi": true, "singleQuote": true}' > .prettierrc
```

---

## 🧪 Testing (Future Enhancement)

### Setting Up Tests

```bash
# Install testing libraries
npm install -D vitest @testing-library/react @testing-library/jest-dom

# Add test script to package.json
"test": "vitest"

# Run tests
npm test
```

---

## 📚 Additional Resources

### Learning Materials

- **React**: https://react.dev/learn
- **React Router**: https://reactrouter.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Vite**: https://vitejs.dev/guide/

### Design Resources

- **Unsplash**: Free high-quality images
- **Lucide Icons**: https://lucide.dev/icons/
- **Tailwind UI**: https://tailwindui.com/components

### Community

- **React Discord**: https://discord.gg/react
- **Stack Overflow**: Tag questions with `reactjs`, `tailwindcss`, `vite`

---

## 🔐 Environment Variables (Future)

When you need to add API keys or configuration:

1. Create `.env` file in root:
```bash
VITE_API_URL=https://api.example.com
VITE_MAP_API_KEY=your_key_here
```

2. Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

3. Add `.env` to `.gitignore` (already included)

---

## ✅ Checklist

Before considering your setup complete:

- [ ] Node.js and npm installed
- [ ] Dependencies installed successfully
- [ ] Dev server runs without errors
- [ ] Home page loads in browser
- [ ] All navigation links work
- [ ] Search functionality works
- [ ] No console errors
- [ ] Images load correctly
- [ ] Mobile responsive (test with DevTools)
- [ ] Read README.md and DESIGN_GUIDE.md

---

## 🆘 Getting Help

If you encounter issues:

1. **Check Console**: Browser DevTools (F12) for errors
2. **Check Terminal**: Look for build errors
3. **Read Error Messages**: They usually point to the problem
4. **Search Online**: Copy error message to Google
5. **Check Documentation**: README.md and DESIGN_GUIDE.md

---

## 🎉 You're Ready!

Your development environment is set up. Start building:

1. Explore the codebase
2. Make small changes to understand structure
3. Reference DESIGN_GUIDE.md for styling
4. Check mockData.js for data structure
5. Have fun building!

**Happy Coding! 🚀**
