"use client";

import { motion } from "framer-motion";
import { HardHat, Wind, Settings, Monitor, Truck, Zap, Droplets, Shield } from "lucide-react";

export default function ServiciosPage() {
  const mainServices = [
    {
      title: "Obra Civil",
      desc: "Construcción de naves industriales, cimentaciones profundas, pavimentos de alta resistencia y estructuras metálicas. Proyectos llave en mano con precisión milimétrica.",
      icon: <HardHat size={48} />,
      details: ["Naves Industriales", "Cimentaciones Especiales", "Firmes y Pavimentos", "Estructuras de Acero"]
    },
    {
      title: "Climatización (HVAC)",
      desc: "Diseño e instalación de sistemas de aire acondicionado industrial y comercial. Mantenimiento preventivo de alta eficiencia para optimizar el consumo energético.",
      icon: <Wind size={48} />,
      details: ["Chillers y VRF", "Ventilación Industrial", "Extracción de Humos", "Cuartos Limpios"]
    },
    {
      title: "Instalaciones Especiales",
      desc: "Sistemas integrales que garantizan la continuidad operativa de su industria bajo normas internacionales de seguridad (NFPA, NOM).",
      icon: <Settings size={48} />,
      details: ["Sistemas Contra Incendio", "Redes Hidráulicas", "Sistemas Neumáticos", "Tubería de Proceso"]
    }
  ];

  const additionalServices = [
    { icon: <Monitor />, title: "CCTV & Seguridad", desc: "Monitoreo avanzado y control de acceso industrial." },
    { icon: <Truck />, title: "Renta de Maquinaria", desc: "Equipo ligero y pesado disponible para proyectos a gran escala." },
    { icon: <Zap />, title: "Instalaciones Eléctricas", desc: "Subestaciones, tableros y redes de media y baja tensión." },
    { icon: <Droplets />, title: "Sanitarias & Pluviales", desc: "Sistemas de drenaje y plantas de tratamiento." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50/50">
      {/* Header Servicios */}
      <section className="relative bg-secondary text-white py-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
            alt="Ingeniería y Construcción" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/90 to-secondary" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold mb-6 leading-tight"
          >
            Nuestras <span className="text-primary-dark">Capacidades Técnicas</span>
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Ofrecemos un abanico integral de soluciones de ingeniería y construcción, diseñadas para superar los estándares más exigentes del sector industrial.
          </p>
        </div>
      </section>

      {/* Main Services Detail */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-32">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:items-center gap-16 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              <div className="flex-1">
                <div className="text-primary-dark mb-8 p-5 bg-primary-dark/10 rounded-[2rem] w-fit shadow-inner">
                  {service.icon}
                </div>
                <h2 className="text-4xl font-bold text-secondary mb-6 leading-tight">{service.title}</h2>
                <p className="text-lg text-industrial-grey mb-10 leading-relaxed font-medium">
                  {service.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-4 text-secondary font-bold bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:border-primary-dark/30 transition-colors shadow-sm">
                      <Shield size={20} className="text-primary-dark" />
                      <span className="text-sm uppercase tracking-tight">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="absolute -inset-6 bg-primary-dark/10 rounded-[3rem] blur-3xl opacity-50" />
                <img 
                  src={`https://images.unsplash.com/photo-${index === 0 ? "1541888946425-d81bb19240f5" : index === 1 ? "1504917595217-d4dc5ebe6122" : "1581094288338-2314dddb7ecb"}?q=80&w=1000&auto=format&fit=crop`}
                  alt={service.title}
                  className="relative rounded-[2.5rem] shadow-2xl object-cover h-[450px] w-full border-b-8 border-primary-dark transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Otras Especialidades */}
      <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="glint-blue w-96 h-96 -top-20 -right-20 opacity-20" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 uppercase tracking-tighter">Soluciones Integrales</h2>
            <div className="w-20 h-1 bg-primary-dark mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10 hover:border-primary-dark/50 transition-all group shadow-2xl"
              >
                <div className="text-primary-dark mb-8 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-r from-primary-dark to-[#006699] text-white text-center shadow-2xl">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">¿Necesita un presupuesto técnico detallado?</h2>
          <p className="text-lg text-white/90 mb-12 font-medium">Nuestro equipo de ingeniería está listo para analizar sus planos y requerimientos con el máximo rigor profesional.</p>
          <a href="/#contacto" className="bg-white text-primary-dark px-12 py-5 rounded-full font-black text-lg hover:bg-slate-100 transition-all shadow-2xl hover:shadow-white/20 uppercase tracking-widest text-sm">
            Iniciar Cotización
          </a>
        </div>
      </section>
    </div>
  );
}
