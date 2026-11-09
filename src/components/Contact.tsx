"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { BrandPattern } from "./BrandPattern";
import { useLanguage } from "../context/LanguageContext";
import { siteConfig } from "../data/site-config";

interface FormState {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface ContactSubmissionPayload extends FormState {
  locale: string;
  submittedAt: string;
}

/**
 * Modular submission adapter.
 * - Currently runs front-end-only when `NEXT_PUBLIC_CONTACT_API_URL` is unset.
 * - To connect a Next.js Route Handler (`src/app/api/contact/route.ts`), Resend, or Formspree:
 *   set `NEXT_PUBLIC_CONTACT_API_URL=/api/contact` (or your Formspree URL) in Vercel Environment Variables.
 */
async function submitContactInquiry(payload: ContactSubmissionPayload): Promise<void> {
  if (siteConfig.contactApiUrl) {
    const response = await fetch(siteConfig.contactApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Contact submission failed with status ${response.status}`);
    }
    return;
  }

  // TODO: Connect contact form submission to backend API endpoint (e.g. app/api/contact/route.ts, Formspree, or Resend)
  await new Promise((resolve) => setTimeout(resolve, 450));
}

export function Contact() {
  const { locale, dict } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  const [formData, setFormData] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!formData.name.trim()) {
      nextErrors.name = dict.contact.form.errors.nameRequired;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      nextErrors.phone = dict.contact.form.errors.phoneRequired;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      nextErrors.email = dict.contact.form.errors.emailInvalid;
    }
    if (!formData.subject.trim()) {
      nextErrors.subject = dict.contact.form.errors.subjectRequired;
    }
    if (!formData.message.trim()) {
      nextErrors.message = dict.contact.form.errors.messageRequired;
    }
    return nextErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await submitContactInquiry({
        ...formData,
        locale,
        submittedAt: new Date().toISOString(),
      });
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-cream py-20 sm:py-28 border-b border-stone-gray"
    >
      <BrandPattern tone="light" fadeDirection="start" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={dict.contact.title}
          subtitle={dict.contact.subtitle}
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Column 1: Contact Information + Embedded Map Placeholder */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between gap-8"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div className="rounded-[24px] bg-navy p-8 sm:p-9 text-white shadow-navy-lg text-start">
              <h3 className="font-serif-brand text-2xl font-bold text-white">
                {dict.contact.infoTitle}
              </h3>
              <span
                className="mt-3 block h-[2px] w-16 bg-gold"
                aria-hidden="true"
              />

              <dl className="mt-7 space-y-5 text-sm sm:text-base">
                <div>
                  <dt className="text-xs font-medium text-gold">
                    {dict.contact.labels.address}
                  </dt>
                  <dd className="mt-1 text-cream/95 leading-relaxed">
                    {siteConfig.contact.address[locale]}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-medium text-gold">
                      {dict.contact.labels.phone}
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={siteConfig.contact.phoneHref}
                        dir="ltr"
                        className="font-latin-sans text-white hover:text-gold transition-colors inline-block"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-medium text-gold">
                      {dict.contact.labels.whatsapp}
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={siteConfig.contact.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        dir="ltr"
                        className="font-latin-sans text-white hover:text-gold transition-colors inline-block"
                      >
                        {siteConfig.contact.whatsapp}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-medium text-gold">
                      {dict.contact.labels.email}
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={siteConfig.contact.emailHref}
                        dir="ltr"
                        className="font-latin-sans text-white hover:text-gold transition-colors inline-block"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-medium text-gold">
                      {dict.contact.labels.website}
                    </dt>
                    <dd className="mt-1">
                      <span
                        dir="ltr"
                        className="font-latin-sans text-cream/90 inline-block"
                      >
                        {siteConfig.contact.website}
                      </span>
                    </dd>
                  </div>
                </div>

                <div className="pt-4 border-t border-gold/20">
                  <dt className="text-xs font-medium text-gold">
                    {dict.contact.labels.workingHours}
                  </dt>
                  <dd className="mt-1 text-cream/90">
                    {siteConfig.contact.workingHours[locale]}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Embedded Architectural Map Placeholder */}
            <div className="relative overflow-hidden rounded-[24px] border border-stone-gray bg-white p-6 shadow-navy-sm text-start">
              <div className="relative h-52 w-full overflow-hidden rounded-2xl bg-navy/95 p-5 flex flex-col justify-between border border-gold/30">
                {/* Architectural coordinate grid SVG */}
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
                  viewBox="0 0 400 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <line x1="0" y1="55" x2="400" y2="55" stroke="#C9A96A" strokeWidth="1" />
                  <line x1="0" y1="110" x2="400" y2="110" stroke="#C9A96A" strokeWidth="1" />
                  <line x1="0" y1="165" x2="400" y2="165" stroke="#C9A96A" strokeWidth="1" />
                  <line x1="100" y1="0" x2="100" y2="220" stroke="#C9A96A" strokeWidth="1" />
                  <line x1="200" y1="0" x2="200" y2="220" stroke="#C9A96A" strokeWidth="1" />
                  <line x1="300" y1="0" x2="300" y2="220" stroke="#C9A96A" strokeWidth="1" />
                  <path
                    d="M40 160 C130 120, 240 150, 360 80"
                    stroke="#F5F0E6"
                    strokeWidth="2"
                  />
                </svg>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gold px-3.5 py-1 text-xs font-semibold text-navy">
                    <span>SRFEC</span>
                  </span>
                  <span
                    dir="ltr"
                    className="font-latin-sans text-xs text-cream/80"
                  >
                    24.7136° N, 46.6753° E
                  </span>
                </div>

                <div className="relative z-10">
                  <p className="font-serif-brand text-lg font-bold text-white">
                    {dict.contact.labels.mapPlaceholderTitle}
                  </p>
                  <p className="mt-1 text-xs text-cream/80">
                    {dict.contact.labels.mapPlaceholderSub}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Validated Front-End Inquiry Form */}
          <motion.div
            className="lg:col-span-7"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <div className="rounded-[24px] border border-stone-gray bg-white p-8 sm:p-10 lg:p-12 shadow-navy-md text-start">
              <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-navy">
                {dict.contact.form.title}
              </h3>
              <span
                className="mt-3 block h-[2.5px] w-16 bg-gold"
                aria-hidden="true"
              />

              {isSubmitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-8 rounded-[20px] border-2 border-gold bg-cream/60 p-8 text-start"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold">
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <h4 className="mt-5 font-serif-brand text-2xl font-bold text-navy">
                    {dict.contact.form.successTitle}
                  </h4>
                  <p className="mt-3 text-base text-navy/85 leading-relaxed">
                    {dict.contact.form.successMessage}
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-light cursor-pointer"
                  >
                    <span>{dict.contact.form.sendAnother}</span>
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="mt-8 space-y-6"
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-navy"
                      >
                        {dict.contact.form.nameLabel}{" "}
                        <span className="text-navy/70" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, name: e.target.value }))
                        }
                        placeholder={dict.contact.form.namePlaceholder}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "contact-name-error" : undefined}
                        className="mt-2 w-full rounded-xl border border-navy/20 bg-cream/30 px-4 py-3.5 text-sm text-navy placeholder:text-navy/50 transition-colors focus:border-navy focus:bg-white"
                      />
                      {errors.name && (
                        <p
                          id="contact-name-error"
                          className="mt-1.5 text-xs font-medium text-navy bg-gold/25 px-3 py-1 rounded-md inline-block"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-medium text-navy"
                      >
                        {dict.contact.form.phoneLabel}{" "}
                        <span className="text-navy/70" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        dir="ltr"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, phone: e.target.value }))
                        }
                        placeholder={dict.contact.form.phonePlaceholder}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                        className="mt-2 w-full rounded-xl border border-navy/20 bg-cream/30 px-4 py-3.5 text-sm text-navy placeholder:text-navy/50 transition-colors focus:border-navy focus:bg-white text-start"
                      />
                      {errors.phone && (
                        <p
                          id="contact-phone-error"
                          className="mt-1.5 text-xs font-medium text-navy bg-gold/25 px-3 py-1 rounded-md inline-block"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-navy"
                      >
                        {dict.contact.form.emailLabel}{" "}
                        <span className="text-navy/70" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        dir="ltr"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, email: e.target.value }))
                        }
                        placeholder={dict.contact.form.emailPlaceholder}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "contact-email-error" : undefined}
                        className="mt-2 w-full rounded-xl border border-navy/20 bg-cream/30 px-4 py-3.5 text-sm text-navy placeholder:text-navy/50 transition-colors focus:border-navy focus:bg-white text-start"
                      />
                      {errors.email && (
                        <p
                          id="contact-email-error"
                          className="mt-1.5 text-xs font-medium text-navy bg-gold/25 px-3 py-1 rounded-md inline-block"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Subject / Project Type */}
                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-sm font-medium text-navy"
                      >
                        {dict.contact.form.subjectLabel}{" "}
                        <span className="text-navy/70" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, subject: e.target.value }))
                        }
                        aria-invalid={Boolean(errors.subject)}
                        aria-describedby={
                          errors.subject ? "contact-subject-error" : undefined
                        }
                        className="mt-2 w-full rounded-xl border border-navy/20 bg-cream/30 px-4 py-3.5 text-sm text-navy transition-colors focus:border-navy focus:bg-white"
                      >
                        <option value="">
                          {dict.contact.form.subjectPlaceholder}
                        </option>
                        <option value="facade">
                          {dict.contact.form.subjectOptions.facade}
                        </option>
                        <option value="carving">
                          {dict.contact.form.subjectOptions.carving}
                        </option>
                        <option value="slabs">
                          {dict.contact.form.subjectOptions.slabs}
                        </option>
                        <option value="custom">
                          {dict.contact.form.subjectOptions.custom}
                        </option>
                      </select>
                      {errors.subject && (
                        <p
                          id="contact-subject-error"
                          className="mt-1.5 text-xs font-medium text-navy bg-gold/25 px-3 py-1 rounded-md inline-block"
                        >
                          {errors.subject}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-navy"
                    >
                      {dict.contact.form.messageLabel}{" "}
                      <span className="text-navy/70" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, message: e.target.value }))
                      }
                      placeholder={dict.contact.form.messagePlaceholder}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? "contact-message-error" : undefined
                      }
                      className="mt-2 w-full rounded-xl border border-navy/20 bg-cream/30 px-4 py-3.5 text-sm text-navy placeholder:text-navy/50 transition-colors focus:border-navy focus:bg-white"
                    />
                    {errors.message && (
                      <p
                        id="contact-message-error"
                        className="mt-1.5 text-xs font-medium text-navy bg-gold/25 px-3 py-1 rounded-md inline-block"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-navy px-8 py-4 text-base font-medium text-white shadow-navy-md transition-all duration-200 hover:bg-navy-light disabled:opacity-60 cursor-pointer"
                  >
                    <span>
                      {isSubmitting
                        ? dict.contact.form.submittingButton
                        : dict.contact.form.submitButton}
                    </span>
                    <svg
                      className="h-4 w-4 text-gold rtl:rotate-180"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M4.167 10h11.666m0 0L10.833 5m5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

