'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AdminProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminAuthToken');
    if (!token) {
      router.replace('/admin/login');
    } else {
      setIsVerified(true);
    }
  }, []);

  if (!isVerified) return null;

  return <>{children}</>;
}
