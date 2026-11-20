'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Mic,
  Captions,
  HandMetal,
  BookOpen,
  Menu,
  X,
  Activity,
} from 'lucide-react';
import IprepLogo from './IprepLogo';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  isListening?: boolean;
}

export default function Navbar({ isListening = false }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      name: 'Live Captions',
      href: '/captions',
      icon: Captions,
      desc: 'Real-time speech to text',
    },
    {
      name: 'Sign Bridge',
      href: '/sign-bridge',
      icon: HandMetal,
      desc: 'Sign language & quick replies',
    },
    {
      name: 'Study & Work',
      href: '/workspace',
      icon: BookOpen,
      desc: 'Lecture & meeting summaries',
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
      {/* Skip to Main Content - Keyboard/Screen Reader Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            aria-label="AccessIprepAI, home"
            className="flex items-center rounded-lg p-1 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {/* Light theme: dark text */}
            <IprepLogo
              aria-hidden="true"
              darkText
              className="block h-9 w-auto dark:hidden"
            />
            {/* Dark theme: white text */}
            <IprepLogo
              aria-hidden="true"
              darkText={false}
              className="hidden h-9 w-auto dark:block"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex md:items-center md:gap-1"
        >
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Controls: Visual Mic Status + Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-2.5">
          {/* Visual Audio Indicator (Deaf users ke liye visual feedback) */}
          <div
            role="status"
            aria-live="polite"
            className={`hidden sm:flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
              isListening
                ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                : 'border-border bg-secondary text-secondary-foreground'
            }`}
          >
            {isListening ? (
              <>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                </span>
                <span>Listening Live</span>
                <Activity className="h-3.5 w-3.5 animate-pulse" />
              </>
            ) : (
              <>
                <Mic className="h-3.5 w-3.5 text-muted-foreground" />
                <span>Mic Standby</span>
              </>
            )}
          </div>

          {/* Dark / Light Mode Toggle */}
          <ThemeToggle />

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-card-foreground md:hidden hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 pt-3 md:hidden">
          <div className="space-y-1.5">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-accent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4" />
                    <div>
                      <div>{item.name}</div>
                      <div
                        className={`text-xs ${
                          isActive
                            ? 'text-primary-foreground/80'
                            : 'text-muted-foreground'
                        }`}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
