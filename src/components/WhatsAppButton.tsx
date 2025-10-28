"use client"

import { getContactWhatApp } from "@/lib/utils";
import Image from "next/image";


export function WhatsAppButtton() {

  return (
    <a
      href={getContactWhatApp()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75" />
        <div className="relative bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110">
          <Image src='/whatsapp.svg' alt="WhatsApp" className="text-white" width={30} height={30} />
        </div>
      </div>
    </a>
  )
}
