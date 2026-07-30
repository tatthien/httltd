"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const headerNav = [
  { label: 'Trang Chủ', href: '/' },
  { label: 'Thông Báo', href: '/category/thong-bao' },
  { label: 'Tin Tức', href: '/category/tin-tuc' },
  { label: 'Bài Học', href: '/category/bai-hoc' },
  { label: 'Dâng Hiến', href: '/dang-hien' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white text-[#1c1b1a] border-b border-[#e6e4df] transition-all duration-300 ${isScrolled ? 'shadow-xs' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-[70px] md:h-[80px] flex items-center justify-between">
        <Link href="/" className="flex items-center py-1">
          <img 
            src="/images/logo.png" 
            alt="Hội Thánh Tin Lành Việt Nam - Chi Hội Thủ Đức" 
            className="h-9 md:h-11 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {headerNav.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={`text-sm font-medium py-2 border-b-2 transition-colors ${
                  isActive ? 'text-[#1c1b1a] border-primary font-semibold' : 'text-[#4a4844] border-transparent hover:text-[#1c1b1a]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Hamburger */}
        <button 
          className="lg:hidden flex items-center justify-center w-10 h-10 text-2xl text-[#1c1b1a] rounded-md hover:bg-[#f7f6f4] transition-colors" 
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-[70px] md:top-[80px] left-0 right-0 bottom-0 h-[calc(100vh-70px)] md:h-[calc(100vh-80px)] bg-white p-6 transition-all duration-300 z-40 overflow-y-auto shadow-xl ${
        isMobileMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        <nav className="flex flex-col">
          {headerNav.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={`text-base py-4 border-b border-[#f0eee8] flex items-center justify-between transition-colors ${
                  isActive ? 'text-[#1c1b1a] font-bold' : 'text-[#4a4844] font-medium hover:text-[#1c1b1a]'
                }`}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
