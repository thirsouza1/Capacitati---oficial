import { MapPin, Phone, Mail, Clock, Shield, Award, Instagram } from "lucide-react";

export default function FooterConversao() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative bg-primary-navy text-white pt-20 pb-8 px-6 border-t border-white/5">
      
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-intellect-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-success-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Top Split segment: Left Contact, Right Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Informational Column (5 cols) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-slate-800 border border-success-gold/30 rounded-lg">
                  <Award className="w-6 h-6 text-success-gold" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xl tracking-tight text-white leading-none">
                    Capaci-Tati
                  </span>
                  <span className="text-[9px] font-mono tracking-widest text-success-gold uppercase mt-0.5">
                    Marca Registrada INPI
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
                Líder regional de reforço escolar, acompanhamento pedagógico personalizado e mentoria para concursos. Construímos estradas sólidas rumo à aprovação e ao topo acadêmico.
              </p>
            </div>

            {/* Direct Contact Icons List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-success-gold mt-0.5 shrink-0" />
                <div className="space-y-0.5 text-sm">
                  <p className="font-bold text-white">Nosso Endereço:</p>
                  <p>R. Dr. João Pedro, 165 - Vila Santa Maria</p>
                  <p>São Sebastião do Paraíso - MG, 37950-000</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-5 h-5 text-success-gold shrink-0" />
                <div className="text-sm">
                  <p className="font-bold text-white inline mr-1">WhatsApp:</p>
                  <a href="https://wa.me/5535988330353" target="_blank" rel="noopener noreferrer" className="hover:text-success-gold transition-colors">
                    +55 (35) 98833-0353
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Clock className="w-5 h-5 text-success-gold shrink-0" />
                <div className="text-sm">
                  <p className="font-bold text-white inline mr-1">Atendimento:</p>
                  <span>Segunda a Sexta, das 09:00 às 20:00</span>
                </div>
              </div>
            </div>

            {/* Seals and legal */}
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 max-w-sm backdrop-blur-sm">
              <Shield className="w-8 h-8 text-success-gold shrink-0" />
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-white">Marca Registrada INPI</p>
                <p className="text-[10px] text-slate-400">Todos os direitos intelectuais e metodológicos resguardados por registro de propriedade.</p>
              </div>
            </div>
          </div>

          {/* Map Embedding Frame (7 cols) */}
          <div className="lg:col-span-7 relative w-full h-[320px] lg:h-auto rounded-2xl overflow-hidden bg-slate-800 shadow-2xl border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.5905298816823!2d-46.993510524744955!3d-20.968962680665033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b6da18f0a0d4c5%3A0xc6cbfa8a46b9a89c!2sR.%20Dr.%20Jo%C3%A3o%20Pedro%2C%20165%20-%20Vila%20Santa%20Maria%2C%20S%C3%A3o%20Sebasti%C3%A3o%20do%20Para%C3%ADso%20-%20MG%2C%2037950-000!5e0!3m2!1spt-BR!2sbr!4v17169829302!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Capaci-Tati School Location on Maps"
              className="absolute inset-0 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </div>

        </div>

        {/* Bottom copyright and legal meta */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-xs text-slate-400">
            © {currentYear} Capaci-Tati Educação. Todos os direitos reservados. CNPJ 031.008.616.001-32.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex gap-4">
              <a href="https://wa.me/5535988330353" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-success-gold transition-colors">
                Políticas de Privacidade
              </a>
              <a href="https://wa.me/5535988330353" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-success-gold transition-colors">
                Fale Conosco
              </a>
            </div>
            <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2 text-xs text-slate-450">
              <span className="opacity-90">Design by</span>
              <div className="flex items-center gap-1.5 bg-slate-900 border border-white/5 py-1 px-2 rounded-lg shadow-sm">
                <img 
                  src="https://lh3.googleusercontent.com/d/1JClbtDWezILrtB4PbNOZp2RKn7rSsLiQ" 
                  alt="PixeLynx" 
                  referrerPolicy="no-referrer"
                  className="w-4 h-4 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="font-semibold text-slate-300">PixeLynx</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
