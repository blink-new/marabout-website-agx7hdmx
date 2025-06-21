import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulation d'envoi du formulaire
    alert('Votre message a été envoyé ! Maître Lami vous contactera dans les plus brefs délais.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const consultationMethods = [
    {
      icon: Phone,
      title: "Téléphone & SMS",
      description: "Consultation immédiate par téléphone ou SMS",
      info: "Disponible 24h/24",
      action: "Appeler maintenant"
    },
    {
      icon: Mail,
      title: "Courriel",
      description: "Échanges détaillés par email",
      info: "Réponse sous 2h",
      action: "Envoyer un email"
    },
    {
      icon: MapPin,
      title: "Cabinet",
      description: "Consultation au cabinet à Paris",
      info: "40€ la séance",
      action: "Prendre rendez-vous"
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6">
            <MessageCircle className="h-4 w-4 text-gold-400 mr-2" />
            <span className="text-gold-400 text-sm font-medium">Contact & Consultation</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Commencez Votre
            <span className="block text-gold-400">Transformation</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Prenez contact avec Maître Lami pour une consultation personnalisée. 
            Plusieurs moyens de communication s'offrent à vous.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Méthodes de consultation */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Méthodes de Consultation</h3>
            
            {consultationMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-gold-500/20 hover:border-gold-500/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-slate-900" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-white font-semibold text-lg mb-2">{method.title}</h4>
                        <p className="text-gray-300 mb-2">{method.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-gold-400 text-sm font-medium">{method.info}</span>
                          <Button 
                            size="sm" 
                            className="bg-gold-500/20 hover:bg-gold-500/30 text-gold-400 border-gold-500/30"
                            variant="outline"
                          >
                            {method.action}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}

            {/* Informations complémentaires */}
            <Card className="bg-gradient-to-r from-slate-800/80 to-purple-900/80 backdrop-blur-sm border-gold-500/20">
              <CardHeader>
                <CardTitle className="text-gold-400 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Horaires & Disponibilité
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Téléphone & SMS :</span>
                  <span className="text-white font-medium">24h/24 - 7j/7</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Email :</span>
                  <span className="text-white font-medium">Réponse sous 2h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cabinet :</span>
                  <span className="text-white font-medium">Sur rendez-vous</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Déplacement :</span>
                  <span className="text-white font-medium">France & DOM</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire de contact */}
          <div>
            <Card className="bg-slate-800/50 backdrop-blur-sm border-gold-500/20">
              <CardHeader>
                <CardTitle className="text-gold-400 text-xl">Formulaire de Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-300">Nom complet *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-slate-700/50 border-gold-500/20 focus:border-gold-500/50 text-white"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-300">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-slate-700/50 border-gold-500/20 focus:border-gold-500/50 text-white"
                        placeholder="Votre téléphone"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-300">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-slate-700/50 border-gold-500/20 focus:border-gold-500/50 text-white"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-300">Sujet de consultation</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-slate-700/50 border-gold-500/20 focus:border-gold-500/50 text-white"
                      placeholder="Ex: Retour affectif, Voyance, Protection..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-300">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-slate-700/50 border-gold-500/20 focus:border-gold-500/50 text-white resize-none"
                      placeholder="Décrivez votre situation et vos besoins..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-slate-900 hover:from-gold-400 hover:to-gold-500 font-semibold py-3"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Envoyer ma Demande
                  </Button>

                  <p className="text-sm text-gray-400 text-center">
                    Vos informations sont confidentielles et sécurisées. 
                    Réponse garantie sous 2h.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer de section avec garanties */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-slate-900" />
              </div>
              <h4 className="text-white font-semibold mb-2">Consultation Immédiate</h4>
              <p className="text-gray-300 text-sm">Disponible 24h/24 pour vos urgences</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-slate-900" />
              </div>
              <h4 className="text-white font-semibold mb-2">Confidentialité Absolue</h4>
              <p className="text-gray-300 text-sm">Vos secrets sont protégés en toutes circonstances</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-slate-900" />
              </div>
              <h4 className="text-white font-semibold mb-2">Résultats Rapides</h4>
              <p className="text-gray-300 text-sm">Premiers effets visibles en 72h maximum</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}