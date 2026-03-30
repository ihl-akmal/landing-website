"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Lock, ShieldCheck } from "lucide-react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/admin/kelas");
        router.refresh();
      } else {
        setError(data.message || "Login gagal");
      }
    } catch (err) {
      setError("Terjadi kesalahan jaringan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-center">
          <ShieldCheck className="w-16 h-16 text-white mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Admin Dashboard</h2>
          <p className="text-white/80">Silakan masukkan password untuk masuk</p>
        </div>
        
        <div className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password Admin
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-sm"
                  placeholder="••••••••"
                  required
                />
              </div>
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </div>

            <Button 
              type="submit" 
              className="w-full bg-purple-600 hover:bg-purple-700" 
              disabled={loading}
            >
              {loading ? "Memverifikasi..." : "Masuk Dashboard"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
