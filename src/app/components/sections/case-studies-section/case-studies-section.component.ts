import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Star } from 'lucide-angular';
import { caseStudies } from '../../../data/case-studies.data';
import { CaseStudy } from '../../../models/content.model';

@Component({
  selector: 'app-case-studies-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="case-studies" class="py-24 lg:py-32 bg-gradient-to-b from-charcoal-50 via-white to-teal-50/20 relative overflow-hidden">
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-sm text-teal-600 mb-6">
            <lucide-icon [img]="Star" class="w-4 h-4"></lucide-icon>
            Case Studies
          </div>
          <h2 class="font-display text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
            Success
            <span class="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p class="max-w-2xl mx-auto text-charcoal-600 text-lg">
            Real results from real partnerships. Discover how we've helped organizations across India overcome their toughest challenges.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          @for (caseStudy of caseStudies; track caseStudy.id) {
            <div
              class="group bg-white border border-charcoal-200 rounded-2xl overflow-hidden hover:border-teal-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              (click)="openCaseStudyModal(caseStudy)"
            >
              <div class="relative h-52 overflow-hidden">
                <img
                  [src]="caseStudy.image"
                  [alt]="caseStudy.title"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent"></div>
                <div class="absolute top-4 left-4 px-3 py-1 bg-teal-500/80 backdrop-blur rounded-full text-xs text-white font-medium">
                  {{ caseStudy.category }}
                </div>
              </div>

              <div class="p-6">
                <div class="text-sm text-teal-600 font-medium mb-2">{{ caseStudy.client }}</div>
                <h3 class="font-display text-xl font-bold text-charcoal-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {{ caseStudy.title }}
                </h3>
                <p class="text-charcoal-500 text-sm mb-4">{{ caseStudy.description }}</p>

                <div class="flex flex-wrap gap-2">
                  @for (result of caseStudy.results.slice(0, 2); track result) {
                    <div class="px-3 py-1.5 bg-teal-50 border border-teal-200 rounded-lg text-xs text-teal-700 font-medium">
                      {{ result }}
                    </div>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class CaseStudiesSectionComponent {
  Star = Star;

  caseStudies = caseStudies;

  @Output() openModal = new EventEmitter<{ type: 'caseStudy'; data: CaseStudy }>();

  openCaseStudyModal(caseStudy: CaseStudy) {
    this.openModal.emit({ type: 'caseStudy', data: caseStudy });
  }
}
