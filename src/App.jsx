import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Ceremony } from '@/components/Ceremony'
import { Timeline } from '@/components/Timeline'
import { Venue } from '@/components/Venue'
import { Blessings } from '@/components/Blessings'
import { Footer } from '@/components/Footer'
import { FallingFlowers } from '@/components/FallingFlowers'
import { FloatingControls } from '@/components/FloatingControls'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FallingFlowers />
      <Nav />
      <main>
        <Hero />
        <Ceremony />
        <Timeline />
        <Venue />
        <Blessings />
      </main>
      <Footer />
      <FloatingControls />
    </div>
  )
}
