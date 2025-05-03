"use client";

import React from "react"; // Ensure React is imported
import { useState } from "react";
import Link from "next/link";
import { Camera, User, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ username, password, rememberMe });
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log("Google login clicked");
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-4 bg-gradient-to-b from-purple-900 to-purple-950">
      <div className="w-full max-w-md relative">
        <div className="rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
          {/* Product Name Section */}
          <div className="bg-purple-700 text-center py-4">
            <h1 className="text-2xl font-bold text-white">My AI Guide</h1>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-purple-700/40 border-2 border-purple-400 flex items-center justify-center mb-8">
                <Camera className="w-12 h-12 text-purple-300" />
              </div>

              <form onSubmit={handleLogin} className="w-full space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <User className="h-5 w-5 text-purple-300" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="pl-10 py-6 bg-purple-900/70 border-purple-700 text-white placeholder:text-purple-300 focus-visible:ring-purple-500"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Lock className="h-5 w-5 text-purple-300" />
                    </div>
                    <Input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 py-6 bg-purple-900/70 border-purple-700 text-white placeholder:text-purple-300 focus-visible:ring-purple-500"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember-me"
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                      className="border-purple-400 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                    />
                    <label htmlFor="remember-me" className="text-sm text-purple-200">
                      Remember me
                    </label>
                  </div>

                  <Link href="/forgot-password" className="text-sm text-purple-200 hover:text-purple-100">
                    Forgot Password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full py-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg"
                >
                  LOGIN
                </Button>

                <div className="relative flex items-center justify-center">
                  <div className="border-t border-purple-600 absolute w-full"></div>
                  <span className="bg-purple-800/20 px-2 text-purple-300 text-sm relative">OR</span>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  onClick={handleGoogleLogin}
                  className="w-full py-6 border-purple-500 text-purple-500 hover:bg-purple-700/30 hover:text-white flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  LOGIN WITH GOOGLE
                </Button>

                <div className="text-center mt-4">
                  <span className="text-purple-300 text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="text-purple-200 hover:text-white underline">
                      Sign up
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
