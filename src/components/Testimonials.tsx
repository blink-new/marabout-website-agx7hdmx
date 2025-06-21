import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from './ui/card'

export function Testimonials() {
  const testimonials = [
    {
      name: "Marie D.",
      location: "Paris",
      text: "Grâce à Maître Lami, mon ex-compagnon est revenu après 3 mois de séparation. Le rituel a fonctionné exactement comme promis en 72h. Je recommande vivement !",
      rating: 5,
      service: "Retour affectif"
    },
    {
      name: "Jean-Paul M.",
      location: "Lyon",
      text: "Une voyance d'une précision remarquable. Tout ce que le Maître m'avait prédit s'est réalisé. Ma situation professionnelle s'est débloquée comme annoncé.",
      rating: 5,
      service: "Voyance médiumnique"
    },
    {
      name: "Sophie L.",
      location: "Marseille",
      text: "Après des années de malchance, j'ai enfin retrouvé la paix grâce aux rituels de protection. L'énergie négative qui m'entourait a complètement disparu.",
      rating: 5,
      service: "Protection spirituelle"
    },
    {
      name: "Ahmed K.",
      location: "Strasbourg",
      text: "Le professionnalisme et la bienveillance de Maître Lami sont exceptionnels. Ses conseils m'ont aidé à traverser une période très difficile de ma vie.",
      rating: 5,
      service: "Guidance spirituelle"
    },
    {
      name: "Isabelle R.",
      location: "Nantes",
      text: "Résultats extraordinaires ! Mon mari avait une liaison depuis 6 mois. Grâce au travail de Maître Lami, notre couple est plus fort que jamais.",
      rating: 5,
      service: "Retour affectif"
    },
    {
      name: "François B.",
      location: "Toulouse",
      text: "J'étais sceptique au début, mais les dons de Maître Lami sont réels. Il a su me révéler des détails de ma vie que personne ne pouvait connaître.",
      rating: 5,
      service: "Voyance médiumnique"
    }
  ]

  return (
    <section id="temoignages" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6">
            <Star className="h-4 w-4 text-gold-400 mr-2" />
            <span className="text-gold-400 text-sm font-medium">Témoignages Clients</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ils Ont Retrouvé
            <span className="block text-gold-400">le Bonheur</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez les témoignages authentiques de mes clients qui ont transformé leur vie 
            grâce aux pouvoirs du maraboutage africain.
          </p>
        </div>

        {/* Grille des témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/10"
            >
              <CardContent className="p-6">
                {/* Quote icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                    <Quote className="h-6 w-6 text-slate-900" />
                  </div>
                </div>

                {/* Étoiles de notation */}
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gold-400 fill-current" />
                  ))}
                </div>

                {/* Service */}
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-400 text-xs font-medium">
                    {testimonial.service}
                  </span>
                </div>

                {/* Témoignage */}
                <blockquote className="text-gray-300 text-center leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Auteur */}
                <div className="text-center">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistiques de satisfaction */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-slate-800/80 to-purple-900/80 backdrop-blur-sm rounded-2xl border border-gold-500/20 p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gold-400 mb-2">98%</div>
                <div className="text-gray-300">Taux de réussite</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-400 mb-2">72h</div>
                <div className="text-gray-300">Délai moyen</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-400 mb-2">5000+</div>
                <div className="text-gray-300">Clients satisfaits</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-400 mb-2">24/7</div>
                <div className="text-gray-300">Disponibilité</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">
            Rejoignez Nos Clients Satisfaits
          </h3>
          <p className="text-gray-300 mb-6">
            Ne laissez plus les problèmes gâcher votre vie. Prenez rendez-vous dès maintenant.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-gold-500 to-gold-600 text-slate-900 hover:from-gold-400 hover:to-gold-500 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25"
          >
            Commencer ma Transformation
          </button>
        </div>
      </div>
    </section>
  )
}