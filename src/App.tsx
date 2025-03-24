import React from "react";
import { Cat, Brush as Sushi, Building, Moon, Star } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900">
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-yellow-200 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random() * 0.7 + 0.3,
              width: `${Math.random() * 13 + 5}px`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
        {/* Moon */}
        <Moon className="absolute top-10 right-10 text-yellow-200 w-16 h-16" />

        {/* Istanbul silhouette */}
        <div className="absolute bottom-0 w-full">
          <div className="flex justify-center space-x-4">
            {[...Array(5)].map((_, i) => (
              <Building
                key={i}
                className="text-gray-900 w-24 h-24"
                style={{
                  transform: `scale(${0.8 + Math.random() * 0.4})`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Main character and title */}
        <div className="text-center z-10">
          <div className="relative inline-block mb-8">
            <Cat className="w-32 h-32 text-gray-800" />
            <Sushi className="absolute bottom-0 right-0 w-12 h-12 text-pink-400 animate-bounce" />
          </div>

          <h1 className="text-5xl font-bold text-white mb-4 font-serif">
            Intégrateur Web
          </h1>
          <p className="text-xl text-pink-200 mb-8">IA - React Projet</p>
          <p className="text-xl text-pink-200 mb-8">
            Freelance ready for new challenges
          </p>

          {/* Menu cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Templates Web",
                price: "Best Practices",
                desc: "Création templates responsives avec HTML5 - CSS3 - SCSS",
              },
              {
                title: "Accessibility",
                price: "W3C",
                desc: "Optimisation de l'accessibilité,  une expérience user plus riche",
              },
              {
                title: "Webperf",
                price: "Faster",
                desc: "Augmenter la vitesse de chargement des pages web",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white hover:transform hover:scale-105 transition-transform"
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-pink-200 mb-2">{item.desc}</p>
                <p className="text-2xl font-bold text-yellow-200">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
