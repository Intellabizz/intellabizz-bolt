import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroSectionComponent } from '../../components/sections/hero-section/hero-section.component';
import { AboutSectionComponent } from '../../components/sections/about-section/about-section.component';
import { ServicesSectionComponent } from '../../components/sections/services-section/services-section.component';
import { CaseStudiesSectionComponent } from '../../components/sections/case-studies-section/case-studies-section.component';
import { BlogSectionComponent } from '../../components/sections/blog-section/blog-section.component';
import { ContactSectionComponent } from '../../components/sections/contact-section/contact-section.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    CaseStudiesSectionComponent,
    BlogSectionComponent,
    ContactSectionComponent,
    FooterComponent,
    ModalComponent,
  ],
  template: `
    <app-header></app-header>
    <main>
      <app-hero-section></app-hero-section>
      <app-about-section></app-about-section>
      <app-services-section (openModal)="openModal($event)"></app-services-section>
      <app-case-studies-section (openModal)="openModal($event)"></app-case-studies-section>
      <app-blog-section (openModal)="openModal($event)"></app-blog-section>
      <app-contact-section></app-contact-section>
    </main>
    <app-footer></app-footer>
    <app-modal
      [isOpen]="modalOpen"
      [modalType]="modalType"
      [modalData]="modalData"
      (close)="closeModal()"
    ></app-modal>
  `,
})
export class HomeComponent {
  modalOpen = false;
  modalType: 'service' | 'caseStudy' | 'blog' | null = null;
  modalData: any = null;

  openModal(event: { type: 'service' | 'caseStudy' | 'blog'; data: any }) {
    this.modalType = event.type;
    this.modalData = event.data;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.modalType = null;
    this.modalData = null;
  }
}
