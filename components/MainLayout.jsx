"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import ScrollToTop from '@/components/common/ScrollToTop';

export default function MainLayout({ children }) {
  const pathname = usePathname();
  
  // Check if the current route is an admin route
  const isAdminRoute = pathname?.startsWith('/admin');

  if (isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
