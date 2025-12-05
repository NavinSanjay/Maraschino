# Maraschino Publicity Website - Complete Guide

## 🎯 Overview
A production-ready, single-page React website for Maraschino Publicity - a boutique PR studio for beauty, skin & wellness brands. Built with React, TailwindCSS, and mock integrations ready for production connection.

---

## 🎨 Design & Branding

### Color Palette
- **Primary (Deep Cherry)**: `#812118` - Main background
- **Secondary (Blush Pink)**: `#ffdaec` - Content panels & accents
- **Accent (Gold)**: `#c9a075` - Highlights & CTAs
- **Cream**: `#f6efe5` - Alternate panels & buttons

### Typography
- **Headings**: Playfair Display (Editorial Serif)
- **Body**: Inter (Clean Sans-serif)

### Visual Theme
- **Cherry metaphor** throughout the design
- **Animated cherry** in hero section (falls with bounce effect)
- Soft, feminine, luxurious aesthetic
- Editorial, story-first approach

---

## 📋 Sections & Features

### 1. Hero Section
- Full-screen deep cherry background
- Animated cherry that drops into place on load
- Clear headline: "A cherry on top of what you have already built"
- Primary CTA: "Book consultation"
- Smooth scroll indicator

### 2. What We Do
- 4 service cards on cream panels:
  - Founder visibility & profiles
  - Media features & expert commentary
  - Launch & treatment/product PR
  - Thoughtful influencer & talent seeding
- Each card has inline "Book consultation" CTA
- Hover effects on cards

### 3. Projects ("Cherries we've polished")
- 2 showcase case studies:
  - Luminous Skin Co. (Clean Beauty)
  - The Wellness Ritual (Wellness & Self-Care)
- Cherry visual on each card
- Click to open detailed project modal with:
  - Services delivered
  - Full story narrative
  - Results/metrics
  - Client testimonials
  - Press mentions

### 4. Founder Letter
- Personal note from founder Alexandra
- Cream panel on cherry background
- Story-first positioning
- Builds intimacy and trust

### 5. Booking & Packages
- Highlighted free 30-minute consultation
- 4 package options:
  - The Launch
  - The Visibility
  - The Polish
  - The Custom Cherry
- Clear "no fixed pricing" messaging
- Invoice-based payment explanation

### 6. Our Vibe + Email Capture
- 8 brand quality badges:
  - Intimate & personal
  - Feminine & soft power
  - Luxury with approachability
  - Playful & editorial
  - Grounded & strategic
  - Story-first, always
  - No gatekeeping
  - Thoughtful over trendy
- Newsletter signup form ("Join the glossy list")
- Success/error states for form submission

### 7. FAQ (Accordion)
- 7 common questions with smooth accordion animation
- Questions include:
  - Who is Maraschino for?
  - Regional availability
  - Booking timeline
  - Results measurement
  - Coverage guarantees
  - Post-consultation process
  - DIY PR compatibility

### 8. Blog Teaser
- 3 latest blog posts with:
  - Date
  - Title & excerpt
  - Tags
  - "Read more" CTA
- Placeholder for future CMS integration

### 9. Footer
- Brand description
- Contact email: hello@maraschinopr.com
- Social links (Instagram, LinkedIn)
- Legal links (Privacy, Terms, Cookies)
- Opens modals for legal content

---

## 🎬 Interactive Elements

### Booking Modal (Multi-step)
**Step 1: Intro**
- Explains free consultation & pricing approach
- "Let's get started" button

**Step 2: Pre-questionnaire Form**
Fields include:
- Name, Brand name
- Website, Instagram handle
- Location/timezone
- What you do (brand description)
- Help needed (multi-select)
- Current PR efforts
- Budget comfort level
- Timeline/launch dates
- How you heard about us

**Step 3: Calendar Booking**
- Placeholder for Google Calendar embed
- Instructions for adding calendar URL

**Step 4: Confirmation**
- Success message
- Email confirmation (mock)

### Floating Book Button
- Appears after scrolling past hero
- Fixed bottom-right position
- Opens booking modal directly
- Smooth slide-in animation

### Cookie Consent Banner
- GDPR-compliant
- Essential vs. Analytics cookies
- Manage preferences option
- Respects consent before loading analytics

### Project Modal
- Full-screen on mobile
- Centered panel on desktop
- Scrollable content
- Close via X, click outside, or ESC key

---

## 🛠 Technical Architecture

### File Structure
```
frontend/src/
├── config/
│   ├── theme.js           # Colors, fonts, spacing
│   └── siteConfig.js      # ALL content & copy
├── components/
│   ├── Hero.jsx
│   ├── WhatWeDo.jsx
│   ├── Projects.jsx
│   ├── FounderLetter.jsx
│   ├── BookingPackages.jsx
│   ├── OurVibe.jsx
│   ├── FAQ.jsx
│   ├── BlogTeaser.jsx
│   ├── Footer.jsx
│   ├── Button.jsx
│   ├── BookingModal.jsx
│   ├── ProjectModal.jsx
│   ├── FloatingBookButton.jsx
│   ├── CookieConsent.jsx
│   └── LegalModal.jsx
├── utils/
│   ├── analytics.js       # Analytics tracking abstraction
│   └── emailTemplates.js  # Email template rendering
└── mock.js                # Mock backend functions
```

### Mock Integrations (Ready for Production)

#### 1. Email Service (mock.js → sendEmail)
**Current**: Logs to console
**Production**: Replace with SendGrid/Mailgun
- Consultation confirmation (to client)
- Studio notification (to Maraschino)
- 24hr reminder (to client)

#### 2. Newsletter (mock.js → subscribeToNewsletter)
**Current**: Logs to console
**Production**: Connect to Mailchimp/ConvertKit/etc.

#### 3. Google Calendar (BookingModal.jsx)
**Current**: Placeholder with instructions
**Production**: Add embed URL to `siteConfig.booking.calendarPlaceholder.embedUrl`

#### 4. Analytics (utils/analytics.js)
**Current**: Console logging
**Production**: Add GA Measurement ID to `siteConfig.analytics.providers.googleAnalytics.measurementId`

**Tracked events:**
- Scroll depth (25%, 50%, 75%, 100%)
- Button clicks (hero CTA, floating button, service CTAs, package CTAs)
- Form submissions (booking, newsletter)
- Booking flow steps

---

## ⚙️ Configuration Guide

### Editing Content
**All content is in `/app/frontend/src/config/siteConfig.js`**

To update any text, images, or content:
1. Open `siteConfig.js`
2. Find the relevant section (hero, services, projects, etc.)
3. Edit the text/content
4. Save - changes appear immediately (hot reload enabled)

### Adding a New Project
```javascript
// In siteConfig.js → projects.items array
{
  id: 'project-slug',
  brandName: 'Brand Name',
  sector: 'Industry Sector',
  shortTagline: 'One-line description',
  thumbnailImage: '/path/to/image',
  highlight: 'Key metric or achievement',
  fullStory: {
    services: ['Service 1', 'Service 2'],
    narrative: 'Full project story...',
    metrics: ['Metric 1', 'Metric 2'],
    testimonial: {
      quote: 'Client quote',
      author: 'Name, Title'
    },
    pressMentions: ['Publication 1', 'Publication 2'],
    gallery: ['/image1.jpg', '/image2.jpg']
  }
}
```

### Adding a New Package
```javascript
// In siteConfig.js → packages.items array
{
  id: 'package-id',
  name: 'Package Name',
  shortDescription: 'Brief description',
  whoItIsFor: 'Target audience',
  typicalInclusions: [
    'Feature 1',
    'Feature 2',
    'Feature 3'
  ]
}
```

### Adding FAQ
```javascript
// In siteConfig.js → faq.items array
{
  id: 'question-slug',
  question: 'Question text?',
  answer: 'Detailed answer text.'
}
```

---

## 🚀 Connecting Production Services

### 1. Email Service (SendGrid Example)
```javascript
// In mock.js, replace sendEmail function:
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async (emailType, data) => {
  const template = siteConfig.emails[emailType];
  const msg = {
    to: data.email,
    from: 'hello@maraschinopr.com',
    subject: renderEmailTemplate(template.subject, data),
    text: renderEmailTemplate(template.body, data),
  };
  await sgMail.send(msg);
};
```

### 2. Google Calendar Embed
```javascript
// In siteConfig.js
booking: {
  calendarPlaceholder: {
    embedUrl: 'https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID'
  }
}
```

### 3. Google Analytics
```javascript
// In siteConfig.js
analytics: {
  enabled: true,
  providers: {
    googleAnalytics: {
      measurementId: 'G-XXXXXXXXXX' // Your GA4 Measurement ID
    }
  }
}
```

### 4. Newsletter Service (Mailchimp Example)
```javascript
// Backend endpoint needed
// In mock.js, replace subscribeToNewsletter
export const subscribeToNewsletter = async (email) => {
  const response = await fetch('/api/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });
  return response.json();
};
```

---

## 📱 Responsive Design

- **Mobile-first** approach
- Breakpoints handled via CSS clamp() functions
- Grid layouts automatically adjust:
  - 4 columns desktop → 1-2 columns mobile
- Typography scales responsively
- Touch-friendly buttons and interactive elements
- Modals are full-screen on mobile

---

## ✅ Features Checklist

- ✅ **Hero with animated cherry**
- ✅ **9 complete sections**
- ✅ **Multi-step booking modal**
- ✅ **Floating book button**
- ✅ **Project showcase with modals**
- ✅ **FAQ accordion**
- ✅ **Email capture form**
- ✅ **Cookie consent (GDPR-compliant)**
- ✅ **Legal pages (Privacy, Terms, Cookies)**
- ✅ **Analytics tracking structure**
- ✅ **Mobile responsive**
- ✅ **Smooth animations & transitions**
- ✅ **Hover effects**
- ✅ **Keyboard navigation (ESC to close modals)**
- ✅ **Form validation**
- ✅ **Success/error states**
- ✅ **All content in config files**
- ✅ **Mock integrations ready for production**

---

## 🎯 Next Steps

### Immediate (Before Launch)
1. **Add Google Calendar embed URL**
   - Update `siteConfig.booking.calendarPlaceholder.embedUrl`

2. **Connect email service**
   - Choose provider (SendGrid, Mailgun, etc.)
   - Add API key
   - Update `mock.js` functions

3. **Set up analytics**
   - Create GA4 property
   - Add measurement ID to config

4. **Add real images**
   - Replace placeholder SVG cherries with brand images
   - Add project photos/videos
   - Add blog post images

5. **Connect newsletter service**
   - Choose ESP (Mailchimp, ConvertKit, etc.)
   - Create backend endpoint
   - Update subscription function

### Future Enhancements
- Add CMS for blog posts
- Implement search functionality
- Add case study filtering
- Create dedicated blog pages
- Add client portal/dashboard
- Implement testimonials carousel
- Add video backgrounds

---

## 💡 Tips for Customization

### Changing Colors
Edit `/app/frontend/src/config/theme.js`:
```javascript
colors: {
  primary: '#812118',    // Deep cherry
  secondary: '#ffdaec',  // Blush pink
  accent: '#c9a075',     // Gold
  cream: '#f6efe5',      // Cream
}
```

### Changing Fonts
Edit `/app/frontend/src/config/theme.js`:
```javascript
fonts: {
  heading: '"Your Serif Font", serif',
  body: '"Your Sans Font", sans-serif',
}
```
Don't forget to import new fonts in `App.css`.

### Adjusting Animations
- Cherry drop animation: `Hero.jsx` → `@keyframes cherryDrop`
- Floating button: `FloatingBookButton.jsx` → animation styles
- FAQ accordion: `FAQ.jsx` → max-height transition

---

## 🐛 Troubleshooting

### Modal not closing
- Check that ESC key handler is active
- Verify click-outside handler in modal components

### Forms not submitting
- Check browser console for validation errors
- Verify mock functions are being called

### Content not updating
- Clear browser cache
- Check hot reload is working (should see compilation in terminal)
- Restart frontend: `sudo supervisorctl restart frontend`

### Analytics not tracking
- Check cookie consent is accepted
- Verify `analyticsEnabled` is true
- Check console for tracking events

---

## 📞 Support & Updates

The website is built to be easily maintainable:
- **All copy**: Edit `siteConfig.js` only
- **Styling**: Edit `theme.js` for global changes
- **New sections**: Follow existing component patterns
- **Integrations**: Replace mock functions in `mock.js`

The structure is designed for easy handoff to developers or for direct client editing of content via config files.

---

**Built with ❤️ for Maraschino Publicity**
*A cherry on top of what you have already built*
