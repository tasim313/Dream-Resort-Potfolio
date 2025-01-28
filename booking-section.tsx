export function BookingSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Plan Your Escape</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of traditional villas, each offering a unique blend of comfort and cultural
            authenticity.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Riverside Villa",
              description: "Traditional stilt house overlooking serene waters",
              price: "From $250/night",
            },
            {
              title: "Palm Grove Suite",
              description: "Nestled among swaying palm trees with paddy field views",
              price: "From $200/night",
            },
            {
              title: "Garden Retreat",
              description: "Intimate villa surrounded by tropical gardens",
              price: "From $180/night",
            },
          ].map((villa) => (
            <div key={villa.title} className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{villa.title}</h3>
                <p className="text-muted-foreground mb-4">{villa.description}</p>
                <p className="text-lg font-medium mb-4">{villa.price}</p>
                <Button className="w-full">Check Availability</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"

