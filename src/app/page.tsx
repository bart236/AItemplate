'use client'

import { useState } from 'react'
import SubjectGrid from '@/components/SubjectGrid'
import SubjectDetail from '@/components/SubjectDetail'
import Hero from '@/components/Hero'
import FeaturedStrategies from '@/components/FeaturedStrategies'
import Footer from '@/components/Footer'

export default function Home() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null)

  const handleSubjectSelect = (subjectId: string) => {
    setSelectedSubject(subjectId)
  }

  const handleBackToOverview = () => {
    setSelectedSubject(null)
  }

  if (selectedSubject) {
    return (
      <SubjectDetail 
        subjectId={selectedSubject} 
        onBack={handleBackToOverview}
      />
    )
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <SubjectGrid onSubjectSelect={handleSubjectSelect} />
      <FeaturedStrategies />
      <Footer />
    </div>
  )
}