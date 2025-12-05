// Mock functions for backend integrations

// Simulate email sending
export const sendEmail = async (emailType, data) => {
  console.log(`[MOCK] Sending ${emailType} email:`, data);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    success: true,
    message: `Email sent successfully (mock)`,
    emailType,
  };
};

// Simulate newsletter subscription
export const subscribeToNewsletter = async (email) => {
  console.log('[MOCK] Newsletter subscription:', email);
  
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Simulate occasional errors for testing
  if (email.includes('error')) {
    return {
      success: false,
      message: 'Subscription failed (mock error)',
    };
  }
  
  return {
    success: true,
    message: 'Successfully subscribed (mock)',
  };
};

// Simulate consultation booking
export const bookConsultation = async (formData) => {
  console.log('[MOCK] Consultation booking:', formData);
  
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    message: 'Consultation booked successfully (mock)',
    bookingId: `MOCK-${Date.now()}`,
  };
};

// Simulate analytics tracking
export const trackEvent = (eventName, eventData) => {
  if (!window.analyticsEnabled) return;
  
  console.log('[MOCK] Analytics event:', eventName, eventData);
  
  // This will be replaced with real GA/pixel code later
  if (window.gtag) {
    window.gtag('event', eventName, eventData);
  }
};

export default {
  sendEmail,
  subscribeToNewsletter,
  bookConsultation,
  trackEvent,
};
