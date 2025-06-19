'use client'

import { BookOpen, Target, TrendingUp, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative py-20 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        {/* Main Hero Content */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Slimmer Leren</span>
            <br />
            <span className="text-gray-800">per Vak</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ontdek bewezen leerstrategieën, praktische tips en handige tools voor elk vak in het voortgezet onderwijs. 
            <span className="font-semibold text-gray-800"> Leer slimmer, niet harder!</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary">
              🚀 Start met Leren
            </button>
            <button className="btn-secondary">
              📚 Bekijk Strategieën
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">15+</div>
            <div className="text-sm text-gray-600">Vakken</div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-3">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">100+</div>
            <div className="text-sm text-gray-600">Strategieën</div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">85%</div>
            <div className="text-sm text-gray-600">Betere Cijfers</div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-3">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">5000+</div>
            <div className="text-sm text-gray-600">Leerlingen</div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">💡 Waarom Leerstrategieën?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Efficiënter Studeren</h3>
                <p className="text-gray-600 text-sm">Leer meer in minder tijd door de juiste technieken toe te passen voor elk vak.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-purple-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Betere Resultaten</h3>
                <p className="text-gray-600 text-sm">Bewezen methoden die leiden tot hogere cijfers en beter begrip van de stof.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Minder Stress</h3>
                <p className="text-gray-600 text-sm">Voel je zekerder en rustiger door goede voorbereiding en structuur.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}