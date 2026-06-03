import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Briefcase, FileText, Mail, Send, Award, Users, GraduationCap, Heart, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";

interface TrabalheConoscoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrabalheConoscoModal({ isOpen, onClose }: TrabalheConoscoModalProps) {
  useBodyScrollLock(isOpen);
  const whatsappUrl = "https://wa.me/5535988330353?text=Olá!%20Gostaria%20de%20cadastrar%20meu%20currículo%20no%20banco%20de%20talentos%20da%20CAPACITATI.";
  const mailToUrl = "mailto:tsurias2@gmail.com?subject=Currículo%20-%20Banco%20de%20Talentos%20CAPACITATI&body=Olá!%20Gostaria%20de%20cadastrar%20meu%20currículo%20no%20banco%2520de%20talentos%20da%20CAPACITATI.";

  const areas = [
    "Professores e Instrutores",
    "Pedagogos",
    "Monitores Educacionais",
    "Psicopedagogos",
    "Auxiliares Administrativos",
    "Atendimento ao Público"
  ];

  const whyWorkHere = [
    "Ambiente acolhedor e colaborativo",
    "Valorização profissional",
    "Oportunidades de crescimento",
    "Compromisso com a excelência educacional",
    "Desenvolvimento contínuo da equipe"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-slate-950 overflow-y-auto block custom-scrollbar overscroll-contain"
        >
          {/* Main Fullscreen Content Wrapper */}
          <div className="relative min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#0F172A] via-[#090D1A] to-[#020617] text-white">
            
            {/* Ambient Background Lights */}
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-success-gold/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 left-1/4 w-[600px] h-[600px] bg-intellect-blue/10 rounded-full blur-3xl pointer-events-none" />
            
            {/* Top Navigation Bar inside Modal */}
            <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-success-gold/10 border border-success-gold/20 flex items-center justify-center text-success-gold">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="font-display font-black text-sm uppercase tracking-wider text-white">
                    TRABALHE CONOSCO <span className="text-success-gold">CAPACITATI</span>
                  </h1>
                  <p className="text-[10px] text-slate-400 font-mono">Faça parte do nosso time</p>
                </div>
              </div>

              {/* Explicit close button in the top right as requested */}
              <button
                id="close-trabalhe-conosco-modal"
                onClick={onClose}
                className="p-2.5 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-xl transition-all duration-200 cursor-pointer flex items-center gap-1.5 text-xs font-mono"
              >
                <X className="w-4 h-4" />
                <span>FECHAR</span>
              </button>
            </header>

            {/* Main Content Body */}
            <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 md:py-16 space-y-16 relative z-10">
              
              {/* Hero Section inside modal */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left side: Heading, subtitle & presentation text */}
                <div className="lg:col-span-7 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success-gold/10 border border-success-gold/30 text-success-gold text-xs font-semibold"
                  >
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                    <span>Recrutamento e Carreira</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-3"
                  >
                    <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                      Trabalhe Conosco
                    </h2>
                    <p className="font-display font-medium text-lg sm:text-xl text-success-gold/90 leading-relaxed font-sans">
                      Faça parte da equipe CAPACITATI e contribua para transformar vidas por meio da educação.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed"
                  >
                    <p>
                      A CAPACITATI está sempre em busca de profissionais comprometidos, apaixonados pela educação e dispostos a fazer a diferença na vida de nossos alunos.
                    </p>
                    <p>
                      Se você acredita no poder do ensino, da dedicação e do desenvolvimento humano, teremos satisfação em conhecer seu perfil profissional.
                    </p>
                    
                    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 space-y-4">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-success-gold" />
                        <h4 className="font-display font-bold text-base text-white">
                          Recebemos currículos para futuras oportunidades em:
                        </h4>
                      </div>
                      
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-1">
                        {areas.map((area, idx) => (
                          <li key={idx} className="flex items-center gap-2.5 text-slate-300 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-success-gold shrink-0" />
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Right side: Why work here & Callout block */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Why work here cards list */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6"
                  >
                    <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                      <Users className="w-5 h-5 text-success-gold" />
                      <h3 className="font-display font-black text-lg text-white">
                        Por que trabalhar na CAPACITATI?
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {whyWorkHere.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                          <p className="text-sm text-slate-200 font-medium">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Highlights Callout Box */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-r from-success-gold/10 to-indigo-500/10 border border-success-gold/20 rounded-2xl p-6 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Award className="w-16 h-16 text-success-gold" />
                    </div>
                    <p className="relative z-10 text-sm italic text-slate-200 leading-relaxed font-sans">
                      "Estamos formando um banco de talentos para futuras oportunidades. Envie seu currículo e venha crescer conosco."
                    </p>
                  </motion.div>
                </div>

              </div>

              {/* Submit CV Buttons Layout */}
              <div className="border-t border-slate-800/80 pt-12">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                  <div className="space-y-2">
                    <h3 className="font-display font-black text-2xl text-white">
                      Envie seu currículo pelos canais abaixo
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Escolha o meio de comunicação que for mais conveniente para você.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Primary button: WhatsApp */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 px-8 py-5 bg-emerald-500 hover:bg-emerald-600 font-display font-bold uppercase text-xs tracking-wider text-white rounded-2xl shadow-lg shadow-emerald-500/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Enviar pelo WhatsApp</span>
                    </a>

                    {/* Secondary button: Email */}
                    <a
                      href={mailToUrl}
                      className="group flex items-center justify-center gap-3 px-8 py-5 bg-slate-900 hover:bg-slate-850 hover:text-white border border-slate-800 text-slate-300 font-display font-bold uppercase text-xs tracking-wider rounded-2xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Mail className="w-5 h-5 text-success-gold" />
                      <span>Enviar por E-mail</span>
                    </a>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed max-w-xl mx-auto">
                    Ao enviar seu currículo, ele será analisado e armazenado em nosso banco de talentos para futuras oportunidades compatíveis com seu perfil.
                  </p>
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
