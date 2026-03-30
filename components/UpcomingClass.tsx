"use client";

import {
  Clock,
  User,
  Calendar,
  Video,
  Heart,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { generateStructuredData } from "@/lib/structured-data";
import { useEffect, useState } from "react";
import { getAdminClasses, ClassData } from "@/lib/actions/classes";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/date";

export const UpcomingClass = () => {
  const [upcomingClasses, setUpcomingClasses] = useState<ClassData[]>([]);

  useEffect(() => {
    const fetchClasses = async () => {
      const allClasses = await getAdminClasses();
      const visibleClasses = allClasses
        .filter((cls) => cls.status === "publish" || cls.status === "closed")
        .slice(0, 3);
      setUpcomingClasses(visibleClasses);
    };

    fetchClasses();
  }, []);

  const getBadgeProps = (status?: "publish" | "closed") => {
    switch (status) {
      case "publish":
        return { text: "NEW", color: "bg-green-500 text-white" };
      case "closed":
        return { text: "CLOSED", color: "bg-primary text-white" };
      default:
        return null;
    }
  };

  return (
    <>
      {upcomingClasses.map((course, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateStructuredData("course", course as any)
            ),
          }}
        />
      ))}

      <section
        id="upcoming-class"
        className="py-20 bg-gradient-to-br from-white via-pink-50 to-rose-50 relative overflow-hidden"
      >
        <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-pink-100 px-4 py-2 rounded-full border border-primary/20 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Kelas Terbatas & Eksklusif
              </span>
              <Heart className="h-4 w-4 text-primary" />
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-poppins">
              Jangan Ketinggalan Sebelum{" "}
              <span className="text-primary">Pendaftaran Ditutup!</span> ⏰
            </h2>
            <p className="text-lg text-gray-600">
              {
                "Kelas terbatas dengan kualitas terbaik. Daftar sekarang sebelum terlambat, beautiful! 💕"
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 justify-center">
            {upcomingClasses.map((course) => {
              const badge = getBadgeProps(course.status as "publish" | "closed");
              const isClosed = course.status === "closed";

              return (
                <div
                  key={course.slug}
                  className={`bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-pink-100 flex flex-col w-full max-w-sm lg:max-w-none mx-auto ${
                    isClosed ? "grayscale" : ""
                  }`}
                >
                  <div className="relative">
                    <Image
                      src={course.flyerUrl || "/placeholder.svg"}
                      alt={course.title || "class flyer"}
                      width={400}
                      height={400}
                      className={`w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300`}
                    />
                    {badge && (
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 text-xs font-bold rounded-full ${badge.color} shadow-md`}
                        >
                          {badge.text}
                        </span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                  </div>

                  <div className="p-4 lg:p-6 space-y-3 lg:space-y-4 flex-1 flex flex-col">
                    <div className="space-y-2 flex-1">
                      <h3 className="text-lg lg:text-xl font-bold text-gray-900 font-poppins">
                        {course.title}
                      </h3>
                      <div className="min-h-[1.5rem]">
                        {course.subtitle && (
                          <p className="text-gray-600 text-sm font-medium italic">
                            {course.subtitle}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{course.date && formatDate(course.date)}</span>
                        <Clock className="h-4 w-4 text-primary flex-shrink-0 ml-2" />
                        <span>{course.time}</span>
                      </div>

                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <User className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{course.instructor}</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Video className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{course.location}</span>
                      </div>
                    </div>

                    <Link
                      href={isClosed ? "#" : `/kelas/${course.slug}`}
                      className={`w-full bg-gradient-to-r from-primary to-primary-light text-white py-3 rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md mt-auto flex justify-center items-center ${
                        isClosed
                          ? "opacity-60 cursor-not-allowed pointer-events-none"
                          : ""
                      }`}
                      aria-disabled={isClosed}
                      tabIndex={isClosed ? -1 : 0}
                    >
                      {isClosed ? (
                        "Pendaftaran Ditutup"
                      ) : (
                        <>
                          Daftar Sekarang!{" "}
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </>)}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
