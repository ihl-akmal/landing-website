export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const pageview = (url) => {
  if (typeof window === "undefined" || !GA_ID) return;

  const sendPageview = () => {
    if (typeof window.gtag === "function") {
      window.gtag("config", GA_ID, {
        page_path: url,
      });
    } else {
      console.warn("GA not ready yet");
      setTimeout(sendPageview, 500); // coba ulang setiap 0.5 detik sampai siap
    }
  };

  sendPageview();
};