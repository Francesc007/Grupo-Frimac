"use client";

import { useState } from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showPrivacy, setShowPrivacy] = useState(false);
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Moscatel+305,+Granjas+Miravalle,+20905+Jesús+María,+Ags.";

  const privacyText = (
    <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
      <p className="font-bold text-secondary text-lg border-b pb-2">AVISO DE PRIVACIDAD</p>
      <p>En cumplimiento a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (la “Ley”), ponemos a su disposición el siguiente Aviso de Privacidad:</p>
      <p>En GRUPO FRIMAC tenemos la convicción que el activo más importante que tenemos son nuestros clientes, y es por ello que contamos con políticas y procedimientos de privacidad para proteger sus datos personales en virtud de que la seguridad de su información es nuestra prioridad.</p>
      
      <p className="font-bold text-secondary uppercase tracking-wider text-xs">¿Quiénes somos?</p>
      <p>GRUPO FRIMAC, Calle Moscatel 305-B, Fracc. Granjas Miravalle, C.P. 20905 Jesús María, Aguascalientes, Mexico, y correo monica.lara@grupofrimac.com, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:</p>
      
      <p className="font-bold text-secondary uppercase tracking-wider text-xs">Datos personales que pueden recabarse.</p>
      <p>GRUPO FRIMAC recabará datos personales necesarios para atender o formalizar cualquier tipo de producto o servicio que usted nos solicite o requiera. De manera enunciativa, no limitativa, GRUPO FRIMAC podrá recabar su: nombre, domicilio, número telefónico, correo electrónico.</p>
      <p>Nos comprometemos a que estos datos serán tratados bajo las más estrictas medidas de seguridad que garanticen su confidencialidad.</p>
      
      <p className="font-bold text-secondary uppercase tracking-wider text-xs">Finalidad del tratamiento de datos personales.</p>
      <p>Forma de poder contactarnos con usted, nuestro posible cliente.</p>
      
      <p className="font-bold text-secondary uppercase tracking-wider text-xs">Compartimos sus datos personales con:</p>
      <p>GRUPO FRIMAC podrá informar sus datos personales con personas autorizadas a ponerse en contacto con usted solamente con asuntos que competan a GRUPO FRIMAC y sus servicios.</p>
      <p>En todo caso, GRUPO FRIMAC comunicará el presente Aviso de Privacidad a las personas a las que les proporcione sus datos personales. Para las finalidades señaladas en el presente Aviso de Privacidad, podemos recabar sus datos personales de distintas formas: (i) cuando usted nos los proporcione directamente; (ii) cuando visite nuestro sitio de Internet o utilice nuestros servicios en línea; y (iii) cuando obtenemos información a través de otras fuentes permitidas por la ley.</p>
      
      <p className="font-bold text-secondary uppercase tracking-wider text-xs">Derechos del Titular</p>
      <p>Usted tiene derecho de: (i) a solicitar que no nos pongamos en contacto con usted en cualquier momento mandando un correo a monica.lara@grupofrimac.com quien administra la base de datos con dicha información.</p>
      
      <p className="font-bold text-secondary uppercase tracking-wider text-xs">Uso de cookies y web beacons:</p>
      <p>Le informamos que no utilizamos cookies ni web beacons para obtener información personal de usted, ni recabamos información de otro medio que no es por el formulario de contacto.</p>
      
      <p className="font-bold text-secondary uppercase tracking-wider text-xs">Modificaciones</p>
      <p>GRUPO FRIMAC se reserva el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente Aviso de Privacidad. Estas modificaciones estarán disponibles en nuestra página de Internet http://www.grupofrimac.com/</p>
    </div>
  );

  return (
    <footer id="contacto" className="bg-secondary text-white pt-12 px-6 md:px-12 relative overflow-hidden">
      {/* Destello Azul Oscuro en el Footer */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-dark/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 border-b border-white/10 pb-10 mb-6">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="mb-6 block">
            <Image 
              src="/logo3.png" 
              alt="Grupo Frimac Logo" 
              width={220} 
              height={80} 
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>
          <p className="text-slate-400 max-w-sm mb-6 leading-relaxed font-medium text-sm">
            Líderes en soluciones industriales y de construcción en el centro del país. Calidad, seguridad y compromiso en cada obra que realizamos.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary-dark transition-all duration-300">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary-dark transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary-dark transition-all duration-300">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <h4 className="text-lg font-bold mb-6 text-primary-dark uppercase tracking-wider">Contacto</h4>
          <ul className="space-y-3 text-slate-300 font-medium w-fit">
            <li className="flex gap-3 items-start">
              <MapPin className="text-primary-dark shrink-0" size={18} />
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-xs leading-relaxed text-left">
                Moscatel 305, Granjas Miravalle, 20905 Jesús María, Ags.
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="text-primary-dark shrink-0" size={18} />
              <span className="text-xs">+52 449 156 0150 / 449 111 5640</span>
            </li>
            <li className="flex gap-3 items-start">
              <Mail className="text-primary-dark shrink-0" size={18} />
              <div className="flex flex-col gap-1 text-xs text-left">
                <a href="mailto:miguel.frias1@grupofrimac.com" className="hover:text-primary transition-colors">miguel.frias1@grupofrimac.com</a>
                <a href="mailto:monica.lara@grupofrimac.com" className="hover:text-primary transition-colors">monica.lara@grupofrimac.com</a>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start">
          <h4 className="text-lg font-bold mb-6 text-primary-dark uppercase tracking-wider">Legal</h4>
          <button 
            onClick={() => setShowPrivacy(true)}
            className="text-slate-300 hover:text-primary transition-colors text-sm font-medium flex items-center gap-2 group"
          >
            <div className="w-1.5 h-1.5 bg-primary-dark rounded-full group-hover:scale-150 transition-transform" />
            Aviso de Privacidad
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-8 gap-4">
        <p className="text-slate-400 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase">
          © {currentYear} GRUPO FRIMAC. TODOS LOS DERECHOS RESERVADOS.
        </p>
        <p className="text-slate-500 text-[9px] md:text-[10px] font-medium tracking-wider">
          Powered by <a href="https://sigmaaiagency.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark font-bold transition-colors">Sigma AI Agency</a> | Automatización Inteligente
        </p>
      </div>

      {/* Modal de Privacidad */}
      <AnimatePresence>
        {showPrivacy && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPrivacy(false)}
              className="absolute inset-0 bg-secondary/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-2xl max-h-[80vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="p-8 border-b flex justify-between items-center bg-slate-50">
                <div className="flex items-center gap-3">
                  <Image src="/logo3.png" alt="Logo" width={120} height={40} className="h-8 w-auto" />
                </div>
                <button 
                  onClick={() => setShowPrivacy(false)}
                  aria-label="Cerrar"
                  className="p-2 hover:bg-slate-200 rounded-full transition-colors text-secondary"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-8 overflow-y-auto custom-scrollbar">
                {privacyText}
              </div>
              <div className="p-6 bg-slate-50 border-t text-center">
                <button 
                  onClick={() => setShowPrivacy(false)}
                  className="bg-secondary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-dark transition-all"
                >
                  Entendido
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};
