"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickStatsBanner from "./components/QuickStatsBanner";
import BeforeAfterComparison from "./components/BeforeAfterComparison";
import NicheShowcase from "./components/NicheShowcase";
import PainPointsSection from "./components/PainPointsSection";
import AISearchSection from "./components/AISearchSection";
import RegionalCoverage from "./components/RegionalCoverage";
import InteractiveDiagnostic from "./components/InteractiveDiagnostic";
import DeliverablesChecklist from "./components/DeliverablesChecklist";
import MonthlyPlans from "./components/MonthlyPlans";
import SoftwareHubSection from "./components/SoftwareHubSection";
import PartnerHub from "./components/PartnerHub";
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

      <QuickStatsBanner />

      <div id="comparativo">
        <BeforeAfterComparison onOpenModal={handleOpenModal} />
      </div>

      <div id="nichos">
        <NicheShowcase onOpenModal={handleOpenModal} />
      </div>

      <div id="dores">
        <PainPointsSection onOpenModal={handleOpenModal} />
      </div>
      
      <div id="tecnologia-ia">
        <AISearchSection />
      </div>

      <div id="cobertura-regional">
        <RegionalCoverage onOpenModal={handleOpenModal} />
      </div>
      
      <div id="diagnostico">
        <InteractiveDiagnostic onOpenModal={handleOpenModal} />
      </div>

      <div id="entregaveis">
        <DeliverablesChecklist />
      </div>

      <div id="assessoria">
        <MonthlyPlans onOpenModal={handleOpenModal} />
      </div>

      <div id="sistemas">
        <SoftwareHubSection onOpenModal={handleOpenModal} />
      </div>

      <div id="solucoes-certificadas">
        <PartnerHub onOpenModal={handleOpenModal} />
      </div>

      <div id="faq">
        <FAQAccordion />
      </div>

      <Footer onOpenModal={handleOpenModal} />

      <ScheduleModal isOpen={modalOpen} onClose={handleCloseModal} />
    </main>
  );
}
