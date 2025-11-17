import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Package,
  TrendingUp,
  Star,
  Award,
  DollarSign,
  Clock,
  MapPin,
  Phone,
  Camera,
  AlertCircle,
  CheckCircle,
  Navigation,
  Bike,
  Frown,
} from 'lucide-react';

const CoursierDashboard = () => {
  const navigate = useNavigate();
  const [disponible, setDisponible] = useState(true);
  const [courseEnCours, setCourseEnCours] = useState(true);

  // Mock data
  const stats = {
    aujourdhui: 18500,
    coursesAujourdhui: 12,
    semaine: 127000,
    mois: 486000,
    note: 4.7,
    totalCourses: 247,
    badge: 'Or',
    badgeIcon: '🥇',
    commission: 20,
  };

  const coursesDisponibles = [
    {
      id: 1,
      depart: 'Plateau',
      arrivee: 'Almadies',
      distance: '8km',
      taille: 'Moyen',
      poids: '10kg',
      prixTotal: 1800,
      commission: 1440,
      delai: '2-6h',
      urgent: false,
    },
    {
      id: 2,
      depart: 'Mermoz',
      arrivee: 'Ouakam',
      distance: '5km',
      taille: 'Petit',
      poids: '3kg',
      prixTotal: 2500,
      commission: 2050,
      delai: '<1h',
      urgent: true,
    },
  ];

  const courseActuelle = {
    id: '#CL28471',
    client: 'Amadou D.',
    depart: 'Rue 10, Plateau',
    arrivee: 'Almadies, Villa 42',
    prixTotal: 1800,
    commission: 1440,
    etapes: [
      { label: 'Course acceptée', time: '14:20', completed: true },
      { label: 'Arrivé chez expéditeur', time: '14:32', completed: true },
      { label: 'Colis récupéré', time: 'En cours...', completed: false },
      { label: 'Livraison en cours', time: '', completed: false },
      { label: 'Livré', time: '', completed: false },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-purple-600 text-white sticky top-0 z-20 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/business')}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                <Bike className="w-6 h-6" />
                <div>
                  <h1 className="text-xl font-bold">Coursier Moto</h1>
                  <p className="text-sm text-purple-100">Tableau de bord</p>
                </div>
              </div>
            </div>

            {/* Toggle Disponibilité */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">
                {disponible ? 'En ligne' : 'Hors ligne'}
              </span>
              <button
                onClick={() => setDisponible(!disponible)}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                  disponible ? 'bg-green-500' : 'bg-gray-400'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    disponible ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-white rounded-xl p-3 border border-purple-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">Aujourd'hui</span>
              <DollarSign className="w-4 h-4 text-purple-600 flex-shrink-0" />
            </div>
            <div className="text-xl font-bold text-gray-900 truncate">{stats.aujourdhui.toLocaleString()} F</div>
            <div className="text-xs text-gray-500 mt-1">{stats.coursesAujourdhui} courses</div>
          </div>

          <div className="bg-white rounded-xl p-3 border border-purple-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">Semaine</span>
              <TrendingUp className="w-4 h-4 text-purple-600 flex-shrink-0" />
            </div>
            <div className="text-xl font-bold text-gray-900 truncate">{stats.semaine.toLocaleString()} F</div>
          </div>

          <div className="bg-white rounded-xl p-3 border border-purple-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">Mois</span>
              <Package className="w-4 h-4 text-purple-600 flex-shrink-0" />
            </div>
            <div className="text-xl font-bold text-gray-900 truncate">{stats.mois.toLocaleString()} F</div>
          </div>

          <div className="bg-white rounded-xl p-3 border border-purple-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">Note</span>
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 flex-shrink-0" />
            </div>
            <div className="text-xl font-bold text-gray-900">{stats.note}/5</div>
            <div className="text-xs text-gray-500 mt-1">{stats.totalCourses} courses</div>
          </div>
        </div>

        {/* Badge */}
        <div className="bg-purple-50 border border-purple-300 rounded-xl p-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Award className="w-10 h-10 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-lg">Badge {stats.badge}</h3>
              <p className="text-sm text-gray-600">
                Commission actuelle : {stats.commission}% • Vous recevez {100 - stats.commission}% du prix
              </p>
              <div className="mt-2 bg-white rounded-lg px-4 py-1 inline-block border border-purple-200">
                <span className="text-sm text-gray-600">
                  Progression vers Diamant: <span className="font-semibold">{stats.totalCourses}/500</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Course en cours */}
        {courseEnCours && (
          <div className="bg-purple-50 border border-purple-300 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <Navigation className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Course en cours</h3>
                  <p className="text-sm text-gray-600">{courseActuelle.id} • {courseActuelle.client}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-purple-600">{courseActuelle.commission} F</div>
                <div className="text-sm text-gray-500">Vous recevez</div>
              </div>
            </div>

            {/* Mini carte */}
            <div className="bg-white rounded-xl p-4 mb-4 border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm text-gray-700">{courseActuelle.depart}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500" />
                <span className="text-sm text-gray-700">{courseActuelle.arrivee}</span>
              </div>
            </div>

            {/* Étapes */}
            <div className="space-y-2 mb-4">
              {courseActuelle.etapes.map((etape, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      etape.completed ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  >
                    {etape.completed && <CheckCircle className="w-4 h-4 text-white" />}
                  </div>
                  <div className="flex-1">
                    <span className={`text-sm ${etape.completed ? 'text-gray-700' : 'text-gray-500'}`}>
                      {etape.label}
                    </span>
                    {etape.time && (
                      <span className="text-sm text-gray-400 ml-2">{etape.time}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="grid grid-cols-3 gap-4">
              <button className="flex items-center justify-center gap-2 bg-white border border-purple-600 text-purple-600 font-semibold py-3 rounded-xl hover:bg-purple-50 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">Appeler</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-white border border-purple-600 text-purple-600 font-semibold py-3 rounded-xl hover:bg-purple-50 transition-colors">
                <Camera className="w-4 h-4" />
                <span className="text-sm">Photo</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-white border border-red-600 text-red-600 font-semibold py-3 rounded-xl hover:bg-red-50 transition-colors">
                <AlertCircle className="w-4 h-4" />
                <span className="text-sm">Problème</span>
              </button>
            </div>
          </div>
        )}

        {/* Courses disponibles */}
        {disponible && (
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-4">
              Courses disponibles ({coursesDisponibles.length})
            </h3>
            <div className="space-y-4">
              {coursesDisponibles.map((course) => (
                <div
                  key={course.id}
                  className={`bg-white rounded-xl p-6 border ${
                    course.urgent ? 'border-orange-400 bg-orange-50' : 'border-purple-200'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      {course.urgent && (
                        <span className="inline-flex items-center gap-1 bg-orange-500 text-white text-sm px-4 py-1 rounded-full mb-2 font-medium">
                          <AlertCircle className="w-4 h-4" />
                          URGENT - {course.delai}
                        </span>
                      )}
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="font-semibold text-gray-900">{course.depart}</span>
                        <span className="text-gray-400">→</span>
                        <MapPin className="w-4 h-4 text-red-500" />
                        <span className="font-semibold text-gray-900">{course.arrivee}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Package className="w-4 h-4" />
                          {course.taille} ({course.poids})
                        </span>
                        <span>{course.distance}</span>
                        {!course.urgent && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {course.delai}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 mb-1">Prix client</div>
                      <div className="text-lg font-bold text-gray-900">{course.prixTotal} F</div>
                      <div className="text-sm text-green-600 font-semibold">
                        Vous: {course.commission} F (80%)
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="flex-1 bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition-colors">
                      Accepter
                    </button>
                    <button className="px-6 bg-gray-100 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-200 transition-colors">
                      Refuser
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!disponible && (
          <div className="bg-gray-100 rounded-xl p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
              <Frown className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="font-bold text-gray-900 text-xl mb-2">Vous êtes hors ligne</h3>
            <p className="text-gray-600 mb-6">
              Activez votre disponibilité pour recevoir des courses
            </p>
            <button
              onClick={() => setDisponible(true)}
              className="bg-purple-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-purple-700 transition-colors"
            >
              Passer en ligne
            </button>
          </div>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-4">
          <button className="bg-white rounded-xl p-4 border border-purple-200 hover:border-purple-400 transition-all text-left">
            <Clock className="w-8 h-8 text-purple-600 mb-2" />
            <div className="font-semibold text-gray-900">Historique</div>
            <div className="text-sm text-gray-500">Voir mes courses</div>
          </button>

          <button className="bg-white rounded-xl p-4 border border-purple-200 hover:border-purple-400 transition-all text-left">
            <DollarSign className="w-8 h-8 text-purple-600 mb-2" />
            <div className="font-semibold text-gray-900">Revenus</div>
            <div className="text-sm text-gray-500">Demander retrait</div>
          </button>

          <button className="bg-white rounded-xl p-4 border border-purple-200 hover:border-purple-400 transition-all text-left">
            <Award className="w-8 h-8 text-purple-600 mb-2" />
            <div className="font-semibold text-gray-900">Réputation</div>
            <div className="text-sm text-gray-500">Avis clients</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursierDashboard;
