// Shared shape for the contact form. This deliberately lives OUTSIDE
// app/actions/contact.ts: a "use server" file may only export async functions,
// so exporting the initial-state object from there throws at runtime the first
// time the action is invoked.

export type ContactField = "name" | "email" | "message";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<ContactField, string>>;
};

export const initialContactState: ContactState = { status: "idle", message: "" };
