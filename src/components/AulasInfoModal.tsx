import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, BookOpen, Brain, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";

interface AulasInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSchedule: () => void;
}

export default function AulasInfoModal({ isOpen, onClose, onSchedule }: AulasInfoModalProps) {
  useBodyScrollLock(isOpen);
  const modalInfo = [
    {
      title: "Reforço Escolar",
      description: "Destinado ao aluno que apresenta dificuldade em uma disciplina. Ele receberá o acompanhamento semanal para a realização de provas e atividades escolares.",
      icon: BookOpen,
      badge: "Acompanhamento Ativo",
      accent: "from-emerald-500/10 to-teal-500/5",
      iconColor: "text-emerald-500",
      borderColor: "hover:border-emerald-500/30",
    },
    {
      title: "Aprimoramento Escolar",
      description: "Voltado ao aluno com dificuldades em uma ou mais disciplinas, com o objetivo de desenvolver suas habilidades e melhorar o desempenho ao longo do ano letivo.",
      icon: Brain,
      badge: "Desenvolvimento de Habilidade",
      accent: "from-intellect-blue/10 to-indigo-500/5",
      iconColor: "text-intellect-blue",
      borderColor: "hover:border-intellect-blue/30",
    },
    {
      title: "Aulas Emergenciais",
      description: "Indicado para o aluno que deixou estudos ou atividades para a última hora e precisa de auxílio para compreender o conteúdo, realizar as tarefas e avaliações escolares.",
      icon: Clock,
      badge: "Foco Imediato",
      accent: "from-amber-500/10 to-orange-500/5",
      iconColor: "text-amber-500",
      borderColor: "hover:border-amber-500/30",
    },
  ];

  const handleScheduleClick = () => {
    onClose();
    // Small timeout to allow closing animation to look smooth before triggering lead modal
    setTimeout(() => {
      onSchedule();
    }, 280);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
          >
            {/* Header pattern decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-success-gold/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-intellect-blue/5 rounded-full blur-3xl pointer-events-none" />

            {/* Modal Header */}
            <div className="relative p-6 sm:p-8 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-900/50 backdrop-blur-sm z-10">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-success-gold bg-success-gold/10 px-2.5 py-1 rounded-full border border-success-gold/25">
                  Modalidades de Ensino
                </span>
                <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight">
                  Como funcionam as nossas aulas?
                </h3>
              </div>
              <button
                id="close-classes-modal"
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 border border-slate-705/80 rounded-xl transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Information Grid */}
            <div className="p-6 sm:p-8 overflow-y-auto overscroll-contain space-y-6 md:space-y-8 z-10 custom-scrollbar">
              
              <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                Oferecemos soluções sob medida de acordo com as necessidades específicas do estudante. 
                Identifique abaixo o formato ideal para as conquistas do seu filho:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {modalInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`group relative bg-slate-950/40 border border-slate-850/80 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${item.borderColor}`}
                    >
                      {/* Gradient glow background */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                      <div className="relative z-10 space-y-4">
                        <div className={`w-11 h-11 rounded-15 bg-slate-900 border border-slate-800 flex items-center justify-center ${item.iconColor} group-hover:scale-105 transition-transform duration-300`}>
                          <IconComponent className="w-5 h-5" />
                        </div>

                        <div>
                          <span className={`inline-block text-[10px] font-semibold tracking-wider uppercase mb-1.5 ${item.iconColor}`}>
                            {item.badge}
                          </span>
                          <h4 className="font-display font-bold text-lg text-white">
                            {item.title}
                          </h4>
                        </div>

                        <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-350 transition-colors">
                          {item.description}
                        </p>
                      </div>

                      {/* Small subtle badge/icon on bottom corner */}
                      <div className="relative z-10 border-t border-slate-850/60 pt-4 mt-6 flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                        <ShieldCheck className="w-3.5 h-3.5 text-success-gold/60" />
                        <span>Professores Especializados</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-slate-800 bg-slate-950/40 block sm:flex justify-between items-center gap-6 shrink-0 z-10">
              <div className="hidden sm:flex items-center gap-3">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success-gold"></span>
                </span>
                <p className="text-xs text-slate-400">
                  Vagas limitadas para acompanhamento semanal.
                </p>
              </div>

              <button
                id="schedule-diag-eval"
                onClick={handleScheduleClick}
                className="w-full sm:w-auto px-6 py-3.5 bg-success-gold text-primary-navy hover:brightness-105 active:scale-[0.98] transition-all font-display text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer group"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar avaliação Diagnóstica</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
