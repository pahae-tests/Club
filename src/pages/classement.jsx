import { useState, useEffect } from 'react';
import { Crown, Shield, TrendingUp, TrendingDown, Minus, Phone, Mail, Medal } from 'lucide-react';

export default function AdminRanking({ isDark }) {
  const [mounted, setMounted] = useState(false);
  const members = [
    { id: 1, nom: "Lamrissi", prenom: "Pahae", tel: "0700000000", email: "cc@hh.com", points: 17, admin: true, img: "/imgs/sara.jpg" },
    { id: 2, nom: "Yakine", prenom: "Cho3ayp", tel: "0700000000", email: "cc@hh.com", points: 14, admin: false, img: "/imgs/omar.jpg" },
    { id: 3, nom: "Gana", prenom: "Anas", tel: "0700000000", email: "cc@hh.com", points: 16, admin: true, img: "/imgs/yasmine.jpg" },
    { id: 4, nom: "Elkhairi", prenom: "Omar", tel: "0700000000", email: "cc@hh.com", points: 13, admin: false, img: "/imgs/amine.jpg" },
    { id: 5, nom: "Akotsht7", prenom: "Aicha", tel: "0700000000", email: "cc@hh.com", points: 12, admin: false, img: "/imgs/karim.jpg" },
    { id: 6, nom: "M3rt shno", prenom: "Amina", tel: "0700000000", email: "cc@hh.com", points: 11, admin: false, img: "/imgs/nadia.jpg" },
    { id: 7, nom: "Sitd", prenom: "Mehdi", tel: "0700000000", email: "cc@hh.com", points: 9, admin: false, img: "/imgs/mehdi.jpg" },
    { id: 8, nom: "Lmaidar", prenom: "Youssef", tel: "0700000000", email: "cc@hh.com", points: 8, admin: false, img: "/imgs/fatima.jpg" },
    { id: 9, nom: "M3rt shno", prenom: "Aya", tel: "0700000000", email: "cc@hh.com", points: 6, admin: false, img: "/imgs/youssef.jpg" },
    { id: 10, nom: "M3rt shno", prenom: "Anas", tel: "0700000000", email: "cc@hh.com", points: 5, admin: false, img: "/imgs/salma.jpg" }
  ];
  const sortedMembers = [...members].sort((a, b) => b.points - a.points);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`min-h-screen transition-all duration-700 ${
      isDark
        ? 'bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2e] to-[#0a0a0a]'
        : 'bg-gradient-to-br from-[#f4f4f4] via-[#e8e8f5] to-[#f4f4f4]'
    }`}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${
          isDark ? 'bg-purple-600' : 'bg-purple-400'
        }`} style={{ animationDuration: '4s' }}></div>
        <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${
          isDark ? 'bg-cyan-600' : 'bg-cyan-400'
        }`} style={{ animationDuration: '6s' }}></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center mb-12 mt-20">
          <div className="inline-block mb-6">
            <div className="relative">
              <h1 className={`relative text-5xl md:text-6xl font-black tracking-tight ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                <span className="bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Classement des membres
                </span>
              </h1>
            </div>
          </div>
          <p className={`text-lg md:text-xl font-medium ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <Shield className="inline-block w-5 h-5 mr-2" />
            Club de Cybersécurité Universitaire
          </p>
        </div>
        <div className="max-w-[900px] mx-auto">
          <div className={`rounded-3xl overflow-hidden backdrop-blur-xl ${
            isDark
              ? 'bg-black/40 border border-white/10'
              : 'bg-white/60 border border-gray-200/50'
          } shadow-2xl`}>
            <div className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"></div>

            <div className={`grid grid-cols-7 md:grid-cols-15 gap-4 px-6 py-5 font-bold text-sm uppercase tracking-wider border-b ${
              isDark
                ? 'bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border-white/10 text-gray-300'
                : 'bg-gradient-to-r from-purple-100/50 to-cyan-100/50 border-gray-200 text-gray-700'
            }`}>
              <div className="col-span-1 text-center">Pos</div>
              <div className="col-span-4 text-center">Membre</div>
              <div className="hidden md:block col-span-2 text-center">Status</div>
              <div className="hidden md:block col-span-3 text-center">Téléphone</div>
              <div className="hidden md:block col-span-3 text-center">Email</div>
              <div className="col-span-2 text-center">Points</div>
            </div>

            <div className="divide-y divide-white/5">
              {sortedMembers.map((member, index) => {
                const position = index + 1;
                const isTopThree = position <= 3;
                const isFourth = position == 4;
                const isLastThree = position >= sortedMembers.length - 2;
                return (
                  <div
                    key={member.id}
                    className={`grid grid-cols-7 md:grid-cols-15 gap-4 px-6 py-4 items-center transition-all duration-500 group cursor-pointer ${
                      isDark
                        ? 'hover:bg-gradient-to-r hover:from-purple-900/20 hover:to-cyan-900/20'
                        : 'hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50'
                    } ${isTopThree ? 'border-l-4 border-l-green-400' :
                        isFourth ? 'border-l-4 border-l-purple-400' :
                        isLastThree ? 'border-l-4 border-l-red-600' : ''
                    }`}
                    style={{
                      animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
                    }}
                  >
                    <div className="col-span-1 text-center -translate-x-4 md:translate-x-0">
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl font-bold text-lg ${
                        isTopThree
                          ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white'
                          : isDark
                            ? 'bg-gray-800/50 text-gray-300'
                            : 'bg-gray-100 text-gray-700'
                      }`}>
                        {position === 1 && <Crown className="w-5 h-5" />}
                        {position !== 1 && position}
                      </div>
                    </div>

                    <div className="col-span-4 flex items-center gap-3">
                      <div className="relative">
                        <div className={`relative w-12 h-12 rounded-full overflow-hidden ring-2 ${
                          isTopThree
                            ? 'ring-yellow-400'
                            : isDark
                              ? 'ring-gray-700'
                              : 'ring-gray-300'
                        }`}>
                          <div className={`w-full h-full flex items-center justify-center text-lg font-bold ${
                            isDark ? 'bg-gradient-to-br from-purple-600 to-cyan-600' : 'bg-gradient-to-br from-purple-400 to-cyan-400'
                          } text-white`}>
                            {member.prenom[0]}{member.nom[0]}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className={`font-semibold text-base ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {member.prenom} {member.nom}
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:block col-span-2 flex justify-center">
                      {member.admin && (
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white transition-all duration-300">
                          <Shield className="w-3.5 h-3.5" />
                          ADMIN
                        </span>
                      )}
                    </div>

                    <div className="hidden md:block col-span-3 flex justify-center">
                        <span className={`flex gap-2 px-4 py-1.5 text-xs ${isDark ? 'text-white' : 'text-gray-900'} transition-all duration-300`}>
                          <Phone className="w-3.5 h-3.5" />
                          {member.tel}
                        </span>
                    </div>

                    <div className="hidden md:block col-span-3 flex justify-center">
                        <span className={`flex gap-2 px-4 py-1.5 text-xs ${isDark ? 'text-white' : 'text-gray-900'} transition-all duration-300`}>
                          <Mail className="w-3.5 h-3.5" />
                          {member.email}
                        </span>
                    </div>

                    <div className="col-span-2 text-center">
                      <div className={`inline-flex items-center justify-center px-4 py-2 rounded-xl font-bold text-lg ${
                        isDark
                          ? 'bg-gradient-to-br from-gray-800 to-gray-900 text-cyan-400'
                          : 'bg-gradient-to-br from-gray-100 to-gray-200 text-cyan-600'
                      } shadow-lg border ${
                        isDark ? 'border-cyan-500/30' : 'border-cyan-400/30'
                      } group-hover:scale-110 transition-transform duration-300`}>
                        {member.points}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`mt-8 p-6 rounded-2xl backdrop-blur-xl ${
            isDark
              ? 'bg-black/30 border border-white/10'
              : 'bg-white/40 border border-gray-200/50'
          }`}>
            <h3 className={`text-sm font-bold uppercase tracking-wider mb-4 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Légende du classement
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🟩</span>
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                  <span className="font-semibold text-green-400">Top 3</span> - Qualification garantie
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🟪</span>
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                  <span className="font-semibold text-purple-400">4ᵉ place</span> - Position stable
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🟥</span>
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                  <span className="font-semibold text-red-400">3 derniers</span> - Zone de danger
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}