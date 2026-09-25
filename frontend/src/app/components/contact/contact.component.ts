import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IconComponent],
  template: `
    <section class="section contact-section" id="contact">
      <div class="container contact-grid">

        <div class="contact-intro">
          <span class="kicker">05 — CONTACT</span>

          <h2>Have a project<br>in mind?</h2>

          <p>
            Tell me what you're building, what you need and where you want to go.
            I'll get back to you as soon as possible.
          </p>

          <div class="contact-details">

            <a href="mailto:mohamedlasswed2704@gmail.com">
              <span class="detail-icon">
                <app-icon name="mail" [size]="18"/>
              </span>
              <span>
                <small>Email</small>
                mohamedlasswed2704@gmail.com
              </span>
            </a>

            <a href="tel:+21694663328">
              <span class="detail-icon">
                <app-icon name="phone" [size]="18"/>
              </span>
              <span>
                <small>Phone</small>
                +216 94 663 328
              </span>
            </a>

            <a
              href="https://wa.me/21694663328"
              target="_blank"
              rel="noreferrer"
            >
              <span class="detail-icon">WA</span>
              <span>
                <small>WhatsApp</small>
                Start a conversation
              </span>
            </a>

          </div>
        </div>

        <form
          class="contact-form"
          [formGroup]="form"
          (ngSubmit)="submit()"
          novalidate
        >

          <div class="form-row">

            <label>
              Name

              <input
                type="text"
                formControlName="name"
                placeholder="Your name"
              >

              <em
                *ngIf="form.controls.name.touched && form.controls.name.invalid"
              >
                Please enter your name.
              </em>
            </label>

            <label>
              Email

              <input
                type="email"
                formControlName="email"
                placeholder="you@company.com"
              >

              <em
                *ngIf="form.controls.email.touched && form.controls.email.invalid"
              >
                Enter a valid email.
              </em>
            </label>

          </div>

          <label>
            Message

            <textarea
              rows="7"
              formControlName="message"
              placeholder="Tell me about your project..."
            ></textarea>

            <em
              *ngIf="form.controls.message.touched && form.controls.message.invalid"
            >
              Please write a message.
            </em>
          </label>

          <button
            class="btn btn-primary submit"
            type="submit"
            [disabled]="loading()"
          >
            {{ loading() ? 'Sending…' : 'Send message' }}
            <app-icon name="arrow" [size]="18"/>
          </button>

          <p
            class="form-state success"
            *ngIf="success()"
          >
            Thanks — your message has been sent.
          </p>

          <p
            class="privacy"
          >
            By sending this form, you agree that your details may be used
            only to respond to your request.
          </p>

        </form>

      </div>
    </section>
  `
})
export class ContactComponent {

  private fb = inject(FormBuilder);

  loading = signal(false);
  success = signal(false);

  form = this.fb.nonNullable.group({
    name: [
      '',
      [
        Validators.required,
        Validators.maxLength(100)
      ]
    ],

    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.maxLength(180)
      ]
    ],

    message: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(3000)
      ]
    ]
  });

  submit() {

    this.success.set(false);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);

    /*
     * Frontend-only contact form.
     *
     * There is no backend anymore.
     * The form opens the user's email client
     * with the message prepared automatically.
     */

    const { name, email, message } = this.form.getRawValue();

    const subject = encodeURIComponent(
      `Portfolio Contact — ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}`
    );

    const mailtoUrl =
      `mailto:mohamedlasswed2704@gmail.com` +
      `?subject=${subject}` +
      `&body=${body}`;

    window.location.href = mailtoUrl;

    this.loading.set(false);
    this.success.set(true);

    this.form.reset();
  }
}