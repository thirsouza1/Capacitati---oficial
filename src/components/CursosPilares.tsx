import { motion } from "motion/react";
import { BookOpen, GraduationCap, CheckCircle, BarChart, Brain, Clock, ShieldCheck, Target, Smile } from "lucide-react";

interface CursosPilaresProps {
  onOpenConsultation: () => void;
  onOpenAulasInfo: () => void;
  onOpenEspacoKids?: () => void;
}

export default function CursosPilares({ onOpenConsultation, onOpenAulasInfo, onOpenEspacoKids }: CursosPilaresProps) {
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

        {/* Three Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Card A: Educação Infantil e Ensino Fundamental 1 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group block relative bg-slate-900/30 border border-slate-850 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden cursor-pointer hover:border-emerald-500/30"
            onClick={onOpenEspacoKids}
          >
            {/* Elegant glassmorphism border highlight effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10 space-y-6 flex flex-col h-full justify-between">
              
              {/* Header inside card */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700/60 p-2.5 rounded-xl text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors duration-300">
                  <Smile className="w-6 h-6" />
                </div>
                
                <p className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  Educação Infantil e Ensino Fundamental 1
                </p>
                
                <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                  Espaço Kids &amp; Apoio
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  Para as primeiras etapas do aprendizado escolar. Desenvolvimento da leitura, escrita, raciocínio lógico e concentração através de atendimento afetuoso e jogos pedagógicos.
                </p>
                <p className="text-slate-400/90 text-xs sm:text-sm leading-relaxed">
                  Proporcionar aos pais tranquilidade e tempo de qualidade com seus filhos, contando com o apoio de uma equipe multidisciplinar que acompanha e auxilia na realização das tarefas escolares.
                </p>
              </div>

              {/* Bullet features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-805/80 pt-6 my-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <p className="font-semibold text-xs text-slate-200">Jogos Lúdicos</p>
                    <p className="text-[10px] text-slate-400">Estudos divertidos</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <p className="font-semibold text-xs text-slate-200">Base Sólida</p>
                    <p className="text-[10px] text-slate-400">Leitura, escrita e cálculo</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <p className="font-semibold text-xs text-slate-200">Atenção &amp; Foco</p>
                    <p className="text-[10px] text-slate-400">Concentração ativa</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <p className="font-semibold text-xs text-slate-200">Autonomia</p>
                    <p className="text-[10px] text-slate-400">Confiança nos estudos</p>
                  </div>
                </div>
              </div>

              {/* CTA link inside card */}
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 pt-2">
                <span>Conhecer o Espaço Kids</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-300">➔</span>
              </div>

            </div>
          </motion.div>

          {/* Card B: Ensino Fundamental 2 e Médio */}
          <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group block relative bg-slate-900/30 border border-slate-850 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden cursor-pointer hover:border-intellect-blue/30"
            onClick={onOpenAulasInfo}
          >
            {/* Elegant glassmorphism border highlight effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-intellect-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10 space-y-6 flex flex-col h-full justify-between">
              
              {/* Header inside card */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700/60 p-2.5 rounded-xl text-slate-100 group-hover:bg-intellect-blue group-hover:text-white transition-colors duration-300">
                  <BookOpen className="w-6 h-6" />
                </div>
                
                <p className="text-xs font-mono uppercase tracking-wider text-intellect-blue font-semibold">
                  ENSINO FUNDAMENTAL 2 E MÉDIO
                </p>
                
                <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                  Reforço &amp; Aprimoramento
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  Para crianças e adolescentes. Desenvolvemos o hábito de estudo diário, estimulamos a organização mental e elevamos as notas escolares, fortalecendo a confiança do estudante.
                </p>
              </div>

              {/* Bullet features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-805/80 pt-6 my-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-intellect-blue mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <p className="font-semibold text-xs text-slate-200">Notas Elevadas</p>
                    <p className="text-[10px] text-slate-400">Recuperação e reforço</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-intellect-blue mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <p className="font-semibold text-xs text-slate-200">Rotina de Estudos</p>
                    <p className="text-[10px] text-slate-400">Organização ativa</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Brain className="w-4 h-4 text-intellect-blue mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <p className="font-semibold text-xs text-slate-200">Autoestima</p>
                    <p className="text-[10px] text-slate-400">Segurança em exames</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <BarChart className="w-4 h-4 text-intellect-blue mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <p className="font-semibold text-xs text-slate-200">Acompanhamento</p>
                    <p className="text-[10px] text-slate-400">Evolução ativa</p>
                  </div>
                </div>
              </div>

              {/* CTA link inside card */}
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-intellect-blue pt-2">
                <span>Agendar avaliação diagnóstica</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-300">➔</span>
              </div>

            </div>
          </motion.div>

          {/* Card C: Concurseiros */}
          <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group block relative bg-[#0F172A] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden text-white cursor-pointer hover:border-success-gold/30"
            onClick={onOpenConsultation}
          >
            {/* Elegant glassmorphism border highlight effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-success-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10 space-y-6 flex flex-col h-full justify-between">
              
              {/* Header inside card */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700/60 p-2.5 rounded-xl text-success-gold group-hover:bg-success-gold group-hover:text-primary-navy transition-colors duration-300">
                  <GraduationCap className="w-6 h-6" />
                </div>
                
                <p className="text-xs font-mono uppercase tracking-wider text-success-gold font-semibold">
                  Carreiras Públicas, Vestibulares e Militares
                </p>
                
                <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                  Preparatório Premium
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  Para concurseiros de alto rendimento. Nossa mentoria é voltada para a decodificação minuciosa de editais, fixação estratégica de conteúdo e velocidade na resolução de questões.
                </p>
              </div>

              {/* Bullet features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-800 pt-6 my-4">
                <div className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-success-gold mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <p className="font-semibold text-xs text-white">Domínio de Editais</p>
                    <p className="text-[10px] text-slate-400">Verticalização prática</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-success-gold mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <p className="font-semibold text-xs text-white">Resolução Rápida</p>
                    <p className="text-[10px] text-slate-400">Estratégias de gabarito</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Brain className="w-4 h-4 text-success-gold mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <p className="font-semibold text-xs text-white">Inteligência Emocional</p>
                    <p className="text-[10px] text-slate-400">Resiliência ativa</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-success-gold mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <p className="font-semibold text-xs text-white">Alta Performance</p>
                    <p className="text-[10px] text-slate-400">Estudos direcionados</p>
                  </div>
                </div>
              </div>

              {/* CTA link inside card */}
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-success-gold pt-2">
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
