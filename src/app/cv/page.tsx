import { redirect } from "next/navigation";

export default function CVRedirect() {
  const prefix = process.env.NODE_ENV === "production" ? "/personal-webpage" : "";
  redirect(`${prefix}/dziomin-cv-tudelft-2025.pdf`);
}
