"use client"

import { Star, Quote, Heart, Sparkles } from "lucide-react"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Caca Aprilia Idias Putri ",
      role: "Mahasiswa",
      company: "Tech Startup",
      image:
        "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      content:
        "Setelah mengikuti webinar 'Woman of Worth', saya merasa lebih percaya diri dan memiliki mindset yang lebih positif. Saya belajar bagaimana mengelola pikiran negatif dan fokus pada hal-hal yang mendukung perkembangan pribadi dan profesional, yang membantu saya menghadapi tantangan hidup dengan lebih baik.",
      rating: 5,
    },
    {
      name: "Tetryanti Aztari Purbarini ",
      role: "Mahasiswa",
      company: "E-commerce Platform",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      content:
        "Aku jadi lebih paham kalau self awarenessku masih kurang dan masih banyak hal yang perlu dianalisis dari diriku sendiri untuk tau apa yang sebenernya aku mau, terima kasih kak shinta atas materi dan sharing-sharingnyaaa, alsoo terima kasiii grazedu team buat acara kerennya!!! Ditunggu materi-materi menarik selanjutnya <3333",
      rating: 5,
    },
    {
      name: "Andara Ashadama",
      role: "Mahasiswa",
      company: "Design Agency",
      image:
        "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      content:
        "Kelasnya udah bagus banget! Please banyakin kelas yang kayak begini!🥹🙏 Soalnya aku ada kendala jaringan tadi, dan gak bisa ikutin sampai akhirr. Semuanya keren banget! Materi yang kakak sampaikan jelas dan mudah dimengerti! Makasih banyak yaa kakk buat ilmu dan wawasan yang disampaikan! Berdaging!😻😻😻 💕",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white via-pink-50 to-rose-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-rose-300/15 rounded-full blur-lg"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-pink-100 px-4 py-2 rounded-full border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Success Stories</span>
            <Heart className="h-4 w-4 text-primary" />
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-poppins">
            Kata Mereka yang Sudah <span className="text-primary">#Growup</span> di Grazedu ✨
          </h2>
          <p className="text-lg text-gray-600">
            {"Pengalaman berharga dari para peserta yang telah bertransformasi 💕"}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative border border-pink-100 overflow-hidden">
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-pink-50 rounded-full blur-2xl"></div>
                <div className="absolute top-4 right-4 text-primary/20">
                  <Quote className="h-8 w-8" />
                </div>
                <div className="absolute bottom-4 left-4 text-primary/10">
                  <Heart className="h-6 w-6" />
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>

                  <div className="flex items-center gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 font-poppins">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      {/* <p className="text-sm text-primary">{testimonial.company + " ✨"}</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        {/* <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 text-lg">{"Siap jadi success story berikutnya? 🌟"}</p>
          <button className="bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md">
            {"Mulai Journey-ku! 🚀"}
          </button>
        </div> */}
      </div>
    </section>
  )
}

export default Testimonials
