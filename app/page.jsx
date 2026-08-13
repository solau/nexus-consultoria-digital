"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PainPointsSection from "./components/PainPointsSection";
import AISearchSection from "./components/AISearchSection";
import InteractiveDiagnostic from "./components/InteractiveDiagnostic";
import DeliverablesChecklist from "./components/DeliverablesChecklist";
import MonthlyPlans from "./components/MonthlyPlans";
import SoftwareHubSection from "./components/SoftwareHubSection";
import PartnerHub from "./components/PartnerHub";
import NicheShowcase from "./components/NicheShowcase";
import FAQAccordion from "./components/FAQAccordion";
import Footer from "./components/Footer";
import ScheduleModal from "./components/ScheduleModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-dark)" }}>
      <Navbar onOpenModal={handleOpenModal} />
      
      <Hero onOpenModal={handleOpenModal} />

      <PainPointsSection onOpenModal={handleOpenModal} />
      
      <AISearchSection />
      
      <div id="diagnostico">
        <InteractiveDiagnostic onOpenModal={handleOpenModal} />
      </div>

      <DeliverablesChecklist />

      <MonthlyPlans onOpenModal={handleOpenModal} />

      <SoftwareHubSection onOpenModal={handleOpenModal} />

      <PartnerHub onOpenModal={handleOpenModal} />

      <NicheShowcase onOpenModal={handleOpenModal} />

      <FAQAccordion />

      <Footer onOpenModal={handleOpenModal} />

      <ScheduleModal isOpen={modalOpen} onClose={handleCloseModal} />
    </main>
  );
}
