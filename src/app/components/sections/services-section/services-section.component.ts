import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ArrowRight, Cpu } from 'lucide-angular';
import { services } from '../../../data/content.data';
import { Service } from '../../../models/content.model';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="services" class="py-24 lg:py-32 bg-gradient-to-b from-white via-teal-50/30 to-white relative">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-0 left-1/3 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/3 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-sm text-teal-600 mb-6">
            <lucide-icon [img]="Cpu" class="w-4 h-4"></lucide-icon>
            Our Services
          </div>
          <h2 class="font-display text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
            What Can
            <span class="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
              Help You?
            </span>
          </h2>
          <p class="max-w-2xl mx-auto text-charcoal-600 text-lg">
            Explore our comprehensive range of expert services tailored to help your business thrive in a rapidly evolving landscape.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (service of services; track service.id) {
            <div
              class="group relative bg-white border border-charcoal-200 rounded-2xl p-6 hover:border-teal-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer overflow-hidden"
              (click)="openServiceModal(service)"
            >
              <div class="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-cyan-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div class="relative z-10">
                <div class="w-14 h-14 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-teal-400 group-hover:to-cyan-500 transition-all duration-300">
                  <span class="text-2xl group-hover:scale-110 transition-transform duration-300">{{ getServiceEmoji(service.icon) }}</span>
                </div>

                <h3 class="font-display text-xl font-bold text-charcoal-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {{ service.title }}
                </h3>

                <p class="text-sm text-teal-600 mb-3 font-medium">{{ service.subtitle }}</p>

                <p class="text-charcoal-500 text-sm mb-4 line-clamp-2">
                  {{ service.description }}
                </p>

                <div class="flex items-center gap-2 text-teal-600 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                  <span>Learn More</span>
                  <lucide-icon [img]="ArrowRight" class="w-4 h-4"></lucide-icon>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class ServicesSectionComponent {
  ArrowRight = ArrowRight;
  Cpu = Cpu;

  services = services;

  @Output() openModal = new EventEmitter<{ type: 'service'; data: Service }>();

  getServiceEmoji(icon: string): string {
    const emojis: Record<string, string> = {
      users: '👥',
      cloud: '☁️',
      code: '💻',
      'trending-up': '📈',
      shield: '🛡️',
      sparkles: '✨',
    };
    return emojis[icon] || '🔧';
  }

  openServiceModal(service: Service) {
    this.openModal.emit({ type: 'service', data: service });
  }
}
