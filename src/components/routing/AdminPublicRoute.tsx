'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminPublicRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('adminAuthToken');
    if (token) {
      router.replace('/admin/dashboard');
    }
  }, []);
  return <>{children}</>;
}
