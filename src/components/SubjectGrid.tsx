'use client'

import { useState } from 'react'
import { Calculator, Globe, BookOpen, Languages, History, Microscope, MapPin, Briefcase, Beaker } from 'lucide-react'

const subjects = [
  {
    id: 'wiskunde',
    name: 'Wiskunde',
    icon: Calculator,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    description: 'Formules, grafieken en logisch redeneren',
    strategies: ['Stappenplan maken', 'Formulekaarten', 'Oefenen met voorbeelden']
  },
  {
    id: 'nederlands',
    name: 'Nederlands',
    icon: BookOpen,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    description: 'Taal, literatuur en tekstanalyse',
    strategies: ['Mindmaps maken', 'Samenvatten', 'Hardop lezen']
  },
  {
    id: 'engels',
    name: 'Engels',
    icon: Languages,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    description: 'Woordenschat, grammatica en conversatie',
    strategies: ['Flashcards', 'Engels kijken/luisteren', 'Woordenboek bijhouden']
  },
  {
    id: 'geschiedenis',
    name: 'Geschiedenis',
    icon: History,
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-50',
    description: 'Tijdlijnen, gebeurtenissen en verbanden',
    strategies: ['Tijdlijn maken', 'Verhalen vertellen', 'Kaarten gebruiken']
  },
  {
    id: 'biologie',
    name: 'Biologie',
    icon: Microscope,
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
    description: 'Leven, cellen en ecosystemen',
    strategies: ['Tekeningen maken', 'Processen uitleggen', 'Experimenten doen']
  },
  {
    id: 'nst',
    name: 'NST',
    icon: Beaker,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    description: 'Natuur, Scheikunde & Techniek',
    strategies: ['Experimenten doen', 'Formules afleiden', 'Praktische toepassingen']
  },
  {
    id: 'aardrijkskunde',
    name: 'Aardrijkskunde',
    icon: MapPin,
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
    description: 'Landen, klimaat en samenlevingen',
    strategies: ['Kaarten bestuderen', 'Nieuwsartikelen', 'Verbanden leggen']
  },
  {
    id: 'economie',
    name: 'Economie',
    icon: Briefcase,
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
    description: 'Markt, geld en bedrijfsleven',
    strategies: ['Grafieken tekenen', 'Voorbeelden uit nieuws', 'Modellen toepassen']
  }
]

interface SubjectGridProps {
  onSubjectSelect: (subjectId: string) => void
}

export default function SubjectGrid({ onSubjectSelect }: SubjectGridProps) {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null)

  const handleSubjectClick = (subjectId: string) => {
    setSelectedSubject(subjectId)
    onSubjectSelect(subjectId)
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Kies je <span className="gradient-text">Vak</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elk vak heeft zijn eigen uitdagingen en vraagt om specifieke leerstrategieën. 
            Klik op een vak om gerichte tips en tools te ontdekken.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {subjects.map((subject) => {
            const IconComponent = subject.icon
            const isSelected = selectedSubject === subject.id
            
            return (
              <div
                key={subject.id}
                className={`subject-card cursor-pointer p-6 text-center transition-all duration-300 ${
                  isSelected ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
                onClick={() => handleSubjectClick(subject.id)}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${subject.color} flex items-center justify-center shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">
                  {subject.name}
                </h3>
                
                <p className="text-xs md:text-sm text-gray-600 mb-3">
                  {subject.description}
                </p>

                <div className="mt-4">
                  <button className="text-xs bg-blue-500 text-white px-3 py-1.5 rounded-lg hover:bg-blue-600 transition-colors">
                    Bekijk Strategieën →
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}