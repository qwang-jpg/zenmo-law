import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS classes with clsx + tailwind-merge.
 * Resolves conflicts (e.g. "px-2 px-4" → "px-4").
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
