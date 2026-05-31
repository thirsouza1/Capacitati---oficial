import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award } from "lucide-react";
import GoogleDriveImage from "./GoogleDriveImage";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Stage 1: Glint Seal for 1.8s
    const timer1 = setTimeout(() => {
      setStep(1);
    }, 1800);

    // Stage 2: Subtitle text for 1.8s
    const timer2 = setTimeout(() => {
      setStep(2);
    }, 3600);

    // Done at 4.2s
    const timer3 = setTimeout(() => {
      onComplete();
    }, 4200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-50 overflow-hidden px-4">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="seal"
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -10 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="p-3 rounded-2xl bg-slate-900 border border-success-gold/30 shadow-2xl relative overflow-hidden group flex items-center justify-center w-28 h-28">
              <GoogleDriveImage
                driveId="1GgbacDCy4bFSI38YaqdqJNW3ayWuBXMh"
                alt="Capaci-Tati Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(112,163,102,0.3)]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>

            <h1 className="font-display font-extrabold text-3xl md:text-5xl tracking-wider text-success-gold select-none relative">
              CAPACI-TATI
            </h1>
            
            <p className="text-[10px] md:text-xs font-mono tracking-[0.25em] text-success-gold/80 bg-success-gold/10 px-3 py-1 rounded border border-success-gold/20 uppercase">
              Marca Registrada INPI
            </p>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="tagline"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center"
          >
            <p className="font-display text-lg md:text-2xl text-slate-100 font-medium tracking-wide">
              "Transformando potencial em aprovação..."
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative ambient subtle background glows */}
      <div className="absolute w-96 h-96 rounded-full bg-intellect-blue/10 blur-[120px] top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute w-96 h-96 rounded-full bg-success-gold/5 blur-[120px] bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 pointer-events-none" />
    </div>
  );
}
