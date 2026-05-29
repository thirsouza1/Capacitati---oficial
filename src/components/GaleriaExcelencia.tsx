import { useState } from "react";
import { Camera, Eye, MapPin, ZoomIn } from "lucide-react";

export default function GaleriaExcelencia() {
  const images = [
    {
      id: 1,
      src: "https://lh3.googleusercontent.com/d/1jO9FiyIVCLqFREwHnvz28m4gAWF3t9G_",
      title: "Salas de Atendimento Individualizado",
      subtitle: "Foco absoluto, livre de distrações periféricas",
      cols: "md:col-span-2 md:row-span-2",
      aspect: "aspect-[4/3] md:aspect-auto md:h-full",
    },
    {
      id: 2,
      src: "https://lh3.googleusercontent.com/d/1DBu0Ol1JW8RVGtRvc3c0IwuqIi8ZxpU4",
      title: "Biblioteca Real",
      subtitle: "Acervo atualizado de obras e editais",
      cols: "md:col-span-1 md:row-span-1",
      aspect: "aspect-square",
    },
    {
      id: 3,
      src: "https://lh3.googleusercontent.com/d/12hVYOFhR9-pFeWPu6SDigdwGks39j7M8",
      title: "Estações de Estudo Concurseiro",
      subtitle: "Simulação real das condições da prova",
      cols: "md:col-span-1 md:row-span-1",
      aspect: "aspect-square",
    },
    {
      id: 4,
      src: "https://lh3.googleusercontent.com/d/1Rq2C4pIMHciiojuO-gguU-L0I0bs9BdG",
      title: "Recepção Executiva",
      subtitle: "Espaço de acolhimento para pais e alunos",
      cols: "md:col-span-1 md:row-span-1",
      aspect: "aspect-square",
    },
    {
      id: 5,
      src: "https://lh3.googleusercontent.com/d/1oaTNQJJ7xLMnPsR3kwBz_V3z5xmYiRPW",
      title: "Sala de Simulado Monitorado",
      subtitle: "Gestão do tempo de prova e concentração",
      cols: "md:col-span-1 md:row-span-2",
      aspect: "aspect-[1/2] md:aspect-auto md:h-full",
    },
    {
      id: 6,
      src: "assets/galeria-6.jpg",
      title: "Espaço Kid/Teens Criativo",
      subtitle: "Lousas dinâmicas e materiais de apoio",
      cols: "md:col-span-2 md:row-span-1",
      aspect: "aspect-[2/1] md:aspect-auto md:h-[220px]",
    },
  ];

  return (
    <section id="galeria" className="py-24 bg-slate-950 px-6 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] bg-[#2563EB]/10 px-3.5 py-1.5 rounded-full border border-[#2563EB]/25">
            Portfólio Físico
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Ambientes Projetados para a Alta Performance
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Dê um tour visual em nossa escola. Cada detalhe, a iluminação e a disposição das mesas do nosso espaço físico em São Sebastião do Paraíso foram planejados para otimizar o foco.
          </p>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          {images.map((img) => (
            <div
              key={img.id}
              className={`group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 shadow-md ${img.cols} ${img.aspect} transition-all duration-300 hover:shadow-xl`}
            >
              
              {/* Fallback decoration (shows if actual photo is missing/loading) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/90 via-slate-800/80 to-slate-200 flex flex-col justify-between p-6">
                <div className="flex items-center justify-between">
                  <div className="p-1 px-2.5 rounded-full bg-black/40 border border-white/20 text-white flex items-center gap-1.5 text-[10px] font-mono tracking-wider">
                    <Camera className="w-3.5 h-3.5 text-success-gold" />
                    <span>ESPACIAL AMBIENTE</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="space-y-1.5 text-white">
                  <h3 className="font-display font-extrabold text-lg leading-tight tracking-tight text-white group-hover:text-success-gold transition-colors">
                    {img.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-normal">
                    {img.subtitle}
                  </p>
                </div>
              </div>

              {/* High-quality local image tag */}
              <img
                src={img.src}
                alt={`${img.title} - Reforço Escolar São Sebastião do Paraíso - Capaci-Tati Educação`}
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay group-hover:scale-105 group-hover:opacity-20 transition-all duration-500"
                onError={(e) => {
                  // Keep fallback style clean if load fails, maybe clear img or hide it
                  e.currentTarget.style.display = "none";
                }}
              />

              {/* Sutil overlay (10% opacity) as requested */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors pointer-events-none" />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
