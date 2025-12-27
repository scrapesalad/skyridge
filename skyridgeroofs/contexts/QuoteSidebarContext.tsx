'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import QuoteSidebar from '@/components/QuoteSidebar';

interface QuoteSidebarContextType {
  isOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
}

const QuoteSidebarContext = createContext<QuoteSidebarContextType | undefined>(undefined);

export function QuoteSidebarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);
  const toggleSidebar = () => setIsOpen(prev => !prev);

  return (
    <QuoteSidebarContext.Provider value={{ isOpen, openSidebar, closeSidebar, toggleSidebar }}>
      {children}
      <QuoteSidebar isOpen={isOpen} onClose={closeSidebar} />
    </QuoteSidebarContext.Provider>
  );
}

export function useQuoteSidebar() {
  const context = useContext(QuoteSidebarContext);
  if (context === undefined) {
    throw new Error('useQuoteSidebar must be used within a QuoteSidebarProvider');
  }
  return context;
}



