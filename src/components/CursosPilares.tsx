import { motion } from "motion/react";
import { BookOpen, GraduationCap, CheckCircle, BarChart, Brain, Clock, ShieldCheck, Target } from "lucide-react";

interface CursosPilaresProps {
  onOpenConsultation: () => void;
}

export default function CursosPilares({ onOpenConsultation }: CursosPilaresProps) {
  return (
    <section id="cursos" className="py-24 bg-slate-950 px-6 relative overflow-hidden border-t border-slate-900">
      
      {/* Decorative vectors */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-intellect-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-success-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] bg-[#2563EB]/10 px-3.5 py-1.5 rounded-full border border-[#2563EB]/25">
            Formação De Valor
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Metodologias Desenvolvidas para Cada Fase do Aluno
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Seja construindo uma base escolar inabalável ou conquistando a vaga dos seus sonhos em concursos, temos o pilar ideal para sua jornada.
          </p>
        </div>

        {/* Two Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Card A: Kids/Teens */}
          <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group block relative bg-slate-900/30 border border-slate-850 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all overflow-hidden cursor-pointer hover:border-intellect-blue/30"
            onClick={onOpenConsultation}
          >
            {/* Elegant glassmorphism border highlight effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-intellect-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10 space-y-8 flex flex-col h-full justify-between">
              
              {/* Header inside card */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700/60 p-2.5 rounded-xl text-slate-100 group-hover:bg-intellect-blue group-hover:text-white transition-colors duration-300">
                  <BookOpen className="w-6 h-6" />
                </div>
                
                <p className="text-xs font-mono uppercase tracking-wider text-intellect-blue font-semibold">
                  Ensino Fundamental e Médio
                </p>
                
                <h3 className="font-display font-black text-2xl md:text-3xl text-white animate-glint_not">
                  Reforço & Aprimoramento
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  Para crianças e adolescentes. Desenvolvemos o hábito de estudo diário, estimulamos a organização mental e elevamos as notas escolares, fortalecendo a confiança do estudante.
                </p>
              </div>

              {/* Bullet features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-805/80 pt-8 my-8">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-intellect-blue mt-1 shrink-0" />
                  <div className="space-y-0.5">
                    <p className="font-semibold text-xs text-slate-200">Notas Altas Garantidas</p>
                    <p className="text-[11px] text-slate-400">Recuperação de conteúdo</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-intellect-blue mt-1 shrink-0" />
                  <div className="space-y-0.5">
                    <p className="font-semibold text-xs text-slate-200">Rotina de Estudos</p>
                    <p className="text-[11px] text-slate-400">Organização e cronogramas</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Brain className="w-4 h-4 text-intellect-blue mt-1 shrink-0" />
                  <div className="space-y-0.5">
                    <p className="font-semibold text-xs text-slate-200">Autoestima Acadêmica</p>
                    <p className="text-[11px] text-slate-400">Segurança em provas</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <BarChart className="w-4 h-4 text-intellect-blue mt-1 shrink-0" />
                  <div className="space-y-0.5">
                    <p className="font-semibold text-xs text-slate-200">Progresso Exponencial</p>
                    <p className="text-[11px] text-slate-400">Acompanhamento ativo</p>
                  </div>
                </div>
              </div>

              {/* CTA link inside card */}
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-intellect-blue pt-4">
                <span>Agendar avaliação diagnóstica</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-300">➔</span>
              </div>

            </div>
          </motion.div>

          {/* Card B: Concurseiros */}
          <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group block relative bg-[#0F172A] border border-slate-800 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all overflow-hidden text-white cursor-pointer hover:border-success-gold/30"
            onClick={onOpenConsultation}
          >
            {/* Elegant glassmorphism border highlight effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-success-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10 space-y-8 flex flex-col h-full justify-between">
              
              {/* Header inside card */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700/60 p-2.5 rounded-xl text-success-gold group-hover:bg-success-gold group-hover:text-primary-navy transition-colors duration-300">
                  <GraduationCap className="w-6 h-6" />
                </div>
                
                <p className="text-xs font-mono uppercase tracking-wider text-success-gold font-semibold">
                  Carreiras Públicas, Vestibulares e Militares
                </p>
                
                <h3 className="font-display font-black text-2xl md:text-3xl text-white">
                  Preparatório Premium
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  Para concurseiros de alto rendimento. Nossa mentoria é voltada para a decodificação minuciosa de editais, fixação estratégica de conteúdo, controle emocional rigoroso e velocidade de resolução de questões.
                </p>
              </div>

              {/* Bullet features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-800 pt-8 my-8">
                <div className="flex items-start gap-2.5">
                  <Target className="w-4 h-4 text-success-gold mt-1 shrink-0" />
                  <div className="space-y-0.5">
                    <p className="font-semibold text-xs text-white">Domínio de Editais</p>
                    <p className="text-[11px] text-slate-400">Verticalização prática</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-success-gold mt-1 shrink-0" />
                  <div className="space-y-0.5">
                    <p className="font-semibold text-xs text-white">Técnicas de Prova rápida</p>
                    <p className="text-[11px] text-slate-400">Estratégias de gabarito</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Brain className="w-4 h-4 text-success-gold mt-1 shrink-0" />
                  <div className="space-y-0.5">
                    <p className="font-semibold text-xs text-white">Inteligência Emocional</p>
                    <p className="text-[11px] text-slate-400">Resiliência para o dia D</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-success-gold mt-1 shrink-0" />
                  <div className="space-y-0.5">
                    <p className="font-semibold text-xs text-white">Alta Performance</p>
                    <p className="text-[11px] text-slate-400">Simulados mensais auditados</p>
                  </div>
                </div>
              </div>

              {/* CTA link inside card */}
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-success-gold pt-4">
                <span>Garantir assessoria premium</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-300">➔</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
