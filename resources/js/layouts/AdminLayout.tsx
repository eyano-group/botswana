import React, { useState } from 'react';
import Sidebar from '@/components/Admin/Sidebar';
import Topbar from '@/components/Admin/Topbar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen bg-zinc-50 text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-50 flex overflow-hidden">
      {/* Mobile sidebar overlay would go here optionally */}
      
      {/* Sidebar for desktop */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:z-50">
        <Sidebar />
      </div>

      <div className="flex flex-1 flex-col lg:pl-64 h-full relative">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 overflow-y-auto">
          <div className="py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
