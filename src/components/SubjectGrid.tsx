'use client'

import { useState } from 'react'
import { Calculator, Globe, Beaker, BookOpen, Palette, Music, Dumbbell, Languages, History, Microscope, MapPin, Users, Briefcase, Wrench, Heart } from 'lucide-react'

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
    id: 'scheikunde',
    name: 'Scheikunde',
    icon: Beaker,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    description: 'Moleculen, reacties en experimenten',
    strategies: ['Reactievergelijkingen', 'Modellen bouwen', 'Stap-voor-stap']
  },
  {
    id: 'natuurkunde',
    name: 'Natuurkunde',
    icon: Globe,
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    description: 'Krachten, energie en beweging',
    strategies: ['Formules afleiden', 'Tekeningen maken', 'Praktijkvoorbeelden']
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
    id: 'maatschappijleer',
    name: 'Maatschappijleer',
    icon: Users,
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    description: 'Politiek, economie en samenleving',
    strategies: ['Actualiteiten volgen', 'Discussiëren', 'Voorbeelden zoeken']
  },
  {
    id: 'economie',
    name: 'Economie',
    icon: Briefcase,
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
    description: 'Markt, geld en bedrijfsleven',
    strategies: ['Grafieken tekenen', 'Voorbeelden uit nieuws', 'Modellen toepassen']
  },
  {
    id: 'kunst',
    name: 'Beeldende Kunst',
    icon: Palette,
    color: 'from-rose-500 to-rose-600',
    bgColor: 'bg-rose-50',
    description: 'Tekenen, schilderen en creativiteit',
    strategies: ['Portfolio bijhouden', 'Kunstwerken analyseren', 'Veel oefenen']
  },
  {
    id: 'muziek',
    name: 'Muziek',
    icon: Music,
    color: 'from-violet-500 to-violet-600',
    bgColor: 'bg-violet-50',
    description: 'Noten, ritme en muziektheorie',
    strategies: ['Dagelijks oefenen', 'Luisteren naar muziek', 'Noten leren']
  },
  {
    id: 'lichamelijke-opvoeding',
    name: 'Lichamelijke Opvoeding',
    icon: Dumbbell,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    description: 'Sport, beweging en gezondheid',
    strategies: ['Regelmatig bewegen', 'Technieken oefenen', 'Teamwork']
  },
  {
    id: 'techniek',
    name: 'Techniek',
    icon: Wrench,
    color: 'from-gray-500 to-gray-600',
    bgColor: 'bg-gray-50',
    description: 'Bouwen, ontwerpen en probleem oplossen',
    strategies: ['Hands-on werken', 'Tekeningen maken', 'Stap voor stap']
  },
  {
    id: 'verzorging',
    name: 'Verzorging',
    icon: Heart,
    color: 'from-pink-400 to-pink-500',
    bgColor: 'bg-pink-50',
    description: 'Zorg, gezondheid en welzijn',
    strategies: ['Praktijk oefenen', 'Casussen bestuderen', 'Empathie ontwikkelen']
  }
]

export default function SubjectGrid() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null)

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {subjects.map((subject) => {
            const IconComponent = subject.icon
            const isSelected = selectedSubject === subject.id
            
            return (
              <div
                key={subject.id}
                className={`subject-card cursor-pointer p-6 text-center transition-all duration-300 ${
                  isSelected ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
                onClick={() => setSelectedSubject(isSelected ? null : subject.id)}
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

                {isSelected && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="font-medium text-gray-800 mb-2 text-sm">Top Strategieën:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {subject.strategies.map((strategy, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          {strategy}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-3 text-xs bg-blue-500 text-white px-3 py-1.5 rounded-lg hover:bg-blue-600 transition-colors">
                      Meer Tips →
                    </button>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {selectedSubject && (
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                🎯 Leerstrategieën voor {subjects.find(s => s.id === selectedSubject)?.name}
              </h3>
              <p className="text-gray-600 mb-6">
                Ontdek bewezen methoden om beter te worden in dit vak
              </p>
              <button className="btn-primary">
                Bekijk Alle Strategieën voor {subjects.find(s => s.id === selectedSubject)?.name}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}