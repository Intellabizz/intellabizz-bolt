import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Linkedin, Twitter, Facebook, Instagram, Sparkles } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <footer class="bg-charcoal-900 text-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div class="grid md:grid-cols-4 gap-12 mb-12">
          <div class="md:col-span-2">
            <a href="#home" class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center">
                <lucide-icon [img]="Sparkles" class="w-5 h-5 text-white"></lucide-icon>
              </div>
              <span class="font-display text-2xl font-bold text-white">
                Intella<span class="text-teal-400">bizz</span>
              </span>
            </a>
            <p class="text-charcoal-400 max-w-md mb-6">
              Empowering Indian businesses with world-class IT Services, Legal Expertise, Financial Advisory, and Talent Solutions. Your growth partner for the digital age.
            </p>
            <div class="flex gap-4">
              <a href="#" class="w-10 h-10 bg-charcoal-800 rounded-xl flex items-center justify-center text-charcoal-400 hover:text-teal-400 hover:bg-charcoal-700 transition-all duration-300">
                <lucide-icon [img]="Linkedin" class="w-5 h-5"></lucide-icon>
              </a>
              <a href="#" class="w-10 h-10 bg-charcoal-800 rounded-xl flex items-center justify-center text-charcoal-400 hover:text-teal-400 hover:bg-charcoal-700 transition-all duration-300">
                <lucide-icon [img]="Twitter" class="w-5 h-5"></lucide-icon>
              </a>
              <a href="#" class="w-10 h-10 bg-charcoal-800 rounded-xl flex items-center justify-center text-charcoal-400 hover:text-teal-400 hover:bg-charcoal-700 transition-all duration-300">
                <lucide-icon [img]="Facebook" class="w-5 h-5"></lucide-icon>
              </a>
              <a href="#" class="w-10 h-10 bg-charcoal-800 rounded-xl flex items-center justify-center text-charcoal-400 hover:text-teal-400 hover:bg-charcoal-700 transition-all duration-300">
                <lucide-icon [img]="Instagram" class="w-5 h-5"></lucide-icon>
              </a>
            </div>
          </div>

          <div>
            <h4 class="font-display font-bold text-white mb-4">Quick Links</h4>
            <ul class="space-y-3">
              @for (item of navItems; track item.href) {
                <li>
                  <a [href]="item.href" class="text-charcoal-400 hover:text-teal-400 transition-colors">
                    {{ item.label }}
                  </a>
                </li>
              }
            </ul>
          </div>

          <div>
            <h4 class="font-display font-bold text-white mb-4">Services</h4>
            <ul class="space-y-3">
              @for (service of services; track service) {
                <li>
                  <a href="#services" class="text-charcoal-400 hover:text-teal-400 transition-colors">
                    {{ service }}
                  </a>
                </li>
              }
            </ul>
          </div>
        </div>

        <div class="pt-8 border-t border-charcoal-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-charcoal-500 text-sm">
            Copyright 2025 <span class="text-white font-medium">Intellabizz Consultancy Services</span>. All rights reserved.
          </p>
          <p class="text-charcoal-500 text-sm">
            Proudly Made in India <span class="text-teal-400">|</span> Designed by <span class="text-teal-400">Intellabizz</span>
          </p>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  Sparkles = Sparkles;
  Linkedin = Linkedin;
  Twitter = Twitter;
  Facebook = Facebook;
  Instagram = Instagram;

  navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Blog', href: '#blog' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  services = ['Recruitment Consultancy', 'SaaS Development', 'IT Solutions', 'Financial Advisory', 'Legal Expertise'];
}
