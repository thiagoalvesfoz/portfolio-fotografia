'use client'

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface IProps {
  portfolioItems: {
    id: number;
    image: string;
    title: string;
    category: string;
  }[]
}

export const GridPhotoCard: React.FC<IProps> = ({ portfolioItems }) => {
  const [showOverlayId, setShowOverlayId] = React.useState<number>();

  const handleClick = (id: number) => {
    if (window.innerWidth < 728) {
      setShowOverlayId(prev => prev === id ?-1 : id)
    }
  }

  return (
    <>
    {portfolioItems.map((item) => (
    <div key={item.id} onClick={() => handleClick(item.id)}  className="group relative aspect-[4/5] overflow-hidden cursor-pointer rounded-2xl">
      <Image
        src={item.image || "/placeholder.svg"}
        alt={item.title}
        fill
        className={cn("object-cover transition-transform duration-500 group-hover:scale-105", 
          item.id === showOverlayId ? "scale-105" : "scale-100"
        )}
      />
      <div className={cn("absolute inset-0 bg-gradient-to-t from-black/80 md:group-hover:opacity-100 via-black/20 to-transparent transition-opacity duration-300",
          item.id === showOverlayId ? "opacity-100" : "opacity-0"
      )}>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <p className="text-xs tracking-widest uppercase mb-2 opacity-80">{item.category}</p>
          <h3 className="text-xl font-light">{item.title}</h3>
        </div>
      </div>
    </div>
    ))}
    </>
  )
}