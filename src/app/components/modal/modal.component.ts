import { Component, Input, Output, EventEmitter, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, X, CheckCircle, Star, Target, Zap, ArrowRight, ExternalLink } from 'lucide-angular';
import { Service, CaseStudy, BlogPost } from '../../models/content.model';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    @if (isOpen) {
      <div
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/80 backdrop-blur-sm animate-fade-in"
        (click)="onClose()"
      >
        <div
          class="relative w-full max-w-2xl max-h-[90vh] bg-white border border-charcoal-200 rounded-2xl overflow-hidden shadow-2xl animate-scale-in"
          (click)="$event.stopPropagation()"
        >
          <button
            (click)="onClose()"
            class="absolute top-4 right-4 z-10 w-10 h-10 bg-charcoal-100 backdrop-blur rounded-full flex items-center justify-center text-charcoal-600 hover:text-charcoal-900 hover:bg-charcoal-200 transition-colors"
          >
            <lucide-icon [img]="X" class="w-5 h-5"></lucide-icon>
          </button>

          <div class="overflow-y-auto max-h-[90vh]">
            @if (modalType === 'service' && serviceData) {
              <div class="h-48 overflow-hidden">
                <img [src]="serviceData.image" [alt]="serviceData.title" class="w-full h-full object-cover" />
              </div>
              <div class="p-8">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl flex items-center justify-center text-2xl">
                    {{ getServiceEmoji(serviceData.icon) }}
                  </div>
                  <div>
                    <h3 class="font-display text-2xl font-bold text-charcoal-900">{{ serviceData.title }}</h3>
                    <p class="text-teal-600 text-sm">{{ serviceData.subtitle }}</p>
                  </div>
                </div>

                <p class="text-charcoal-600 mb-6">{{ serviceData.description }}</p>

                <h4 class="font-display font-bold text-charcoal-900 mb-4">What We Offer</h4>
                <ul class="space-y-3 mb-6">
                  @for (feature of serviceData.features; track feature) {
                    <li class="flex items-start gap-3">
                      <lucide-icon [img]="CheckCircle" class="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5"></lucide-icon>
                      <span class="text-charcoal-700">{{ feature }}</span>
                    </li>
                  }
                </ul>

                <a
                  href="#contact"
                  (click)="onClose()"
                  class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300"
                >
                  Get Started
                  <lucide-icon [img]="ArrowRight" class="w-4 h-4"></lucide-icon>
                </a>
              </div>
            }

            @if (modalType === 'caseStudy' && caseStudyData) {
              <div class="h-48 overflow-hidden">
                <img [src]="caseStudyData.image" [alt]="caseStudyData.title" class="w-full h-full object-cover" />
              </div>
              <div class="p-8">
                <div class="flex items-center gap-3 mb-2">
                  <span class="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full">
                    {{ caseStudyData.category }}
                  </span>
                </div>
                <p class="text-charcoal-500 text-sm mb-2">Client: {{ caseStudyData.client }}</p>
                <h3 class="font-display text-2xl font-bold text-charcoal-900 mb-4">{{ caseStudyData.title }}</h3>

                <div class="space-y-6">
                  <div class="bg-red-50 border border-red-200 rounded-xl p-4">
                    <h4 class="font-display font-bold text-charcoal-900 mb-2 flex items-center gap-2">
                      <lucide-icon [img]="Target" class="w-4 h-4 text-red-500"></lucide-icon>
                      The Challenge
                    </h4>
                    <p class="text-charcoal-600 text-sm">{{ caseStudyData.challenge }}</p>
                  </div>

                  <div class="bg-teal-50 border border-teal-200 rounded-xl p-4">
                    <h4 class="font-display font-bold text-charcoal-900 mb-2 flex items-center gap-2">
                      <lucide-icon [img]="Zap" class="w-4 h-4 text-teal-500"></lucide-icon>
                      Our Solution
                    </h4>
                    <p class="text-charcoal-600 text-sm">{{ caseStudyData.solution }}</p>
                  </div>

                  <div>
                    <h4 class="font-display font-bold text-charcoal-900 mb-3 flex items-center gap-2">
                      <lucide-icon [img]="CheckCircle" class="w-4 h-4 text-green-500"></lucide-icon>
                      Results
                    </h4>
                    <ul class="grid grid-cols-2 gap-3">
                      @for (result of caseStudyData.results; track result) {
                        <li class="flex items-center gap-2 bg-green-50 border border-green-200 px-3 py-2 rounded-lg">
                          <lucide-icon [img]="Star" class="w-4 h-4 text-green-600"></lucide-icon>
                          <span class="text-charcoal-700 text-sm">{{ result }}</span>
                        </li>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            }

            @if (modalType === 'blog' && blogData) {
              <div class="h-48 overflow-hidden">
                <img [src]="blogData.image" [alt]="blogData.title" class="w-full h-full object-cover" />
              </div>
              <div class="p-8">
                <div class="flex items-center gap-3 mb-4">
                  <span class="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full">
                    {{ blogData.category }}
                  </span>
                  <span class="text-charcoal-400 text-xs">{{ blogData.readTime }}</span>
                </div>

                <h3 class="font-display text-2xl font-bold text-charcoal-900 mb-3">{{ blogData.title }}</h3>

                <div class="flex items-center gap-2 text-charcoal-500 text-sm mb-6">
                  <span class="font-medium text-teal-600">{{ blogData.author }}</span>
                  <span>|</span>
                  <span>{{ blogData.date }}</span>
                </div>

                <div class="prose prose-lg max-w-none">
                  <p class="text-charcoal-700 leading-relaxed whitespace-pre-line">{{ blogData.content }}</p>
                </div>

                @if (blogData.sources && blogData.sources.length) {
                  <div class="mt-8 pt-6 border-t border-charcoal-200">
                    <h4 class="font-semibold text-charcoal-900 mb-3 text-sm">Sources:</h4>
                    <ul class="space-y-2">
                      @for (source of blogData.sources; track source) {
                        <li class="flex items-start gap-2 text-sm text-charcoal-500">
                          <lucide-icon [img]="ExternalLink" class="w-3 h-3 mt-1 flex-shrink-0"></lucide-icon>
                          <span>{{ source }}</span>
                        </li>
                      }
                    </ul>
                  </div>
                }
              </div>
            }
          </div>
        </div>
      </div>
    }
  `,
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() modalType: 'service' | 'caseStudy' | 'blog' | null = null;
  @Input() modalData: Service | CaseStudy | BlogPost | null = null;
  @Output() close = new EventEmitter<void>();

  X = X;
  CheckCircle = CheckCircle;
  Star = Star;
  Target = Target;
  Zap = Zap;
  ArrowRight = ArrowRight;
  ExternalLink = ExternalLink;

  get serviceData(): Service | null {
    return this.modalType === 'service' ? this.modalData as Service : null;
  }

  get caseStudyData(): CaseStudy | null {
    return this.modalType === 'caseStudy' ? this.modalData as CaseStudy : null;
  }

  get blogData(): BlogPost | null {
    return this.modalType === 'blog' ? this.modalData as BlogPost : null;
  }

  onClose() {
    this.close.emit();
  }

  getServiceEmoji(icon: string): string {
    const emojis: { [key: string]: string } = {
      users: '👥',
      cloud: '☁️',
      code: '💻',
      'trending-up': '📈',
      shield: '🛡️',
      sparkles: '✨',
    };
    return emojis[icon] || '🔧';
  }
}
