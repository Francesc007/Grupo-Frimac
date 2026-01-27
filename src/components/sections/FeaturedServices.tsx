"use client";

import { motion } from "framer-motion";
import { Building2, Truck, Settings, Shield } from "lucide-react";
import Link from "next/link";

const mainServices = [
  {
    title: "Obra Civil",
    description: "Construcción de naves industriales, cimentaciones y estructuras de alta resistencia.",
    icon: <Building2 size={40} />,
    image: "/construcción.jpeg",
    link: "/servicios#obra-civil"
  },
  {
    title: "Renta de Maquinaria",
    description: "Equipo pesado, grúas y montacargas disponibles para proyectos de cualquier escala.",
    icon: <Truck size={40} />,
    image: "/maquinaría.jpeg",
    link: "/servicios#maquinaria"
  },
  {
    title: "Instalaciones Especiales",
    description: "Sistemas contra incendio, redes hidráulicas y neumáticas bajo normas internacionales.",
    icon: <Settings size={40} />,
    image: "/instalaciones.webp",
    link: "/servicios#instalaciones"
  }
];

export const FeaturedServices = () => {
  return (
    <section id="servicios-principales" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-secondary mb-4 uppercase tracking-tighter italic">
              Nuestros <span className="text-primary-dark">Servicios</span>
            </h2>
            <div className="w-24 h-1 bg-primary-dark rounded-full shadow-[0_0_10px_rgba(0,136,204,0.5)] mx-auto md:mx-0" />
            <p className="mt-6 text-industrial-grey text-lg font-medium">
              Especialistas en ingeniería y construcción con más de 15 años de trayectoria en el sector industrial.
            </p>
          </div>
          <Link 
            href="/servicios"
            className="px-8 py-4 bg-secondary text-white rounded-full font-bold hover:bg-primary-dark transition-all shadow-xl hover:shadow-primary-dark/20 uppercase tracking-widest text-xs"
          >
            Ver Catálogo Completo
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-primary-dark/30 transition-all duration-500"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="mb-6 p-4 bg-primary-dark/90 backdrop-blur-md rounded-2xl w-fit text-white group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-tight italic">
                  {service.title}
                </h3>
                <p className="text-slate-200 text-sm mb-8 leading-relaxed font-medium">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-primary-dark font-black text-[10px] uppercase tracking-[0.2em]">
                  <Shield size={14} />
                  <span>Sello de Calidad Frimac</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};