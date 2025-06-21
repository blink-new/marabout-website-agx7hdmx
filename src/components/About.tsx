import { Award, Clock, Globe, Star, Users, Zap } from 'lucide-react'

export function About() {
  const stats = [
    { icon: Clock, value: "20+", label: "Années d'expérience" },
    { icon: Users, value: "5000+", label: "Clients satisfaits" },
    { icon: Globe, value: "50+", label: "Pays d'intervention" },
    { icon: Star, value: "98%", label: "Taux de réussite" }
  ]

  const qualities = [
    {
      icon: Award,
      title: "Héritage Ancestral",
      description: "Formé selon les traditions authentiques de l'Afrique noire, mes pouvoirs me viennent d'un lignage millénaire de guérisseurs."
    },
    {
      icon: Zap,
      title: "Dons Naturels Exceptionnels",
      description: "Né sous un ciel propice, mes capacités médiumniques se sont manifestées dès mon plus jeune âge sous la guidance d'anciens maîtres."
    },
    {
      icon: Star,
      title: "Approche Bienveillante",
      description: "Ma mission est d'aider chaque âme en détresse à retrouver la paix, l'amour et l'harmonie dans sa vie quotidienne."
    }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6">
            <Star className="h-4 w-4 text-gold-400 mr-2" />
            <span className="text-gold-400 text-sm font-medium">Mon Histoire</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Un Marabout Africain
            <span className="block text-gold-400">au Service du Bien</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contenu principal */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                L'ancestralité du maraboutage donne à cette science africaine une spiritualité 
                aussi merveilleuse que mystérieuse. Ses techniques sont réservées à des initiés 
                ayant reçu des dons surnaturels.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                Le marabout africain possède une étonnante caractéristique. En effet, il est 
                à la fois chaman et religieux, ce qui fait de lui un prêtre sorcier particulièrement 
                redoutable pour concevoir des prières magiques.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                Maître Lami est un sage au service des nobles causes libératrices des sortilèges 
                et des envoûtements par ses thérapies de prévention et de protection rituelles.
              </p>
            </div>

            {/* Qualités */}
            <div className="space-y-6">
              {qualities.map((quality, index) => {
                const IconComponent = quality.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">{quality.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{quality.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Image et statistiques */}
          <div className="space-y-8">
            {/* Image placeholder avec style mystique */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-900/50 to-slate-800/50 rounded-2xl border border-gold-500/20 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-12 w-12 text-slate-900" />
                  </div>
                  <h3 className="text-gold-400 font-bold text-xl mb-2">Maître Lami</h3>
                  <p className="text-gray-300">Grand Marabout Africain</p>
                </div>
                
                {/* Étoiles décoratives */}
                <div className="absolute top-4 right-4 animate-pulse">
                  <Star className="h-4 w-4 text-gold-400 opacity-60" />
                </div>
                <div className="absolute bottom-8 left-8 animate-pulse delay-1000">
                  <Star className="h-3 w-3 text-gold-300 opacity-70" />
                </div>
              </div>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-gold-500/20 p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-6 w-6 text-slate-900" />
                    </div>
                    <div className="text-2xl font-bold text-gold-400 mb-1">{stat.value}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Zones d'intervention */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800/80 to-purple-900/80 backdrop-blur-sm rounded-2xl border border-gold-500/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Zones d'Intervention</h3>
            <p className="text-gray-300 mb-6">
              Bien que basé à Paris, je me déplace régulièrement dans toute la France et les DOM
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {['Paris', 'Reims', 'Strasbourg', 'Rouen', 'Caen', 'Lyon', 'Nantes', 'Guadeloupe', 'Martinique', 'Guyane', 'La Réunion'].map((city, index) => (
                <span key={index} className="px-3 py-1 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-400">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}