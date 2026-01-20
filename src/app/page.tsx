'use client';

import { useState } from 'react';

export default function Home() {
  const [isMapRevealed, setIsMapRevealed] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const revealMap = () => {
    setShowMessage(true);
    setTimeout(() => {
      setIsMapRevealed(true);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-[#F5E6D3] flex flex-col items-center justify-center p-4">
      {!isMapRevealed && !showMessage && (
        <button
          onClick={revealMap}
          className="bg-[#2A1810] text-[#F5E6D3] px-8 py-4 rounded-lg 
                   font-harry-potter text-2xl hover:bg-[#4A2820] 
                   transition-all duration-300 shadow-lg hover:shadow-xl
                   transform hover:scale-105"
        >
          JURO SOLENEMENTE NÃO FAZER NADA DE BOM
        </button>
      )}

      {showMessage && !isMapRevealed && (
        <div className="text-center font-harry-potter text-3xl text-[#2A1810] animate-fade-in">
          <p className="mb-4">Os senhores Aluado, Rabicho,</p>
          <p className="mb-4">Almofadinhas e Pontas</p>
          <p className="mb-4">tem o prazer em apresentar</p>
          <p className="text-4xl mt-4">O MAPA DO MAROTO</p>
        </div>
      )}

      {isMapRevealed && (
        <div className="w-full animate-fade-in">
          <img
            src="https://cdn.realoficial.com.br/mapadomaroto.jpg"
            alt="Mapa do Maroto"
            className=""
          />

          {/* Banner Promocional */}
          <div className="mt-8 mx-auto max-w-2xl px-4">
            <a
              href="https://realoficial.com.br?utm_source=mapadomaroto&utm_medium=banner&utm_campaign=60creditos"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-[#2A1810] to-[#4A2820] rounded-xl p-6
                       shadow-xl hover:shadow-2xl transition-all duration-300
                       transform hover:scale-[1.02] border-2 border-[#F5E6D3]/20"
            >
              <div className="text-center">
                <div className="inline-block bg-[#F5E6D3] text-[#2A1810] text-xs font-bold
                              px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
                  Presente Especial
                </div>
                <h3 className="text-[#F5E6D3] text-xl md:text-2xl font-bold mb-2">
                  Você ganhou 60 créditos grátis!
                </h3>
                <p className="text-[#F5E6D3]/80 text-sm md:text-base mb-4">
                  Crie cortes virais para suas redes sociais com IA
                </p>
                <div className="inline-flex items-center gap-2 bg-[#F5E6D3] text-[#2A1810]
                              px-6 py-2 rounded-lg font-semibold text-sm
                              hover:bg-white transition-colors">
                  Resgatar no Real Oficial
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </a>
            <p className="text-center text-[#2A1810]/50 text-xs mt-3">
              Publicidade
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
