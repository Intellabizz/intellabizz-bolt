import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Sparkles } from 'lucide-angular';
import { blogPosts } from '../../../data/blogs.data';
import { BlogPost } from '../../../models/content.model';

@Component({
  selector: 'app-blog-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="blog" class="py-24 lg:py-32 bg-gradient-to-b from-white via-cyan-50/20 to-white relative">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-1/2 left-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-sm text-teal-600 mb-6">
            <lucide-icon [img]="Sparkles" class="w-4 h-4"></lucide-icon>
            Blog and Insights
          </div>
          <h2 class="font-display text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
            Expert
            <span class="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
              Perspectives
            </span>
          </h2>
          <p class="max-w-2xl mx-auto text-charcoal-600 text-lg">
            Deep dives into emerging trends, strategic insights, and practical wisdom from our experts.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          @for (post of blogPosts; track post.id) {
            <article
              class="group flex gap-6 bg-white border border-charcoal-200 rounded-2xl p-5 hover:border-teal-400 transition-all duration-300 hover:shadow-xl cursor-pointer"
              (click)="openBlogModal(post)"
            >
              <div class="flex-shrink-0 w-36 h-36 md:w-44 md:h-44 rounded-xl overflow-hidden shadow-md">
                <img
                  [src]="post.image"
                  [alt]="post.title"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-3 mb-3">
                  <span class="px-2.5 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full">
                    {{ post.category }}
                  </span>
                  <span class="text-xs text-charcoal-400">{{ post.readTime }}</span>
                </div>

                <h3 class="font-display text-lg font-bold text-charcoal-900 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
                  {{ post.title }}
                </h3>

                <p class="text-charcoal-500 text-sm mb-3 line-clamp-2">{{ post.excerpt }}</p>

                <div class="flex items-center gap-2 text-charcoal-400 text-xs">
                  <span class="font-medium text-teal-600">{{ post.author }}</span>
                  <span>|</span>
                  <span>{{ post.date }}</span>
                </div>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class BlogSectionComponent {
  Sparkles = Sparkles;

  blogPosts = blogPosts;

  @Output() openModal = new EventEmitter<{ type: 'blog'; data: BlogPost }>();

  openBlogModal(post: BlogPost) {
    this.openModal.emit({ type: 'blog', data: post });
  }
}
