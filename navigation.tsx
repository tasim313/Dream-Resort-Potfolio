"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-semibold">Tropical Haven</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Accommodations</Button>
            <Button variant="ghost">Experiences</Button>
            <Button variant="ghost">Contact</Button>
            <Button>Book Now</Button>
          </div>
          <div className="flex md:hidden items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background/80 backdrop-blur-sm">
            <Button variant="ghost" className="w-full justify-start">
              About
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Accommodations
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Experiences
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Contact
            </Button>
            <Button className="w-full">Book Now</Button>
          </div>
        </div>
      )}
    </nav>
  )
}

