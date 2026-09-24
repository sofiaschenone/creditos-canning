// App.jsx, línea 1
import {
  ShieldCheck,
  Clock,
  CheckCircle2,
  Landmark,
  Users,
  Briefcase,
  MessageCircle,
} from "lucide-react";
import Logo3D from "./components/Logo3D";
import WhatsAppButton from "./components/WhatsAppButton";
import LoanCard from "./components/LoanCard";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0D0B0E] text-slate-200 font-sans selection:bg-[#4C4424] selection:text-white">
      {/* HEADER */}
      <header className="fixed w-full bg-[#0D0B0E]/90 backdrop-blur-md z-50 border-b border-[#151415]">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/creditos-canning.jpg"
              alt="Créditos Canning"
              className="w-12 h-12 rounded-full object-cover border-2 border-[#4C4424] shadow-[0_0_15px_rgba(76,68,36,0.3)]"
            />
            <div>
              <h1 className="text-xl font-bold tracking-widest text-slate-100 uppercase">
                Créditos <span className="text-[#4C4A4D]">Canning</span>
              </h1>
            </div>
          </div>

          <div className="hidden md:block">
            <WhatsAppButton
              text="Consultar ahora"
              className="px-5 py-2 text-sm"
              iconSize={20}
            />
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-28 pb-20 px-4 relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4C4424]/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <div className="w-full max-w-md mx-auto mb-2">
          <Logo3D />
        </div>

        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#4C4424] bg-[#121013] text-amber-400 text-sm font-semibold tracking-wide">
          Acreditamos Sábados, Domingos y Feriados
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 max-w-4xl leading-tight mb-6 drop-shadow-sm">
          Obtené el préstamo que necesitás... <br /> ¡HOY MISMO!
        </h2>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10">
          Préstamos personales rápidos, simples y confiables. Atención
          personalizada y sin compromiso con más de 7 millones de personas que
          ya confían.
        </p>

        <WhatsAppButton
          text="Solicitar mi crédito por WhatsApp"
          className="px-8 py-4 text-lg border border-green-400/30"
          iconSize={24}
        />

        <div className="flex flex-wrap justify-center gap-6 mt-16 max-w-3xl">
          <div className="flex items-center gap-2 text-slate-300 bg-[#121013] px-4 py-2 rounded-lg border border-[#151415]">
            <CheckCircle2 className="text-amber-400" size={20} /> Trámites
            Simples
          </div>
          <div className="flex items-center gap-2 text-slate-300 bg-[#121013] px-4 py-2 rounded-lg border border-[#151415]">
            <Clock className="text-amber-400" size={20} /> Atención Rápida
          </div>
          <div className="flex items-center gap-2 text-slate-300 bg-[#121013] px-4 py-2 rounded-lg border border-[#151415]">
            <ShieldCheck className="text-amber-400" size={20} /> Seguro y
            Confiable
          </div>
        </div>
      </section>

      {/* TARGET AUDIENCE SECTION */}
      <section className="py-20 px-4 bg-[#121013]/60 border-y border-[#151415] relative">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-100">
            Líneas de crédito exclusivas para:
          </h3>
          <p className="text-center text-slate-400 text-sm mb-12">
            Pasá el cursor sobre cada tarjeta para conocer cuotas y requisitos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <LoanCard
              icon={Users}
              title="Jubilados y Pensionados"
              description="De todo el país. Beneficiarios de ANSES e IPS."
              details="Descuento directo por recibo de haberes con tasas preferenciales."
              requirements="Hasta 72 cuotas fijas en pesos. Sin garante."
            />

            <LoanCard
              icon={ShieldCheck}
              title="Fuerzas de Seguridad"
              description="Policía Bonaerense, Policía de la Ciudad, Retirados y Pensionados."
              details="Línea especial con requisitos simplificados y aprobación exprés."
              requirements="Plazos de 12 a 60 cuotas. Débito automático o caja de ahorros."
            />

            <LoanCard
              icon={Landmark}
              title="Fuerzas Armadas y Federales"
              description="PFA, SPF, GN, PSA, Prefectura y Ejército."
              details="Financiación adaptada al escalafón con atención personalizada."
              requirements="Cuotas descontadas por haberes. Montos ágiles según categoría."
            />

            <div className="md:col-span-2 lg:col-span-3 lg:w-1/3 mx-auto w-full">
              <LoanCard
                icon={Briefcase}
                title="Docentes"
                description="De la Provincia de Buenos Aires y CABA."
                details="Diseñado específicamente para personal educativo titular y suplente."
                requirements="Plazos flexibles hasta 48 cuotas con la tasa más competitiva."
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 text-center bg-[#0D0B0E] border-t border-[#151415]">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            {/* Instagram SVG */}
            <a
              href="https://instagram.com/creditoscanning"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#121013] rounded-full border border-[#151415] text-amber-400 hover:border-[#4C4424] hover:scale-110 transition-all flex items-center justify-center"
              aria-label="Instagram"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* Facebook SVG */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#121013] rounded-full border border-[#151415] text-amber-400 hover:border-[#4C4424] hover:scale-110 transition-all flex items-center justify-center"
              aria-label="Facebook"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>

            {/* WhatsApp */}
            {/* WhatsApp */}
            <a
              href="https://wa.me/5491158759573"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#121013] rounded-full border border-[#151415] text-amber-400 hover:border-[#4C4424] hover:scale-110 transition-all flex items-center justify-center"
              aria-label="WhatsApp"
            >
              <MessageCircle size={22} />
            </a>
          </div>
          <div>
            <p className="text-slate-400 mb-2">
              © 2026 Créditos Canning. Todos los derechos reservados.
            </p>
            <p className="text-[#4C4A4D] text-sm">
              Compromiso y respeto. Cerca de vos siempre.
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <div className="fixed bottom-6 right-6 z-50">
        <WhatsAppButton
          text=""
          className="p-4 rounded-full shadow-[0_0_25px_rgba(34,197,94,0.6)]"
          iconSize={28}
        />
      </div>
    </div>
  );
};

export default LandingPage;
