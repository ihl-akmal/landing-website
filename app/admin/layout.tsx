"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { 
  BookOpen, 
  Users, 
  LogOut, 
  LayoutDashboard,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Jangan tampilkan sidebar di halaman login
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  const menuItems = [
    { name: "Kelas", icon: BookOpen, href: "/admin/kelas" },
    // Anda bisa menambahkan menu lain ke depannya
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b z-20 px-4 flex items-center justify-between">
        <div className="font-bold text-lg text-purple-600">GrazEdu Admin</div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2">
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-10 w-64 bg-white border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:block
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="h-16 flex items-center justify-center border-b hidden lg:flex">
          <div className="font-bold text-xl text-purple-600 px-6 w-full text-center">
            GrazEdu Admin
          </div>
        </div>

        <nav className="p-4 space-y-2 mt-16 md:mt-0">
          {menuItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  isActive 
                    ? "bg-purple-100 text-purple-700 font-medium" 
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? "text-purple-600" : ""}`} />
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full text-red-600 hover:bg-red-50 rounded-xl transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full min-w-0 pt-16 lg:pt-0">
        <main className="p-6 md:p-8 max-w-7xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
