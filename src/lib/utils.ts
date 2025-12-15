import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Validates an email address
 * @param email - The email address to validate
 * @returns Object with valid boolean and optional error message
 */
export function validateEmail(email: string): { valid: boolean; error?: string } {
  if (!email || typeof email !== 'string') {
    return { valid: false, error: 'Email is required' };
  }

  const trimmedEmail = email.trim();
  
  if (trimmedEmail.length === 0) {
    return { valid: false, error: 'Email cannot be empty' };
  }

  // Basic email regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(trimmedEmail)) {
    return { valid: false, error: 'Invalid email format' };
  }

  // Check for common invalid patterns
  if (trimmedEmail.includes('..')) {
    return { valid: false, error: 'Email cannot contain consecutive dots' };
  }

  if (trimmedEmail.startsWith('.') || trimmedEmail.endsWith('.')) {
    return { valid: false, error: 'Email cannot start or end with a dot' };
  }

  return { valid: true };
}

