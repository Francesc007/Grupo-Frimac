"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { ShieldCheck, Handshake, TrendingUp, Users, Trophy, Globe, Star, Target } from "lucide-react";
import { Trust } from "@/components/sections/Trust";
import { useRef } from "react";

export default function NosotrosPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const history = [
    { year: "2009", title: "El Origen: ARTICO", desc: "Nace como ARTICO (Arte y Construcción), enfocada en el mantenimiento industrial integral en Aguascalientes." },
    { year: "2010", title: "Expansión: FRIMA", desc: "Incursionamos en el sector residencial y proyectos foráneos con gran éxito evolucionando a FRIMA." },
    { year: "2011", title: "Consolidación: FRIMAC", desc: "Adoptamos nuestra identidad definitiva integrando servicios de comercializadora y construcción industrial." },
    { year: "Actualidad", title: "Prestigio Nacional", desc: "Consolidados como referentes industriales con ramas en maquinaria pesada, CCTV e ingeniería." }
  ];

  const values = [
    { icon: <ShieldCheck size={36} />, title: "Calidad & Seguridad", desc: "Aplicamos rigurosos estándares técnicos para garantizar infraestructuras seguras y duraderas." },
    { icon: <Handshake size={36} />, title: "Honestidad", desc: "Construimos relaciones basadas en la transparencia y la confianza mutua con nuestros clientes." },
    { icon: <TrendingUp size={36} />, title: "Innovación", desc: "Invertimos constantemente en nuevas tecnologías y métodos de construcción avanzada." },
    { icon: <Users size={36} />, title: "Responsabilidad Social", desc: "Comprometidos con el desarrollo de nuestra comunidad y el respeto al medio ambiente." }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-24 min-h-screen relative bg-slate-50/30">
      {/* Hero Nosotros */}
      <section className="relative bg-secondary text-white py-35 px-6 md:px-12 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            className="relative w-full h-full"
          >
            <img 
              src="/acuerdo.jpg" 
              alt="Ingeniería y Construcción Industrial" 
              className="w-full h-full object-cover opacity-35"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-[1.3] md:leading-[1.4] tracking-tight">
                Ingeniería y Construcción <br className="hidden md:block" />
                <span className="text-primary-dark uppercase">Industrial</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed italic border-l-4 border-primary-dark pl-8 py-2">
                "<span className="text-primary-dark font-bold">15+ años</span> transformando el futuro industrial con excelencia técnica."
              </p>
            </motion.div>
            {/* Espaciador para igualar altura con Experiencia */}
            <div className="hidden lg:block h-64" />
          </div>
        </div>
      </section>

      {/* Trayectoria */}
      <section className="py-24 bg-white overflow-hidden relative" ref={containerRef}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary mb-2 uppercase tracking-tighter italic border-b-2 border-primary-dark w-fit mx-auto pb-1">Nuestra Trayectoria</h2>
          </div>

          <div className="relative">
            {/* Línea de fondo */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2 rounded-full" />
            {/* Línea de avance animada */}
            <motion.div 
              style={{ scaleY }}
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-primary -translate-x-1/2 rounded-full origin-top z-10 shadow-[0_0_10px_rgba(0,174,239,0.5)]"
            />
            
            <div className="flex flex-col">
              {history.map((item, index) => (
                <div key={index} className={`relative flex items-center justify-between md:justify-normal ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} ${index !== 0 ? '-mt-6 md:-mt-8' : ''}`}>
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="absolute left-4 md:left-1/2 w-5 h-5 bg-primary-dark rounded-full -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(0,136,204,0.8)] border-2 border-white" 
                  />
                  
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`ml-12 md:ml-0 md:w-[42%] group relative`}
                  >
                    <div className="absolute inset-0 bg-primary-dark/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-primary-dark font-black text-2xl">{item.year}</span>
                        <div className="h-0.5 bg-primary-dark/20 flex-1" />
                        <Star 
                          size={18} 
                          className="text-primary-dark transition-all duration-300 group-hover:fill-primary-dark" 
                        />
                      </div>
                      <h3 className="text-lg font-bold text-secondary mb-2 uppercase tracking-tight">{item.title}</h3>
                      <p className="text-sm text-industrial-grey leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="section-padding bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>
        <div className="glint-blue w-96 h-96 -top-20 -left-20 opacity-20" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <motion.div 
              {...fadeInUp}
              className="group bg-slate-800/40 backdrop-blur-sm p-8 rounded-[2.5rem] border border-primary/30 relative overflow-hidden hover:bg-slate-800/60 transition-all hover:border-primary duration-500"
            >
              <div className="relative z-10">
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/20"
                >
                  <Target size={28} />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Nuestra Misión</h3>
                <p className="text-slate-300 leading-relaxed font-medium text-sm">
                "Brindar soluciones integrales de ingeniería y construcción, transformando los requerimientos de nuestros clientes en proyectos de alta eficiencia a través de conocimientos técnicos de vanguardia y una gestión de excelencia enfocada en resultados."                </p>
              </div>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="group bg-slate-800/40 backdrop-blur-sm p-8 rounded-[2.5rem] border border-primary-dark/40 relative overflow-hidden hover:bg-slate-800/60 transition-all hover:border-primary-dark shadow-2xl duration-500"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-14 h-14 bg-primary-dark rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary-dark/20"
                  >
                    <Trophy size={28} />
                  </motion.div>
                  <div className="flex items-center gap-2 text-[10px] font-black text-primary bg-white/5 px-4 py-2 rounded-full border border-primary/20 uppercase tracking-widest whitespace-nowrap">
                    <Globe size={14} />
                    <span>Alcance 100% Nacional</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Nuestra Visión</h3>
                <p className="text-slate-200 leading-relaxed font-medium text-sm mb-2">
                "Consolidarnos como el referente estratégico en servicios industriales a nivel nacional, siendo reconocidos por nuestra capacidad técnica, innovación constante y el cumplimiento riguroso de los más altos estándares de calidad y seguridad."                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principios */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="glint-blue w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary mb-4 uppercase tracking-tighter">Nuestros Principios</h2>
            <div className="w-24 h-1.5 bg-primary-dark mx-auto rounded-full" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white p-10 rounded-3xl border border-slate-200 transition-all duration-300 shadow-sm hover:shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 text-center flex flex-col items-center">
                  <div className="text-primary-dark mb-6 group-hover:scale-110 transition-transform duration-300">{val.icon}</div>
                  <h4 className="font-bold text-secondary mb-3 text-lg">{val.title}</h4>
                  <p className="text-sm text-industrial-grey leading-relaxed font-medium">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
