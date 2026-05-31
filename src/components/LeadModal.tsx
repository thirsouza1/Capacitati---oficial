import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check } from "lucide-react";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [segment, setSegment] = useState("kids");
  const [submitted, setSubmitted] = useState(false);

  const formatPhone = (value: string) => {
    const cleanValue = value.replace(/\D/g, "");
    const limitedValue = cleanValue.substring(0, 11);
    
    if (limitedValue.length === 0) {
      return "";
    } else if (limitedValue.length <= 2) {
      return `(${limitedValue}`;
    } else if (limitedValue.length <= 6) {
      return `(${limitedValue.substring(0, 2)}) ${limitedValue.substring(2)}`;
    } else if (limitedValue.length <= 10) {
      return `(${limitedValue.substring(0, 2)}) ${limitedValue.substring(2, 6)}-${limitedValue.substring(6)}`;
    } else {
      return `(${limitedValue.substring(0, 2)}) ${limitedValue.substring(2, 7)}-${limitedValue.substring(7)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
    setPhoneError("");
  };

  const validatePhone = (value: string) => {
    const clean = value.replace(/\D/g, "");
    if (clean.length < 10) {
      return "Insira um número com DDD válido (mínimo de 10 dígitos).";
    }
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const error = validatePhone(phone);
    if (error) {
      setPhoneError(error);
      return;
    }
    setPhoneError("");

    // Simulate elite submission success
    setSubmitted(true);

    // After 2.5s, auto redirect beautifully to the WhatsApp link filled with custom message
    setTimeout(() => {
      const formattedPhone = phone.replace(/\D/g, "");
      const segmentText = segment === "kids" ? "Reforço & Aprimoramento Escolar para meu filho" : "Preparatório Premium para Concursos públicos";
      const whatsappMsg = `Olá Capaci-Tati! Meu nome é ${name} (tel: ${phone}) e gostaria de agendar uma consulta gratuita sobre o ${segmentText}.`;
      const encodedMsg = encodeURIComponent(whatsappMsg);
      window.open(`https://wa.me/5535988330353?text=${encodedMsg}`, "_blank");
      onClose();
      setSubmitted(false);
      setName("");
      setPhone("");
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary-navy/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-10"
          >
            
            {/* Elegant upper stripe header */}
            <div className="bg-gradient-to-r from-primary-navy to-slate-800 p-6 md:p-8 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <p className="text-xs font-mono text-success-gold uppercase tracking-widest font-bold mb-1">
                Matrículas Abertas • Vagas Limitadas
              </p>
              <h3 className="font-display font-extrabold text-xl md:text-2xl text-white">
                Garanta seu Agendamento
              </h3>
              <p className="text-xs text-slate-300 mt-1 max-w-sm">
                Preencha seus dados para conversamos diretamente no WhatsApp e traçar o diagnóstico personalizado de estudo.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 block">Seu Nome Completo:</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: João da Silva"
                      className="w-full px-4 py-3 text-sm text-primary-navy placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:border-intellect-blue focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 block">Celular com WhatsApp:</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="Ex: (35) 98833-0353"
                      className={`w-full px-4 py-3 text-sm text-primary-navy placeholder-slate-400 bg-slate-50 border rounded-xl focus:bg-white focus:outline-none transition-colors ${
                        phoneError ? "border-rose-500 focus:border-rose-500" : "border-slate-200 focus:border-intellect-blue"
                      }`}
                    />
                    {phoneError && (
                      <p className="text-xs text-rose-500 font-medium mt-1">{phoneError}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 block">Seu objetivo:</label>
                    <div className="grid grid-cols-2 gap-3 pb-2">
                      <button
                        type="button"
                        onClick={() => setSegment("kids")}
                        className={`p-3 text-left border rounded-xl text-xs font-semibold select-none cursor-pointer transition-all ${
                          segment === "kids"
                            ? "bg-slate-900 border-slate-900 text-white shadow-md font-bold"
                            : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100"
                        }`}
                      >
                        Reforço Escolar
                      </button>
                      <button
                        type="button"
                        onClick={() => setSegment("concurseiros")}
                        className={`p-3 text-left border rounded-xl text-xs font-semibold select-none cursor-pointer transition-all ${
                          segment === "concurseiros"
                            ? "bg-slate-900 border-slate-900 text-white shadow-md font-bold"
                            : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100"
                        }`}
                      >
                        Concursos
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 font-display text-xs font-bold uppercase tracking-wider text-primary-navy bg-success-gold hover:brightness-105 active:scale-[0.98] transition-all rounded-xl shadow-lg cursor-pointer"
                  >
                    Prosseguir para o WhatsApp
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h4 className="font-display font-black text-xl text-primary-navy">
                    Dados Registrados!
                  </h4>
                  <p className="text-sm text-slate-500 max-w-xs">
                    Redirecionando você instantaneamente para o WhatsApp para formalizar seu atendimento personalizado.
                  </p>
                </motion.div>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
