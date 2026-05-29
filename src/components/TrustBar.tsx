import { Award, Users, Star, GraduationCap } from "lucide-react";

export default function TrustBar() {
  const pillars = [
    {
      icon: <Award className="w-5 h-5 text-success-gold" />,
      title: "Marca Registrada INPI",
      subtitle: "Garantia de solidez e registro legal",
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-intellect-blue" />,
      title: "Professores Qualificados",
      subtitle: "Corpo docente de elite e experiente",
    },
    {
      icon: <Star className="w-5 h-5 text-success-gold fill-success-gold" />,
      title: "+27 Avaliações 5 Estrelas",
      subtitle: "Aprovado e recomendado pelas famílias",
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-500" />,
      title: "Aprovação Comprovada",
      subtitle: "Resultados extraordinários na prática",
    },
  ];

  return (
    <div className="bg-slate-900/60 border-y border-slate-800/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center divide-y sm:divide-y-0 lg:divide-x divide-slate-800">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`flex items-start gap-4 ${i > 0 ? "pt-6 sm:pt-0 lg:pl-6" : ""}`}
            >
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 shadow-sm flex-shrink-0">
                {pillar.icon}
              </div>
              <div className="space-y-0.5">
                <h4 className="font-display font-bold text-sm text-white tracking-tight">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-400 leading-normal">
                  {pillar.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
