'use client';
import { usePathname } from 'next/navigation';
import AdminLayout from '@/components/admin/Layout/AdminLayout';

export default function Layout({ children }) {
  const pathname = usePathname();

  // The login page must NOT be wrapped in AdminLayout —
  // AdminLayout returns null when there's no admin session,
  // which would make the login form invisible.
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  return <AdminLayout>{children}</AdminLayout>;
}
