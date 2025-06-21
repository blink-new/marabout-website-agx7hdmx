import { Heart, Shield, Coins, Book, Eye, Users, Sparkles, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

const services = [
  {
    icon: Heart,
    title: "Retour d'Affection",
    description: "Récupérez l'être aimé et ravivez la flamme de votre relation grâce à des rituels puissants.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Shield,
    title: "Protection Spirituelle",
    description: "Protégez-vous des énergies négatives et du mauvais œil avec des talismans consacrés.",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Coins,
    title: "Richesse & Prospérité",
    description: "Attirez l'abondance financière et débloquez votre potentiel de réussite professionnelle.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Book,
    title: "Voyance & Prédictions",
    description: "Découvrez votre avenir et recevez des conseils éclairés pour prendre les bonnes décisions.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Eye,
    title: "Désenvoûtement",
    description: "Libérez-vous des sorts et malédictions qui entravent votre épanouissement personnel.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "Harmonie Familiale",
    description: "Restaurez la paix et l'harmonie au sein de votre famille et résolvez les conflits.",
    color: "from-purple-500 to-pink-500"
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Sparkles className="h-8 w-8 text-purple-400 animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mes Services Spirituels
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Solutions mystiques adaptées à vos besoins spécifiques pour transformer votre vie
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card 
                key={index}
                className="bg-slate-800/50 border-purple-500/20 backdrop-blur hover:bg-slate-800/70 transition-all duration-300 group hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
              >
                <CardHeader>
                  <div className="mb-4 relative">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <div className={`absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br ${service.color} blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="mt-4 flex items-center text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                    <Zap className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">En savoir plus</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-2">
              Besoin d'une Solution Personnalisée ?
            </h3>
            <p className="text-gray-300 mb-6">
              Chaque situation est unique. Contactez-moi pour une consultation gratuite.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              Consultation Gratuite
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}