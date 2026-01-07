import { en } from "./en";
import { he } from "./he";

export type Locale = "en" | "he";

export function getContent(locale: Locale) {
  return locale === "he" ? he : en;
}
