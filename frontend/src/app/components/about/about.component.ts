import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon.component';
@Component({selector:'app-about',standalone:true,imports:[IconComponent],template:`<section class="section" id="about"><div class="container about-grid"><div class="section-heading"><span class="kicker">01 — ABOUT ME</span><h2>Developer mindset.<br><span class="muted">Product thinking.</span></h2></div><div class="about-copy"><p class="lead">I create digital products that are as thoughtful under the hood as they are on screen.</p><p>From responsive websites to full-stack platforms and mobile applications, I focus on clean architecture, intuitive UX and measurable business value. My goal is simple: make technology feel effortless for the people who use it.</p><div class="facts"><div><strong>Full-Stack</strong><span>Web & Mobile</span></div><div><strong>4+</strong><span>Core services</span></div><div><strong>3</strong><span>Languages</span></div></div></div><div class="portrait-card"><div class="portrait-placeholder"><span><img
  src="/profile.png"
  alt="Mohamed Lasswed"
  class="about-profile-photo"
/></span><div class="portrait-glow"></div></div><div class="portrait-caption"><span>Mohamed Lasswed</span><small>Full-Stack Developer · Tunisia</small></div></div></div></section>`}) export class AboutComponent {}
