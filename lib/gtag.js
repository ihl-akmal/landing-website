export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ""

export const pageview = (url) => {
  if (typeof window === "undefined" || !GA_ID) return
  
  // Percayakan pada command queue gtag.
  // Panggilan ini akan otomatis masuk antrean dan dieksekusi saat GA siap.
  // Tidak perlu memeriksa `typeof window.gtag` atau menggunakan setTimeout.
  window.gtag("config", GA_ID, { page_path: url })
}
