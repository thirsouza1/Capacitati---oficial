import { motion } from "motion/react";
import { ClipboardCheck, Users, Compass, Trophy } from "lucide-react";

export default function MetodoTimeline() {
  const steps = [
    {
      step: "01",
      title: "Diagnóstico Individual",
      description: "Mapeamos minuciosamente as lacunas cognitivas, pontos fortes e o perfil de aprendizagem exato do aluno antes de iniciar qualquer aula.",
      icon: <ClipboardCheck className="w-5 h-5 text-white" />,
      color: "bg-intellect-blue",
      border: "border-intellect-blue/30",
    },
    {
      step: "02",
      title: "Plano de Estudo Estratégico",
      description: "Formatamos um cronograma minucioso de metas personalizadas alinhadas com a rotina familiar ou do concurseiro de alto nível.",
      icon: <Compass className="w-5 h-5 text-white" />,
      color: "bg-success-gold",
      border: "border-success-gold/30",
    },
    {
      step: "03",
      title: "Acompanhamento de Elite",
      description: "Nossos mentores monitoram ativamente a execução do cronograma de estudos diário, intervindo imediatamente diante de quaisquer dificuldades.",
      icon: <Users className="w-5 h-5 text-white" />,
      color: "bg-primary-navy",
      border: "border-primary-navy/30",
    },
    {
      step: "04",
      title: "Resultado Exponencial",
      description: "O coroamento de todo o esforço de forma pragmática: notas significativamente altas na escola e aprovações garantidas em cargos públicos.",
      icon: <Trophy className="w-5 h-5 text-white" />,
      color: "bg-emerald-600",
      border: "border-emerald-600/30",
    },
  ];

  return (
    <section id="metodologia" className="py-24 bg-primary-navy text-white px-6 relative overflow-hidden">
      
      {/* Decorative details */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-success-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-intellect-blue/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-success-gold bg-success-gold/10 px-3.5 py-1.5 rounded-full border border-success-gold/25">
            Metodologia Científica
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white">
            O Método Capaci-Tati
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Acompanhe o percurso estratégico que direciona nosso ensino para assegurar o aprendizado sólido e os resultados reais.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pt-8">
          
          {/* Vertical center track line for desktop */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-intellect-blue via-success-gold to-emerald-600 opacity-20 transform -translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex flex-col md:flex-row items-stretch relative"
                >
                  {/* Timeline Badge placement for desktop / mobile */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
                    <div className={`w-12 h-12 rounded-full ${item.color} border-4 border-primary-navy shadow-xl flex items-center justify-center`}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Content panels */}
                  {/* Left Side (Desktop: Even Content, Odd Empty space) */}
                  <div className={`hidden md:block w-1/2 pr-12 text-right ${isEven ? "" : "pointer-events-none opacity-0"}`}>
                    {isEven && (
                      <div className="space-y-3 bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-sm shadow-xl hover:border-white/20 transition-colors">
                        <span className="font-sans font-black text-3xl text-success-gold/80 block">
                          {item.step}
                        </span>
                        <h3 className="font-display font-extrabold text-xl text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center structural separator gap */}
                  <div className="w-12 hidden md:block" />

                  {/* Right Side (Desktop: Odd Content, Even Empty space) */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-12 text-left ${!isEven ? "" : "md:pointer-events-none md:opacity-0"}`}>
                    {(!isEven || true) && (
                      // Show content on mobile regardless, but on desktop condition applies
                      <div className={`space-y-3 bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-sm shadow-xl hover:border-white/20 transition-colors ${isEven ? "md:hidden" : ""}`}>
                        <span className="font-sans font-black text-3xl text-success-gold/80 block">
                          {item.step}
                        </span>
                        <h3 className="font-display font-extrabold text-xl text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
