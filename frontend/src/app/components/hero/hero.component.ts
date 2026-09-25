import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [IconComponent],
  template: `
    <section class="hero" id="top">
      <div class="hero-grid"></div>

      <div class="container hero-content">

        <!-- LEFT: CONTENT -->
        <div class="hero-text">

          <div class="eyebrow reveal">
            <span class="status-dot"></span>
            Available for freelance work
          </div>

          <h1 class="reveal delay-1">
            I build digital products<br>
            <span class="gradient-text">
              that move businesses forward.
            </span>
          </h1>

          <p class="hero-copy reveal delay-2">
            I'm Mohamed Lasswed, a Full-Stack Web & Mobile Developer
            based in Tunisia. I turn ideas into fast, scalable and
            polished digital experiences.
          </p>

          <div class="hero-actions reveal delay-3">
            <a class="btn btn-primary" href="#contact">
              Hire Me
              <app-icon name="arrow" [size]="18"/>
            </a>

            <a class="btn btn-ghost" href="#projects">
              View Work
              <app-icon name="external" [size]="17"/>
            </a>
          </div>

          <!-- SOCIAL LINKS -->
          <div class="hero-socials reveal delay-3">

            <a
              href="https://www.linkedin.com/in/med-lasswed-374b1a2b7/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              class="social-link"
            >
              LinkedIn
              <span>↗</span>
            </a>

            <a
              href="https://github.com/capoMed"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              class="social-link"
            >
              GitHub
              <span>↗</span>
            </a>

          </div>

          <div class="hero-meta reveal delay-3">
            <span>Based in Gafsa, Tunisia</span>
            <span class="sep"></span>
            <span>Web · Mobile · APIs</span>
          </div>

        </div>

        <!-- RIGHT: PROFILE PHOTO -->
       <div class="hero-photo-wrapper reveal delay-2">

  <div class="hero-photo-glow"></div>

  <img
    src="/profile.png"
    alt="Mohamed Lasswed - Full-Stack Web & Mobile Developer"
    class="hero-photo"
  />

</div>

      </div>

      <div class="scroll-cue">
        Scroll to explore
        <span></span>
      </div>

    </section>
  `
})
export class HeroComponent {}