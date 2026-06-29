import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Mail, Phone, MapPin, ArrowRight } from 'lucide-angular';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  template: `
    <section id="contact" class="py-24 lg:py-32 bg-gradient-to-b from-teal-50 via-white to-cyan-50/30 relative overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16">
          <div>
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 border border-teal-200 rounded-full text-sm text-teal-600 mb-6">
              <lucide-icon [img]="Mail" class="w-4 h-4"></lucide-icon>
              Get In Touch
            </div>

            <h2 class="font-display text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
              Ready to
              <span class="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
                Transform?
              </span>
            </h2>

            <p class="text-charcoal-600 text-lg mb-8 leading-relaxed">
              Let's discuss how our expertise can accelerate your growth. Our team across Bengaluru, Mumbai, and Delhi is ready to understand your challenges and craft tailored solutions.
            </p>

            <div class="space-y-4">
              <div class="flex items-center gap-4 p-4 bg-white rounded-xl border border-charcoal-200 shadow-sm">
                <div class="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center text-white">
                  <lucide-icon [img]="Mail" class="w-5 h-5"></lucide-icon>
                </div>
                <div>
                  <div class="text-sm text-charcoal-500">Email Us</div>
                  <div class="font-medium text-charcoal-800">connect&#64;intellabizz.com</div>
                </div>
              </div>

              <div class="flex items-center gap-4 p-4 bg-white rounded-xl border border-charcoal-200 shadow-sm">
                <div class="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center text-white">
                  <lucide-icon [img]="Phone" class="w-5 h-5"></lucide-icon>
                </div>
                <div>
                  <div class="text-sm text-charcoal-500">Call Us</div>
                  <div class="font-medium text-charcoal-800">+91 9617139062</div>
                </div>
              </div>

              <div class="flex items-center gap-4 p-4 bg-white rounded-xl border border-charcoal-200 shadow-sm">
                <div class="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center text-white">
                  <lucide-icon [img]="MapPin" class="w-5 h-5"></lucide-icon>
                </div>
                <div>
                  <div class="text-sm text-charcoal-500">Locations</div>
                  <div class="font-medium text-charcoal-800">Jhansi | Delhi NCR</div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white border border-charcoal-200 rounded-2xl p-8 shadow-xl">
            <form (ngSubmit)="handleSubmit()" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm text-charcoal-600 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    [(ngModel)]="formData.name"
                    name="name"
                    class="w-full px-4 py-3 bg-charcoal-50 border border-charcoal-300 rounded-xl text-charcoal-800 placeholder-charcoal-400 focus:border-teal-500 focus:bg-white focus:outline-none transition-all"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label class="block text-sm text-charcoal-600 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    [(ngModel)]="formData.email"
                    name="email"
                    class="w-full px-4 py-3 bg-charcoal-50 border border-charcoal-300 rounded-xl text-charcoal-800 placeholder-charcoal-400 focus:border-teal-500 focus:bg-white focus:outline-none transition-all"
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm text-charcoal-600 font-medium mb-2">Company</label>
                  <input
                    type="text"
                    [(ngModel)]="formData.company"
                    name="company"
                    class="w-full px-4 py-3 bg-charcoal-50 border border-charcoal-300 rounded-xl text-charcoal-800 placeholder-charcoal-400 focus:border-teal-500 focus:bg-white focus:outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label class="block text-sm text-charcoal-600 font-medium mb-2">Service Interest</label>
                  <select
                    [(ngModel)]="formData.service"
                    name="service"
                    class="w-full px-4 py-3 bg-charcoal-50 border border-charcoal-300 rounded-xl text-charcoal-800 focus:border-teal-500 focus:bg-white focus:outline-none transition-all appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option value="recruitment">Recruitment Consultancy</option>
                    <option value="saas">SaaS Development</option>
                    <option value="it">IT Solutions</option>
                    <option value="financial">Financial Advisory</option>
                    <option value="legal">Legal Expertise</option>
                    <option value="innovation">Innovation Lab</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="block text-sm text-charcoal-600 font-medium mb-2">Message</label>
                <textarea
                  [(ngModel)]="formData.message"
                  name="message"
                  rows="4"
                  class="w-full px-4 py-3 bg-charcoal-50 border border-charcoal-300 rounded-xl text-charcoal-800 placeholder-charcoal-400 focus:border-teal-500 focus:bg-white focus:outline-none transition-all resize-none"
                  placeholder="Tell us about your project or challenge..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
              >
                Send Message
                <lucide-icon [img]="ArrowRight" class="w-5 h-5"></lucide-icon>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactSectionComponent {
  Mail = Mail;
  Phone = Phone;
  MapPin = MapPin;
  ArrowRight = ArrowRight;

  formData = {
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  };

  handleSubmit() {
    console.log('Form submitted:', this.formData);
    this.formData = {
      name: '',
      email: '',
      company: '',
      service: '',
      message: '',
    };
  }
}
