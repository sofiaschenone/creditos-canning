import React from 'react';
import { motion } from 'framer-motion';

export default function WhatsAppButton({ text, className = "", iconSize = 24 }) {
  const whatsappNumber = "5491158759573";
  const whatsappMessage = "Hola, vi la web y me gustaría consultar por un crédito.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.7)] ${className}`}
    >
      {/* Halo de luz brillante de fondo */}
      <div className="absolute -inset-0.5 bg-green-400 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300"></div>

      {/* Contenido del botón */}
      <span className="relative z-10 flex items-center gap-2">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp" 
          style={{ width: iconSize, height: iconSize }} 
          className="filter brightness-0 invert"
        />
        {text}
      </span>
    </motion.a>
  );
}