export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

export const pageview = (url) => {
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    })
  }
}

export const event = ({ action, category, label, value }) => {
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      event: action,
      eventCategory: category,
      eventLabel: label,
      eventValue: value,
    })
  }
}
