"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"

export function ParallaxHero() {
  const ref = useRef(null)
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_2yeaqt2yeaqt2yea-4BfWxw993lYs9rMvRbxIW5KcCDUqmE.jpeg)`,
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Experience Tranquil Paradise</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Immerse yourself in the serenity of traditional living amidst nature's beauty
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg">
              Book Your Stay
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-white/10 backdrop-blur-sm">
              Explore Experiences
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Button } from "@/components/ui/button"

