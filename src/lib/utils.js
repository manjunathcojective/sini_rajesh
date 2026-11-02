/**
 * Utility functions for className merging, formatting, etc.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function formatPhoneNumber(phone) {
  return phone.replace(/[^\d+]/g, "");
}
