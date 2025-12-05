// All site content configuration
export const siteConfig = {
  brand: {
    name: 'Maraschino Publicity',
    tagline: 'A cherry on top of what you have already built',
    description: 'A boutique publicity studio for beauty, skin + wellness brands.',
  },

  hero: {
    mainLine: 'A cherry on top of what you have already built',
    subLine: 'A boutique publicity studio for beauty, skin + wellness brands.',
    ctaText: 'Book consultation',
  },

  services: {
    title: 'What We Do',
    intro: 'Story-led, tailored publicity for brands that believe in thoughtful growth.',
    items: [
      {
        id: 'founder-visibility',
        title: 'Founder visibility & profiles',
        shortDescription: 'Position you as the expert voice behind your brand through strategic media placements and thought leadership.',
        bullets: [
          'Expert commentary placements',
          'Founder profile features',
          'Podcast & speaking opportunities',
        ],
        microCtaText: 'Let\'s talk visibility',
      },
      {
        id: 'media-features',
        title: 'Media features & expert commentary',
        shortDescription: 'Secure meaningful press coverage that tells your story and positions your brand as an authority.',
        bullets: [
          'Editorial features',
          'Product reviews',
          'Expert quotes & commentary',
        ],
        microCtaText: 'Add the cherry',
      },
      {
        id: 'launch-pr',
        title: 'Launch & treatment / product PR',
        shortDescription: 'Create buzz around your new offerings with strategic launch campaigns that generate genuine excitement.',
        bullets: [
          'Pre-launch strategy',
          'Media kit development',
          'Launch day coordination',
        ],
        microCtaText: 'Plan your launch',
      },
      {
        id: 'influencer-seeding',
        title: 'Thoughtful influencer & talent seeding',
        shortDescription: 'Connect with the right voices who genuinely align with your brand values and aesthetic.',
        bullets: [
          'Curated influencer selection',
          'Talent partnerships',
          'Authentic seeding campaigns',
        ],
        microCtaText: 'Build connections',
      },
    ],
  },

  projects: {
    title: 'Cherries we\'ve polished',
    subtitle: 'Every brand has a story. We help tell it beautifully.',
    items: [
      {
        id: 'luminous-skin',
        brandName: 'Embreis Beauty',
        sector: 'Clean Beauty',
        shortTagline: 'From indie darling to Vogue favorite',
        thumbnailImage: '/images/embreis.png',
        highlight: '12 major features in 6 months',
        fullStory: {
          services: [
            'Launch PR campaign',
            'Founder visibility strategy',
            'Influencer partnerships',
          ],
          narrative: 'Luminous Skin Co. came to us with a beautiful product line but limited visibility. We crafted a narrative around their founder\'s journey from clinical esthetician to clean beauty entrepreneur, securing features in Vogue, Elle, and WWD. The thoughtful influencer seeding program resulted in organic content from 20+ aligned creators.',
          metrics: [
            '12 major editorial features',
            '20+ influencer partnerships',
            '350% increase in brand searches',
            'Featured in Vogue Beauty',
          ],
          testimonial: {
            quote: 'Maraschino understood our brand DNA from day one. The coverage they secured felt authentic and attracted exactly the right customers.',
            author: 'Sarah Chen, Founder',
          },
          pressMentions: ['Vogue', 'Elle', 'WWD', 'Byrdie', 'Refinery29'],
          gallery: [
            '/project-image-placeholder-1.jpg',
            '/project-image-placeholder-2.jpg',
          ],
        },
      },
      {
        id: 'wellness-ritual',
        brandName: 'The Wellness Ritual',
        sector: 'Wellness & Self-Care',
        shortTagline: 'Elevating a supplement brand through storytelling',
        thumbnailImage: '/images/embreis-2.png',
        highlight: 'Positioned as thought leaders',
        fullStory: {
          services: [
            'Expert commentary program',
            'Product launch PR',
            'Media training',
          ],
          narrative: 'The Wellness Ritual had science-backed supplements but struggled to break through the noise. We positioned their founders as wellness experts, securing regular commentary spots in major wellness publications and a multi-page feature in Well+Good. Their launch of a new sleep supplement generated 8 features on launch day.',
          metrics: [
            '8 features on launch day',
            'Expert commentary in 15+ publications',
            'Podcast tour: 10 episodes',
            'Featured in Well+Good',
          ],
          testimonial: {
            quote: 'The strategic approach to positioning us as experts changed everything. We\'re now the go-to source for wellness journalists.',
            author: 'Dr. Maya Patel, Co-Founder',
          },
          pressMentions: ['Well+Good', 'MindBodyGreen', 'Goop', 'The Zoe Report'],
          gallery: [
            '/project-image-placeholder-3.jpg',
            '/project-image-placeholder-4.jpg',
          ],
        },
      },
    ],
  },

  founderLetter: {
    title: 'A note from the founder',
    heading: 'Story-first, always',
    subheading: 'Why Maraschino exists',
    body: [
      'After a decade in beauty and wellness PR at some of the industry\'s biggest agencies, I kept noticing the same thing: the most meaningful coverage came from the most authentic stories.',
      'Maraschino was born from a belief that boutique brands deserve boutique attention. No cookie-cutter pitches. No spray-and-pray tactics. Just thoughtful, story-led publicity that honors what you\'ve built.',
      'We work with brands who care about craft, integrity, and connection. If that sounds like you, let\'s talk.',
      '— Isabella',
    ],
  },

  packages: {
    title: 'How we work together',
    intro: 'Every brand is different. After your free 30-minute consultation, we\'ll craft a tailored proposal. Here\'s what that might look like:',
    freeConsultation: {
      headline: '30-minute consultation — Free',
      description: 'We\'ll discuss your goals, current efforts, and how PR can support your growth. No pressure, no obligation.',
      pricing: 'Custom pricing discussed after the call. Payment handled via invoice.',
    },
    items: [
      {
        id: 'launch-package',
        name: 'The Launch',
        shortDescription: 'Perfect for introducing a new product, treatment, or major brand milestone.',
        whoItIsFor: 'Brands launching something new who want to make a splash.',
        typicalInclusions: [
          'Pre-launch strategy & timeline',
          'Media kit & press materials',
          '3-month PR campaign',
          'Targeted media outreach',
          'Influencer seeding coordination',
          'Launch day support',
        ],
      },
      {
        id: 'visibility-package',
        name: 'The Visibility',
        shortDescription: 'Ongoing PR to build consistent brand awareness and founder positioning.',
        whoItIsFor: 'Established brands ready for sustained visibility.',
        typicalInclusions: [
          'Monthly strategic planning',
          'Ongoing media outreach',
          'Expert commentary placements',
          'Founder profile pitching',
          'Monthly reporting & insights',
          '6 or 12-month commitment',
        ],
      },
      {
        id: 'polish-package',
        name: 'The Polish',
        shortDescription: 'A focused sprint to secure key features or position your brand for a specific goal.',
        whoItIsFor: 'Brands with a specific PR goal or limited window.',
        typicalInclusions: [
          'Goal-focused strategy',
          '6-8 week intensive campaign',
          'Targeted outreach',
          'Influencer or media seeding',
          'Milestone-based deliverables',
        ],
      },
      {
        id: 'custom-package',
        name: 'The Custom Cherry',
        shortDescription: 'A fully bespoke approach tailored to your unique needs.',
        whoItIsFor: 'Brands with specific goals that don\'t fit a standard package.',
        typicalInclusions: [
          'Customized scope of work',
          'Flexible timeline',
          'Mix of services as needed',
          'Scalable approach',
        ],
      },
    ],
  },

  vibe: {
    title: 'Our vibe',
    intro: 'How we show up for our clients:',
    qualities: [
      'Intimate & personal',
      'Feminine & soft power',
      'Luxury with approachability',
      'Playful & editorial',
      'Grounded & strategic',
      'Story-first, always',
      'No gatekeeping',
      'Thoughtful over trendy',
    ],
    emailCapture: {
      heading: 'Join the glossy list',
      description: 'Occasional notes on beauty PR, brand storytelling, and the work we love.',
      placeholder: 'Your email address',
      buttonText: 'Join the list',
      successMessage: 'Welcome to the list! Check your inbox soon.',
    },
  },

  faq: {
    title: 'Questions',
    items: [
      {
        id: 'who-for',
        question: 'Who is Maraschino for?',
        answer: 'We work with beauty, skin, and wellness brands who value craft, authenticity, and storytelling. Typically, our clients are established enough to invest in PR (you have revenue, a clear brand identity, and great products) but still boutique enough to want personalized attention.',
      },
      {
        id: 'regions',
        question: 'Do you work with clients in all regions?',
        answer: 'Yes! While we\'re based in [location can be updated], we work with brands globally and are experienced in navigating different time zones. Most of our work focuses on US, UK, and Australian media.',
      },
      {
        id: 'advance-booking',
        question: 'How far in advance should we book?',
        answer: 'For launches, we recommend starting 3-4 months before your launch date. For ongoing visibility work, we can often start within 2-4 weeks depending on availability.',
      },
      {
        id: 'results',
        question: 'How do you measure results?',
        answer: 'We track media placements, reach, sentiment, and how coverage aligns with your business goals. You\'ll receive monthly reports with links to all coverage, audience metrics, and strategic insights. We also pay attention to the qualitative impact—the right coverage in the right places.',
      },
      {
        id: 'guarantee',
        question: 'Do you guarantee coverage?',
        answer: 'No reputable PR professional can guarantee specific placements—editorial decisions are always up to journalists. What we do guarantee: strategic thinking, consistent effort, strong media relationships, and a story-first approach that gets results.',
      },
      {
        id: 'after-consultation',
        question: 'What happens after the consultation?',
        answer: 'If we\'re a good fit, we\'ll send you a tailored proposal with scope, timeline, and investment. You\'ll have time to review, ask questions, and decide if you\'d like to move forward. No pressure, ever.',
      },
      {
        id: 'current-pr',
        question: 'What if we\'re already doing some PR ourselves?',
        answer: 'That\'s great! We can work alongside your efforts, take over entirely, or provide strategic guidance. Many clients come to us because they\'ve hit a plateau with DIY PR or want to scale up their efforts professionally.',
      },
    ],
  },

  blog: {
    title: 'Thoughts & stories',
    posts: [
      {
        slug: 'why-story-first-pr-works',
        title: 'Why story-first PR works (and spray-and-pray doesn\'t)',
        date: '2025-01-15',
        excerpt: 'The difference between a pitch that gets ignored and one that gets a yes? Story. Here\'s how to find yours.',
        image: '/blog-placeholder-1.jpg',
        tags: ['PR Strategy', 'Storytelling'],
      },
      {
        slug: 'founder-visibility-matters',
        title: 'Why founder visibility matters for beauty brands',
        date: '2025-01-08',
        excerpt: 'Your brand is you. Here\'s why putting yourself forward can transform your PR results.',
        image: '/blog-placeholder-2.jpg',
        tags: ['Founder Visibility', 'Beauty'],
      },
      {
        slug: 'when-to-hire-pr',
        title: 'When to hire a PR agency (and when to wait)',
        date: '2024-12-20',
        excerpt: 'Honest advice on whether your brand is ready for PR—and what to do if you\'re not quite there yet.',
        image: '/blog-placeholder-3.jpg',
        tags: ['PR Strategy', 'Business'],
      },
    ],
  },

  footer: {
    email: 'hello@maraschinopr.com',
    social: [
      { platform: 'Instagram', url: 'https://instagram.com/maraschinopr', icon: 'instagram' },
      { platform: 'LinkedIn', url: 'https://linkedin.com/company/maraschinopr', icon: 'linkedin' },
    ],
    legal: [
      { label: 'Privacy Policy', slug: 'privacy' },
      { label: 'Terms of Use', slug: 'terms' },
      { label: 'Cookies', slug: 'cookies' },
    ],
    copyright: '© {{year}} Maraschino Publicity. All rights reserved.',
  },

  booking: {
    introHeadline: 'Let\'s talk about your story',
    introText: 'The 30-minute consultation is completely free. We\'ll discuss your goals, explore how PR can help, and see if we\'re a good fit. Custom pricing and payment (via invoice) are handled after the call—no surprises.',
    form: {
      fields: [
        { name: 'name', label: 'Your name', type: 'text', required: true },
        { name: 'brandName', label: 'Brand name', type: 'text', required: true },
        { name: 'website', label: 'Website', type: 'url', required: false },
        { name: 'instagram', label: 'Instagram handle', type: 'text', required: false },
        { name: 'location', label: 'Location / Time zone', type: 'text', required: true },
        { name: 'whatYouDo', label: 'What does your brand do?', type: 'textarea', required: true },
        {
          name: 'helpWith',
          label: 'What would you like help with?',
          type: 'multiselect',
          required: true,
          options: [
            'Launch PR',
            'Ongoing visibility',
            'Founder positioning',
            'Product/treatment PR',
            'Influencer partnerships',
            'Media training',
            'Not sure yet',
          ],
        },
        { name: 'currentEfforts', label: 'Any current PR or press efforts?', type: 'textarea', required: false },
        {
          name: 'budget',
          label: 'Budget comfort',
          type: 'select',
          required: true,
          options: [
            'Exploring options',
            'Ready to invest (<$5k/month)',
            'Ready to invest ($5-10k/month)',
            'Ready to invest (>$10k/month)',
            'Project-based preferred',
          ],
        },
        { name: 'timeline', label: 'Timeline / launch dates', type: 'text', required: false },
        {
          name: 'hearAbout',
          label: 'How did you hear about Maraschino?',
          type: 'select',
          required: false,
          options: [
            'Google search',
            'Instagram',
            'Referral',
            'Press feature',
            'Other',
          ],
        },
      ],
    },
    calendarPlaceholder: {
      text: 'Google Calendar booking will appear here',
      embedUrl: '', // Client will add their calendar embed URL later
    },
    confirmationMessage: {
      heading: 'You\'re booked!',
      text: 'Check your inbox for confirmation and a calendar invite. We\'ll send a reminder 24 hours before. Looking forward to chatting!',
    },
  },

  emails: {
    consultationConfirmationClient: {
      subject: 'Your consultation with Maraschino is confirmed',
      body: 'Hi {{name}},\n\nYour 30-minute consultation is confirmed for {{date}} at {{time}} {{timezone}}.\n\nWe\'ll discuss your brand ({{brandName}}) and explore how PR can support your goals. No pressure, just a friendly conversation.\n\nLooking forward to it!\n\n— Isabella\nMaraschino Publicity',
    },
    consultationNotificationStudio: {
      subject: 'New consultation booked: {{brandName}}',
      body: 'New consultation details:\n\nName: {{name}}\nBrand: {{brandName}}\nWebsite: {{website}}\nInstagram: {{instagram}}\nTime: {{date}} at {{time}} {{timezone}}\n\nPre-questionnaire responses:\n{{formData}}',
    },
    consultationReminderClient: {
      subject: 'Reminder: Your Maraschino consultation is tomorrow',
      body: 'Hi {{name}},\n\nJust a friendly reminder that we\'re chatting tomorrow ({{date}}) at {{time}} {{timezone}}.\n\nLooking forward to learning more about {{brandName}}!\n\n— Isabella\nMaraschino Publicity',
    },
  },

  legal: {
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: '2025-01-01',
      content: 'Your privacy is important to us. This privacy policy explains how Maraschino Publicity collects, uses, and protects your personal information.\n\nInformation We Collect: We collect information you provide directly (name, email, brand details) when you book a consultation or sign up for our mailing list.\n\nHow We Use Your Information: To provide our services, communicate with you, and send occasional updates (only if you opted in).\n\nData Protection: We use industry-standard security measures and never sell your information to third parties.\n\nYour Rights: You can request to access, update, or delete your personal data at any time by contacting hello@maraschinopr.com.',
    },
    terms: {
      title: 'Terms of Use',
      lastUpdated: '2025-01-01',
      content: 'By using this website, you agree to these terms.\n\nServices: Maraschino Publicity provides PR and communications services. Specific terms are outlined in individual client agreements.\n\nIntellectual Property: All content on this site is owned by Maraschino Publicity unless otherwise stated.\n\nLimitations: While we strive for accuracy, we cannot guarantee specific PR results or media placements.\n\nModifications: We reserve the right to update these terms. Continued use of the site constitutes acceptance of changes.',
    },
    cookies: {
      title: 'Cookie Policy',
      lastUpdated: '2025-01-01',
      content: 'We use cookies to improve your experience on our website.\n\nEssential Cookies: Required for the website to function (e.g., remembering your cookie preferences).\n\nAnalytics Cookies: Help us understand how visitors use our site (Google Analytics). These are only used with your consent.\n\nManaging Cookies: You can change your cookie preferences at any time using the cookie banner or your browser settings.',
    },
  },

  analytics: {
    enabled: true,
    providers: {
      googleAnalytics: {
        measurementId: '', // Client will add later
      },
    },
  },

  cookieConsent: {
    message: 'We use cookies to improve your experience. Essential cookies are required; analytics cookies need your consent.',
    acceptText: 'Accept all',
    manageText: 'Manage preferences',
    essentialLabel: 'Essential cookies',
    essentialDescription: 'Required for the website to work.',
    analyticsLabel: 'Analytics cookies',
    analyticsDescription: 'Help us understand how you use our site.',
  },
};

export default siteConfig;
