import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Star, Shield, Users, Trophy } from "lucide-react";
import GoogleDriveImage from "./GoogleDriveImage";

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  // Graceful state handling for local image loading issues
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <section id="hero" className="relative min-h-[85vh] bg-primary-navy overflow-hidden flex items-center py-20 px-6">
      
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#70A366_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>
      
      {/* Ambient glowing circles */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-intellect-blue/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-success-gold/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Side: Copywriting */}
        <div className="lg:col-span-7 space-y-8 flex flex-col items-start text-left">
          
          {/* Brand & Social Proof Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
            {/* Small Brand Logo Shield */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2.5 bg-slate-900/85 border border-success-gold/30 px-3.5 py-1.5 rounded-2xl shadow-lg w-fit"
            >
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-slate-950 flex items-center justify-center p-0.5 border border-white/5">
                <GoogleDriveImage
                  driveId="1GgbacDCy4bFSI38YaqdqJNW3ayWuBXMh"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-display font-black text-white leading-none uppercase tracking-wide">Capaci-Tati</span>
                <span className="text-[7px] font-mono text-success-gold uppercase tracking-widest mt-0.5">Premium</span>
              </div>
            </motion.div>

            {/* Social Proof Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm shadow-xl w-fit"
            >
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-success-gold text-success-gold" />
                ))}
              </div>
              <span className="text-xs font-semibold text-slate-100 tracking-wide">
                5.0 no Google <span className="text-slate-400 font-normal">(27+ avaliações reais)</span>
              </span>
            </motion.div>
          </div>

          {/* Headline with Staggered Word Reveal */}
          <div className="space-y-4">
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] max-w-2xl">
              A excelência acadêmica que o <span className="text-success-gold relative inline-block">futuro do seu filho<span className="absolute bottom-1 left-0 w-full h-1 bg-success-gold/30 rounded" /></span> exige.
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-xl">
              Líder em São Sebastião do Paraíso. Reforço escolar personalizado e o preparatório para concursos, ENEM e vestibulares que mais aprova na região.
            </p>
          </div>

          {/* CTA with Magnetic Tilt Hover Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onOpenConsultation}
              className="relative px-8 py-4 font-display font-extrabold text-sm uppercase tracking-wider text-primary-navy bg-success-gold rounded-xl transition-all shadow-2xl hover:brightness-110 active:scale-[0.98] group cursor-pointer flex items-center justify-center gap-2.5 overflow-hidden border border-success-gold/20"
            >
              Quero Garantir Minha Vaga
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
            
            <a
              href="#metodologia"
              className="px-6 py-4 rounded-xl text-slate-300 font-semibold hover:text-white hover:bg-white/5 transition-all text-sm flex items-center justify-center gap-1.5 border border-transparent hover:border-white/10"
            >
              Conhecer Metodologia
            </a>
          </motion.div>

          {/* Core high-level badges */}
          <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/5 w-full max-w-lg">
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-display font-black text-success-gold">100%</span>
              <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">Acompanhamento</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-display font-black text-white">+27</span>
              <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">Notas 5 Estrelas</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-display font-black text-intellect-blue">#1</span>
              <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider font-semibold">Em aprovação</span>
            </div>
          </div>

        </div>

        {/* Right Side: Hero Visual Frame */}
        <div className="lg:col-span-5 relative w-full aspect-[4/3] lg:aspect-square">
          
          {/* Outer floating accents */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-success-gold/30 rounded-tl-2xl pointer-events-none" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-intellect-blue/30 rounded-br-2xl pointer-events-none" />

          {/* Main Visual Frame */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-800 shadow-2xl border border-white/10 flex items-center justify-center">
            
            {/* Fallback pattern visible behind image or if image not found */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-800 flex flex-col justify-between p-8 text-left">

              {/* Center content - Academic excellence emblem */}
              <div className="my-auto py-6 space-y-4 flex flex-col items-center text-center">
                <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-2xl bg-slate-900/90 border border-success-gold/40 flex items-center justify-center shadow-2xl mb-2 relative p-1.5 overflow-hidden">
                  <GoogleDriveImage
                    driveId="1GgbacDCy4bFSI38YaqdqJNW3ayWuBXMh"
                    alt="Capaci-Tati Premium"
                    className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(112,163,102,0.25)] scale-105"
                  />
                  <div className="absolute inset-0 rounded-2xl border border-success-gold animate-[ping_2.5s_infinite] opacity-5" />
                </div>
                <h3 className="font-display font-extrabold text-xl text-white">Liderança e Seriedade</h3>
                <p className="text-xs text-slate-400 max-w-sm">
                  Espaço premium projetado para maximizar a disciplina, concentração e assimilação rápida de conteúdo.
                </p>
              </div>

              {/* Bottom detail row */}
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <div className="flex items-center gap-1.5 text-xs text-slate-300">
                  <Users className="w-4 h-4 text-intellect-blue" />
                  <span>São Sebastião do Paraíso, Minas Gerais</span>
                </div>
                <div className="text-xs text-success-gold font-mono font-medium tracking-wider">
                  Marca Registrada
                </div>
              </div>
            </div>

            {/* Simulated actual local image (Graceful fallback fallback styling) */}
            {imageLoaded && (
              <img
                src="assets/hero-escola.jpg"
                alt="Reforço Escolar São Sebastião do Paraíso - Capaci-Tati Educação"
                onError={() => setImageLoaded(false)}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 hover:scale-105"
              />
            )}

            {/* Overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
          </div>



        </div>
      </div>
    </section>
  );
}
