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
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

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
          <Header onOpenConsultation={openModal} />

          {/* Page segments */}
          <main>
            <Hero onOpenConsultation={openModal} />
            <TrustBar />
            <CursosPilares onOpenConsultation={openModal} />
            <MetodoTimeline />
            <GaleriaExcelencia />
            <Depoimentos />
          </main>

          {/* Premium Footer with location and contact vectors */}
          <FooterConversao />

          {/* Standard floating CTAs and modals */}
          <WhatsappButton />
          <LeadModal isOpen={modalOpen} onClose={closeModal} />
        </motion.div>

      </div>
    </>
  );
}
