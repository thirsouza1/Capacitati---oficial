import { useState } from "react";
import { Camera, Eye, MapPin, ZoomIn, X, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import GoogleDriveImage from "./GoogleDriveImage";

interface GaleriaExcelenciaProps {
  onOpenConsultation?: () => void;
  onOpenEspacoKids?: () => void;
}

export default function GaleriaExcelencia({ onOpenConsultation, onOpenEspacoKids }: GaleriaExcelenciaProps) {
  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  const images = [
    {
      id: 8,
      driveId: "1ITngDtdF76PaZHgx_MVKbF2oonoaXMZM",
      src: "https://lh3.googleusercontent.com/d/1ITngDtdF76PaZHgx_MVKbF2oonoaXMZM",
      title: "Fachada de Excelência",
      subtitle: "Sua nova jornada começa aqui",
      description: "A fachada de nossa sede física em São Sebastião do Paraíso. Uma estrutura de alto padrão, moderna e acolhedora, planejada nos mínimos detalhes para inspirar alto rendimento, bem-estar e o orgulho de pertencer desde o primeiro contato.",
      cols: "md:col-span-3 md:row-span-1",
      aspect: "aspect-[2/1] md:aspect-auto md:h-[340px]",
    },
    {
      id: 1,
      driveId: "1jO9FiyIVCLqFREwHnvz28m4gAWF3t9G_",
      src: "https://lh3.googleusercontent.com/d/1jO9FiyIVCLqFREwHnvz28m4gAWF3t9G_",
      title: "Salas de Atendimento Individualizado",
      subtitle: "Foco absoluto, livre de distrações periféricas",
      description: "Salas confortáveis e altamente focadas, livres de distrações, perfeitas para o reforço escolar um-a-um de alta atenção.",
      cols: "md:col-span-2 md:row-span-2",
      aspect: "aspect-[4/3] md:aspect-auto md:h-full",
    },
    {
      id: 2,
      driveId: "1DBu0Ol1JW8RVGtRvc3c0IwuqIi8ZxpU4",
      src: "https://lh3.googleusercontent.com/d/1DBu0Ol1JW8RVGtRvc3c0IwuqIi8ZxpU4",
      title: "Biblioteca Real",
      subtitle: "Acervo atualizado de obras e editais",
      description: "Acervo completo de obras nacionais, apostilas direcionadas e editais atualizados para facilitar a absorção de conhecimento.",
      cols: "md:col-span-1 md:row-span-1",
      aspect: "aspect-square",
    },
    {
      id: 3,
      driveId: "12hVYOFhR9-pFeWPu6SDigdwGks39j7M8",
      src: "https://lh3.googleusercontent.com/d/12hVYOFhR9-pFeWPu6SDigdwGks39j7M8",
      title: "Estações de Estudo Concurseiro",
      subtitle: "Simulação real das condições da prova",
      description: "Estações equipadas para simular com precisão o cenário de exames oficiais, focando no desenvolvimento de foco sob pressão.",
      cols: "md:col-span-1 md:row-span-1",
      aspect: "aspect-square",
    },
    {
      id: 4,
      driveId: "18c3e-GvX6K0akLjhBcv1xbFFMYjKdKYD",
      src: "https://lh3.googleusercontent.com/d/18c3e-GvX6K0akLjhBcv1xbFFMYjKdKYD",
      title: "Recepção Executiva",
      subtitle: "Espaço de acolhimento para pais e alunos",
      description: "Acolhimento humanizado planejado para receber os pais, discutir metas pedagógicas e monitorar a evolução dos alunos.",
      cols: "md:col-span-1 md:row-span-1",
      aspect: "aspect-square",
    },
    {
      id: 6,
      driveId: "15PUu9Avg9WmaykiJ5fbrCGd-q4UbAWDi",
      src: "https://lh3.googleusercontent.com/d/15PUu9Avg9WmaykiJ5fbrCGd-q4UbAWDi",
      title: "Espaço Kid/Teens Criativo - Atividades Lúdicas",
      subtitle: "Jogos pedagógicos e estratégicos",
      description: "Uso de jogos e atividades lúdicas adaptadas ao conteúdo escolar para facilitar o processo de aprendizagem.",
      cols: "md:col-span-1 md:row-span-1",
      aspect: "aspect-square",
    },
    {
      id: 5,
      driveId: "1oaTNQJJ7xLMnPsR3kwBz_V3z5xmYiRPW",
      src: "https://lh3.googleusercontent.com/d/1oaTNQJJ7xLMnPsR3kwBz_V3z5xmYiRPW",
      title: "Sala de Simulado Monitorado",
      subtitle: "Gestão do tempo de prova e concentração",
      description: "Atividades simuladas cronometradas com supervisão dedicada, gerando autoconfiança de prova e eliminação da ansiedade.",
      cols: "md:col-span-1 md:row-span-2",
      aspect: "aspect-[1/2] md:aspect-auto md:h-full",
    },
    {
      id: 7,
      driveId: "1vcJRX0M1NnpSl8ufbMR1MPcdbxijAYn0",
      src: "https://lh3.googleusercontent.com/d/1vcJRX0M1NnpSl8ufbMR1MPcdbxijAYn0",
      title: "Espaço Kid/Teens Criativo - Aprendizado Ativo",
      subtitle: "Jogos lúdicos e materiais de apoio",
      description: "Atividades interativas planejadas para prender a atenção e transformar conceitos complexos em conquistas divertidas.",
      cols: "md:col-span-2 md:row-span-1",
      aspect: "aspect-[2/1] md:aspect-auto md:h-[220px]",
    },
  ];

  const handleScheduleClick = () => {
    setSelectedImage(null);
    if (onOpenConsultation) {
      setTimeout(() => {
        onOpenConsultation();
      }, 280);
    }
  };

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
            Dê um tour de excelência em nossa escola. Cada detalhe, a iluminação e a disposição das mesas do nosso espaço físico em São Sebastião do Paraíso foram planejados para otimizar o foco e a aprendizagem. Clique nos cards abaixo para explorar os detalhes de cada espaço.
          </p>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          {images.map((img) => (
            <div
              key={img.id}
              id={`gallery-item-${img.id}`}
              onClick={() => {
                if ((img.id === 6 || img.id === 7) && onOpenEspacoKids) {
                  onOpenEspacoKids();
                } else {
                  setSelectedImage(img);
                }
              }}
              className={`group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 shadow-md ${img.cols} ${img.aspect} transition-all duration-300 hover:shadow-xl cursor-pointer hover:border-success-gold/40 hover:scale-[1.01]`}
            >
              
              {/* Fallback decoration (shows if actual photo is missing/loading) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/90 via-slate-800/80 to-slate-200 flex flex-col justify-between p-6">
                <div className="flex items-center justify-between">
                  <div className="p-1 px-2.5 rounded-full bg-black/40 border border-white/20 text-white flex items-center gap-1.5 text-[10px] font-mono tracking-wider">
                    <Camera className="w-3.5 h-3.5 text-success-gold" />
                    <span>EM DESTAQUE</span>
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
              {img.driveId ? (
                <GoogleDriveImage
                  key={img.driveId}
                  driveId={img.driveId}
                  alt={`${img.title} - Reforço Escolar São Sebastião do Paraíso - Capaci-Tati Educação`}
                  className={`absolute inset-0 w-full h-full ${img.id === 8 ? "object-cover object-top" : "object-cover"} mix-blend-overlay group-hover:scale-105 group-hover:opacity-20 transition-all duration-500`}
                />
              ) : (
                <img
                  src={img.src}
                  alt={`${img.title} - Reforço Escolar São Sebastião do Paraíso - Capaci-Tati Educação`}
                  className={`absolute inset-0 w-full h-full ${img.id === 8 ? "object-cover object-top" : "object-cover"} mix-blend-overlay group-hover:scale-105 group-hover:opacity-20 transition-all duration-500`}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              )}

              {/* Sutil overlay (10% opacity) as requested */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors pointer-events-none" />

            </div>
          ))}
        </div>
      </div>

      {/* Details Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
            >
              {/* Image Preview Block */}
              <div className="relative aspect-video w-full bg-slate-950 overflow-hidden group">
                {selectedImage.driveId ? (
                   <GoogleDriveImage
                     key={selectedImage.driveId} driveId={selectedImage.driveId}
                     alt={selectedImage.title}
                     className={`w-full h-full ${selectedImage.id === 8 ? "object-cover object-top" : "object-cover"}`}
                   />
                 ) : (
                   <img
                     src={selectedImage.src}
                     alt={selectedImage.title}
                     className={`w-full h-full ${selectedImage.id === 8 ? "object-cover object-top" : "object-cover"}`}
                     onError={(e) => {
                       e.currentTarget.style.display = "none";
                     }}
                   />
                 )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Close Button */}
                <button
                  id="close-gallery-modal"
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-950/60 hover:bg-slate-950/90 border border-white/10 rounded-xl transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Overlaid Title on Image */}
                <div className="absolute bottom-6 left-6 right-6 space-y-1">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-success-gold bg-success-gold/10 px-2.5 py-1 rounded-full border border-success-gold/25 w-fit block">
                    {selectedImage.subtitle}
                  </span>
                  <h4 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight">
                    {selectedImage.title}
                  </h4>
                </div>
              </div>

              {/* Main Information Details Panel */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-intellect-blue">
                    <Sparkles className="w-4 h-4 text-success-gold" />
                    <span>Diferencial Exclusivo</span>
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                    {selectedImage.description}
                  </p>
                </div>

                {/* Diagnostic Booking Option */}
                <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-left">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Agende uma Visita</span>
                    <span className="text-xs text-slate-400">Venha conhecer nosso espaço pessoalmente!</span>
                  </div>

                  <button
                    id="schedule-diag-eval-gallery"
                    onClick={handleScheduleClick}
                    className="w-full sm:w-auto px-5 py-3.5 bg-success-gold text-primary-navy hover:brightness-105 active:scale-[0.98] transition-all font-display text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Agendar avaliação Diagnostica</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
