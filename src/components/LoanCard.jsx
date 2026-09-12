import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function LoanCard({ icon: Icon, title, description, details, requirements }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="h-80 w-full cursor-pointer"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full duration-700"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* FRENTE DE LA TARJETA */}
        <div 
          className="absolute inset-0 w-full h-full bg-[#0D0B0E] p-6 rounded-2xl border border-[#151415] hover:border-[#4C4424] flex flex-col justify-between shadow-xl"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div>
            <div className="text-amber-400 mb-4 inline-block p-3 bg-[#121013] rounded-xl border border-[#151415]">
              <Icon size={32} />
            </div>
            <h4 className="text-xl font-bold text-slate-100 mb-2">{title}</h4>
            <p className="text-slate-400 text-sm">{description}</p>
          </div>
          <div className="text-xs text-amber-500/80 font-medium flex items-center gap-1">
            <span>Girá para ver detalles de cuotas ↻</span>
          </div>
        </div>

        {/* DORSO DE LA TARJETA (CORREGIDO DE ESPEJO Y CON CONTENIDO DETALLADO) */}
        <div 
          className="absolute inset-0 w-full h-full bg-[#121013] p-6 rounded-2xl border border-[#4C4424] flex flex-col justify-between shadow-2xl"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div>
            <h4 className="text-lg font-bold text-amber-400 mb-3 border-b border-[#4C4424]/40 pb-2">{title}</h4>
            <div className="space-y-2 text-left">
              <p className="text-slate-300 text-xs leading-relaxed">
                <strong className="text-amber-200">Mecanismo:</strong> {details}
              </p>
              <p className="text-slate-300 text-xs leading-relaxed">
                <strong className="text-amber-200">Cuotas y Plazos:</strong> {requirements}
              </p>
            </div>
          </div>
          <div className="text-[11px] text-amber-400/90 bg-[#0D0B0E] px-3 py-2 rounded-lg border border-[#4C4424]/30 text-center font-semibold">
            ✨ Acreditación inmediata y segura
          </div>
        </div>
      </motion.div>
    </div>
  );
}