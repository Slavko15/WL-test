# WellnessLiving Explorer

A modern, responsive web application for discovering, comparing, and booking wellness services (fitness, health, and beauty) in your area.

![WellnessLiving Explorer](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.6-38bdf8.svg)

## 🌟 Features

### Core User Experience
- **Intuitive Discovery**: Welcoming home page with hero search and popular activity categories
- **Smart Search**: Multi-parameter search with autocomplete, location, and time preferences
- **Advanced Filtering**: Filter by activity type, amenities, distance, price, and more
- **Interactive Map View**: Live map with pins showing business locations and pricing
- **Detailed Business Profiles**: Comprehensive information including services, reviews, and booking
- **Special Offers**: Dedicated page for packages, deals, and introductory offers

### Design Principles
- **Accessibility First**: Large clickable areas, high contrast, readable typography
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Trust & Transparency**: Verified badges, visible ratings, upfront pricing
- **Progressive Disclosure**: Essential info upfront, details expand on demand
- **Familiar Patterns**: Borrowed UX from Airbnb, ClassPass, and other marketplaces

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm (or yarn)
- Modern web browser

### Installation

1. **Clone or navigate to the project directory**
```bash
cd /workspace
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:3000` to see the application.

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## 📁 Project Structure

```
/workspace
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Footer.jsx       # Site footer
│   │   ├── BusinessCard.jsx # Business listing card
│   │   ├── FilterBar.jsx    # Search filters
│   │   ├── MapView.jsx      # Interactive map
│   │   └── OfferCard.jsx    # Special offer card
│   ├── pages/               # Main application pages
│   │   ├── HomePage.jsx     # Landing/discovery page
│   │   ├── SearchResultsPage.jsx  # Search results with filters
│   │   ├── OffersPage.jsx   # Special offers listing
│   │   └── BusinessDetailPage.jsx # Business detail view
│   ├── data/
│   │   └── mockData.js      # Sample business and offer data
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles and Tailwind
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue shades (#0ea5e9 - #0c4a6e) for CTAs and interactive elements
- **Wellness**: Cream (#faf8f5), Sage (#9ca896), Earth (#8b7d6b) for calming ambiance
- **Semantic**: Yellow for ratings, Green for verification, Red for discounts

### Typography
- **Font Family**: Inter (Google Fonts) for clean, modern readability
- **Sizes**: Responsive scale from 14px (mobile) to 18px (desktop) base

### Components
Custom component classes defined in `index.css`:
- `.btn-primary` - Primary action buttons
- `.btn-secondary` - Secondary action buttons
- `.input-field` - Form inputs with focus states
- `.card` - Content cards with hover effects
- `.chip` - Filter chips with remove buttons

## 🧭 User Flows

### 1. Discovery Flow (Home → Search)
1. User lands on home page
2. Sees hero with search bar + popular categories
3. Either searches or clicks a category card
4. Navigates to search results

### 2. Search & Filter Flow
1. User enters search terms, location, time
2. Views results in list or map view
3. Applies filters (activity, amenities, distance, price)
4. Hovers over cards to highlight map pins
5. Clicks card to view business details

### 3. Booking Flow
1. User clicks on a business card or map pin
2. Views detailed business profile with tabs
3. Selects a service and available time slot
4. Clicks "Book Now" (payment flow would continue)

### 4. Offers Flow
1. User navigates to "Offers" page
2. Browses curated special deals and packages
3. Filters by search or sorts by price/discount
4. Clicks "Buy Now" on desired offer

## 📊 Sample Data

The application includes rich mock data in `src/data/mockData.js`:
- **6 Businesses** across different wellness categories
- **6 Special Offers** with discounts and packages
- **Multiple Services** per business with pricing
- **Reviews** and ratings for social proof
- **Amenities** for filtering

### Data Structure Examples

**Business Object:**
```javascript
{
  id: 1,
  name: "Serenity Wellness Studio",
  type: "Massage Therapy",
  rating: 4.9,
  reviewCount: 234,
  distance: "0.8 km",
  address: "123 Queen Street West, Toronto, ON",
  image: "...",
  verified: true,
  price: 95,
  duration: "60 min",
  instructor: "Sarah Thompson, RMT",
  amenities: ["Parking", "Wheelchair Accessible", ...],
  services: [...],
  reviews: [...]
}
```

**Offer Object:**
```javascript
{
  id: 1,
  businessId: 1,
  title: "Intro Massage Therapy 3-Session Package",
  price: 255,
  originalPrice: 285,
  sessions: 3,
  eligibility: "New Clients Only",
  topChoice: true,
  ...
}
```

## 🎯 Key UX Features

### Home Page
- **Hero Section**: Large search bar with 3 fields (service, location, time)
- **Top Activities**: 4 clickable category cards with engaging imagery
- **Trust Indicators**: Statistics (150k+ services, 50k+ providers)
- **How It Works**: 3-step process explanation

### Search Results
- **Dual-Pane Layout**: List view on left, map on right (toggleable)
- **Sticky Filter Bar**: Always accessible without scrolling
- **Smart Filters**: Activity type, amenities, distance, price with chip visualization
- **Interactive Cards**: Show key info + available time slots
- **Map Integration**: Hover sync between cards and pins

### Business Detail
- **Rich Media Gallery**: High-quality images with thumbnails
- **Tabbed Content**: Overview, Services, Reviews
- **Sticky Booking Card**: Price, time selection, CTA always visible
- **Trust Elements**: Verified badge, ratings, reviews, amenities
- **Location Map**: Static map with business pin

### Offers Page
- **Visual Hierarchy**: Top Choice ribbon for featured offers
- **Discount Badges**: Clear % savings display
- **Eligibility Tags**: "New Clients Only", etc.
- **Search & Sort**: Find offers by keyword, sort by price/discount
- **Quick Purchase**: "Buy Now" CTA on each card

## ♿ Accessibility

- **ARIA Labels**: All icon buttons have descriptive labels
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Color Contrast**: WCAG AA compliant color combinations
- **Large Touch Targets**: Minimum 44x44px for mobile interactions
- **Focus States**: Clear visual indicators for keyboard navigation
- **Screen Reader Friendly**: Semantic HTML and proper heading hierarchy

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px (vertical layout, single column)
- **Tablet**: 640px - 1024px (adapted grid, collapsible filters)
- **Desktop**: > 1024px (full dual-pane, map always visible)

### Mobile Optimizations
- Stack search fields vertically
- Hide map by default (toggle to show)
- Simplified filter interface with modal
- Large touch-friendly buttons
- Optimized image sizes

## 🔧 Technology Stack

- **React 18.2**: Modern UI library with hooks
- **React Router 6**: Client-side routing
- **Vite 5**: Fast development and build tooling
- **Tailwind CSS 3.3**: Utility-first CSS framework
- **Lucide React**: Beautiful, consistent icons
- **PostCSS & Autoprefixer**: CSS processing

## 🚦 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code (if configured)
npm run lint
```

## 🌐 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Future Enhancements

### Phase 2 Features
- [ ] Real authentication and user accounts
- [ ] Live booking calendar integration
- [ ] Payment processing (Stripe/PayPal)
- [ ] Email notifications and confirmations
- [ ] User reviews and ratings submission
- [ ] Favorites/wishlists with persistence
- [ ] Real map integration (Google Maps/Mapbox)
- [ ] Geolocation for automatic location detection

### Phase 3 Features
- [ ] Business owner dashboard
- [ ] Advanced analytics and insights
- [ ] Mobile app (React Native)
- [ ] Multi-language support
- [ ] Accessibility audit and WCAG AAA compliance
- [ ] A/B testing infrastructure
- [ ] Performance monitoring

## 🤝 Contributing

This is a demonstration project showcasing UX best practices for wellness booking platforms. 

### Key Guidelines
1. Maintain accessibility standards
2. Follow existing design patterns
3. Keep mobile-first approach
4. Test across devices and browsers
5. Update documentation for new features

## 📄 License

MIT License - feel free to use this project as a reference or starting point for your own wellness booking platform.

## 👥 Target Audience

- **Primary**: Gen-X users and small business owners (not highly tech-savvy)
- **Secondary**: Health and wellness enthusiasts of all ages
- **Business Users**: Wellness service providers seeking exposure

## 💡 Design Philosophy

This application follows the principle of **"Familiar, Fast, and Trustworthy"**:

1. **Familiar**: Uses established patterns from Airbnb, ClassPass, and e-commerce sites
2. **Fast**: Minimal clicks from discovery to booking, progressive disclosure
3. **Trustworthy**: Verified badges, transparent pricing, visible reviews

---

**Built with ❤️ for the wellness community**

For questions or support, please open an issue or reach out to the development team.
