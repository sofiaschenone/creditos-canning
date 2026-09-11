import { ShieldCheck, Clock, CheckCircle2, Landmark, Users, Briefcase } from 'lucide-react';

const LandingPage = () => {
  const whatsappNumber = "5491158759573";
  const whatsappMessage = "Hola, vi la web y me gustaría consultar por un crédito.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // SVG de WhatsApp blindado con color blanco forzado
  const WhatsappSvg = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#0D0B0E] text-slate-200 font-sans selection:bg-[#4C4424] selection:text-white">
      
      {/* HEADER */}
      <header className="fixed w-full bg-[#0D0B0E]/90 backdrop-blur-md z-50 border-b border-[#151415]">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="src/assets/creditos-canning.jpg" 
              alt="Créditos Canning" 
              className="w-12 h-12 rounded-full object-cover border-2 border-[#4C4424] shadow-[0_0_15px_rgba(76,68,36,0.3)]"
            />
            <div>
              <h1 className="text-xl font-bold tracking-widest text-slate-100 uppercase">
                Créditos <span className="text-[#4C4A4D]">Canning</span>
              </h1>
            </div>
          </div>
          <a 
            href={whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-green-900/50"
          >
            <WhatsappSvg size={20} />
            Consultar ahora
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4C4424]/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#4C4424] bg-[#121013] text-amber-400 text-sm font-semibold tracking-wide">
          Acreditamos Sábados, Domingos y Feriados
        </div>
        
        <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 max-w-4xl leading-tight mb-6 drop-shadow-sm">
          Obtené el préstamo que necesitás... <br /> ¡HOY MISMO!
        </h2>
        
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10">
          Préstamos personales rápidos, simples y confiables. Atención personalizada y sin compromiso con más de 7 millones de personas que ya confían.
        </p>
        
        <a 
          href={whatsappUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#4C4424] hover:bg-[#5c522b] text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(76,68,36,0.4)] border border-amber-500/30"
        >
          <WhatsappSvg size={24} />
          Solicitar mi crédito por WhatsApp
        </a>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-16 max-w-3xl">
          <div className="flex items-center gap-2 text-slate-300 bg-[#121013] px-4 py-2 rounded-lg border border-[#151415]">
            <CheckCircle2 className="text-amber-400" size={20} /> Trámites Simples
          </div>
          <div className="flex items-center gap-2 text-slate-300 bg-[#121013] px-4 py-2 rounded-lg border border-[#151415]">
            <Clock className="text-amber-400" size={20} /> Atención Rápida
          </div>
          <div className="flex items-center gap-2 text-slate-300 bg-[#121013] px-4 py-2 rounded-lg border border-[#151415]">
            <ShieldCheck className="text-amber-400" size={20} /> Seguro y Confiable
          </div>
        </div>
      </section>

      {/* TARGET AUDIENCE SECTION */}
      <section className="py-20 px-4 bg-[#121013]/60 border-y border-[#151415] relative">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-100">
            Líneas de crédito exclusivas para:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#0D0B0E] p-6 rounded-2xl border border-[#151415] hover:border-[#4C4424] transition-colors">
              <Users className="text-amber-400 mb-4" size={32} />
              <h4 className="text-xl font-bold text-slate-100 mb-2">Jubilados y Pensionados</h4>
              <p className="text-slate-400">De todo el país. Beneficiarios de ANSES e IPS.</p>
            </div>
            
            <div className="bg-[#0D0B0E] p-6 rounded-2xl border border-[#151415] hover:border-[#4C4424] transition-colors">
              <ShieldCheck className="text-amber-400 mb-4" size={32} />
              <h4 className="text-xl font-bold text-slate-100 mb-2">Fuerzas de Seguridad</h4>
              <p className="text-slate-400">Policía Bonaerense, Policía de la Ciudad, Retirados y Pensionados.</p>
            </div>

            <div className="bg-[#0D0B0E] p-6 rounded-2xl border border-[#151415] hover:border-[#4C4424] transition-colors">
              <Landmark className="text-amber-400 mb-4" size={32} />
              <h4 className="text-xl font-bold text-slate-100 mb-2">Fuerzas Armadas y Federales</h4>
              <p className="text-slate-400">PFA, SPF, GN, PSA, Prefectura y Ejército.</p>
            </div>

            <div className="bg-[#0D0B0E] p-6 rounded-2xl border border-[#151415] hover:border-[#4C4424] transition-colors md:col-span-2 lg:col-span-3 lg:w-1/3 mx-auto">
              <Briefcase className="text-amber-400 mb-4" size={32} />
              <h4 className="text-xl font-bold text-slate-100 mb-2">Docentes</h4>
              <p className="text-slate-400">De la Provincia de Buenos Aires y CABA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center bg-[#0D0B0E] border-t border-[#151415]">
        <p className="text-slate-400 mb-2">© 2026 Créditos Canning. Todos los derechos reservados.</p>
        <p className="text-[#4C4A4D] text-sm">Compromiso y respeto. Cerca de vos siempre.</p>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href={whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-[0_0_25px_rgba(34,197,94,0.5)] hover:scale-110 transition-all z-50 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsappSvg size={32} />
      </a>

    </div>
  );
};

export default LandingPage;