'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsMenuOpen(false)
        }
    }

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 bg-background/80  backdrop-blur-md border-b border-border'
            )}
        >
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-20 lg:h-20">
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="text-lg lg:text-xl font-light tracking-wide hover:opacity-70 transition-opacity cursor-pointer"
                    >
                        JULIA.FOTOGRAFIA
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-sm tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
                        >
                            Sobre
                        </button>
                        <button
                            onClick={() => scrollToSection('portfolio')}
                            className="text-sm tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
                        >
                            Portfólio
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-sm tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
                        >
                            Contato
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <nav
                    onTransitionEnd={() => console.log('transition end')}
                    className={cn(
                        'w-full duration-100 transition-transform h-full md:hidden overflow-hidden flex justify-center items-center ',
                        { 'min-h-screen': isMenuOpen },
                        { 'h-0': !isMenuOpen }
                    )}
                >
                    <div
                        className={cn(
                            'flex flex-col items-center gap-10 duration-100 transition-transform pb-20',
                            { 'scale-100 delay-100 ': isMenuOpen },
                            { 'scale-0 ': !isMenuOpen }
                        )}
                    >
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-xl tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
                        >
                            Sobre
                        </button>
                        <button
                            onClick={() => scrollToSection('portfolio')}
                            className="text-xl tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
                        >
                            Portfólio
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-xl tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
                        >
                            Contato
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}
