# 📋 WellnessLiving Explorer - File Index

Quick reference guide to all project files and their purposes.

---

## 🚀 START HERE

**New to the project?** Read these in order:

1. **[QUICKSTART.md](QUICKSTART.md)** ⚡ (3 min read)
   - Get running in 3 minutes
   - Try key features
   - Make your first edit

2. **[README.md](README.md)** 📘 (15 min read)
   - Complete feature overview
   - Technology stack
   - User flows and data structure

3. **[SETUP.md](SETUP.md)** 🛠️ (10 min read)
   - Detailed installation
   - Troubleshooting
   - Customization guide
   - Deployment options

4. **[DESIGN_GUIDE.md](DESIGN_GUIDE.md)** 🎨 (20 min read)
   - Complete design system
   - Color palette & typography
   - Component specifications
   - Accessibility guidelines

5. **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** 📊 (5 min read)
   - High-level overview
   - What was built
   - Deliverables checklist

---

## 📁 Project Structure

```
/workspace/
│
├── 📚 Documentation (5 files)
│   ├── QUICKSTART.md        - 3-minute quick start
│   ├── README.md            - Main documentation
│   ├── SETUP.md             - Setup & troubleshooting
│   ├── DESIGN_GUIDE.md      - Design system specs
│   ├── PROJECT_SUMMARY.md   - Project overview
│   └── INDEX.md             - This file!
│
├── ⚙️ Configuration (6 files)
│   ├── package.json         - Dependencies & scripts
│   ├── package-lock.json    - Locked dependency versions
│   ├── vite.config.js       - Vite build configuration
│   ├── tailwind.config.js   - Tailwind theme & colors
│   ├── postcss.config.js    - PostCSS configuration
│   └── .gitignore           - Git ignore rules
│
├── 🌐 HTML Entry
│   └── index.html           - Main HTML file
│
└── 💻 Source Code (src/)
    ├── 📄 Entry Points (3 files)
    │   ├── main.jsx         - React entry point
    │   ├── App.jsx          - Main app with routing
    │   └── index.css        - Global styles
    │
    ├── 📱 Pages (4 files)
    │   ├── HomePage.jsx              - Landing/discovery
    │   ├── SearchResultsPage.jsx     - Search with filters
    │   ├── OffersPage.jsx            - Special offers
    │   └── BusinessDetailPage.jsx    - Business details
    │
    ├── 🧩 Components (6 files)
    │   ├── Header.jsx       - Navigation header
    │   ├── Footer.jsx       - Site footer
    │   ├── BusinessCard.jsx - Business listing card
    │   ├── FilterBar.jsx    - Search filters
    │   ├── MapView.jsx      - Interactive map
    │   └── OfferCard.jsx    - Offer card
    │
    └── 💾 Data (1 file)
        └── mockData.js      - Sample businesses & offers
```

---

## 📚 Documentation Files

### QUICKSTART.md
**Purpose**: Get started in 3 minutes  
**When to read**: First time user  
**Contains**:
- Install & run commands
- Feature exploration guide
- First edit tutorial
- Common issues & fixes

### README.md
**Purpose**: Comprehensive project guide  
**When to read**: After quick start  
**Contains**:
- Feature overview
- Technology stack
- Project structure
- User flows
- Data structure examples
- Development commands
- Future enhancements

### SETUP.md
**Purpose**: Detailed setup and configuration  
**When to read**: Setting up dev environment  
**Contains**:
- Step-by-step installation
- Troubleshooting guide
- Customization instructions
- Deployment options
- Package management
- Environment variables

### DESIGN_GUIDE.md
**Purpose**: Design system specification  
**When to read**: Styling or creating components  
**Contains**:
- Color system
- Typography scale
- Spacing system
- Component specs
- Layout patterns
- Accessibility rules
- Animation guidelines
- Best practices

### PROJECT_SUMMARY.md
**Purpose**: High-level project overview  
**When to read**: Need quick overview  
**Contains**:
- What was built
- File structure
- Technologies used
- Key features
- Mock data overview
- Success criteria
- Next steps

---

## ⚙️ Configuration Files

### package.json
**Purpose**: Node.js project configuration  
**Contains**:
- Project metadata (name, version)
- Dependencies (React, Tailwind, etc.)
- Scripts (dev, build, preview)
- DevDependencies

**Key Scripts**:
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### vite.config.js
**Purpose**: Vite build tool configuration  
**Contains**:
- React plugin setup
- Server configuration (port 3000)
- Build optimizations

### tailwind.config.js
**Purpose**: Tailwind CSS customization  
**Contains**:
- Content paths (where to look for classes)
- Theme extensions (colors, fonts)
- Primary color palette
- Wellness color palette
- Custom font family (Inter)

### postcss.config.js
**Purpose**: CSS processing configuration  
**Contains**:
- Tailwind CSS plugin
- Autoprefixer plugin

### .gitignore
**Purpose**: Git ignore rules  
**Ignores**:
- node_modules/
- dist/
- .env files
- Editor folders (.vscode, .idea)
- OS files (.DS_Store)

---

## 💻 Source Code Files

### Entry Points

#### main.jsx
**Purpose**: React application entry point  
**Lines**: 10  
**Responsibilities**:
- Import React and ReactDOM
- Mount App component to #root
- Wrap in StrictMode

#### App.jsx
**Purpose**: Main application component  
**Lines**: 31  
**Responsibilities**:
- Setup React Router
- Define all routes
- Include Header and Footer
- Layout structure

#### index.css
**Purpose**: Global styles and Tailwind  
**Lines**: 43  
**Contains**:
- Tailwind directives (@tailwind)
- Base styles (body, headings)
- Custom component classes (.btn-primary, .card, etc.)

---

### Pages (4 Components)

#### HomePage.jsx (/)
**Lines**: 233  
**Purpose**: Landing and discovery page  
**Features**:
- Hero section with search
- 4 category cards
- Trust indicators (150k+ services)
- How it works section
- Responsive design

**State**:
- `searchQuery` - Search input value
- `location` - Location input value
- `timeOfDay` - Time preference

#### SearchResultsPage.jsx (/search)
**Lines**: 136  
**Purpose**: Search results with filtering  
**Features**:
- Filter bar (sticky)
- Business cards list
- Interactive map (toggleable)
- Hover sync between list & map
- Dynamic filtering

**State**:
- `showMap` - Toggle map visibility
- `hoveredBusiness` - Currently hovered business
- `activeFilters` - Selected filters (activity, amenities)

#### OffersPage.jsx (/offers)
**Lines**: 148  
**Purpose**: Special offers and packages  
**Features**:
- Offer cards grid
- Search functionality
- Sort options (featured, price, discount)
- Top Choice badges
- Discount percentages

**State**:
- `searchQuery` - Search filter
- `sortBy` - Sort order (featured, price-low, price-high, discount)

#### BusinessDetailPage.jsx (/business/:id)
**Lines**: 399  
**Purpose**: Detailed business information  
**Features**:
- Image gallery
- Tabbed content (Overview, Services, Reviews)
- Sticky booking card
- Service selection
- Time slots
- Reviews display
- Contact information

**State**:
- `activeTab` - Current tab (overview, services, reviews)
- `selectedService` - Currently selected service

---

### Components (6 Reusable)

#### Header.jsx
**Lines**: 68  
**Purpose**: Top navigation bar  
**Features**:
- Logo and branding
- Navigation links (Discover, Search, Offers)
- User actions (Favorites, Account)
- Mobile menu icon
- Active route highlighting

#### Footer.jsx
**Lines**: 63  
**Purpose**: Site footer  
**Contains**:
- Four column layout
- About, For Businesses, Support, Connect links
- Social media icons
- Copyright notice

#### BusinessCard.jsx
**Lines**: 95  
**Purpose**: Display business in search results  
**Props**:
- `business` - Business object
- `onHover` - Hover callback (for map sync)
- `onLeave` - Mouse leave callback

**Features**:
- Business image
- Name, verified badge, rating
- Address, distance, type
- Price and time slots
- Click to view details
- Hover highlights map pin

#### FilterBar.jsx
**Lines**: 184  
**Purpose**: Search filtering interface  
**Props**:
- `activeFilters` - Current filter state
- `onFilterChange` - Filter update callback
- `onClearFilters` - Clear all callback

**Features**:
- Quick filter buttons
- Activity type dropdown
- Filter chips with remove
- "All Filters" modal
- Clear all functionality

#### MapView.jsx
**Lines**: 99  
**Purpose**: Interactive map with business pins  
**Props**:
- `businesses` - Array of businesses to show
- `hoveredBusiness` - Currently hovered business
- `onBusinessClick` - Click callback

**Features**:
- Mock map background
- Business location pins
- Price display on pins
- Tooltip on hover
- Zoom controls
- Highlight on hover sync

#### OfferCard.jsx
**Lines**: 99  
**Purpose**: Display special offers  
**Props**:
- `offer` - Offer object

**Features**:
- Top Choice ribbon (conditional)
- Discount badge
- Business info with verified badge
- Session details
- Eligibility tag
- Price comparison (original vs. sale)
- Buy Now CTA

---

### Data

#### mockData.js
**Lines**: 280  
**Purpose**: Sample data for demo  
**Exports**:

1. **`categories`** (4 items)
   - Personal Training, Massage, Yoga, Pilates
   - Each with: id, name, icon, image

2. **`businesses`** (6 items)
   - Complete business profiles
   - Services, reviews, amenities
   - Location data for map

3. **`offers`** (6 items)
   - Special packages and deals
   - Pricing, sessions, eligibility
   - Linked to businesses

4. **`amenities`** (18 items)
   - Filter options list

5. **`activityTypes`** (7 items)
   - Filter options list

---

## 🎯 File Purpose Quick Reference

| Need to... | Edit this file |
|------------|---------------|
| Change home page content | `src/pages/HomePage.jsx` |
| Add a business | `src/data/mockData.js` |
| Change colors | `tailwind.config.js` |
| Add a new page | `src/pages/NewPage.jsx` + `src/App.jsx` |
| Modify navigation | `src/components/Header.jsx` |
| Update footer links | `src/components/Footer.jsx` |
| Change card design | `src/components/BusinessCard.jsx` |
| Adjust filters | `src/components/FilterBar.jsx` |
| Style buttons/forms | `src/index.css` |
| Add dependencies | `package.json` (then run `npm install`) |

---

## 📊 File Statistics

**Total Files**: 26 (excluding node_modules, git)
- Documentation: 6 files (~42,000 words)
- Configuration: 6 files
- Source Code: 13 files (~2,100 lines)
- HTML: 1 file

**Lines of Code by Type**:
- JavaScript/JSX: ~2,100 lines
- CSS: ~43 lines (+ Tailwind utilities)
- Markdown: ~42,000 words
- JSON: ~200 lines

**Project Size**: ~400KB (excluding node_modules)
**With Dependencies**: ~50MB

---

## 🗂️ File Dependencies

### Import Graph (Simplified)

```
main.jsx
  └── App.jsx
      ├── Header.jsx
      │   └── lucide-react (Search, MapPin, etc.)
      ├── Footer.jsx
      │   └── lucide-react
      └── Pages/
          ├── HomePage.jsx
          │   ├── categories (from mockData)
          │   └── lucide-react
          ├── SearchResultsPage.jsx
          │   ├── FilterBar.jsx
          │   ├── BusinessCard.jsx
          │   ├── MapView.jsx
          │   └── businesses (from mockData)
          ├── OffersPage.jsx
          │   ├── OfferCard.jsx
          │   └── offers (from mockData)
          └── BusinessDetailPage.jsx
              └── businesses (from mockData)
```

---

## ✅ Quick Checklist

Before starting development:
- [ ] Read QUICKSTART.md
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Open http://localhost:3000
- [ ] Browse all 4 pages
- [ ] Check browser console (no errors)
- [ ] Review README.md for details

Before customizing:
- [ ] Review DESIGN_GUIDE.md
- [ ] Understand mockData.js structure
- [ ] Check component props in source files
- [ ] Test changes on mobile (DevTools)

Before deploying:
- [ ] Run `npm run build`
- [ ] Fix any build errors
- [ ] Test with `npm run preview`
- [ ] Check all pages load
- [ ] Verify mobile responsiveness

---

## 🔗 External Dependencies

### Production Dependencies
- **react** (18.2.0) - UI library
- **react-dom** (18.2.0) - React DOM renderer
- **react-router-dom** (6.20.0) - Routing
- **lucide-react** (0.294.0) - Icons

### Development Dependencies
- **vite** (5.0.8) - Build tool
- **@vitejs/plugin-react** (4.2.1) - React plugin for Vite
- **tailwindcss** (3.3.6) - CSS framework
- **postcss** (8.4.32) - CSS processing
- **autoprefixer** (10.4.16) - CSS vendor prefixes

---

## 📞 Need Help?

1. **Getting started**: Read QUICKSTART.md
2. **Installation issues**: Check SETUP.md troubleshooting section
3. **Design questions**: Reference DESIGN_GUIDE.md
4. **Feature details**: See README.md
5. **Code errors**: Check browser console and terminal output

---

**This index is your map to the entire project. Bookmark it!** 🗺️
