"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Building2, 
  Zap, 
  Droplets, 
  Warehouse, 
  Truck, 
  Paintbrush, 
  Construction, 
  Settings, 
  HardHat, 
  Hammer, 
  Shield,
  Layers
} from "lucide-react";

const services = [
  {
    title: "Obra Civil",
    description: "Construcción robusta de naves industriales, cimentaciones y estructuras bajo los más altos estándares de calidad.",
    icon: <Building2 size={32} />,
    image: "/Imagen4.png"
  },
  {
    title: "Electromecánica",
    description: "Instalaciones eléctricas de potencia, subestaciones y montaje de equipos industriales con precisión técnica.",
    icon: <Zap size={32} />,
    image: "/eléctrico.jpg"
  },
  {
    title: "Hidrosanitarias",
    description: "Diseño y ejecución de redes hidráulicas, sanitarias y de procesos industriales con materiales certificados.",
    icon: <Droplets size={32} />,
    image: "/hidrosanitaria.jpg"
  },
  {
    title: "Estructura Metálica",
    description: "Diseño, fabricación y montaje de estructuras de acero para grandes claros y requerimientos industriales.",
    icon: <Warehouse size={32} />,
    image: "/Imagen29.png"
  },
  {
    title: "Tabla Roca y Plafones",
    description: "Sistemas ligeros de alta calidad para optimización de oficinas y espacios industriales con acabados perfectos.",
    icon: <Layers size={32} />,
    image: "/Imagen18.png"
  },
  {
    title: "Renta de Maquinaria y equipo",
    description: "Suministro de maquinaria pesada, grúas y montacargas para soporte logístico total en cualquier escala de obra.",
    icon: <Truck size={32} />,
    image: "/equipo 1.png"
  },
  {
    title: "Remodelación",
    description: "Transformamos espacios residenciales con acabados de lujo, optimización funcional y diseño arquitectónico.",
    icon: <Paintbrush size={32} />,
    image: "/Imagen47.png"
  },
  {
    title: "Colocación de Concreto",
    description: "Firmes, pavimentos y estructuras de concreto hidráulico con acabados industriales de alta resistencia.",
    icon: <Construction size={32} />,
    image: "/Imagen7.png"
  },
  {
    title: "Aluminio y Vidrio",
    description: "Cancelería industrial y comercial con diseño moderno, resistencia estructural y aislamiento térmico.",
    icon: <Settings size={32} />,
    image: "/Imagen33.png"
  },
  {
    title: "Supervisión de Obra",
    description: "Control riguroso de calidad, tiempos y presupuestos mediante ingenieros expertos dedicados a su proyecto.",
    icon: <HardHat size={32} />,
    image: "/supervision.webp"
  },
  {
    title: "Carpintería",
    description: "Mobiliario a medida y acabados en madera que integran funcionalidad y elegancia en cada espacio.",
    icon: <Hammer size={32} />,
    image: "/carpinteria1.jpg"
  },
  {
    title: "Acabados y Pintura",
    description: "Detalles finales, recubrimientos y pintura industrial que garantizan una estética profesional duradera.",
    icon: <Paintbrush size={32} />,
    image: "/Imagen12.png"
  }
];

export const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-dark/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl font-black text-secondary mb-4 uppercase tracking-tighter italic">Soluciones Integrales</h2>
          <div className="w-24 h-1 bg-primary-dark mx-auto rounded-full shadow-[0_0_10px_rgba(0,136,204,0.5)]" />
          <p className="mt-4 text-slate-600 font-medium max-w-2xl mx-auto">
            Ofrecemos un abanico completo de servicios especializados para los sectores industrial, comercial y residencial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Degradado suave en la parte inferior solicitado */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-md rounded-xl shadow-md group-hover:bg-primary-dark group-hover:text-white transition-colors duration-300 text-primary-dark">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-8 flex flex-col grow">
                <h3 className="text-xl font-bold mb-3 text-secondary uppercase tracking-tight group-hover:text-primary-dark transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 grow">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-primary-dark font-bold text-[10px] uppercase tracking-widest border-t pt-4 border-slate-50">
                  <Shield size={12} />
                  Excelencia Grupo Frimac
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Texto indicador de más servicios */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center px-4"
        >
          <p className="text-industrial-grey font-bold uppercase tracking-[0.3em] text-sm italic">
            y más servicios a su disposición...
          </p>
          <div className="w-12 h-1 bg-slate-200 mx-auto mt-4 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};