import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContentService } from '../../core/services/content.service';

/** Replace with your Formspree endpoint when ready, e.g. https://formspree.io/f/xxxxxxxx */
export const FORMSPREE_ENDPOINT = '';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  private readonly fb = inject(FormBuilder);
  readonly content = inject(ContentService);

  readonly submitted = signal(false);
  readonly submitting = signal(false);

  readonly serviceOptions = this.content.services.map((s) => s.title);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.pattern(/^[+\d\s()-]{7,20}$/)]],
    company: [''],
    service: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting.set(true);

    // Placeholder until Formspree is wired up — replace with fetch(FORMSPREE_ENDPOINT, ...)
    setTimeout(() => {
      this.submitting.set(false);
      this.submitted.set(true);
      this.form.reset();
    }, 800);
  }

  isInvalid(controlName: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && control.touched;
  }

  resetForm(): void {
    this.submitted.set(false);
    this.form.reset();
  }
}
