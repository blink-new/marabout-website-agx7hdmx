import { Heart, Moon, Star, Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Accueil', href: 'accueil' },
    { name: 'Services', href: 'services' },
    { name: 'À Propos', href: 'about' },
    { name: 'Témoignages', href: 'temoignages' },
    { name: 'Contact', href: 'contact' }
  ]

  const services = [
    'Retour Affectif Immédiat',
    'Voyance Médiumnique',
    'Protection Spirituelle',
    'Guérison Spirituelle',
    'Déblocage de Situation',
    'Magie Blanche'
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-slate-900/95 backdrop-blur-sm border-t border-gold-500/20 relative overflow-hidden">
      {/* Étoiles décoratives */}
      <div className="absolute inset-0">
        <div className="absolute top-8 left-20 animate-pulse delay-1000">
          <Star className="h-3 w-3 text-gold-400 opacity-30" />
        </div>
        <div className="absolute top-16 right-32 animate-pulse delay-2000">
          <Star className="h-2 w-2 text-gold-300 opacity-40" />
        </div>
        <div className="absolute bottom-20 left-1/3 animate-pulse">
          <Star className="h-2 w-2 text-gold-500 opacity-25" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Moon className="h-8 w-8 text-gold-400" />
                <Star className="h-4 w-4 text-gold-300 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gold-400">Marabout Lami</h3>
                <p className="text-xs text-gold-300/70">Grand Marabout Africain</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Plus de 20 ans d'expérience dans les arts divinatoires et la spiritualité africaine. 
              Spécialiste reconnu du retour affectif immédiat et de la voyance médiumnique.
            </p>

            {/* Informations de contact principales */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gold-400" />
                <span className="text-gray-300">Disponible 24h/24 - 7j/7</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gold-400" />
                <span className="text-gray-300">Réponse sous 2h garantie</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gold-400" />
                <span className="text-gray-300">Paris & déplacements France/DOM</span>
              </div>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-gold-400 transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section inférieure */}
        <div className="border-t border-gold-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Marabout Lami. Tous droits réservés.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Marabout africain authentique - Pratiques spirituelles traditionnelles
              </p>
            </div>

            {/* Certifications et garanties */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-center">
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-gold-400" />
                <span className="text-gray-400 text-sm">98% de réussite</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-gold-400" />
                <span className="text-gray-400 text-sm">5000+ clients satisfaits</span>
              </div>
            </div>
          </div>

          {/* Mentions légales */}
          <div className="mt-6 pt-4 border-t border-gold-500/10">
            <p className="text-gray-500 text-xs text-center leading-relaxed">
              Les consultations de voyance et les pratiques spirituelles sont proposées à titre de divertissement et de développement personnel. 
              Les résultats ne peuvent être garantis. Pour votre santé, consultez un médecin.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}