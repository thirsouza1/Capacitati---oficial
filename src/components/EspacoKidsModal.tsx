import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Heart, Trophy, BookOpen, MessageCircle, Sparkles, Smile, Compass, Star } from "lucide-react";
import GoogleDriveImage from "./GoogleDriveImage";

interface EspacoKidsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EspacoKidsModal({ isOpen, onClose }: EspacoKidsModalProps) {
  // WhatsApp redirect link for Espaço Kids
  const whatsappUrl = "https://wa.me/5535988330353?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Espaço%20Kids%20da%20CAPACITATI.";

  const plannedActivities = [
    "Reforço dos conteúdos escolares",
    "Desenvolvimento da leitura e escrita",
    "Raciocínio lógico e matemático",
    "Atenção, concentração e memória",
    "Coordenação motora",
    "Organização dos estudos",
    "Autonomia e confiança no aprendizado"
  ];

  const methodologyItems = [
    {
      title: "Jogos educativos",
      desc: "Dinâmicas estruturadas para transformar conceitos formais em desafios assimiláveis de forma lúdica."
    },
    {
      title: "Desafios interativos",
      desc: "Instiga a curiosidade saudável através de pequenos desafios lógicos adequados a cada nível."
    },
    {
      title: "Atividades recreativas pedagógicas",
      desc: "Integração física e recreativa aplicada diretamente à grade acadêmica da escola."
    },
    {
      title: "Materiais adaptados à faixa etária",
      desc: "Uso de heranças cognitivas, cores e ferramentas lúdicas correspondentes à fase de maturação correspondente."
    },
    {
      title: "Estratégias personalizadas",
      desc: "Planos construídos especificamente a partir das fraquezas e fortalezas identificadas no aluno."
    }
  ];

  const benefits = [
    "Maior interesse pelos estudos",
    "Aprendizagem mais leve e divertida",
    "Melhor compreensão dos conteúdos escolares",
    "Desenvolvimento das habilidades cognitivas",
    "Aumento da autoestima e da confiança",
    "Fortalecimento do desempenho escolar"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-slate-950 overflow-y-auto block custom-scrollbar"
        >
          {/* Main Fullscreen Content Wrapper */}
          <div className="relative min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#0F172A] via-[#090D1A] to-[#020617] text-white">
            
            {/* Ambient Background Lights */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-intellect-blue/10 rounded-full blur-3xl pointer-events-none" />
            
            {/* Top Navigation Bar inside Modal */}
            <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Smile className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="font-display font-black text-sm uppercase tracking-wider text-white">
                    ESPAÇO KIDS <span className="text-emerald-400">CAPACITATI</span>
                  </h1>
                  <p className="text-[10px] text-slate-400 font-mono">Ensino Divertido &amp; Encantador</p>
                </div>
              </div>

              {/* Explicit close button in the top right as requested */}
              <button
                id="close-espaco-kids-modal"
                onClick={onClose}
                className="p-2.5 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-xl transition-all duration-200 cursor-pointer flex items-center gap-1.5 text-xs font-mono"
              >
                <X className="w-4 h-4" />
                <span>FECHAR</span>
              </button>
            </header>

            {/* Main Content Body */}
            <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 md:py-16 space-y-16 relative z-10">
              
              {/* Hero Banner Grid inside modal */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left side: Heading, subtitle & initial blocks */}
                <div className="lg:col-span-7 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold"
                  >
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                    <span>Inovação no Ensino Infantil</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-3"
                  >
                    <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                      Espaço Kids <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400">CAPACITATI</span>
                    </h2>
                    <p className="font-display font-medium text-lg sm:text-xl text-emerald-300/90 leading-relaxed font-sans">
                      Aprender pode ser divertido, acolhedor e eficiente.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl"
                  >
                    <p>
                      O Espaço Kids da CAPACITATI foi desenvolvido para oferecer um ambiente educativo, acolhedor e estimulante, voltado para crianças que necessitam de apoio no processo de aprendizagem escolar.
                    </p>
                    <p>
                      Nosso diferencial está na utilização de jogos pedagógicos, atividades lúdicas e metodologias adaptadas aos conteúdos escolares, tornando o aprendizado mais leve, interessante e significativo para cada criança.
                    </p>
                    <p>
                      Acreditamos que aprender brincando potencializa o desenvolvimento cognitivo, emocional e social, favorecendo a construção do conhecimento de forma natural e prazerosa.
                    </p>
                  </motion.div>
                </div>

                {/* Right side: Collaged gallery of user's two designated kids images */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl aspect-[4/5]"
                  >
                    <GoogleDriveImage
                      driveId="1DTRtCjh1ZJxC0ddQBfSZQ-tvqwFAa8qZ"
                      alt="Espaço Kids Brinquedos Pedagógicos"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-mono bg-black/50 border border-white/10 px-2.5 py-1 rounded-full">
                      Atividades Lúdicas
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl aspect-[4/5] mt-6"
                  >
                    <GoogleDriveImage
                      driveId="1qWgrNpQtgiu-Tz92paD5s6gPuyUYy0AF"
                      alt="Espaço Kids Envolvimento Pedagógico"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-mono bg-black/50 border border-white/10 px-2.5 py-1 rounded-full">
                      Aprendizado Ativo
                    </span>
                  </motion.div>
                </div>

              </div>

              {/* Activities Highlight & Methodologies Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                
                {/* Left block (5 cols): Activities we plan for */}
                <div className="lg:col-span-5 bg-slate-900/60 border border-slate-850 p-6 sm:p-8 rounded-3xl space-y-6">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-wider text-emerald-400 uppercase">Foco e Prática</span>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                      Trabalhamos com atividades planejadas para:
                    </h3>
                  </div>

                  <ul className="space-y-3.5">
                    {plannedActivities.map((act, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.2 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mt-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm sm:text-base text-slate-300 font-medium">
                          {act}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Right block (7 cols): Methodologies we use */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-wider text-indigo-400 uppercase">Abordagem Didática</span>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                      Nossa Metodologia
                    </h3>
                    <p className="text-sm text-slate-400">
                      Utilizamos recursos pedagógicos diversificados que transformam o aprendizado em uma experiência envolvente:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {methodologyItems.map((meth, index) => (
                      <div
                        key={index}
                        className="bg-slate-950/40 border border-slate-900 p-5 rounded-2xl space-y-2 hover:border-emerald-500/20 transition-colors"
                      >
                        <div className="flex items-center gap-2 text-emerald-400">
                          <Compass className="w-4 h-4 text-emerald-400" />
                          <h4 className="font-display font-bold text-sm text-white">
                            {meth.title}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {meth.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Callout Visual Box Highlight Banner */}
              <div className="relative bg-gradient-to-r from-emerald-500/10 via-emerald-600/5 to-indigo-500/10 border border-emerald-500/35 p-6 sm:p-10 rounded-3xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Smile className="w-8 h-8" />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-emerald-100 font-medium leading-relaxed italic text-center md:text-left">
                    "Na CAPACITATI, utilizamos jogos e atividades lúdicas adaptadas aos conteúdos escolares para facilitar o processo de aprendizagem, tornando o estudo mais atrativo, eficiente e significativo para cada criança."
                  </p>
                </div>
              </div>

              {/* Benefits Sections with Grid Card Layout */}
              <div className="space-y-6">
                <div className="text-center space-y-1">
                  <span className="text-[10px] font-mono tracking-wider text-emerald-400 uppercase">Valores Obtidos</span>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                    Benefícios para a criança
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index} 
                      className="bg-slate-900/40 border border-slate-850 p-5 rounded-2xl flex items-center gap-4 hover:border-emerald-500/20 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/35 flex items-center justify-center text-emerald-400 shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA section bottom inside modal */}
              <div className="bg-slate-900/50 border border-slate-850 p-8 sm:p-12 rounded-3xl text-center space-y-6 max-w-3xl mx-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,rgba(16,185,129,0.06),transparent) pointer-events-none" />
                
                <div className="space-y-2 relative z-10">
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                    Quer saber mais sobre o Espaço Kids?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
                    Entre em contato com nossa equipe e descubra como podemos contribuir para o desenvolvimento educacional do seu filho.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 pt-2">
                  <a
                    id="espaco-kids-whatsapp-btn"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-4 bg-emerald-500 text-slate-950 font-display text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-500/10 hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
                  >
                    <MessageCircle className="w-4.5 h-4.5" />
                    <span>Saiba mais</span>
                  </a>

                  <button
                    id="espaco-kids-close-bottom-btn"
                    onClick={onClose}
                    className="w-full sm:w-auto px-6 py-4 bg-slate-800 text-slate-300 font-display text-xs font-bold uppercase tracking-wider rounded-xl hover:text-white hover:bg-slate-750 transition-all border border-slate-700/80 cursor-pointer"
                  >
                    Voltar para Home
                  </button>
                </div>
              </div>

            </main>

            {/* Subtle brand footer */}
            <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-500 font-mono">
              <p>© 2026 CAPACITATI Educação. Todos os direitos reservados.</p>
            </footer>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
