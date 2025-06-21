import { Star, Sparkles, Heart, Shield } from 'lucide-react'
import { Button } from './ui/button'

export function Hero() {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Decorative Element */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Sparkles className="h-12 w-12 text-purple-400 animate-pulse" />
              <div className="absolute inset-0 blur-xl bg-purple-400 opacity-50"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Guidance Spirituelle
            </span>
            <br />
            <span className="text-white">& Solutions Mystiques</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Marabout Lami - Votre guide vers l'harmonie, l'amour et la prospérité.
            <br />
            Plus de 30 ans d'expérience au service de votre bien-être.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center text-purple-300">
              <Heart className="h-5 w-5 mr-2" />
              <span>Retour d'affection</span>
            </div>
            <div className="flex items-center text-purple-300">
              <Shield className="h-5 w-5 mr-2" />
              <span>Protection spirituelle</span>
            </div>
            <div className="flex items-center text-purple-300">
              <Star className="h-5 w-5 mr-2" />
              <span>Chance & Succès</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Consultation Immédiate
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400 text-purple-300 hover:bg-purple-400/10 px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              Découvrir mes Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-12 border-t border-purple-500/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">10,000+</div>
                <div className="text-gray-400">Clients Satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">30 Ans</div>
                <div className="text-gray-400">D'Expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-400">Disponibilité</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}