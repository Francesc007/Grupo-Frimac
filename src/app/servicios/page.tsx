"use client";

import { motion } from "framer-motion";
import { Services } from "@/components/sections/Services";

export default function ServiciosPage() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50/50">
      {/* Header Servicios */}
      <section className="relative bg-secondary text-white py-35 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            className="relative w-full h-full"
          >
            <img 
              src="/instalaciones.webp" 
              alt="Ingeniería y Construcción" 
              className="w-full h-full object-cover opacity-40"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight uppercase tracking-tighter italic">
                Nuestras <br />
                <span className="text-primary-dark">Capacidades</span>
              </h1>
              <div className="w-24 h-2 bg-primary-dark mb-8 rounded-full" />
              <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-medium">
                Ofrecemos soluciones integrales de ingeniería y construcción diseñadas para superar los estándares más exigentes del sector industrial nacional.
              </p>
            </motion.div>
            {/* Espaciador para igualar altura con Experiencia */}
            <div className="hidden lg:block h-48" />
          </div>
        </div>

        {/* Decoración azul */}
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-primary-dark/10 skew-x-[-20deg] translate-x-1/2 z-0" />
      </section>

      {/* Aquí insertamos el componente de Servicios con todos los cuadros */}
      <Services />

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-r from-secondary to-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight uppercase italic tracking-tighter">
            ¿Listo para elevar <span className="text-primary-dark">tu infraestructura?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 font-medium">
            Nuestro equipo de ingeniería está listo para analizar sus planos y requerimientos con el máximo rigor profesional.
          </p>
          <a 
            href="https://wa.me/524491115640?text=Hola,%20solicito%20una%20cotización%20técnica%20para%20un%20proyecto." 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-dark text-white px-12 py-5 rounded-full font-black text-lg hover:bg-white hover:text-secondary transition-all shadow-2xl hover:shadow-primary-dark/20 uppercase tracking-widest"
          >
            Iniciar Cotización Técnica
          </a>
        </div>
      </section>
    </div>
  );
}