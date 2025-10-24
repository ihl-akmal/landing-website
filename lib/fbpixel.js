// lib/fbpixel.js
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

// Track standard event
export const pageview = () => {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'PageView')
  }
}

export const event = (name, options = {}) => {
  if (typeof window.fbq === 'function') {
    window.fbq('track', name, options)
  }
}
