import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { theme } from '../config/theme';
import siteConfig from '../config/siteConfig';
import { bookConsultation, sendEmail } from '../mock';
import { renderEmailTemplate, formatFormDataForEmail } from '../utils/emailTemplates';
import { trackBookingStep } from '../utils/analytics';
import Button from './Button';

const BookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState('intro'); // intro, form, calendar, confirmation
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    siteConfig.booking.form.fields.forEach(field => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    trackBookingStep('form_submitted');

    try {
      await bookConsultation(formData);
      setStep('calendar');
      trackBookingStep('calendar_shown');
    } catch (error) {
      console.error('Booking error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCalendarBooked = async () => {
    trackBookingStep('calendar_booked');
    
    // Mock booking details
    const bookingDetails = {
      name: formData.name,
      brandName: formData.brandName,
      website: formData.website || 'Not provided',
      instagram: formData.instagram || 'Not provided',
      date: 'Selected date',
      time: 'Selected time',
      timezone: formData.location,
      formData: formatFormDataForEmail(formData),
    };

    // Send emails (mock)
    await sendEmail('consultationConfirmationClient', bookingDetails);
    await sendEmail('consultationNotificationStudio', bookingDetails);
    
    setStep('confirmation');
    trackBookingStep('confirmation_shown');
  };

  const handleClose = () => {
    setStep('intro');
    setFormData({});
    setErrors({});
    onClose();
  };

  const renderField = (field) => {
    const commonStyles = {
      width: '100%',
      padding: '12px 16px',
      fontSize: '15px',
      fontFamily: theme.fonts.body,
      border: `1px solid ${errors[field.name] ? '#ef4444' : '#d1d5db'}`,
      borderRadius: '4px',
      backgroundColor: theme.colors.white,
    };

    if (field.type === 'textarea') {
      return (
        <textarea
          value={formData[field.name] || ''}
          onChange={(e) => handleInputChange(field.name, e.target.value)}
          rows={4}
          style={{ ...commonStyles, resize: 'vertical' }}
          placeholder={field.label}
        />
      );
    }

    if (field.type === 'select') {
      return (
        <select
          value={formData[field.name] || ''}
          onChange={(e) => handleInputChange(field.name, e.target.value)}
          style={commonStyles}
        >
          <option value="">Select {field.label}</option>
          {field.options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      );
    }

    if (field.type === 'multiselect') {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {field.options.map(option => (
            <label key={option} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={(formData[field.name] || []).includes(option)}
                onChange={(e) => {
                  const current = formData[field.name] || [];
                  const updated = e.target.checked
                    ? [...current, option]
                    : current.filter(v => v !== option);
                  handleInputChange(field.name, updated);
                }}
              />
              <span style={{ fontSize: '15px' }}>{option}</span>
            </label>
          ))}
        </div>
      );
    }

    return (
      <input
        type={field.type}
        value={formData[field.name] || ''}
        onChange={(e) => handleInputChange(field.name, e.target.value)}
        style={commonStyles}
        placeholder={field.label}
      />
    );
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '20px',
      }}
      onClick={handleClose}
    >
      <div
        style={{
          backgroundColor: theme.colors.white,
          borderRadius: '8px',
          maxWidth: '700px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: theme.colors.text.dark,
            zIndex: 1,
          }}
        >
          <X size={24} />
        </button>

        <div style={{ padding: '40px' }}>
          {step === 'intro' && (
            <div>
              <h2 style={{ fontFamily: theme.fonts.heading, fontSize: '32px', marginBottom: '16px', color: theme.colors.primary }}>
                {siteConfig.booking.introHeadline}
              </h2>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: theme.colors.text.subtle, marginBottom: '32px' }}>
                {siteConfig.booking.introText}
              </p>
              <Button onClick={() => setStep('form')} size="large">
                Let's get started
              </Button>
            </div>
          )}

          {step === 'form' && (
            <form onSubmit={handleFormSubmit}>
              <h2 style={{ fontFamily: theme.fonts.heading, fontSize: '28px', marginBottom: '24px', color: theme.colors.primary }}>
                Tell us about your brand
              </h2>
              {siteConfig.booking.form.fields.map(field => (
                <div key={field.name} style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '15px', fontWeight: '500', color: theme.colors.text.dark }}>
                    {field.label} {field.required && <span style={{ color: '#ef4444' }}>*</span>}
                  </label>
                  {renderField(field)}
                  {errors[field.name] && (
                    <span style={{ color: '#ef4444', fontSize: '13px', marginTop: '4px', display: 'block' }}>
                      {errors[field.name]}
                    </span>
                  )}
                </div>
              ))}
              <div style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Continue to booking'}
                </Button>
                <Button variant="ghost" onClick={() => setStep('intro')} type="button">
                  Back
                </Button>
              </div>
            </form>
          )}

          {step === 'calendar' && (
            <div>
              <h2 style={{ fontFamily: theme.fonts.heading, fontSize: '28px', marginBottom: '16px', color: theme.colors.primary }}>
                Choose your time
              </h2>
              <div
                style={{
                  backgroundColor: theme.colors.cream,
                  padding: '60px 40px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  marginBottom: '24px',
                }}
              >
                <p style={{ fontSize: '16px', color: theme.colors.text.subtle }}>
                  {siteConfig.booking.calendarPlaceholder.text}
                </p>
                <p style={{ fontSize: '14px', color: theme.colors.text.subtle, marginTop: '12px', fontStyle: 'italic' }}>
                  (Add your Google Calendar embed URL in siteConfig.js)
                </p>
              </div>
              <Button onClick={handleCalendarBooked}>
                Confirm booking (mock)
              </Button>
            </div>
          )}

          {step === 'confirmation' && (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: theme.colors.secondary,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                }}
              >
                <Check size={40} color={theme.colors.primary} />
              </div>
              <h2 style={{ fontFamily: theme.fonts.heading, fontSize: '32px', marginBottom: '16px', color: theme.colors.primary }}>
                {siteConfig.booking.confirmationMessage.heading}
              </h2>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: theme.colors.text.subtle, marginBottom: '32px' }}>
                {siteConfig.booking.confirmationMessage.text}
              </p>
              <Button onClick={handleClose}>
                Close
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
