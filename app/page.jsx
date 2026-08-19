"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScheduleModal from "./components/ScheduleModal";

import AioHero from "./components/AioHero";
import AioIntro from "./components/AioIntro";
import AioServices from "./components/AioServices";
import AioHowItWorks from "./components/AioHowItWorks";
import AioToolsCta from "./components/AioToolsCta";
import AioWhyUs from "./components/AioWhyUs";
import FAQAccordion from "./components/FAQAccordion";
import AioContactForm from "./components/AioContactForm";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-dark)" }}>
      <Navbar onOpenModal={handleOpenModal} />
      
      <AioHero onOpenModal={handleOpenModal} />

      <AioIntro />

      <AioServices />

      <AioHowItWorks />

      <AioToolsCta onOpenModal={handleOpenModal} />

      <AioWhyUs />

      <FAQAccordion />

      <AioContactForm />

      <Footer onOpenModal={handleOpenModal} />

      <ScheduleModal isOpen={modalOpen} onClose={handleCloseModal} />
    </main>
  );
}
