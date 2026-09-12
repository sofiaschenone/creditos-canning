//import React from 'react';
import { motion } from 'framer-motion';

export default function Logo3D() {
  return (
    <div className="w-full flex justify-center items-center py-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotateZ: 1 }}
        className="relative group cursor-pointer"
      >
        {/* Halo de luz dorada de fondo estilo neón de alta gama */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#4C4424] via-amber-500 to-[#4C4424] rounded-full blur-xl opacity-40 group-hover:opacity-80 transition duration-700"></div>

        {/* Tarjeta contenedora del logo */}
        <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full bg-[#121013] border-2 border-[#4C4424] flex items-center justify-center p-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)] overflow-hidden">
          
          {/* Imagen real del logo de Créditos Canning */}
          <img 
            src="src/assets/creditos-canning.jpg" 
            alt="Créditos Canning 3D Effect" 
            className="w-full h-full object-cover rounded-full shadow-inner transform group-hover:scale-110 transition-transform duration-500"
          />

          {/* Reflejo de brillo superior simulando volumen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
}