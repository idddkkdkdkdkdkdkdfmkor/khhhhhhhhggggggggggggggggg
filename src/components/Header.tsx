import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Phone, Mail, ChevronDown, ChevronRight,
  CreditCard, FileCheck, Sparkles, User, Bot,
  Facebook, Youtube, Instagram, Linkedin,
  Home, BookOpen, Award, ClipboardList, GraduationCap,
  Bell, Image, Contact, Download, MessageCircle, Briefcase
} from 'lucide-react';
import { SCHOOL_INFO, BRANCHES_DATA } from '../data/schoolData';
import { BranchId } from '../types';

/* ─────────────────── BREAKPOINT ───────────────────────────────────────────
   Sidebar (250px) + reasonable content (810px) + scrollbar margin = 1060px.
   Below this CSS viewport width the sidebar collapses automatically.
   This handles browser zoom changes (zoom alters the CSS viewport width).
──────────────────────────────────────────────────────────────────────────── */
const SIDEBAR_BREAKPOINT = 1060;

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  selectedBranch: BranchId;
  setSelectedBranch: (b: BranchId) => void;
  openFeeModal: () => void;
  openTcModal: () => void;
  openAdmissionModal: () => void;
  openLoginModal?: () => void;
  openChatBotModal?: () => void;
}

/* ─── Small Twitter/X icon (not in lucide) ──────────────────────────────── */
const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

/* ─── Animated Hamburger ☰ → ✕ ──────────────────────────────────────────── */
const HamburgerIcon: React.FC<{ open: boolean }> = ({ open }) => (
  <span className="hamburger-icon" aria-hidden="true">
    <span className={`bar bar-1 ${open ? 'bar-1-open' : ''}`} />
    <span className={`bar bar-2 ${open ? 'bar-2-open' : ''}`} />
    <span className={`bar bar-3 ${open ? 'bar-3-open' : ''}`} />
  </span>
);

/* ─── Sidebar nav item shapes ────────────────────────────────────────────── */
interface NavItemDef {
  label: string;
  tab?: string;
  icon?: React.ReactNode;
  children?: { label: string; tab?: string; branch?: BranchId; action?: string }[];
}

const NAV_ITEMS: NavItemDef[] = [
  { label: 'Home', tab: 'home', icon: <Home className="w-4 h-4" /> },
  {
    label: 'About Us', tab: 'about', icon: <BookOpen className="w-4 h-4" />,
    children: [
      { label: 'About Us', tab: 'about' },
      { label: 'Our Team', tab: 'team' },
      { label: 'Facilities', tab: 'facilities' },
      { label: 'Learning Beyond Classroom', tab: 'learning-beyond' },
      { label: 'Disclosure – Senior Wing', tab: 'disclosure', branch: 'aashiana' as BranchId },
      { label: 'Disclosure – Junior Wing', tab: 'disclosure', branch: 'dhawapur' as BranchId },
    ],
  },
  {
    label: 'Results', tab: 'results', icon: <Award className="w-4 h-4" />,
    children: [
      { label: 'Board Results', tab: 'results' },
      { label: 'School Awards', tab: 'awards' },
      { label: 'Scholarship', tab: 'scholarship' },
    ],
  },
  {
    label: 'Admissions', tab: 'admissions', icon: <ClipboardList className="w-4 h-4" />,
    children: [
      { label: 'Apply Now', tab: 'admissions', action: 'admission' },
      { label: 'Admission Procedure', tab: 'admissions' },
      { label: 'Fee Structure – Senior Wing', tab: 'admissions', branch: 'aashiana' as BranchId },
      { label: 'Fee Structure – Junior Wing', tab: 'admissions', branch: 'dhawapur' as BranchId },
      { label: 'School Rules', tab: 'rules' },
      { label: 'School Uniform (IDCraft Store)', tab: 'orders' },
      { label: 'Subject Combinations', tab: 'subject-combination' },
    ],
  },
  {
    label: 'Academics', tab: 'academics', icon: <GraduationCap className="w-4 h-4" />,
    children: [
      { label: 'Curriculum Overview', tab: 'academics' },
      { label: 'Books & Stationary', tab: 'books' },
      { label: 'Activity Calendar', tab: 'calendar' },
      { label: 'Competitive Exams', tab: 'competitive' },
    ],
  },
  { label: 'Notice Board', tab: 'notice-board', icon: <Bell className="w-4 h-4" /> },
  {
    label: 'Students Corner', tab: 'gallery', icon: <Image className="w-4 h-4" />,
    children: [
      { label: 'Photo Gallery', tab: 'gallery' },
      { label: 'Career Openings', tab: 'career' },
    ],
  },
  { label: 'Download TC', tab: 'tc', icon: <Download className="w-4 h-4" /> },
  { label: 'Contact Us', tab: 'contact', icon: <Contact className="w-4 h-4" /> },
  { label: 'Parents Login', tab: 'login', icon: <User className="w-4 h-4" /> },
  { label: 'VNA ChatBot', tab: 'chatbot', icon: <MessageCircle className="w-4 h-4" /> },
];

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  selectedBranch,
  setSelectedBranch,
  openFeeModal,
  openTcModal,
  openAdmissionModal,
  openLoginModal,
  openChatBotModal,
}) => {
  /* ── responsive state ── */
  const [isNarrow, setIsNarrow] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(`(max-width: ${SIDEBAR_BREAKPOINT - 1}px)`).matches;
    }
    return false;
  });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  /* ── watch viewport width ──
     Uses window.matchMedia for accurate CSS layout breakpoint tracking across
     window resize, window snap/maximize, screen changes, and browser zoom.
  ── */
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${SIDEBAR_BREAKPOINT - 1}px)`);

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      const narrow = e.matches;
      setIsNarrow(narrow);
      // When crossing breakpoint in either direction:
      // close drawer, reset mobile submenus, reset desktop dropdowns
      setDrawerOpen(false);
      setOpenMobileSection(null);
      setOpenDropdown(null);
    };

    // Initial check
    handleChange(mql);

    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);


  /* ── close drawer on ESC ── */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  /* ── prevent body scroll when drawer is open ── */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const handleNav = useCallback((tab: string, branch?: BranchId, action?: string) => {
    if (action === 'admission') { openAdmissionModal(); return; }
    if (tab === 'tc') { openTcModal(); return; }
    if (tab === 'login') { openLoginModal?.(); return; }
    if (tab === 'chatbot') { openChatBotModal?.(); return; }
    if (tab === 'orders') { window.open('https://orders.idcraftindia.com', '_blank', 'noopener,noreferrer'); return; }
    setCurrentTab(tab);
    if (branch) setSelectedBranch(branch);
    setDrawerOpen(false);
    setOpenDropdown(null);
    setOpenMobileSection(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [openAdmissionModal, openTcModal, openLoginModal, openChatBotModal, setCurrentTab, setSelectedBranch]);

  const isActive = (item: NavItemDef) => {
    if (!item.tab) return false;
    if (item.tab === currentTab) return true;
    if (item.children) return item.children.some(c => c.tab === currentTab);
    return false;
  };

  /* ══════════════════════════════════════════════════════════════════════════
     DESKTOP LEFT SIDEBAR — only rendered when viewport ≥ SIDEBAR_BREAKPOINT
  ══════════════════════════════════════════════════════════════════════════ */
  const DesktopSidebar = () => (
    <aside
      className="kg-sidebar"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div
        className="kg-sidebar__logo"
        onClick={() => handleNav('home')}
        role="button"
        tabIndex={0}
        aria-label="Go to home"
        onKeyDown={e => e.key === 'Enter' && handleNav('home')}
      >
        <div className="kg-logo-badge">KG</div>
        <div className="kg-logo-text">
          <span className="kg-logo-name">K.G. Senior Secondary School</span>
          <span className="kg-logo-sub">Sector 21 / Dundahera, Gurugram</span>
        </div>
      </div>

      {/* Quick contact strip */}
      <div className="kg-sidebar__contact">
        <a href="tel:01242365126" className="kg-contact-link">
          <Phone className="w-3 h-3" />
          <span>(0124) 2365126</span>
        </a>
        <a href="mailto:kgseniorsecondaryschool@gmail.com" className="kg-contact-link">
          <Mail className="w-3 h-3" />
          <span className="kg-contact-email">kgseniorsecondaryschool@gmail.com</span>
        </a>
      </div>

      {/* Navigation */}
      <nav className="kg-sidebar__nav" aria-label="Site navigation">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item);
          const dropOpen = openDropdown === item.label;
          const hasChildren = item.children && item.children.length > 0;

          return (
            <div key={item.label} className="kg-nav-item-wrap">
              <button
                className={`kg-nav-item ${active ? 'kg-nav-item--active' : ''}`}
                onClick={() => {
                  if (hasChildren) {
                    setOpenDropdown(dropOpen ? null : item.label);
                  } else {
                    handleNav(item.tab!);
                  }
                }}
                aria-expanded={hasChildren ? dropOpen : undefined}
                aria-current={active ? 'page' : undefined}
              >
                <span className="kg-nav-item__icon">{item.icon}</span>
                <span className="kg-nav-item__label">{item.label}</span>
                {hasChildren && (
                  <ChevronDown
                    className={`kg-nav-item__chevron ${dropOpen ? 'kg-nav-item__chevron--open' : ''}`}
                  />
                )}
              </button>

              {/* Dropdown */}
              {hasChildren && (
                <div
                  className={`kg-nav-dropdown ${dropOpen ? 'kg-nav-dropdown--open' : ''}`}
                  aria-hidden={!dropOpen}
                >
                  {item.children!.map((child) => (
                    <button
                      key={child.label}
                      className={`kg-nav-child ${child.tab === currentTab ? 'kg-nav-child--active' : ''}`}
                      onClick={() => handleNav(child.tab!, child.branch, child.action)}
                    >
                      <ChevronRight className="w-3 h-3 opacity-50" />
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Social icons */}
      <div className="kg-sidebar__social">
        <span className="kg-social-label">Follow Us</span>
        <div className="kg-social-icons">
          <a href="https://twitter.com/vnalko" target="_blank" rel="noopener noreferrer" title="Twitter/X" className="kg-social-link"><XIcon className="w-3.5 h-3.5" /></a>
          <a href="https://www.facebook.com/Vishwanathacademylko/" target="_blank" rel="noopener noreferrer" title="Facebook" className="kg-social-link"><Facebook className="w-3.5 h-3.5" /></a>
          <a href="https://www.instagram.com/vishwanathacademylko/" target="_blank" rel="noopener noreferrer" title="Instagram" className="kg-social-link"><Instagram className="w-3.5 h-3.5" /></a>
          <a href="https://www.linkedin.com/company/7846010/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="kg-social-link"><Linkedin className="w-3.5 h-3.5" /></a>
          <a href="https://www.youtube.com/c/VishwanathAcademy" target="_blank" rel="noopener noreferrer" title="YouTube" className="kg-social-link"><Youtube className="w-3.5 h-3.5" /></a>
        </div>
      </div>

      {/* Admissions CTA */}
      <div className="kg-sidebar__cta">
        <button onClick={openAdmissionModal} className="kg-cta-btn">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          Apply for Admission
        </button>
        <div className="kg-cta-row">
          <button onClick={openFeeModal} className="kg-cta-secondary">Pay Fee</button>
          <button onClick={openTcModal} className="kg-cta-secondary">Download TC</button>
        </div>
      </div>

      {/* UDISE */}
      <div className="kg-sidebar__udise">UDISE: 06180100104</div>
    </aside>
  );

  /* ══════════════════════════════════════════════════════════════════════════
     MOBILE / NARROW  — compact top header + off-canvas drawer
  ══════════════════════════════════════════════════════════════════════════ */
  const MobileHeader = () => (
    <>
      {/* Compact top bar */}
      <header className="kg-mobile-header" role="banner">
        {/* Logo */}
        <div
          className="kg-mobile-logo"
          onClick={() => handleNav('home')}
          role="button"
          tabIndex={0}
          aria-label="Go to home"
          onKeyDown={e => e.key === 'Enter' && handleNav('home')}
        >
          <div className="kg-logo-badge kg-logo-badge--sm">KG</div>
          <div className="kg-logo-text">
            <span className="kg-logo-name kg-logo-name--sm">K.G. Senior Secondary School</span>
            <span className="kg-logo-sub">Sector 21, Gurugram</span>
          </div>
        </div>

        {/* Hamburger — right edge */}
        <button
          className="kg-hamburger"
          onClick={() => setDrawerOpen(v => !v)}
          aria-label={drawerOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={drawerOpen}
          aria-controls="kg-drawer"
        >
          <HamburgerIcon open={drawerOpen} />
        </button>
      </header>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className={`kg-overlay ${drawerOpen ? 'kg-overlay--visible' : ''}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Off-canvas drawer */}
      <div
        id="kg-drawer"
        className={`kg-drawer ${drawerOpen ? 'kg-drawer--open' : ''}`}
        aria-hidden={!drawerOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="kg-drawer__header">
          <div className="kg-logo-badge">KG</div>
          <div className="kg-logo-text">
            <span className="kg-logo-name">K.G. Senior Secondary School</span>
            <span className="kg-logo-sub">Sector 21 / Dundahera, Gurugram</span>
          </div>
          <button
            className="kg-drawer__close"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
          >
            <HamburgerIcon open={true} />
          </button>
        </div>

        {/* Drawer contact */}
        <div className="kg-drawer__contact">
          <a href="tel:01242365126" className="kg-contact-link">
            <Phone className="w-3 h-3" /> (0124) 2365126
          </a>
          <a href="mailto:kgseniorsecondaryschool@gmail.com" className="kg-contact-link">
            <Mail className="w-3 h-3" /> kgseniorsecondaryschool@gmail.com
          </a>
        </div>

        {/* Drawer nav */}
        <nav className="kg-drawer__nav" aria-label="Mobile site navigation">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item);
            const hasChildren = item.children && item.children.length > 0;
            const sectionOpen = openMobileSection === item.label;

            return (
              <div key={item.label} className="kg-drawer-item-wrap">
                <button
                  className={`kg-drawer-item ${active ? 'kg-drawer-item--active' : ''}`}
                  onClick={() => {
                    if (hasChildren) {
                      setOpenMobileSection(sectionOpen ? null : item.label);
                    } else {
                      handleNav(item.tab!);
                    }
                  }}
                  aria-expanded={hasChildren ? sectionOpen : undefined}
                >
                  <span className="kg-drawer-item__icon">{item.icon}</span>
                  <span className="kg-drawer-item__label">{item.label}</span>
                  {hasChildren && (
                    <ChevronDown
                      className={`kg-drawer-item__chevron ${sectionOpen ? 'kg-drawer-item__chevron--open' : ''}`}
                    />
                  )}
                </button>

                {hasChildren && (
                  <div
                    className={`kg-drawer-children ${sectionOpen ? 'kg-drawer-children--open' : ''}`}
                  >
                    {item.children!.map((child) => (
                      <button
                        key={child.label}
                        className={`kg-drawer-child ${child.tab === currentTab ? 'kg-drawer-child--active' : ''}`}
                        onClick={() => handleNav(child.tab!, child.branch, child.action)}
                      >
                        <ChevronRight className="w-3 h-3 opacity-40 shrink-0" />
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Drawer quick actions */}
        <div className="kg-drawer__actions">
          <button onClick={() => { setDrawerOpen(false); openAdmissionModal(); }} className="kg-cta-btn w-full">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Apply for Admission 2026-27
          </button>
          <div className="kg-cta-row">
            <button onClick={() => { setDrawerOpen(false); openFeeModal(); }} className="kg-cta-secondary flex-1">Pay Fee</button>
            <button onClick={() => { setDrawerOpen(false); openTcModal(); }} className="kg-cta-secondary flex-1">Download TC</button>
          </div>
          {openLoginModal && (
            <button onClick={() => { setDrawerOpen(false); openLoginModal(); }} className="kg-cta-login w-full">
              <User className="w-3.5 h-3.5" /> Parents Login Portal
            </button>
          )}
        </div>

        {/* Drawer social */}
        <div className="kg-drawer__social">
          <span className="kg-social-label">Follow Us</span>
          <div className="kg-social-icons">
            <a href="https://twitter.com/vnalko" target="_blank" rel="noopener noreferrer" className="kg-social-link"><XIcon className="w-3.5 h-3.5" /></a>
            <a href="https://www.facebook.com/Vishwanathacademylko/" target="_blank" rel="noopener noreferrer" className="kg-social-link"><Facebook className="w-3.5 h-3.5" /></a>
            <a href="https://www.instagram.com/vishwanathacademylko/" target="_blank" rel="noopener noreferrer" className="kg-social-link"><Instagram className="w-3.5 h-3.5" /></a>
            <a href="https://www.linkedin.com/company/7846010/" target="_blank" rel="noopener noreferrer" className="kg-social-link"><Linkedin className="w-3.5 h-3.5" /></a>
            <a href="https://www.youtube.com/c/VishwanathAcademy" target="_blank" rel="noopener noreferrer" className="kg-social-link"><Youtube className="w-3.5 h-3.5" /></a>
          </div>
        </div>

        <div className="kg-drawer__udise">UDISE: 06180100104</div>
      </div>
    </>
  );

  return isNarrow ? <MobileHeader /> : <DesktopSidebar />;
};
