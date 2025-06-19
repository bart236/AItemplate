'use client'

import { BookOpen, Mail, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">VO Leerstrategieën</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Helping VO students learn smarter, not harder. Discover effective learning strategies for every subject.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Vakken</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Wiskunde</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nederlands</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Engels</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Geschiedenis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Natuurkunde</a></li>
            </ul>
          </div>

          {/* Strategies */}
          <div>
            <h3 className="font-semibold mb-4">Strategieën</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Pomodoro Techniek</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Actief Ophalen</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mindmaps</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Studiegroepen</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Alle Strategieën</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="mailto:tom@example.com" className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>tom@example.com</span>
              </a>
              <a href="https://github.com/tomnaberink" className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/tomnaberink" className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 VO Leerstrategieën. Gemaakt met ❤️ door Tom Naberink voor betere leerresultaten.
          </p>
        </div>
      </div>
    </footer>
  )
}