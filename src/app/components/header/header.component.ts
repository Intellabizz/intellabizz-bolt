import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Menu, X, ArrowRight, Sparkles } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      [class]="isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <a href="#home" class="flex items-center gap-3 group">
            <div class="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-shadow duration-300">
              <lucide-icon [img]="Sparkles" class="w-5 h-5 text-white"></lucide-icon>
            </div>
            <span class="font-display text-2xl font-bold text-charcoal-800">
              Intella<span class="text-teal-600">Bizz</span>
            </span>
          </a>

          <nav class="hidden lg:flex items-center gap-8">
            @for (item of navItems; track item.href) {
              <a
                [href]="item.href"
                class="relative text-sm font-medium text-charcoal-600 hover:text-teal-600 transition-colors duration-200 group"
              >
                {{ item.label }}
                <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            }
          </nav>

          <a
            href="#contact"
            class="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold text-sm rounded-lg transition-all duration-300 hover:shadow-glow active:scale-95"
          >
            Get Started
            <lucide-icon [img]="ArrowRight" class="w-4 h-4"></lucide-icon>
          </a>

          <button
            (click)="toggleMobileMenu()"
            class="lg:hidden p-2 text-charcoal-700"
          >
            <lucide-icon [img]="mobileMenuOpen ? X : Menu" class="w-6 h-6"></lucide-icon>
          </button>
        </div>

        @if (mobileMenuOpen) {
          <div class="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-charcoal-200 animate-fade-in-down">
            <nav class="flex flex-col py-4">
              @for (item of navItems; track item.href) {
                <a
                  [href]="item.href"
                  (click)="mobileMenuOpen = false"
                  class="px-6 py-3 text-charcoal-600 hover:text-teal-600 hover:bg-teal-50 transition-colors"
                >
                  {{ item.label }}
                </a>
              }
              <a
                href="#contact"
                (click)="mobileMenuOpen = false"
                class="mx-6 mt-4 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-lg"
              >
                Get Started
                <lucide-icon [img]="ArrowRight" class="w-4 h-4"></lucide-icon>
              </a>
            </nav>
          </div>
        }
      </div>
    </header>
  `,
})
export class HeaderComponent {
  isScrolled = false;
  mobileMenuOpen = false;

  navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Blog', href: '#blog' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  Sparkles = Sparkles;
  Menu = Menu;
  X = X;
  ArrowRight = ArrowRight;

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
