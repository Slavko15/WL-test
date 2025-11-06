# ⚡ WellnessLiving Explorer - Quick Start

Get up and running in 3 minutes!

## 🚀 Install & Run

```bash
# 1. Navigate to project
cd /workspace

# 2. Install dependencies (takes ~30 seconds)
npm install

# 3. Start development server
npm run dev
```

**Open browser**: http://localhost:3000

---

## 🗺️ Navigation Guide

### Pages to Explore

1. **Home** (`/`)
   - Click "Search" button to see results
   - Click any of the 4 category cards (Personal Training, Massage, Yoga, Pilates)

2. **Search Results** (`/search`)
   - Try the filter dropdowns
   - Hover over business cards to see map pins highlight
   - Click "Hide Map" to see list-only view
   - Click any business card for details

3. **Offers** (`/offers`)
   - View special deals and packages
   - Try the search box
   - Change sort order dropdown
   - Click "Buy Now" on any offer

4. **Business Detail** (`/business/1`)
   - Switch between Overview, Services, and Reviews tabs
   - Click different services to update price
   - Check out the available time slots
   - View ratings and reviews

---

## 🎨 Try These Features

### On Home Page
- [x] Enter a search term (try "massage" or "yoga")
- [x] Change the location
- [x] Select a time of day
- [x] Click Search button

### On Search Results
- [x] Click "Activity Type" filter
- [x] Select "Massage Therapy" or "Yoga"
- [x] Hover over a business card (watch map pin highlight)
- [x] Click a time slot button (1:30 PM, etc.)
- [x] Toggle "Show Map" / "Hide Map"

### On Business Detail
- [x] Scroll through image gallery
- [x] Click "Services" tab
- [x] Select a different service
- [x] Read customer reviews
- [x] Click "Book Now" button

---

## 📝 Make Your First Edit

### Change Home Page Headline

1. Open `src/pages/HomePage.jsx`
2. Find line ~39: `Discover & Book Your`
3. Change to: `Find & Reserve Your`
4. Save file
5. Watch browser auto-update! 🎉

### Change Primary Color

1. Open `tailwind.config.js`
2. Find `primary` colors (line ~11)
3. Change `600: '#0284c7'` to `600: '#7c3aed'` (purple)
4. Save and see the change!

### Add Your Own Business

1. Open `src/data/mockData.js`
2. Copy any business object (lines 31-62)
3. Paste at end of `businesses` array
4. Change: name, type, price, address
5. Update `id` to `7`
6. Save and visit search page!

---

## 🐛 Something Wrong?

### Port Already in Use?
```bash
# Use different port
npm run dev -- --port 3001
```

### Blank Page?
1. Check terminal for errors
2. Open browser console (F12)
3. Look for error messages

### Dependencies Failed?
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Next Steps

Once you're comfortable:

1. **Read README.md** - Full feature guide
2. **Check DESIGN_GUIDE.md** - Design system details
3. **Review SETUP.md** - Advanced configuration

---

## 🎯 Common Tasks

### Build for Production
```bash
npm run build
# Creates 'dist/' folder
```

### Preview Production Build
```bash
npm run preview
# Visit http://localhost:4173
```

### Add a New Page
1. Create `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`
3. Add nav link in `src/components/Header.jsx`

---

## ✅ You're Ready!

**Explore the app** → **Make changes** → **See live updates**

Have fun! 🎉

---

Need more detail? Read:
- `README.md` - Comprehensive guide
- `SETUP.md` - Detailed setup
- `DESIGN_GUIDE.md` - Design specs
- `PROJECT_SUMMARY.md` - Overview
