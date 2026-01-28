"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 md:pt-20 md:pb-0 overflow-hidden bg-secondary">
             {/* Background Imagen: Proyecto de Construcción con opacidad sincronizada */}
             <div className="absolute inset-0 z-0">
               <motion.div
                 initial={{ scale: 1.1 }}
                 animate={{ scale: 1 }}
                 transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                 className="relative w-full h-full"
               >
                 <Image
                   src="/Imagen49.png"
                   alt="Equipo de Trabajo Grupo Frimac"
                   fill
                   className="object-cover opacity-35"
                   priority
                 />
               </motion.div>
               {/* Gradiente sutil del lado izquierdo para legibilidad (Sincronizado con Experiencia) */}
               <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent z-10" />
               {/* Partículas visuales sutiles */}
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 z-20" />
             </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-30">
        
        {/* Lado IZQUIERDO: Textos y CTAs (Restaurado) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8 tracking-tighter">
            Soluciones Integrales de <span className="text-primary-dark italic">Alto Nivel</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 font-medium max-w-lg leading-relaxed border-l-0 md:border-l-2 border-primary-dark md:pl-6">
            Líderes en ingeniería y construcción estratégica desde <span className="text-white font-bold">Aguascalientes</span>, materializando proyectos de infraestructura técnica con estándares de excelencia nacional.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full md:w-auto">
            {[
              "15+ Años de Experiencia",
              "Normas de Seguridad",
              "Presupuestos Ágiles",
              "Garantía de Calidad"
            ].map((item) => (
              <li key={item} className="flex items-center justify-center md:justify-start gap-3 text-slate-200 font-bold">
                <CheckCircle className="text-primary-dark" size={20} />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href="/servicios" 
              className="px-8 py-4 rounded-full bg-primary-dark text-white font-black hover:bg-secondary transition-all duration-300 shadow-2xl shadow-primary-dark/40 text-center uppercase tracking-widest text-sm border-2 border-primary-dark w-full sm:w-auto"
            >
              Nuestros Servicios
            </Link>
            <Link 
              href="/experiencia" 
              className="px-8 py-4 rounded-full bg-white/10 border-2 border-primary text-white font-black hover:bg-primary transition-all duration-300 shadow-2xl shadow-primary/20 text-center uppercase tracking-widest text-sm backdrop-blur-md w-full sm:w-auto"
            >
              Ver Proyectos
            </Link>
          </div>
        </motion.div>

        {/* Lado DERECHO: Imagen principal 'tunel 1.jpg' (Restaurado) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden md:flex justify-end items-center pr-4 lg:pr-8 order-2"
        >
          {/* Imagen principal 'tunel 1.jpg' compacta */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative z-10 w-[75%]"
          >
            <div className="absolute -inset-4 bg-primary/30 rounded-[3rem] blur-3xl" />
            <div className="relative rounded-[2.5rem] shadow-2xl overflow-hidden h-[400px] w-full border-b-[12px] border-primary-dark">
              <Image 
                src="/Imagen2.png" 
                alt="Proyecto Túnel Grupo Frimac" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Engrane decorativo reposicionado a la derecha */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-6 -right-2 w-36 h-36 bg-primary-dark/10 border-[8px] border-primary-dark/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <div className="w-16 h-16 border-4 border-dashed border-primary-dark/40 rounded-full" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
