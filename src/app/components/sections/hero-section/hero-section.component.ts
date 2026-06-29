import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ArrowRight, ChevronRight, Sparkles } from 'lucide-angular';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50 pt-20">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div class="space-y-8">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur border border-teal-200 rounded-full text-sm text-charcoal-700 shadow-lg">
            <lucide-icon [img]="Sparkles" class="w-4 h-4 text-teal-600"></lucide-icon>
            <span>Innovative Solutions, Transforming Your Business</span>
          </div>

          <h1 class="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal-900">
            Your Growth
            <span class="block mt-2 bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
              Simplified
            </span>
          </h1>

          <p class="max-w-3xl mx-auto text-lg md:text-xl text-charcoal-600 leading-relaxed">
            Empowering Indian businesses with world-class
            <span class="text-teal-600 font-medium">IT Services</span>,
            <span class="text-cyan-600 font-medium">Legal Expertise</span>,
            <span class="text-teal-600 font-medium">Financial Advisory</span>, and
            <span class="text-cyan-600 font-medium">Talent Solutions</span>.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              class="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold text-lg rounded-xl transition-all duration-300 hover:shadow-xl active:scale-95"
            >
              Start Your Journey
              <lucide-icon [img]="ArrowRight" class="w-5 h-5 group-hover:translate-x-1 transition-transform"></lucide-icon>
            </a>
            <a
              href="#services"
              class="inline-flex items-center gap-2 px-8 py-4 border-2 border-teal-300 bg-white/50 text-teal-700 hover:border-teal-500 hover:bg-white font-medium text-lg rounded-xl transition-all duration-300"
            >
              Explore Services
              <lucide-icon [img]="ChevronRight" class="w-5 h-5"></lucide-icon>
            </a>
          </div>

          <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            @for (stat of stats; track stat.label) {
              <div class="bg-white/60 backdrop-blur rounded-2xl p-6 shadow-lg border border-teal-100">
                <div class="font-display text-3xl md:text-4xl font-bold text-teal-600 mb-1">
                  {{ stat.number }}
                </div>
                <div class="text-sm text-charcoal-500">{{ stat.label }}</div>
              </div>
            }
          </div>
        </div>
      </div>

      <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>

      <div class="absolute top-32 left-8 w-20 h-20 opacity-20 animate-bounce">
        <div class="w-full h-full bg-gradient-to-br from-teal-400 to-cyan-400 rounded-2xl rotate-12"></div>
      </div>
      <div class="absolute top-48 right-12 w-16 h-16 opacity-15 animate-bounce">
        <div class="w-full h-full bg-gradient-to-br from-amber-400 to-orange-400 rounded-full"></div>
      </div>

      <div class="absolute bottom-0 left-[49.3%] -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-teal-400 rounded-full flex items-start justify-center p-2 bg-white/50">
          <div class="w-1 h-2 bg-teal-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  `,
})
export class HeroSectionComponent {
  Sparkles = Sparkles;
  ArrowRight = ArrowRight;
  ChevronRight = ChevronRight;

  stats = [
    { number: '10x', label: 'Faster Time-to-Market' },
    { number: '0', label: 'Legacy Tech Debt' },
    { number: '4/4', label: 'Core Domains Unified (Tech, Legal, Fin, HR)' },
    { number: '1st', label: 'Year of Breakthrough Growth' },
  ];
}
