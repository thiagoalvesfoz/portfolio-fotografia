import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getContactWhatApp = () => {
  const whatsappNumber = '5545998534174'
  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de saber mais sobre seus serviços de fotografia e social media.'
  )

  return `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
}