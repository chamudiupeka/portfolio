"use client";

import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import {
  initialContactState,
  sendContactEmail,
  type ContactField,
} from "@/app/actions/contact";

// text-base (16px) on phones is deliberate: iOS Safari zooms the whole page in
// when you focus an input smaller than 16px, and never zooms back out.
const fieldBase =
  "w-full rounded-none border-0 border-b border-hairline bg-transparent px-0 py-2.5 text-base text-offwhite outline-none transition-colors placeholder:text-textFaint/60 focus:border-blueBright sm:text-[0.95rem]";

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1 block font-mono text-[0.64rem] uppercase tracking-[0.14em] text-textFaint"
    >
      {children}
    </label>
  );
}

function FieldError({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={id} className="mt-1.5 font-mono text-[0.68rem] text-bluePale">
      {error}
    </p>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-full border border-offwhite/25 px-7 py-3 text-[0.85rem] tracking-wide transition-colors hover:border-blueBright hover:bg-blueBright hover:text-ink disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-offwhite"
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(sendContactEmail, initialContactState);
  const formRef = useRef<HTMLFormElement>(null);

  // useFormState keeps values across submits, so clear the form once it lands.
  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state.status]);

  const err = (field: ContactField) => state.fieldErrors?.[field];
  const describedBy = (field: ContactField) => (err(field) ? `${field}-error` : undefined);

  return (
    <form ref={formRef} action={formAction} className="relative space-y-6" noValidate>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">your name</Label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-invalid={!!err("name")}
            aria-describedby={describedBy("name")}
            className={fieldBase}
          />
          <FieldError id="name-error" error={err("name")} />
        </div>

        <div>
          <Label htmlFor="email">your email</Label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={!!err("email")}
            aria-describedby={describedBy("email")}
            className={fieldBase}
          />
          <FieldError id="email-error" error={err("email")} />
        </div>
      </div>

      <div>
        <Label htmlFor="subject">subject (optional)</Label>
        <input id="subject" name="subject" type="text" className={fieldBase} />
      </div>

      <div>
        <Label htmlFor="message">message</Label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={!!err("message")}
          aria-describedby={describedBy("message")}
          className={`${fieldBase} resize-y`}
        />
        <FieldError id="message-error" error={err("message")} />
      </div>

      {/* Honeypot — hidden from people, tempting to bots. Not display:none, which
          some bots check for; positioned off-screen and skipped by the tab order. */}
      <div aria-hidden className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
        <SubmitButton />
        {state.status !== "idle" && state.message && (
          <p
            role="status"
            aria-live="polite"
            className={`font-mono text-[0.72rem] ${
              state.status === "success" ? "text-blueBright" : "text-bluePale"
            }`}
          >
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
