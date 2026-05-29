import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, Award } from "lucide-react";

interface HeaderProps {
  onOpenConsultation: () => void;
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Cursos", href: "#cursos" },
    { label: "Metodologia", href: "#metodologia" },
    { label: "Galeria", href: "#galeria" },
    { label: "Resultados", href: "#depoimentos" },
  ];

  return (
    <>
      <header id="site-header" className="sticky top-0 bg-primary-navy/95 backdrop-blur-md text-white z-40 border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="p-1 rounded-lg bg-slate-800 border border-success-gold/35 flex items-center justify-center w-11 h-11 overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/d/1GgbacDCy4bFSI38YaqdqJNW3ayWuBXMh"
                alt="Capaci-Tati Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl md:text-2xl leading-none tracking-tight text-white">
                Capaci-Tati
              </span>
              <span className="text-[9px] font-mono tracking-wider uppercase text-success-gold mt-0.5">
                Aprimoramento Escolar
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-success-gold transition-colors relative group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-success-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenConsultation}
              className="relative px-5 py-2 font-display text-xs font-bold uppercase tracking-wider text-primary-navy bg-success-gold rounded-full transition-all hover:scale-105 active:scale-95 shadow-md flex items-center gap-2 group cursor-pointer"
            >
              <span className="absolute inset-0 rounded-full bg-success-gold animate-[ping_1.5s_infinite] opacity-25" />
              <span className="relative z-10 flex items-center gap-1.5">
                Matrículas Abertas
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburguer Menu Button - Highly Exposed & Premium */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center gap-2 px-3 py-1.8 rounded-xl bg-slate-900/90 border border-success-gold/35 text-slate-200 hover:text-success-gold hover:border-success-gold hover:bg-slate-850 active:scale-95 transition-all shadow-md group cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span className="font-display text-xs font-bold uppercase tracking-wider text-slate-200 group-hover:text-success-gold transition-colors pl-1">
              {mobileMenuOpen ? "Fechar" : "Menu"}
            </span>
            <div className="p-1 rounded-lg bg-slate-800/80 text-success-gold group-hover:bg-success-gold group-hover:text-primary-navy transition-all">
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[73px] bg-primary-navy flex flex-col justify-between z-40 md:hidden p-8 border-t border-white/5"
          >
            <div className="flex flex-col gap-6 mt-4">
              {menuItems.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-display font-semibold text-slate-100 hover:text-success-gold transition-colors py-2 border-b border-white/5"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-4 text-center text-sm font-display font-bold uppercase tracking-wider text-primary-navy bg-success-gold rounded-xl shadow-lg flex items-center justify-center gap-2"
              >
                Matrículas Abertas
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-slate-500 text-xs mt-4">
                Líder em Educação e Concursos em São Sebastião do Paraíso
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
