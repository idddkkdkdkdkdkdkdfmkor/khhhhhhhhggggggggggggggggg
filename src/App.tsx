import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BranchesPage } from './pages/BranchesPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { GalleryPage } from './pages/GalleryPage';
import { MandatoryDisclosurePage } from './pages/MandatoryDisclosurePage';
import { ContactPage } from './pages/ContactPage';
import { OurTeamPage } from './pages/OurTeamPage';
import { BoardResultsPage } from './pages/BoardResultsPage';
import { ScholarshipPage } from './pages/ScholarshipPage';
import { SchoolAwardsPage } from './pages/SchoolAwardsPage';
import { NoticeBoardPage } from './pages/NoticeBoardPage';
import { CareerPage } from './pages/CareerPage';

import { AdmissionFormModal } from './components/AdmissionFormModal';
import { FeePaymentModal } from './components/FeePaymentModal';
import { TcVerificationModal } from './components/TcVerificationModal';
import { ParentsLoginModal } from './components/ParentsLoginModal';
import { VnaChatBotModal } from './components/VnaChatBotModal';
import { GalleryLightbox } from './components/GalleryLightbox';
import { FloatingSidebar } from './components/FloatingSidebar';

import { BranchId, GalleryItem } from './types';
import { GALLERY_ITEMS } from './data/schoolData';
import { Phone, Sparkles, MessageCircle, Bot } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedBranch, setSelectedBranch] = useState<BranchId>('aashiana');

  // Modals state
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);
  const [feeModalOpen, setFeeModalOpen] = useState(false);
  const [tcModalOpen, setTcModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [chatBotModalOpen, setChatBotModalOpen] = useState(false);

  // Gallery Lightbox state
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const handleNextLightbox = () => {
    if (!lightboxItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === lightboxItem.id);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    setLightboxItem(GALLERY_ITEMS[nextIndex]);
  };

  const handlePrevLightbox = () => {
    if (!lightboxItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === lightboxItem.id);
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setLightboxItem(GALLERY_ITEMS[prevIndex]);
  };

  return (
    <div className="kg-app-root">
      {/* Navigation — fixed sidebar on desktop, top header on mobile */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        selectedBranch={selectedBranch}
        setSelectedBranch={setSelectedBranch}
        openFeeModal={() => setFeeModalOpen(true)}
        openTcModal={() => setTcModalOpen(true)}
        openAdmissionModal={() => setAdmissionModalOpen(true)}
        openLoginModal={() => setLoginModalOpen(true)}
        openChatBotModal={() => setChatBotModalOpen(true)}
      />

      {/* Main content area — offset by sidebar on desktop, full width on mobile */}
      <div className="kg-content-area">
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomePage
            setCurrentTab={setCurrentTab}
            selectedBranch={selectedBranch}
            setSelectedBranch={setSelectedBranch}
            openFeeModal={() => setFeeModalOpen(true)}
            openTcModal={() => setTcModalOpen(true)}
            openAdmissionModal={() => setAdmissionModalOpen(true)}
            onOpenLightbox={(item) => setLightboxItem(item)}
          />
        )}

        {currentTab === 'about' && (
          <AboutPage
            openAdmissionModal={() => setAdmissionModalOpen(true)}
            setCurrentTab={setCurrentTab}
          />
        )}

        {currentTab === 'team' && (
          <OurTeamPage
            openAdmissionModal={() => setAdmissionModalOpen(true)}
            setCurrentTab={setCurrentTab}
          />
        )}

        {currentTab === 'branches' && (
          <BranchesPage
            selectedBranch={selectedBranch}
            setSelectedBranch={setSelectedBranch}
            openAdmissionModal={() => setAdmissionModalOpen(true)}
            setCurrentTab={setCurrentTab}
          />
        )}

        {(currentTab === 'academics' || currentTab === 'curriculum' || currentTab === 'books' || currentTab === 'calendar' || currentTab === 'competitive') && (
          <AcademicsPage
            openAdmissionModal={() => setAdmissionModalOpen(true)}
            setCurrentTab={setCurrentTab}
          />
        )}

        {(currentTab === 'admissions' || currentTab === 'rules' || currentTab === 'uniform' || currentTab === 'subject-combination') && (
          <AdmissionsPage
            openAdmissionModal={() => setAdmissionModalOpen(true)}
            selectedBranch={selectedBranch}
          />
        )}

        {(currentTab === 'facilities' || currentTab === 'learning-beyond') && (
          <FacilitiesPage
            openAdmissionModal={() => setAdmissionModalOpen(true)}
            setCurrentTab={setCurrentTab}
          />
        )}

        {currentTab === 'gallery' && (
          <GalleryPage
            onOpenLightbox={(item) => setLightboxItem(item)}
          />
        )}

        {currentTab === 'disclosure' && (
          <MandatoryDisclosurePage />
        )}

        {currentTab === 'results' && (
          <BoardResultsPage
            openAdmissionModal={() => setAdmissionModalOpen(true)}
            setCurrentTab={setCurrentTab}
          />
        )}

        {currentTab === 'scholarship' && (
          <ScholarshipPage
            openAdmissionModal={() => setAdmissionModalOpen(true)}
            setCurrentTab={setCurrentTab}
          />
        )}

        {currentTab === 'awards' && (
          <SchoolAwardsPage
            openAdmissionModal={() => setAdmissionModalOpen(true)}
            setCurrentTab={setCurrentTab}
          />
        )}

        {currentTab === 'notice-board' && (
          <NoticeBoardPage />
        )}

        {currentTab === 'career' && (
          <CareerPage />
        )}

        {currentTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer
        setCurrentTab={setCurrentTab}
        setSelectedBranch={setSelectedBranch}
        openFeeModal={() => setFeeModalOpen(true)}
        openTcModal={() => setTcModalOpen(true)}
        openAdmissionModal={() => setAdmissionModalOpen(true)}
      />
      </div>{/* end kg-content-area */}

      {/* Floating Action Menu from vishwanathacademy.com */}
      <FloatingSidebar
        openAdmissionModal={() => setAdmissionModalOpen(true)}
        openFeeModal={() => setFeeModalOpen(true)}
        openTcModal={() => setTcModalOpen(true)}
        setCurrentTab={setCurrentTab}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end">
        {/* Quick Admission CTA */}
        <button
          onClick={() => setAdmissionModalOpen(true)}
          className="bg-[#aa2c38] hover:bg-[#8c1f2b] text-white font-bold text-xs py-2.5 px-4 rounded-full shadow-xl flex items-center gap-2 transform hover:scale-105 transition cursor-pointer border border-white/20"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span className="hidden sm:inline">Admissions Open 2026-27</span>
          <span className="sm:hidden">Apply Online</span>
        </button>

        {/* AI Virtual Desk Assistant */}
        <button
          onClick={() => setChatBotModalOpen(true)}
          className="w-12 h-12 rounded-full bg-[#ff885e] hover:bg-[#e06e44] text-white flex items-center justify-center shadow-xl transform hover:scale-110 transition cursor-pointer"
          title="VNA Virtual Assistant"
          aria-label="VNA Virtual Assistant"
        >
          <Bot className="w-6 h-6" />
        </button>

        {/* Call School Desk */}
        <a
          href="tel:9695660388"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-xl transform hover:scale-110 transition cursor-pointer"
          title="Direct Call to School Desk"
          aria-label="Call school admissions"
        >
          <Phone className="w-5 h-5 animate-pulse" />
        </a>
      </div>

      {/* Modals */}
      <AdmissionFormModal
        isOpen={admissionModalOpen}
        onClose={() => setAdmissionModalOpen(false)}
        defaultBranch={selectedBranch}
      />

      <FeePaymentModal
        isOpen={feeModalOpen}
        onClose={() => setFeeModalOpen(false)}
      />

      <TcVerificationModal
        isOpen={tcModalOpen}
        onClose={() => setTcModalOpen(false)}
      />

      <ParentsLoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />

      <VnaChatBotModal
        isOpen={chatBotModalOpen}
        onClose={() => setChatBotModalOpen(false)}
        openAdmissionModal={() => setAdmissionModalOpen(true)}
        openFeeModal={() => setFeeModalOpen(true)}
      />

      <GalleryLightbox
        item={lightboxItem}
        items={GALLERY_ITEMS}
        onClose={() => setLightboxItem(null)}
        onNext={handleNextLightbox}
        onPrev={handlePrevLightbox}
      />
    </div>
  );
}
