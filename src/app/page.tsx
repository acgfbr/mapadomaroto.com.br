'use client';

import { useState } from 'react';
import Image from 'next/image';

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
        <div className="w-full  animate-fade-in">
          <img
            src="/mapa.jpg"
            alt="Mapa do Maroto"
            
            className=""
          />
        </div>
      )}
    </main>
  );
}
