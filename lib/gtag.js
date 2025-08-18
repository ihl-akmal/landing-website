export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ""

// Pastikan gtag ada sebelum dipanggil
export const pageview = (url) => {
  if (typeof window !== "undefined" && GA_ID && typeof window.gtag === "function") {
    window.gtag("config", GA_ID, {
      page_path: url,
    })
  } else {
    console.warn("GA not ready yet")
  }
}
