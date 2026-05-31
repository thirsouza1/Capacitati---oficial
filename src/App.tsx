/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import CursosPilares from "./components/CursosPilares";
import MetodoTimeline from "./components/MetodoTimeline";
import GaleriaExcelencia from "./components/GaleriaExcelencia";
import Depoimentos from "./components/Depoimentos";
import FooterConversao from "./components/FooterConversao";
import WhatsappButton from "./components/WhatsappButton";
import LeadModal from "./components/LeadModal";
import AulasInfoModal from "./components/AulasInfoModal";
import EspacoKidsModal from "./components/EspacoKidsModal";
import TrabalheConoscoModal from "./components/TrabalheConoscoModal";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [aulasModalOpen, setAulasModalOpen] = useState(false);
  const [kidsModalOpen, setKidsModalOpen] = useState(false);
  const [trabalheConoscoOpen, setTrabalheConoscoOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const openAulasModal = () => setAulasModalOpen(true);
  const closeAulasModal = () => setAulasModalOpen(false);

  const openKidsModal = () => setKidsModalOpen(true);
  const closeKidsModal = () => setKidsModalOpen(false);

  const openTrabalheConosco = () => setTrabalheConoscoOpen(true);
  const closeTrabalheConosco = () => setTrabalheConoscoOpen(false);

  return (
    <>
      {/* Intro Preloader Experience */}
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Layout Presentation */}
      <div className="min-h-screen bg-slate-950 flex flex-col justify-between font-sans overflow-x-hidden">
        
        {/* Animated Reveal of Page content after loading completed */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          {/* Main sticky navigation header */}
          <Header onOpenConsultation={openModal} onOpenTrabalheConosco={openTrabalheConosco} />

          {/* Page segments */}
          <main>
            <Hero onOpenConsultation={openModal} />
            <TrustBar />
            <CursosPilares onOpenConsultation={openModal} onOpenAulasInfo={openAulasModal} onOpenEspacoKids={openKidsModal} />
            <MetodoTimeline />
            <GaleriaExcelencia onOpenConsultation={openModal} onOpenEspacoKids={openKidsModal} />
            <Depoimentos />
          </main>

          {/* Premium Footer with location and contact vectors */}
          <FooterConversao />

          {/* Standard floating CTAs and modals */}
          <WhatsappButton />
          <LeadModal isOpen={modalOpen} onClose={closeModal} />
          <AulasInfoModal isOpen={aulasModalOpen} onClose={closeAulasModal} onSchedule={openModal} />
          <EspacoKidsModal isOpen={kidsModalOpen} onClose={closeKidsModal} />
          <TrabalheConoscoModal isOpen={trabalheConoscoOpen} onClose={closeTrabalheConosco} />
        </motion.div>

      </div>
    </>
  );
}
