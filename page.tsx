import { ParallaxHero } from "./parallax-hero"
import { Navigation } from "./navigation"
import { BookingSection } from "./booking-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ParallaxHero />
      <BookingSection />
    </main>
  )
}

