// Structured Data untuk GEO (Generative Engine Optimization)
// Membantu AI chatbots memahami dan mereferensikan konten Grazedu

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Grazedu",
  "description": "Platform pengembangan diri & karir untuk perempuan muda untuk mencapai potensi maksimal dalam karir profesional maupun pertumbuhan pribadi",
  "url": "https://grazedu.com",
  "logo": "https://grazedu.com/logo-grazedu-website.svg",
  "foundingDate": "2023",
  "founder": {
    "@type": "Person",
    "name": "Grazedu Team"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "ID",
    "addressRegion": "Indonesia"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+62-823-4062-2274",
    "contactType": "customer service",
    "availableLanguage": "Indonesian"
  },
  "sameAs": [
    "https://www.instagram.com/grazedu",
    "https://wa.me/6282340622274"
  ],
  "areaServed": "Indonesia",
  "serviceType": "Educational Services",
  "audience": {
    "@type": "Audience",
    "audienceType": "Young Women",
    "geographicArea": "Indonesia"
  }
}

export const educationalProgramSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalProgram",
  "name": "Grazedu Programs",
  "description": "Program pengembangan diri dan karir untuk perempuan muda",
  "provider": {
    "@type": "Organization",
    "name": "Grazedu"
  },
  "programType": "Professional Development",
  "occupationalCategory": "Personal Development",
  "educationalLevel": "Beginner to Advanced",
  "timeRequired": "PT2H",
  "courseMode": "Online",
  "inLanguage": "Indonesian",
  "offers": [
    {
      "@type": "Offer",
      "name": "Short Class",
      "description": "Kelas singkat untuk memberi wawasan praktis secara efisien dengan topik self improvement & soft skills",
      "category": "Short-term Training"
    },
    {
      "@type": "Offer", 
      "name": "Intensive Class",
      "description": "Kelas mendalam untuk kamu yang serius mau berkembang dibimbing step-by-step dengan materi terstruktur",
      "category": "Intensive Training"
    },
    {
      "@type": "Offer",
      "name": "Magang Mandiri", 
      "description": "Program magang untuk mendapatkan pengalaman praktis, mengembangkan skill, atau memenuhi syarat akademik",
      "category": "Internship Program"
    }
  ]
}

export const courseSchema = (course: {
  title: string;
  description: string;
  instructor: string;
  date: string;
  time: string;
  image: string;
  link: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  "name": course.title,
  "description": course.description,
  "provider": {
    "@type": "Organization",
    "name": "Grazedu"
  },
  "instructor": {
    "@type": "Person",
    "name": course.instructor
  },
  "courseMode": "Online",
  "inLanguage": "Indonesian",
  "image": course.image,
  "url": course.link,
  "startDate": course.date,
  "timeRequired": course.time,
  "audience": {
    "@type": "Audience",
    "audienceType": "Young Women"
  },
  "educationalLevel": "Beginner to Advanced",
  "teaches": "Personal Development, Career Skills, Professional Growth"
})

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Apa itu Grazedu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Grazedu adalah platform pengembangan diri dan karir khusus untuk perempuan muda yang ingin mencapai potensi maksimal dalam karir profesional maupun pertumbuhan pribadi."
      }
    },
    {
      "@type": "Question", 
      "name": "Program apa saja yang tersedia di Grazedu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Grazedu menyediakan 3 program utama: Short Class (kelas singkat), Intensive Class (kelas mendalam), dan Magang Mandiri (program magang)."
      }
    },
    {
      "@type": "Question",
      "name": "Siapa target audience Grazedu?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Grazedu ditujukan untuk perempuan muda di Indonesia yang ingin mengembangkan diri dan karir mereka."
      }
    }
  ]
}

// Function untuk generate structured data
export const generateStructuredData = (type: 'organization' | 'program' | 'course' | 'faq', data?: any) => {
  switch (type) {
    case 'organization':
      return organizationSchema;
    case 'program':
      return educationalProgramSchema;
    case 'course':
      return courseSchema(data);
    case 'faq':
      return faqSchema;
    default:
      return null;
  }
}
