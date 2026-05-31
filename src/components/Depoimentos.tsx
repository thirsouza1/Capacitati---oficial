import { Star, MessageSquareQuote } from "lucide-react";

export default function Depoimentos() {
  const reviews = [
    {
      author: "Diego Silva",
      role: "Pai de Aluno & Concurseiro",
      quote: "Excelente instituição, profissionais capacitados e preço acessível.",
      avatarBg: "bg-intellect-blue/10 text-intellect-blue",
      initials: "DS",
    },
    {
      author: "Emanuelly Queiroz",
      role: "Aluna de Preparatório",
      quote: "Professores extremamente qualificados!",
      avatarBg: "bg-success-gold/10 text-success-gold",
      initials: "EQ",
    },
    {
      author: "Elisa Alves",
      role: "Mãe de Aluno",
      quote: "Pessoas que, além de profissionais, são também muito humanas.",
      avatarBg: "bg-emerald-500/10 text-emerald-500",
      initials: "EA",
    },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-slate-950 px-6 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#70A366] bg-[#70A366]/10 px-3.5 py-1.5 rounded-full border border-[#70A366]/25">
            Prova Social
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            O Reconhecimento da Nossa Comunidade
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            A satisfação das famílias de São Sebastião do Paraíso e o sucesso de nossos alunos são as maiores provas de compromisso e carinho pedagógico.
          </p>
        </div>

        {/* Reviews Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.author}
              className="relative bg-slate-900/40 border border-slate-800/80 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              {/* Elegant quote icon watermarked in corner */}
              <div className="absolute top-6 right-6 text-slate-800/60">
                <MessageSquareQuote className="w-10 h-10 stroke-1" />
              </div>

              <div className="space-y-6">
                
                {/* Score Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-success-gold fill-success-gold" />
                  ))}
                </div>

                {/* Quote Content */}
                <p className="text-slate-300 font-medium italic text-base leading-relaxed relative z-10">
                  "{rev.quote}"
                </p>

              </div>

              {/* Author signature footer */}
              <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-slate-800/60">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-black text-xs ${rev.avatarBg} border border-current/10 shrink-0`}>
                  {rev.initials}
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-display font-extrabold text-sm text-slate-100 leading-none">
                    {rev.author}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-medium leading-none font-sans uppercase tracking-widest">
                    {rev.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
