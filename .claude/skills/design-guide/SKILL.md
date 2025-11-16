---
name: design-guide
description: Ensures all UI components follow modern, professional design principles with clean aesthetics, consistent spacing (8px grid), neutral color palettes, proper typography, and subtle visual effects. Use when building any UI component, page layout, or frontend interface to maintain design consistency. Triggers include building buttons, forms, cards, layouts, navigation, or any visual element.
---

# Design Guide

Enforce modern, professional design principles for all UI components. Prioritize clarity, consistency, and restraint over decoration.

## Core Design Principles

### 1. Clean and Minimal
- **Lots of white space**: Give elements room to breathe
- **Not cluttered**: Limit elements per screen, remove unnecessary decoration
- **Clear hierarchy**: Most important elements should be obvious
- **Remove, don't add**: When in doubt, take things away

### 2. Neutral Color Palette
- **Base**: Grays and off-whites (not pure white #FFFFFF, use #FAFAFA or #F9FAFB)
- **ONE accent color**: Used sparingly for CTAs and important actions
- **Text**: True black (#000000) is too harsh - use dark gray (#1F2937 or similar)
- **NO gradients**: Especially not generic purple/blue gradients

### 3. Consistent Spacing (8px Grid System)
- **Use only these values**: 8, 16, 24, 32, 48, 64px (multiples of 8)
- **Never use**: 15px, 20px, 35px, or arbitrary values
- **Applies to**: margins, padding, gaps, positioning
- **Tailwind equivalents**: 2, 4, 6, 8, 12, 16 (remember Tailwind uses 4px base)

### 4. Typography
- **Body text minimum**: 16px (never smaller)
- **Clear hierarchy**: Distinct sizes for h1, h2, body, small text
- **Max 2 fonts**: One for headings, one for body (or same font with different weights)
- **Line height**: 1.5 for body text, 1.2-1.3 for headings
- **Font weights**: Use 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### 5. Subtle Visual Effects
- **Shadows**: Subtle and minimal (not heavy drop shadows)
- **Rounded corners**: Use deliberately, not on everything
- **Borders**: 1px, use neutral grays (#E5E7EB or similar)
- **Transitions**: 150-200ms for most interactions

### 6. Interactive States
- **Hover**: Slight color change or shadow
- **Active**: Slightly darker or pressed appearance
- **Disabled**: Reduced opacity (0.5-0.6), no pointer cursor
- **Focus**: Clear focus ring (don't remove it)

### 7. Mobile-First
- **Start with mobile layout**: Then expand for larger screens
- **Touch targets**: Minimum 44x44px for tappable elements
- **Readable without zoom**: Avoid tiny text
- **Thumb-friendly**: Important actions in easy-to-reach areas

## Color System

### Base Colors (Tailwind)
```
Background:
- Primary: bg-white or bg-gray-50
- Secondary: bg-gray-100
- Tertiary: bg-gray-200

Text:
- Primary: text-gray-900 (main content)
- Secondary: text-gray-600 (supporting text)
- Tertiary: text-gray-400 (hints, placeholders)

Borders:
- Default: border-gray-200
- Subtle: border-gray-100
- Strong: border-gray-300
```

### Accent Color Selection
Pick ONE from these (or similar muted tones):
- **Blue**: bg-blue-600, hover:bg-blue-700
- **Green**: bg-green-600, hover:bg-green-700
- **Red**: bg-red-600, hover:bg-red-700 (errors, destructive actions)
- **Amber**: bg-amber-600, hover:bg-amber-700

**DO NOT USE**: Bright neon colors, gradients, multiple accent colors

### Semantic Colors
```
Success: text-green-600, bg-green-50
Error: text-red-600, bg-red-50
Warning: text-amber-600, bg-amber-50
Info: text-blue-600, bg-blue-50
```

## Spacing System

### Standard Spacing Values
```
Tailwind | Pixels | Use Case
---------|--------|----------
p-2      | 8px    | Tight padding (small buttons, tags)
p-4      | 16px   | Default padding (buttons, inputs)
p-6      | 24px   | Medium padding (cards, modals)
p-8      | 32px   | Large padding (containers, sections)
p-12     | 48px   | Extra large (page margins)
p-16     | 64px   | Spacious (hero sections)

gap-2    | 8px    | Tight gaps (inline elements)
gap-4    | 16px   | Default gaps (form fields, buttons)
gap-6    | 24px   | Medium gaps (card grids)
gap-8    | 32px   | Large gaps (sections)
```

**Never use odd spacing values like p-3 (12px), p-5 (20px), etc. Stick to the 8px grid.**

## Typography System

### Font Sizes (Tailwind)
```
text-sm    | 14px  | Small text, captions, labels
text-base  | 16px  | Body text (default)
text-lg    | 18px  | Large body text, subheadings
text-xl    | 20px  | Small headings
text-2xl   | 24px  | Medium headings
text-3xl   | 30px  | Large headings
text-4xl   | 36px  | Extra large headings
```

### Typography Hierarchy Example
```jsx
<h1 className="text-4xl font-bold text-gray-900">
  Main Heading
</h1>

<h2 className="text-2xl font-semibold text-gray-900 mt-8">
  Section Heading
</h2>

<p className="text-base text-gray-600 mt-4">
  Body text goes here. Should be comfortable to read.
</p>

<p className="text-sm text-gray-400 mt-2">
  Small supporting text or captions
</p>
```

### Font Pairing
**Option 1 (Simple)**: Use one font with different weights
```
font-family: Inter, system-ui, sans-serif
Headings: font-semibold or font-bold
Body: font-normal
```

**Option 2 (Contrast)**: Serif for headings, sans-serif for body
```
Headings: font-serif
Body: font-sans
```

## Component Guidelines

### Buttons

**✅ GOOD - Primary Button**
```jsx
<button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed">
  Click Me
</button>
```

**✅ GOOD - Secondary Button**
```jsx
<button className="px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 active:bg-gray-100 transition-colors shadow-sm">
  Cancel
</button>
```

**✅ GOOD - Ghost Button**
```jsx
<button className="px-6 py-3 text-gray-700 font-medium hover:bg-gray-100 rounded-lg transition-colors">
  Learn More
</button>
```

**❌ BAD - Don't Do This**
```jsx
// Too many effects, gradient, inconsistent spacing
<button className="px-5 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105">
  Click Me
</button>
```

**Button Rules**:
- Padding: `px-6 py-3` (or `px-4 py-2` for small buttons)
- Font: `font-medium` or `font-semibold` (not bold)
- Rounded: `rounded-lg` (or `rounded-md` for subtle)
- Shadow: `shadow-sm` only (not shadow-xl)
- Hover: Subtle color change, not dramatic
- No gradients, no excessive shadows, no transforms

### Cards

**✅ GOOD - Border Card**
```jsx
<div className="p-6 bg-white border border-gray-200 rounded-lg">
  <h3 className="text-xl font-semibold text-gray-900">Card Title</h3>
  <p className="mt-2 text-gray-600">Card content goes here.</p>
</div>
```

**✅ GOOD - Shadow Card**
```jsx
<div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
  <h3 className="text-xl font-semibold text-gray-900">Card Title</h3>
  <p className="mt-2 text-gray-600">Card content goes here.</p>
</div>
```

**❌ BAD - Don't Do This**
```jsx
// Border AND shadow, too much
<div className="p-6 bg-white border-2 border-gray-300 rounded-xl shadow-2xl">
  <h3 className="text-xl font-bold text-purple-600">Card Title</h3>
  <p className="mt-2 text-sm text-gray-500">Card content.</p>
</div>
```

**Card Rules**:
- Choose ONE: border OR subtle shadow (not both)
- Padding: `p-6` or `p-8` (consistent across all cards)
- Background: `bg-white` or `bg-gray-50` (not colored)
- Rounded: `rounded-lg` (consistent throughout app)
- Shadow: `shadow-sm` only (use `hover:shadow-md` for interactive cards)
- Spacing between cards: `gap-6` in grid layouts

### Forms

**✅ GOOD - Input Field**
```jsx
<div className="space-y-2">
  <label className="block text-sm font-medium text-gray-700">
    Email
  </label>
  <input
    type="email"
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
    placeholder="you@example.com"
  />
  <p className="text-sm text-gray-500">
    We'll never share your email.
  </p>
</div>
```

**✅ GOOD - Error State**
```jsx
<div className="space-y-2">
  <label className="block text-sm font-medium text-gray-700">
    Email
  </label>
  <input
    type="email"
    className="w-full px-4 py-3 border-2 border-red-500 rounded-lg focus:ring-2 focus:ring-red-500 bg-red-50"
    placeholder="you@example.com"
  />
  <p className="text-sm text-red-600">
    Please enter a valid email address.
  </p>
</div>
```

**Form Rules**:
- Label: `text-sm font-medium text-gray-700` (always above input)
- Input padding: `px-4 py-3` (comfortable touch targets)
- Border: `border border-gray-300` (1px, subtle)
- Focus ring: `focus:ring-2 focus:ring-[accent-color]` (always include)
- Rounded: `rounded-lg` (consistent with buttons/cards)
- Spacing between fields: `space-y-4` or `space-y-6`
- Helper text: `text-sm text-gray-500` below input
- Error text: `text-sm text-red-600` below input
- Placeholder: Muted gray, not full instructions

### Navigation

**✅ GOOD - Simple Nav**
```jsx
<nav className="border-b border-gray-200 bg-white">
  <div className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="text-xl font-semibold text-gray-900">
        Logo
      </div>
      <div className="flex items-center gap-8">
        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
          Home
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
          About
        </a>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Sign In
        </button>
      </div>
    </div>
  </div>
</nav>
```

**Navigation Rules**:
- Height: `py-4` or `py-6` (not too tall)
- Links: `text-gray-600 hover:text-gray-900` (subtle hover)
- Active: `text-gray-900 font-medium` (slightly bolder)
- Spacing between links: `gap-8` or `gap-6`
- Background: `bg-white` with `border-b` for separation
- Mobile: Use hamburger menu at appropriate breakpoint

### Modals/Dialogs

**✅ GOOD - Modal**
```jsx
<div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
  <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
    <h2 className="text-2xl font-semibold text-gray-900">
      Confirm Action
    </h2>
    <p className="mt-4 text-gray-600">
      Are you sure you want to proceed?
    </p>
    <div className="mt-6 flex gap-4 justify-end">
      <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
        Cancel
      </button>
      <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
        Confirm
      </button>
    </div>
  </div>
</div>
```

**Modal Rules**:
- Backdrop: `bg-black/50` (50% opacity black)
- Container: `bg-white rounded-lg shadow-xl`
- Max width: `max-w-md` or `max-w-lg` (not full screen)
- Padding: `p-6` or `p-8`
- Buttons: Right-aligned with `justify-end`
- Spacing: `mt-4` between sections, `mt-6` before actions

### Tables

**✅ GOOD - Simple Table**
```jsx
<div className="overflow-x-auto">
  <table className="w-full">
    <thead className="bg-gray-50 border-b border-gray-200">
      <tr>
        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
          Name
        </th>
        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
          Email
        </th>
        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
          Status
        </th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 text-sm text-gray-900">John Doe</td>
        <td className="px-6 py-4 text-sm text-gray-600">john@example.com</td>
        <td className="px-6 py-4 text-sm">
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
            Active
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

**Table Rules**:
- Header: `bg-gray-50` background, `font-medium`
- Cell padding: `px-6 py-4` (or `px-4 py-3` for compact)
- Borders: `divide-y divide-gray-200` between rows
- Hover: `hover:bg-gray-50` on rows
- Text: Headers `text-gray-700`, content `text-gray-900`
- Status badges: Use pill shape with semantic colors

### Loading States

**✅ GOOD - Spinner**
```jsx
<div className="flex items-center justify-center p-8">
  <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin" />
</div>
```

**✅ GOOD - Skeleton**
```jsx
<div className="space-y-4 animate-pulse">
  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
</div>
```

**Loading Rules**:
- Spinner: Simple circular border animation
- Skeleton: `bg-gray-200` with `animate-pulse`
- Placement: Center or inline where content will appear
- No text like "Loading..." unless necessary

## Layout Guidelines

### Container
```jsx
<div className="max-w-7xl mx-auto px-6 py-8">
  {/* Content */}
</div>
```
- Max width: `max-w-7xl` (or `max-w-6xl` for narrower)
- Horizontal padding: `px-6` (or `px-4` on mobile)
- Vertical padding: `py-8` or `py-12`

### Grid Layouts
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards */}
</div>
```
- Mobile: `grid-cols-1` (single column)
- Tablet: `md:grid-cols-2`
- Desktop: `lg:grid-cols-3` or `lg:grid-cols-4`
- Gap: `gap-6` or `gap-8` (consistent)

### Flexbox Patterns
```jsx
// Horizontal with space between
<div className="flex items-center justify-between">
  {/* Content */}
</div>

// Vertical stack
<div className="flex flex-col gap-4">
  {/* Content */}
</div>

// Centered content
<div className="flex items-center justify-center min-h-screen">
  {/* Content */}
</div>
```

## Anti-Patterns (What NOT to Do)

### ❌ Rainbow Gradients
```jsx
// NO: Gradient backgrounds everywhere
<div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
```
**Instead**: Use solid colors from neutral palette

### ❌ Tiny Text
```jsx
// NO: Text smaller than 14px
<p className="text-xs">Important information</p> // 12px
```
**Instead**: Use `text-sm` (14px) minimum, `text-base` (16px) for body

### ❌ Inconsistent Spacing
```jsx
// NO: Random spacing values
<div className="mt-5 mb-7 px-3 py-5">
```
**Instead**: Use 8px grid: `mt-4 mb-8 px-4 py-6`

### ❌ Every Element Different Color
```jsx
// NO: Rainbow of colors
<button className="bg-purple-500">Button 1</button>
<button className="bg-green-500">Button 2</button>
<button className="bg-orange-500">Button 3</button>
```
**Instead**: Use ONE accent color consistently

### ❌ Excessive Shadows
```jsx
// NO: Heavy, dramatic shadows
<div className="shadow-2xl drop-shadow-2xl">
```
**Instead**: Use `shadow-sm` or `shadow-md` at most

### ❌ Border AND Shadow
```jsx
// NO: Double emphasis
<div className="border-2 border-gray-400 shadow-xl">
```
**Instead**: Choose ONE (border OR shadow)

### ❌ Over-Rounded Elements
```jsx
// NO: Everything is a pill
<div className="rounded-full p-8">
```
**Instead**: Use `rounded-lg` consistently, save `rounded-full` for circular elements

### ❌ No Interactive States
```jsx
// NO: No hover or focus states
<button className="bg-blue-600 text-white px-4 py-2">
```
**Instead**: Add `hover:bg-blue-700 focus:ring-2 focus:ring-blue-500`

## Quick Reference Checklist

When building any UI component, verify:

- [ ] Colors: Using neutral palette + ONE accent color?
- [ ] Spacing: All values are multiples of 8px?
- [ ] Typography: Body text at least 16px? Clear hierarchy?
- [ ] Shadows: Subtle (shadow-sm) not heavy?
- [ ] Rounded corners: Consistent (rounded-lg)?
- [ ] Hover states: Defined for interactive elements?
- [ ] Focus states: Visible focus rings present?
- [ ] Mobile: Works on small screens?
- [ ] Contrast: Text readable against backgrounds?
- [ ] Consistency: Matches existing components?

## Common Component Patterns

### Page Header
```jsx
<div className="border-b border-gray-200 pb-6 mb-8">
  <h1 className="text-4xl font-bold text-gray-900">Page Title</h1>
  <p className="mt-2 text-gray-600">Page description or subtitle</p>
</div>
```

### Section Spacing
```jsx
<section className="py-16">
  <div className="max-w-7xl mx-auto px-6">
    {/* Section content */}
  </div>
</section>
```

### Status Badge
```jsx
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
  Active
</span>
```

### Empty State
```jsx
<div className="text-center py-12">
  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
    <svg className="w-8 h-8 text-gray-400">
      {/* Icon */}
    </svg>
  </div>
  <h3 className="text-lg font-medium text-gray-900">No items found</h3>
  <p className="mt-2 text-sm text-gray-500">Get started by creating a new item.</p>
  <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
    Create Item
  </button>
</div>
```

## Accessibility Reminders

- Always include focus states (`focus:ring-2`)
- Use semantic HTML (`<button>` not `<div onClick>`)
- Provide alt text for images
- Ensure color contrast meets WCAG standards
- Make interactive elements large enough (44x44px minimum)
- Don't rely on color alone to convey information
