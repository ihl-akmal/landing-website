// lib/gtag.js
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// Kirim event ke GA
export const pageview = (url) => {
  window.gtag("config", GA_ID, {
    page_path: url,
  });
};

export const event = ({ action, params }) => {
  window.gtag("event", action, params);
};
