"use client";

import { motion } from "framer-motion";
import { Target, Eye, Rocket, ShieldCheck, Microscope, Briefcase } from "lucide-react";

export const About = () => {
  const history = [
    { year: "2009", event: "Iniciamos como ARTICO, Arte y Construcción, enfocados en mantenimiento industrial en Aguascalientes." },
    { year: "2010", event: "Expandimos al sector residencial y servicios foráneos, transformándonos en FRIMA." },
    { year: "2011", event: "Consolidamos el nombre actual: GRUPO FRIMAC Construcciones y Servicios Integrales, S.A. de C.V." },
    { year: "Actualidad", event: "Líderes con prestigio industrial, incorporando renta de maquinaria e instalaciones de CCTV." }
  ];

  return (
    <section id="nosotros" className="section-padding bg-slate-50 overflow-hidden relative">
      {/* Destello Azul */}
      <div className="glint-blue w-96 h-96 -top-20 -left-20 opacity-15" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold text-secondary mb-6">Nuestra Historia y Trayectoria</h2>
            <div className="w-20 h-1.5 bg-primary-dark mb-8 rounded-full" />
            <p className="text-lg text-industrial-grey leading-relaxed mb-8">
              <strong className="text-secondary">GRUPO FRIMAC</strong> nació de la visión de ofrecer soluciones integrales de alta calidad. Desde nuestros inicios en 2009, hemos evolucionado constantemente para adaptarnos a las exigencias del mercado nacional e internacional.
            </p>
            
            <div className="space-y-6">
              {history.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="font-bold text-primary-dark shrink-0 w-20">{item.year}</div>
                  <div className="text-industrial-grey font-medium border-l-2 border-primary-dark/20 pl-4">
                    {item.event}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-dark/10 rounded-2xl flex items-center justify-center text-primary-dark mb-6">
                <Rocket size={32} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4 uppercase tracking-wider">Misión</h3>
              <p className="text-industrial-grey text-sm leading-relaxed">
                Dar solución a los requerimientos de nuestros clientes, adecuándonos a sus necesidades y presupuesto mediante conocimientos técnicos y científicos de vanguardia.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-dark/10 rounded-2xl flex items-center justify-center text-primary-dark mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4 uppercase tracking-wider">Visión</h3>
              <p className="text-industrial-grey text-sm leading-relaxed">
                Ser la organización líder de bienes y servicios a nivel regional e internacional, aplicando principios de Calidad, Honestidad, Innovación y Responsabilidad Social.
              </p>
            </div>
          </motion.div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-secondary text-center mb-12 italic">Nuestros Pilares Estratégicos</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Microscope />, title: "Tecnología", desc: "Investigación y aplicación de nuevas tecnologías." },
              { icon: <ShieldCheck />, title: "Seguridad", desc: "Calidad y seguridad total en cada proyecto." },
              { icon: <Briefcase />, title: "Experiencia", desc: "Conocimiento nacional e internacional a su servicio." },
              { icon: <Target />, title: "Cobertura", desc: "Presencia sólida a nivel Nacional e Internacional." }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-2xl border-b-4 border-primary-dark shadow-lg text-center"
              >
                <div className="text-primary-dark flex justify-center mb-4 opacity-80">
                  {pillar.icon}
                </div>
                <h4 className="font-bold text-secondary mb-2">{pillar.title}</h4>
                <p className="text-xs text-industrial-grey">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
