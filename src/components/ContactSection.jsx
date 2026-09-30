import React, { useState } from 'react';
import { MessageCircle, MapPin, Mail, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prearmar mensaje para WhatsApp con los datos del formulario
    const text = `Hola! Mi nombre es ${formData.name}, mi teléfono es ${formData.phone}. Consulta: ${formData.message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5491158759573?text=${encoded}`, '_blank');
    
    // Limpiar el formulario luego de enviar
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contacto" className="py-16 px-4 bg-[#0D0B0E] border-t border-[#151415] text-slate-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold px-3 py-1 rounded-full bg-[#4C4424]/20 border border-[#4C4424]/40">
            Encontranos y contactanos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-slate-100">
            Estamos para ayudarte
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
            Acercate a nuestras oficinas en Ezeiza o dejanos tu consulta online. Te respondemos al instante.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Columna 1: Información y Mapa de Google Maps */}
          <div className="bg-[#121013] border border-[#1f1b20] rounded-2xl p-6 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
                <MapPin className="text-amber-400" size={20} /> Nuestra Oficina
              </h3>
              <p className="text-slate-300 text-sm mb-2">
                José María Ezeiza 109, 1er piso C
              </p>
              <p className="text-slate-500 text-xs mb-6">
                Ezeiza, Provincia de Buenos Aires, Argentina.
              </p>

              <div className="flex items-center gap-2 text-slate-300 text-sm mb-4">
                <Mail className="text-amber-400" size={18} />
                <span>martincanning75@gmail.com</span>
              </div>
            </div>

            {/* Contenedor del Mapa incrustado de Google Maps */}
            <div className="w-full h-56 rounded-xl overflow-hidden border border-[#262229] mt-4 relative">
              <iframe
                title="Ubicacion Creditos Canning"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.498877071661!2d-58.52445!3d-34.8512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd2f8b5b5b5b5%3A0x0!2zSm9zw6kgTWFyaWEgRXpleXphIDEwOSwgRXpleXph!5e0!3m2!1ses!2sar!4v1710000000000!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="mt-4 text-center">
              <a 
                href="https://maps.google.com/?q=Jose+Maria+Ezeiza+109+Ezeiza" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-amber-400 hover:underline flex items-center justify-center gap-1 font-medium"
              >
                Abrir ubicación en Google Maps ↗
              </a>
            </div>
          </div>

          {/* Columna 2: Formulario de Contacto Directo a WhatsApp */}
          <div className="bg-[#121013] border border-[#1f1b20] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-lg font-semibold text-slate-200 mb-2">
                Envianos un mensaje rápido
              </h3>
              <p className="text-slate-400 text-xs mb-6">
                Completá tus datos y el mensaje se conectará de inmediato con nuestro WhatsApp corporativo.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Tu Nombre</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Ej: Carlos Gómez"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[#0D0B0E] border border-[#262229] rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Tu Teléfono / Celular</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="Ej: 11 2345 6789"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-[#0D0B0E] border border-[#262229] rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">¿Qué tipo de crédito necesitás?</label>
                  <textarea 
                    rows="3"
                    required
                    placeholder="Contanos brevemente (jubilado, docente, fuerzas, monto aproximado)..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-[#0D0B0E] border border-[#262229] rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-900/20 text-sm cursor-pointer"
                >
                  <Send size={16} /> Enviar Consulta por WhatsApp
                </button>
              </form>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1f1b20] text-center">
              <p className="text-[11px] text-slate-500">
                🔒 Tus datos están protegidos y son utilizados exclusivamente para gestionar tu préstamo.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}