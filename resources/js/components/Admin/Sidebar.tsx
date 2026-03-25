import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Sidebar() {
  const { url } = usePage();

  // Define navigation inside the component so route() is called at render time,
  // after Ziggy has been initialised by the @routes directive.
  const navigation = [
    { name: 'Dashboard', href: route('admin.dashboard'), icon: LayoutDashboard },
    { name: 'Applications', href: route('admin.applications.index'), icon: FileText },
    { name: 'Users', href: route('admin.users.index'), icon: Users },
    { name: 'Settings', href: '#', icon: Settings },
  ];

  const getPathname = (href: string) => {
    try {
      return new URL(href).pathname;
    } catch {
      return href; // fallback for relative/hash links like "#"
    }
  };

  return (
    <div className="flex h-full w-64 flex-col border-r border-zinc-200 bg-white/50 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/50">
      <div className="flex h-16 shrink-0 items-center px-6">
        <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          VisaAdmin<span className="text-emerald-500">.</span>
        </span>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
        <nav className="flex-1 space-y-1 px-3">
          {navigation.map((item) => {
            const pathname = getPathname(item.href);
            const isActive = pathname !== '#' && url.startsWith(pathname);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  isActive
                    ? 'bg-emerald-50/50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400'
                    : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-50',
                  'group flex items-center rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200'
                )}
              >
                <item.icon
                  className={cn(
                    isActive
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300',
                    'mr-3 h-5 w-5 shrink-0 transition-colors duration-200'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
