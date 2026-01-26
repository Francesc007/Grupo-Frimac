"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const clientLogos = [
  { name: "Alan", src: "/Clientes/Alan.png" },
  { name: "Aryba", src: "/Clientes/Aryba.png" },
  { name: "Bachoco", src: "/Clientes/Bachoco.png" },
  { name: "Bison", src: "/Clientes/Bison.png" },
  { name: "Coca Cola", src: "/Clientes/cOCA.png" },
  { name: "Contech", src: "/Clientes/Contech.png" },
  { name: "Cydsa", src: "/Clientes/Cydsa.png" },
  { name: "Flex", src: "/Clientes/Flex.png" },
  { name: "H. Ato. Aguascalientes", src: "/Clientes/H. Ato. Aguascalientes.png" },
  { name: "JM Romo", src: "/Clientes/JM Romo.png" },
  { name: "LALA", src: "/Clientes/LALA.png" },
  { name: "MAHLE", src: "/Clientes/MAHLE.png" },
  { name: "Oxxo", src: "/Clientes/Oxxo.png" },
  { name: "Pilgrims", src: "/Clientes/Pilgrims.png" },
  { name: "San Marcos", src: "/Clientes/San Marcos.png" },
  { name: "Sensata", src: "/Clientes/Sensata.png" },
  { name: "Valle Redondo", src: "/Clientes/Valle Redondo.png" },
];

export const Trust = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 2500, stopOnInteraction: false }),
  ]);

  return (
    <section id="experiencia" className="py-8 bg-transparent transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Texto de confianza */}
          <div className="shrink-0 text-center md:text-left">
            <h2 className="text-xl font-bold text-secondary mb-1">Empresas que Confían</h2>
            <p className="text-primary-dark font-black text-sm uppercase tracking-[0.2em] opacity-90">+15 años de trayectoria</p>
          </div>

          {/* Carrusel de logos reales */}
          <div className="overflow-hidden flex-1" ref={emblaRef}>
            <div className="flex items-center">
              {clientLogos.map((logo, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_40%] sm:flex-[0_0_25%] md:flex-[0_0_20%] lg:flex-[0_0_15%] min-w-0 px-6"
                >
                  <div className="relative h-16 w-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <Image
                      src={logo.src}
                      alt={`Logo de ${logo.name}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicamos para asegurar el loop infinito suave */}
              {clientLogos.map((logo, index) => (
                <div 
                  key={`dup-${index}`} 
                  className="flex-[0_0_40%] sm:flex-[0_0_25%] md:flex-[0_0_20%] lg:flex-[0_0_15%] min-w-0 px-6"
                >
                  <div className="relative h-16 w-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <Image
                      src={logo.src}
                      alt={`Logo de ${logo.name}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
