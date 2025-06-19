'use client'

import { Brain, Clock, Target, Users, Lightbulb, CheckCircle } from 'lucide-react'

const strategies = [
  {
    id: 'pomodoro',
    title: 'Pomodoro Techniek',
    description: 'Werk 25 minuten gefocust, dan 5 minuten pauze. Perfect voor concentratie!',
    icon: Clock,
    color: 'from-red-500 to-red-600',
    subjects: ['Alle vakken'],
    difficulty: 'Makkelijk',
    time: '30 min',
    effectiveness: 95
  },
  {
    id: 'active-recall',
    title: 'Actief Ophalen',
    description: 'Test jezelf zonder naar je aantekeningen te kijken. Veel effectiever dan herlezen!',
    icon: Brain,
    color: 'from-blue-500 to-blue-600',
    subjects: ['Geschiedenis', 'Biologie', 'Nederlands'],
    difficulty: 'Gemiddeld',
    time: '20 min',
    effectiveness: 90
  },
  {
    id: 'spaced-repetition',
    title: 'Gespreide Herhaling',
    description: 'Herhaal stof op steeds grotere intervallen. Ideaal voor lange termijn geheugen.',
    icon: Target,
    color: 'from-green-500 to-green-600',
    subjects: ['Talen', 'Wiskunde', 'Scheikunde'],
    difficulty: 'Gemiddeld',
    time: '15 min/dag',
    effectiveness: 88
  },
  {
    id: 'feynman',
    title: 'Feynman Techniek',
    description: 'Leg concepten uit alsof je het aan een 12-jarige vertelt. Test je begrip echt!',
    icon: Lightbulb,
    color: 'from-yellow-500 to-yellow-600',
    subjects: ['Natuurkunde', 'Wiskunde', 'Economie'],
    difficulty: 'Moeilijk',
    time: '45 min',
    effectiveness: 92
  },
  {
    id: 'study-groups',
    title: 'Studiegroepen',
    description: 'Leer samen met klasgenoten. Leg elkaar de stof uit en stel vragen.',
    icon: Users,
    color: 'from-purple-500 to-purple-600',
    subjects: ['Maatschappijleer', 'Geschiedenis', 'Talen'],
    difficulty: 'Makkelijk',
    time: '60 min',
    effectiveness: 85
  },
  {
    id: 'mind-mapping',
    title: 'Mindmaps',
    description: 'Visualiseer verbanden tussen concepten met kleuren, tekeningen en structuur.',
    icon: CheckCircle,
    color: 'from-indigo-500 to-indigo-600',
    subjects: ['Aardrijkskunde', 'Biologie', 'Nederlands'],
    difficulty: 'Makkelijk',
    time: '30 min',
    effectiveness: 80
  }
]

export default function FeaturedStrategies() {
  return (
    <section className="py-16 px-4 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            🏆 <span className="gradient-text">Top Leerstrategieën</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deze bewezen methoden helpen duizenden leerlingen om betere resultaten te behalen. 
            Probeer ze uit en ontdek wat voor jou werkt!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategies.map((strategy) => {
            const IconComponent = strategy.icon
            
            return (
              <div key={strategy.id} className="strategy-card group hover:scale-105">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${strategy.color} flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gray-800">{strategy.effectiveness}%</div>
                    <div className="text-xs text-gray-500">Effectief</div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {strategy.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {strategy.description}
                </p>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {strategy.subjects.map((subject, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {subject}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center">
                      <span className={`w-2 h-2 rounded-full mr-1 ${
                        strategy.difficulty === 'Makkelijk' ? 'bg-green-500' :
                        strategy.difficulty === 'Gemiddeld' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}></span>
                      {strategy.difficulty}
                    </span>
                    <span>⏱️ {strategy.time}</span>
                  </div>

                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg text-sm font-medium transition-colors group-hover:bg-blue-500 group-hover:text-white">
                    Leer Meer →
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            🔍 Bekijk Alle 100+ Strategieën
          </button>
        </div>
      </div>
    </section>
  )
}