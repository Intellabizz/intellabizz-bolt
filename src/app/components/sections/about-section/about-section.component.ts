import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Briefcase, Target, Zap, Shield, Globe, CheckCircle } from 'lucide-angular';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="about" class="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-teal-50/50 via-white to-cyan-50/30"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="relative">
            <div class="absolute -inset-4 bg-gradient-to-r from-teal-200/30 to-cyan-200/20 rounded-3xl blur-2xl"></div>
            <div class="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=compress&cs=tinysrgb&w=800"
                alt="Intellabizz Team Collaboration"
                class="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <!-- <div class="absolute -bottom-6 -right-6 bg-white border border-teal-200 rounded-2xl p-6 shadow-xl">
                <div class="flex items-center gap-4">
                  <div class="w-14 h-14 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center">
                    <lucide-icon [img]="Target" class="w-7 h-7 text-white"></lucide-icon>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-charcoal-800">Purpose-Built Excellence</div>
                    <div class="text-sm text-charcoal-500">Purpose-Built Excellence</div>
                  </div> 
                </div>
              </div> -->
            </div>
          </div>

          <div>
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-sm text-teal-600 mb-6">
              <lucide-icon [img]="Briefcase" class="w-4 h-4"></lucide-icon>
              About Us
            </div>

            <h2 class="font-display text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
              Life at
              <span class="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
                Intellabizz
              </span>
            </h2>

            <p class="text-charcoal-600 text-lg mb-6 leading-relaxed">
              We are a dynamic team of elite specialists driven by strategic innovation, high velocity, and a customer-first approach. Headquartered in Bengaluru with a fast-expanding nationwide footprint, we bypass legacy methodologies to engineer solutions that deliver immediate, measurable impact.
            </p>

            <p class="text-charcoal-500 mb-8 leading-relaxed">
              We work alongside diverse teams and businesses across India to take the complexity out of growth. Our day-to-day expertise covers the essentials every business needs: technology, legal support, financial planning, and human resources. Our multidisciplinary expertise spans technology, legal, financial, and human capital domains.
            </p>

            <div class="grid grid-cols-2 gap-6 mb-8">
              @for (item of highlights; track item.text) {
                <div class="flex items-center gap-3 p-4 bg-teal-50/50 rounded-xl">
                  <div class="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-500 rounded-lg flex items-center justify-center text-white">
                    <lucide-icon [img]="item.icon" class="w-5 h-5"></lucide-icon>
                  </div>
                  <span class="font-medium text-charcoal-700">{{ item.text }}</span>
                </div>
              }
            </div>

            <div class="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-6 text-white">
              <p class="text-lg font-medium mb-2">"Making India a global hub of innovation and excellence"</p>
              <p class="text-teal-100 text-sm">- Our Mission Since 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutSectionComponent {
  Briefcase = Briefcase;
  Target = Target;
  Zap = Zap;
  Shield = Shield;
  Globe = Globe;
  CheckCircle = CheckCircle;

  highlights = [
    { icon: Zap, text: 'Innovation-Driven' },
    { icon: Shield, text: 'Trusted Partner' },
    { icon: Globe, text: 'Global Reach' },
    { icon: CheckCircle, text: 'Results-Focused' },
  ];
}
