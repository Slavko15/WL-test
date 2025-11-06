# WellnessLiving Explorer - Design Guide

## 🎨 Visual Design System

### Brand Identity

**Mission**: Help users discover, compare, and book wellness services with confidence and ease.

**Brand Values**:
- Trust & Transparency
- Simplicity & Clarity
- Wellness & Balance
- Community & Connection

---

## Color System

### Primary Palette
```css
Primary Blue:
- 50:  #f0f9ff (backgrounds, hover states)
- 100: #e0f2fe (light backgrounds)
- 500: #0ea5e9 (CTAs, links)
- 600: #0284c7 (primary buttons)
- 700: #0369a1 (button hover states)
```

**Usage**: 
- Primary CTAs (Book Now, Search, Buy)
- Interactive elements (links, icons)
- Focus states
- Selected/active states

### Wellness Palette
```css
Wellness Colors:
- Cream:  #faf8f5 (page backgrounds)
- Sage:   #9ca896 (accent borders)
- Earth:  #8b7d6b (secondary text)
- Forest: #4a5843 (headers)
```

**Usage**:
- Background surfaces
- Calming accents
- Natural, organic feel
- Wellness-specific branding

### Semantic Colors
```css
Success (Verification): #10b981
Warning (Pending): #f59e0b
Error (Alert): #ef4444
Rating (Stars): #fbbf24
Discount: #dc2626
```

---

## Typography

### Font Family
**Primary**: Inter (Google Fonts)
- Modern, highly legible sans-serif
- Excellent at small and large sizes
- Wide range of weights available

### Type Scale

#### Desktop
```
Hero Heading:    60px / 4rem (font-bold)
Page Heading:    48px / 3rem (font-bold)
Section Heading: 36px / 2.25rem (font-semibold)
Card Heading:    24px / 1.5rem (font-semibold)
Body Large:      18px / 1.125rem (font-normal)
Body:            16px / 1rem (font-normal)
Body Small:      14px / 0.875rem (font-normal)
Caption:         12px / 0.75rem (font-normal)
```

#### Mobile
```
Hero Heading:    36px / 2.25rem (font-bold)
Page Heading:    30px / 1.875rem (font-bold)
Section Heading: 24px / 1.5rem (font-semibold)
Card Heading:    20px / 1.25rem (font-semibold)
Body:            16px / 1rem (font-normal)
Body Small:      14px / 0.875rem (font-normal)
```

### Font Weights
- **300**: Light (rarely used)
- **400**: Normal/Regular (body text)
- **500**: Medium (emphasis)
- **600**: Semibold (headings, labels)
- **700**: Bold (hero text, primary headings)

---

## Spacing System

### Base Unit: 4px

```
Space Scale (Tailwind):
0.5 = 2px   (tight spacing)
1   = 4px   (minimal)
2   = 8px   (compact)
3   = 12px  (default)
4   = 16px  (comfortable)
6   = 24px  (spacious)
8   = 32px  (section)
12  = 48px  (major section)
16  = 64px  (page section)
24  = 96px  (hero section)
```

### Component Spacing

**Cards**:
- Padding: 24px (6) desktop, 16px (4) mobile
- Gap between cards: 24px (6)
- Margin around sections: 48px (12)

**Buttons**:
- Padding: 12px 24px (py-3 px-6)
- Icon spacing: 8px (2)
- Button groups gap: 12px (3)

**Forms**:
- Input padding: 12px 16px (py-3 px-4)
- Label margin: 8px (2)
- Field gap: 16px (4)

---

## Components

### Buttons

#### Primary Button
```css
.btn-primary {
  background: #0284c7 (primary-600)
  color: white
  padding: 12px 24px
  border-radius: 8px
  font-weight: 500
  hover: #0369a1 (primary-700)
  focus: ring-2 ring-primary-500
}
```

**Use for**: Main CTAs, booking, purchasing, search

#### Secondary Button
```css
.btn-secondary {
  background: white
  color: #111827 (gray-900)
  padding: 12px 24px
  border-radius: 8px
  border: 1px solid #d1d5db (gray-300)
  font-weight: 500
  hover: #f9fafb (gray-50)
}
```

**Use for**: Cancel, save for later, secondary actions

### Cards

#### Business Card
```
Structure:
- Image (left, 256px wide)
- Content (right, flex-grow)
- Header: Name + Verified Badge + Rating
- Meta: Address, distance, type
- Price + Time slots (bottom right)

States:
- Default: shadow-sm
- Hover: shadow-md + map pin highlight
- Active: border-primary-500
```

#### Offer Card
```
Structure:
- Top Choice ribbon (conditional)
- Content padding: 24px
- Discount badge (top right)
- Title + Business name + Verified
- Details (sessions, duration, distance)
- Eligibility tag
- Description
- Footer: Price + Buy CTA

Visual hierarchy:
- Discount badge: high contrast
- Price: largest font (3xl)
- CTA: primary button, right-aligned
```

### Forms & Inputs

#### Text Input
```css
.input-field {
  width: 100%
  padding: 12px 16px
  border: 1px solid #d1d5db
  border-radius: 8px
  focus: ring-2 ring-primary-500
  transition: all 0.2s
}
```

#### Search Bar (Hero)
```
Layout: 3-column grid (desktop), vertical stack (mobile)
Fields:
1. Search (icon: search, autocomplete)
2. Location (icon: map pin, autocomplete)
3. Time (icon: clock, dropdown)

Button: Full-width, 56px tall, primary
```

### Filters

#### Filter Chips
```css
.chip {
  display: inline-flex
  align-items: center
  gap: 6px
  padding: 6px 12px
  background: #f0f9ff (primary-50)
  color: #0369a1 (primary-700)
  border-radius: 9999px
  font-size: 14px
  font-weight: 500
}
```

#### Filter Bar
```
Position: sticky top-16 z-40
Background: white
Border: bottom only
Padding: 16px
Layout: horizontal scroll (mobile), flex wrap (desktop)
```

### Icons

**Library**: Lucide React
**Size**: 20px (w-5 h-5) for buttons, 16px (w-4 h-4) for inline

**Common Icons**:
- Search: Search
- Location: MapPin
- Time: Clock
- Rating: Star (filled)
- Verified: CheckCircle
- Favorite: Heart
- User: User
- Phone: Phone
- Calendar: Calendar
- Info: Info

---

## Layout

### Breakpoints
```css
sm: 640px   (tablet portrait)
md: 768px   (tablet landscape)
lg: 1024px  (laptop)
xl: 1280px  (desktop)
2xl: 1536px (large desktop)
```

### Container
```
Max-width: 1280px (7xl)
Padding: 16px (mobile), 24px (tablet), 32px (desktop)
Margin: auto (centered)
```

### Grid Systems

#### Category Cards (Home)
```
Mobile:  1 column
Tablet:  2 columns, gap-6
Desktop: 4 columns, gap-6
```

#### Offer Cards
```
Mobile:  1 column
Tablet:  2 columns, gap-6
Desktop: 3 columns, gap-6
```

#### Business Detail
```
Desktop: 3-column grid
- Main content: 2 columns (8/12)
- Sidebar: 1 column (4/12)
```

---

## Interactions

### Hover States

**Cards**:
- Elevation: shadow-sm → shadow-md
- Transform: none → translateY(-2px)
- Duration: 200ms
- Border: remains unchanged (unless active)

**Buttons**:
- Background: darkens by 1 shade
- Cursor: pointer
- Duration: 200ms

**Map Pins**:
- Scale: 1.0 → 1.25
- Z-index: increases
- Duration: 200ms

### Focus States

**All Interactive Elements**:
- Ring: 2px solid primary-500
- Ring Offset: 2px
- Outline: none (custom ring replaces default)

### Loading States

**Skeleton Screens**:
- Background: gray-200
- Animation: pulse
- Matches final content dimensions

**Buttons**:
- Disabled state
- Spinner icon (rotating)
- "Loading..." text

---

## Imagery

### Photo Guidelines

**Business Images**:
- Aspect Ratio: 3:2 (width:height)
- Min Resolution: 1200x800px
- Format: WebP (fallback: JPEG)
- Optimization: Quality 80-85%

**Category Cards**:
- Aspect Ratio: 4:3
- Min Resolution: 800x600px
- Overlay: gradient from transparent to black/70% opacity

**Hero Backgrounds**:
- Full-width, max-height: 600px
- Opacity: 10% (subtle)
- Blur: slight (optional)

### Placeholder Images
Use Unsplash URLs for demos:
```
Business: https://images.unsplash.com/photo-[id]?w=600&h=400&fit=crop
Categories: https://images.unsplash.com/photo-[id]?w=400&h=300&fit=crop
```

---

## Accessibility

### Color Contrast
- Text on white: minimum 4.5:1 (AA)
- Large text (24px+): minimum 3:1 (AA)
- Interactive elements: distinct focus indicators

### Touch Targets
- Minimum size: 44x44px (iOS guidelines)
- Spacing between targets: 8px minimum

### ARIA Labels
```jsx
<button aria-label="Search for wellness services">
  <Search className="w-5 h-5" />
</button>

<input 
  type="text" 
  id="location" 
  aria-label="Location"
  placeholder="Toronto, ON"
/>
```

### Keyboard Navigation
- Tab order: logical flow
- Focus visible: always
- Skip links: for screen readers
- Escape key: closes modals

---

## Animation

### Timing Functions
```css
Default: ease-in-out
Fast: 150ms (micro-interactions)
Normal: 200ms (hover, focus)
Slow: 300ms (page transitions)
```

### Use Cases

**Hover Effects**: 200ms ease-in-out
**Focus Rings**: instant (0ms)
**Modal Open**: 300ms ease-out
**Slide Animations**: 300ms ease-in-out
**Fade In**: 200ms ease-in

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Microcopy

### Tone & Voice
- **Friendly**: Warm, welcoming, conversational
- **Clear**: Direct, jargon-free, action-oriented
- **Supportive**: Helpful, reassuring, confidence-building

### Button Text
✅ **Good**:
- "Book Now"
- "Search"
- "Show Results"
- "Buy Now"
- "Save"

❌ **Avoid**:
- "Submit"
- "OK"
- "Click Here"
- "Continue"

### Empty States
```
No results found
Try adjusting your filters or search terms
[Clear Filters Button]
```

### Error Messages
```
⚠️ Oops! Something went wrong
We couldn't complete your request. Please try again.
[Retry Button]
```

---

## Responsive Patterns

### Navigation
- **Desktop**: Full horizontal nav
- **Mobile**: Hamburger menu (icon only)

### Search Results
- **Desktop**: Dual-pane (list + map)
- **Mobile**: Single list, map toggle

### Filters
- **Desktop**: Horizontal bar with dropdowns
- **Mobile**: Compact bar + full-screen modal

### Cards
- **Desktop**: Horizontal layout
- **Mobile**: Vertical stack

---

## Best Practices

### Do's ✅
- Use consistent spacing (multiples of 4px)
- Maintain clear visual hierarchy
- Provide immediate feedback for actions
- Use loading states for async operations
- Keep CTAs visible and accessible
- Test with real content (avoid Lorem Ipsum)

### Don'ts ❌
- Don't use tiny font sizes (< 14px body text)
- Don't hide important info behind multiple clicks
- Don't use jargon or technical terms
- Don't auto-play media or animations
- Don't use only color to convey information
- Don't ignore mobile users

---

## Component Checklist

When creating new components:

- [ ] Accessible (ARIA labels, keyboard nav)
- [ ] Responsive (mobile, tablet, desktop)
- [ ] Loading state defined
- [ ] Error state defined
- [ ] Empty state defined
- [ ] Hover/focus states styled
- [ ] Consistent with design system
- [ ] Performance optimized (images, animations)
- [ ] User tested (if possible)

---

**This guide is a living document. Update as the design system evolves.**
