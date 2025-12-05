// Email template rendering with placeholder replacement

export const renderEmailTemplate = (template, data) => {
  let rendered = template;
  
  // Replace all {{placeholder}} with actual data
  Object.keys(data).forEach(key => {
    const regex = new RegExp(`{{${key}}}`, 'g');
    rendered = rendered.replace(regex, data[key] || '');
  });
  
  // Handle {{year}} placeholder
  rendered = rendered.replace(/{{year}}/g, new Date().getFullYear());
  
  return rendered;
};

export const formatFormDataForEmail = (formData) => {
  return Object.entries(formData)
    .map(([key, value]) => {
      const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
      const displayValue = Array.isArray(value) ? value.join(', ') : value;
      return `${label}: ${displayValue}`;
    })
    .join('\n');
};

export default {
  renderEmailTemplate,
  formatFormDataForEmail,
};
