import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Eye, Heart, Target, Sparkles, Compass, Award, Calendar, ChevronRight, ArrowRight, BookOpen, Quote, ShieldCheck } from "lucide-react";
import GoogleDriveImage from "./GoogleDriveImage";

interface SobreNosModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreServices: () => void;
}

export default function SobreNosModal({ isOpen, onClose, onExploreServices }: SobreNosModalProps) {
  const timelineData = [
    {
      year: "2015",
      title: "Início do Sonho",
      description: "Nascimento da ideia e início do sonho CAPACITATI, com foco em revolucionar a aprendizagem local."
    },
    {
      year: "Primeiros Anos",
      title: "Consolidação",
      description: "Atendimento dedicado de alunos em reforço escolar e aprimoramento pedagógico contínuo."
    },
    {
      year: "Crescimento",
      title: "Expansão de Horizontes",
      description: "Ampliação sistemática das metodologias ativas e introdução do acompanhamento multidisciplinar."
    },
    {
      year: "Hoje",
      title: "Referência Regional",
      description: "Referência consolidada em São Sebastião do Paraíso no desenvolvimento integral de crianças e adolescentes."
    }
  ];

  const valuesList = [
    "Educação com propósito",
    "Respeito às individualidades",
    "Compromisso com resultados",
    "Desenvolvimento humano",
    "Ética e responsabilidade",
    "Amor pela educação"
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
          {/* Main Fullscreen Container */}
          <div className="relative min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#0F172A] via-[#090D1A] to-[#01040E] text-white">
            
            {/* Ambient Lighting elements */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-success-gold/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-[40%] left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-12 right-1/3 w-[600px] h-[600px] bg-success-gold/5 rounded-full blur-3xl pointer-events-none" />

            {/* Top Navigation Bar inside Modal */}
            <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-success-gold/10 border border-success-gold/20 flex items-center justify-center text-success-gold">
                  <Heart className="w-5 h-5 fill-success-gold/20" />
                </div>
                <div>
                  <h1 className="font-display font-black text-sm uppercase tracking-wider text-white">
                    SOBRE NÓS <span className="text-success-gold">CAPACITATI</span>
                  </h1>
                  <p className="text-[10px] text-slate-400 font-mono">Transformando vidas através da educação</p>
                </div>
              </div>

              {/* Close Button right corner */}
              <button
                id="close-sobre-nos-modal"
                onClick={onClose}
                className="p-2.5 text-slate-450 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-xl transition-all duration-200 cursor-pointer flex items-center gap-1.5 text-xs font-mono"
              >
                <X className="w-4 h-4" />
                <span>FECHAR</span>
              </button>
            </header>

            {/* Content Hub */}
            <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 md:py-20 space-y-16 lg:space-y-24 relative z-10">
              
              {/* Hero Section */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                {/* Text Content */}
                <div className="lg:col-span-7 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success-gold/10 border border-success-gold/30 text-success-gold text-xs font-semibold"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Nossa Essência</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4"
                  >
                    <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                      Nossa História
                    </h2>
                    <p className="font-display font-medium text-lg sm:text-xl text-success-gold leading-relaxed">
                      Transformando vidas por meio da educação desde 2015.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed"
                  >
                    <p>
                      A ideia da fundação da Capaci-Tati surgiu em 2015, a partir de um grande sonho: fazer a diferença na educação de São Sebastião do Paraíso.
                    </p>
                    <p>
                      Desde o início, nossa missão foi muito além das aulas de reforço e aprimoramento escolar. Trabalhamos para desenvolver as capacidades e habilidades educacionais e socioemocionais de crianças e adolescentes, fortalecendo também sua autoestima, confiança e potencial para o futuro.
                    </p>
                    <p className="border-l-2 border-success-gold pl-4 text-white font-medium italic">
                      Com dedicação, compromisso e amor pela educação, esse sonho se tornou realidade. Hoje, a Capaci-Tati é referência no apoio ao desenvolvimento de crianças e adolescentes, contribuindo para a formação de estudantes mais preparados, seguros e conscientes de suas capacidades.
                    </p>
                    <p className="font-display tracking-tight text-white font-black text-lg">
                      Capaci-Tati: <span className="text-success-gold underline underline-offset-4 decoration-success-gold/40">transformando vidas por meio da educação.</span>
                    </p>
                  </motion.div>
                </div>

                {/* Founder/Aesthetic Photo area representing Capaci-Tati */}
                <div className="lg:col-span-5 relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35 }}
                    className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group"
                  >
                    <GoogleDriveImage
                      driveId="1gVNo6G9mN4YpQ43mZ78H6UvXitG2v1c5" // Logo alternate/team representative image or logo symbol
                      alt="Capaci-Tati Educação"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      // Fallback internally supported by GoogleDriveImage
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-slate-900/95 border border-white/15 backdrop-blur-md space-y-2.5">
                      <div className="space-y-0.5">
                        <p className="text-[10px] font-mono uppercase tracking-wider text-success-gold font-bold">Fundadora e Diretora Pedagógica</p>
                        <h4 className="font-display font-black text-white text-base tracking-tight">Tatiane de Souza Urias Cassemiro</h4>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-mono font-medium">Fundadora da CAPACITATI</p>
                      </div>
                      <p className="text-xs italic text-slate-300 border-t border-white/5 pt-2 leading-relaxed">
                        "Transformando vidas por meio da educação desde 2015."
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Missão, Visão e Valores (Cards) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Missão */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 hover:border-success-gold/30 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-success-gold/10 border border-success-gold/20 flex items-center justify-center text-success-gold">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-black text-lg text-white">Missão</h3>
                  <p className="text-sm text-slate-355 leading-relaxed">
                    Promover o desenvolvimento educacional e socioemocional de crianças e adolescentes por meio de um ensino acolhedor, personalizado e de qualidade.
                  </p>
                </motion.div>

                {/* Visão */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 hover:border-success-gold/30 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-black text-lg text-white">Visão</h3>
                  <p className="text-sm text-slate-355 leading-relaxed">
                    Ser referência regional em educação complementar, contribuindo para a formação de estudantes preparados para os desafios acadêmicos e da vida.
                  </p>
                </motion.div>

                {/* Valores */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 hover:border-success-gold/30 transition-colors duration-300 md:col-span-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-success-gold/10 border border-success-gold/20 flex items-center justify-center text-success-gold">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-black text-lg text-white">Valores</h3>
                  <div className="grid grid-cols-1 gap-2.5">
                    {valuesList.map((val, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="text-xs font-semibold text-slate-200">{val}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </div>

              {/* Timeline (Linha do Tempo) */}
              <div className="space-y-12">
                <div className="text-center space-y-3">
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white">Nossa Trajetória</h3>
                  <p className="text-slate-400 text-sm max-w-xl mx-auto">Construindo as bases para o amanhã, etapa por etapa.</p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                  {/* Vertical central path line */}
                  <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800" />

                  <div className="space-y-12 relative">
                    {timelineData.map((item, index) => {
                      const isEven = index % 2 === 0;
                      return (
                        <div key={index} className={`flex flex-col md:flex-row items-stretch ${isEven ? "md:flex-row-reverse" : ""}`}>
                          
                          {/* Card half panel */}
                          <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                            <motion.div
                              initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              className="bg-slate-900/50 border border-slate-850 rounded-2xl p-6 relative hover:border-slate-800 transition-colors"
                            >
                              <div className="inline-block px-3 py-1 rounded-lg bg-success-gold/10 border border-success-gold/20 text-success-gold text-xs font-mono font-bold mb-3">
                                {item.year}
                              </div>
                              <h4 className="font-display font-bold text-base text-white mb-2">{item.title}</h4>
                              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.description}</p>
                            </motion.div>
                          </div>

                          {/* Central node circle */}
                          <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-success-gold flex items-center justify-center -translate-x-[15px] top-4 md:top-6 z-10 shrink-0">
                            <Calendar className="w-3.5 h-3.5 text-success-gold" />
                          </div>

                          {/* Empty spacer spacer half for desktop structure */}
                          <div className="hidden md:block w-1/2" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Callout quote block */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto bg-gradient-to-r from-success-gold/10 via-slate-900/50 to-[#0F172A]/50 border border-success-gold/25 rounded-3xl p-8 md:p-10 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-success-gold/10">
                  <Quote className="w-24 h-24 stroke-[1.5]" />
                </div>
                <div className="relative z-10 space-y-4">
                  <p className="font-display font-medium text-lg md:text-xl text-slate-150 leading-relaxed font-sans italic">
                    "Mais do que ensinar conteúdos, acreditamos em desenvolver confiança, autonomia e potencial para que cada aluno descubra sua capacidade de conquistar seus objetivos."
                  </p>
                  <p className="text-xs uppercase tracking-wider text-success-gold font-bold font-mono">
                    — Equipe CAPACITATI Aprimoramento Escolar
                  </p>
                </div>
              </motion.div>

              {/* Call to action section */}
              <div className="border-t border-slate-900 pt-16">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                    Pronto para trilhar um caminho de conquistas?
                  </h3>
                  <p className="text-sm text-slate-355 leading-relaxed max-w-xl mx-auto">
                    Cada aluno possui talentos únicos. Nossa missão é ajudar a desenvolver essas capacidades e transformar conhecimento em oportunidades para o futuro.
                  </p>
                  
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        onClose();
                        onExploreServices();
                      }}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-success-gold hover:bg-success-gold/90 text-primary-navy font-display font-bold uppercase text-xs tracking-wider rounded-full transition-transform hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-lg shadow-success-gold/10"
                    >
                      <span>Conheça Nossos Serviços</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </main>

            {/* Modal Footer */}
            <footer className="border-t border-slate-900 bg-slate-950/50 py-6 text-center text-xs text-slate-500">
              <p>© {new Date().getFullYear()} CAPACITATI Aprimoramento Escolar • Todos os Direitos Reservados</p>
            </footer>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
