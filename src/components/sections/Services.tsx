"use client";

import { motion } from "framer-motion";
import { HardHat, Truck, Settings, Shield } from "lucide-react";

const services = [
  {
    title: "Obra Civil",
    description: "Construcción de naves industriales, cimentaciones y estructuras de alta resistencia.",
    icon: <HardHat size={32} className="text-primary-dark group-hover:text-white transition-colors" />,
    image: "/construcción.jpeg"
  },
  {
    title: "Renta de Maquinaria",
    description: "Amplia flota de equipo ligero y pesado para proyectos de gran escala industrial.",
    icon: <Truck size={32} className="text-primary-dark group-hover:text-white transition-colors" />,
    image: "/maquinaría.jpeg"
  },
  {
    title: "Instalaciones Especiales",
    description: "Sistemas contra incendios, redes hidráulicas y eléctricas bajo normas internacionales.",
    icon: <Settings size={32} className="text-primary-dark group-hover:text-white transition-colors" />,
    image: "/Instalaciones.webp"
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-white relative overflow-hidden">
      {/* Destellos de color en el Home */}
      <div className="glint-blue w-[500px] h-[500px] -bottom-40 -right-40 opacity-10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-dark/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-secondary mb-4 uppercase tracking-tighter italic">Nuestros Servicios</h2>
          <div className="w-24 h-1 bg-primary-dark mx-auto rounded-full shadow-[0_0_10px_rgba(0,136,204,0.5)]" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col relative overflow-hidden"
            >
              {/* Imagen de Fondo del Servicio */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                
                {/* Icono Flotante */}
                <div className="absolute top-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg group-hover:bg-primary-dark transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-10 relative z-10 flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold mb-4 text-secondary uppercase tracking-tight">{service.title}</h3>
                <p className="text-industrial-grey leading-relaxed font-medium mb-6">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-primary-dark font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <Shield size={14} />
                  Garantía Frimac
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
