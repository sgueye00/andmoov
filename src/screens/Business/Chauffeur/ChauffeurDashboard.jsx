import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, TrendingUp, Star, MapPin, Clock } from 'lucide-react';
import Header from '../../../components/Header';

const ChauffeurDashboard = () => {
  const navigate = useNavigate();
  const [disponible, setDisponible] = useState(true);

  const stats = {
    aujourdhui: 24000,
    coursesAujourdhui: 8,
    semaine: 165000,
    mois: 620000,
    note: 4.8,
    totalCourses: 412,
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <div className="sticky top-0 z-30">
        <Header title="Chauffeur VTC" showBack={true} backTo="/business" />
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide min-h-0">
        <div className="px-6 pt-6 pb-20 space-y-5">
          {/* Stats Header */}
          <div className="rounded-xl p-5 text-white" style={{ background: 'linear-gradient(to right, #51B8EC, #2E8BC0)' }}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-white/80 text-sm">Gains aujourd'hui</p>
                <p className="text-3xl font-bold">{stats.aujourdhui.toLocaleString()} F</p>
                <p className="text-xs text-white/80 mt-1">{stats.coursesAujourdhui} courses effectuées</p>
              </div>
              <Car className="w-12 h-12 opacity-80" />
            </div>

            {/* Toggle Disponibilité */}
            <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <span className="text-sm font-medium">Disponible pour courses</span>
              <button
                onClick={() => setDisponible(!disponible)}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  disponible ? 'bg-green-500' : 'bg-gray-400'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    disponible ? 'translate-x-7' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <p className="text-xs text-gray-500">Semaine</p>
              </div>
              <p className="text-lg font-bold text-gray-900">{(stats.semaine / 1000).toFixed(0)}K</p>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <p className="text-xs text-gray-500">Note</p>
              </div>
              <p className="text-lg font-bold text-gray-900">{stats.note}/5</p>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <Car className="w-4 h-4 text-blue-600" />
                <p className="text-xs text-gray-500">Total</p>
              </div>
              <p className="text-lg font-bold text-gray-900">{stats.totalCourses}</p>
            </div>
          </div>

          {/* Courses disponibles */}
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Courses disponibles</h3>
            <div className="space-y-3">
              {[
                { depart: 'Plateau', arrivee: 'Almadies', distance: '8km', prix: 3500, temps: '~25 min' },
                { depart: 'Mermoz', arrivee: 'Ngor', distance: '6km', prix: 2800, temps: '~18 min' },
              ].map((course, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-green-600" />
                        <span className="font-medium text-gray-900 text-sm">{course.depart}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-red-600" />
                        <span className="font-medium text-gray-900 text-sm">{course.arrivee}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-blue-600 text-lg">{course.prix} F</p>
                      <p className="text-xs text-gray-500">Commission 80%</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-600 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{course.temps}</span>
                    </div>
                    <span>{course.distance}</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg mt-3 hover:bg-blue-700 transition-colors">
                    Accepter la course
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChauffeurDashboard;
