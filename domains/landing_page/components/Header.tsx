// components/landing/Header.tsx
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import RoleSelectionModal from "./Modal";
import { useRouter } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleModalOpen, setRoleModalOpen] = useState(false);

  const router = useRouter();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    // Close only mobile menu
    setMobileMenuOpen(false);
  };

  const openRoleModal = () => {
    setMobileMenuOpen(false);
    setRoleModalOpen(true);
  };

  return (
    <header className="sticky top-0 z-50 bg-navy-600 text-white border-b border-navy-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/OMSlogo.png"
            alt="One Mission School Logo"
            width={40}
            height={40}
          />

          <div>
            <h1 className="font-semibold text-xl tracking-tight">
              One Mission School
            </h1>

            <p className="text-[10px] text-white/60 -mt-1">
              E-Learning Platform
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button
            onClick={() => scrollToSection("features")}
            className="hover:text-blue-400 transition-colors"
          >
            Features
          </button>

          <button
            onClick={() => scrollToSection("Parents/Guardians")}
            className="hover:text-blue-400 transition-colors"
          >
            Parents/Guardians
          </button>

          <button
            onClick={() => scrollToSection("pricing")}
            className="hover:text-blue-400 transition-colors"
          >
            Pricing
          </button>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            className="text-blue-600 bg-blue-100 hover:bg-blue-200 hover:text-blue-900 font-medium px-6"
            onClick={() => router.push("/login")}
          >
            Login
          </Button>

          <Button
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6"
            onClick={openRoleModal}
          >
            Enroll Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-navy-700 bg-navy-600"
        >
          <div className="px-6 py-8 flex flex-col gap-6 text-lg">

            <button onClick={() => scrollToSection("features")}>
              Features
            </button>

            <button onClick={() => scrollToSection("Parents/Guardians")}>
              Parents/Guardians
            </button>

            <button onClick={() => scrollToSection("pricing")}>
              Pricing
            </button>

            <div className="pt-6 border-t border-navy-700 flex flex-col gap-3">
              <Button
                className="text-blue-600 bg-blue-100 hover:bg-blue-200 hover:text-blue-900 font-medium px-6"
                onClick={() => {
                  setMobileMenuOpen(false);
                  router.push("/login");
                }}
              >
                Login
              </Button>

              <Button
                className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6"
                onClick={openRoleModal}
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Role Modal */}
      <RoleSelectionModal
        isOpen={roleModalOpen}
        onClose={() => setRoleModalOpen(false)}
        onSelectRole={() => { }}
      />
    </header>
  );
}