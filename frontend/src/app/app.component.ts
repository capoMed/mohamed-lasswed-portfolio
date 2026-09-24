import { Component, signal } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
@Component({selector:'app-root',standalone:true,imports:[NavbarComponent,HeroComponent,AboutComponent,ServicesComponent,SkillsComponent,ProjectsComponent,ContactComponent,FooterComponent],template:`<app-navbar/><main><app-hero/><app-about/><app-services/><app-skills/><app-projects/><app-contact/></main><app-footer/>`})
export class AppComponent { readonly year = signal(new Date().getFullYear()); }
