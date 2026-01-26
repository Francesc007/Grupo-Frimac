"use client";

import { motion } from "framer-motion";
import { Trust } from "@/components/sections/Trust";
import { Factory, Building2, Store, Construction, CheckCircle2, Users2, BarChart3, Award } from "lucide-react";

export default function ExperienciaPage() {
  const sectors = [
    { icon: <Factory size={40} />, title: "Automotriz", desc: "Mantenimiento y obra civil en plantas de ensamble y Tier 1." },
    { icon: <Building2 size={40} />, title: "Alimenticio", desc: "Instalaciones especiales bajo estrictos controles sanitarios." },
    { icon: <Store size={40} />, title: "Comercial", desc: "Climatización y acabados para plazas y centros logísticos." },
    { icon: <Construction size={40} />, title: "Residencial", desc: "Proyectos de construcción con acabados de alto prestigio." }
  ];

  const stats = [
    { value: "+150", label: "Proyectos Finalizados", icon: <CheckCircle2 className="text-primary-dark" /> },
    { value: "+50", label: "Clientes Activos", icon: <Users2 className="text-primary-dark" /> },
    { value: "15+", label: "Años de Trayectoria", icon: <BarChart3 className="text-primary-dark" /> },
    { value: "100%", label: "Garantía de Calidad", icon: <Award className="text-primary-dark" /> }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50/30">
      {/* Header Experiencia */}
      <section className="relative bg-secondary text-white py-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop" 
            alt="Infraestructura Industrial" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">Nuestra Huella en la <span className="text-primary-dark">Industria Nacional</span></h1>
            <p className="text-xl text-slate-300 leading-relaxed font-medium">
              Consolidamos nuestro prestigio a través de ejecuciones impecables. Desde Aguascalientes para todo México, transformamos retos de ingeniería en infraestructura de éxito.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 text-center shadow-2xl"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-1 text-white">{stat.value}</div>
                <div className="text-[10px] text-primary-dark font-black uppercase tracking-[0.2em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectores */}
      <section className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold text-secondary mb-4 uppercase tracking-tighter">Sectores de Especialidad</h2>
            <div className="w-24 h-1 bg-primary-dark mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -15 }}
                className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all text-center group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-primary-dark mb-8 group-hover:scale-110 transition-transform duration-300">
                    {sector.icon}
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4 uppercase tracking-tight">{sector.title}</h3>
                  <p className="text-sm text-industrial-grey leading-relaxed font-medium">{sector.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cartera de Clientes con Fondo Obscuro y Elemento de Contraste */}
      <div className="bg-slate-900 border-y border-white/5 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 mb-10">
            <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-tighter">Cartera de Clientes</h2>
            <p className="text-slate-400 font-medium italic">Marcas líderes que avalan nuestra capacidad operativa y rigor técnico.</p>
        </div>

        {/* Elemento blanco detrás del carrusel para resaltar logos */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-xl" />
          <div className="relative z-10 py-4">
            <Trust />
          </div>
        </div>
      </div>

      {/* Galería de Proyectos */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl group border-4 border-slate-50"
              >
                <img 
                  src={`https://images.unsplash.com/photo-${i === 1 ? "1516937941344-00b4e0337589" : i === 2 ? "1486406146926-c627a92ad1ab" : "1503387762-592970a58f90"}?q=80&w=1000&auto=format&fit=crop`}
                  alt="Proyecto Frimac"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent p-10 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-primary-dark font-black text-xs uppercase tracking-[0.3em] mb-3 block">Proyecto Elite</span>
                    <h4 className="text-white font-bold text-2xl uppercase tracking-tighter mb-4">Instalación Planta Industrial {i}</h4>
                    <div className="w-12 h-1 bg-primary-dark rounded-full group-hover:w-full transition-all duration-700" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-secondary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Arquitectura Industrial" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="glint-blue w-[600px] h-[600px] top-0 right-0 opacity-20" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tighter leading-tight">¿Listo para elevar el estándar de su infraestructura?</h2>
          <p className="text-xl text-slate-400 mb-12 font-medium">Permítanos ser su aliado estratégico en su próximo proyecto de gran escala bajo estándares internacionales.</p>
          <a href="/#contacto" className="bg-primary-dark text-white px-14 py-5 rounded-full font-black text-lg hover:bg-secondary transition-all shadow-2xl hover:shadow-primary-dark/40 uppercase tracking-[0.2em] text-sm">
            Agendar Reunión Técnica
          </a>
        </div>
      </section>
    </div>
  );
}
