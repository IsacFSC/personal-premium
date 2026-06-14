"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import WhatsAppStoreButton from "@/components/WhatsAppStoreButton";
import Image from "next/image";
import Icon from "./../../public/assets/academia.png";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/studio", label: "Studio" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/90 border-b border-zinc-800/50 shadow-2xl backdrop-blur-md"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo e Nome da Marca */}
          <Link
            href="/"
            className="flex items-center gap-3 group relative select-none"
          >
            <div className="absolute inset-y-0 left-0 z-0 flex items-center pointer-events-none opacity-40 group-hover:opacity-50 transition-opacity duration-300">
              <Image
                src={Icon}
                width={80}
                height={80}
                alt="Premium Personal"
                priority
                className="rounded-xl bg-brand-accent/15 object-cover opacity-50"
              />
            </div>
            {/* Texto visível em todas as telas, se adequando ao espaço */}
            <div className="relative z-10 -left-1 flex flex-col justify-center mix-blend-plus-lightning">
              <span className="block font-mono pl-5 text-[9px] uppercase tracking-[0.25em] text-zinc-300 leading-none">
                Premium
              </span>
              <span className="block font-allura text-2xl tracking-wider text-white group-hover:text-zinc-300 transition-colors leading-none -mt-1">
                Personal
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[1.5px] bg-white transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop Call To Action */}
          <div className="hidden items-center lg:flex">
            <WhatsAppStoreButton
              label="Solicitar Acesso"
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 rounded-none transition-all"
              placement="down"
              align="right"
            />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Menu de navegação"
            aria-expanded={isMobileOpen}
            className="rounded-lg p-2 text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors lg:hidden"
          >
            {isMobileOpen ? (
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`overflow-hidden bg-zinc-950 border-b border-zinc-900 transition-all duration-300 ease-in-out lg:hidden ${
          isMobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-2 px-6 py-6 border-t border-zinc-900">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-lg px-4 py-3 text-base font-medium tracking-wide transition-colors ${
                  isActive
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900/50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-4 flex justify-center w-full">
            <WhatsAppStoreButton
              label="Solicitar Acesso Exclusivo"
              className="w-full text-center py-3 text-sm font-semibold uppercase tracking-wider bg-white text-black rounded-none"
              placement="up"
              align="center"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
