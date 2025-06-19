import SubjectGrid from '@/components/SubjectGrid'
import Hero from '@/components/Hero'
import FeaturedStrategies from '@/components/FeaturedStrategies'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <SubjectGrid />
      <FeaturedStrategies />
      <Footer />
    </div>
  )
}