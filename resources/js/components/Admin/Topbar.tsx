import React, { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Bell, Moon, Sun, Menu } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Avatar from '@radix-ui/react-avatar';
import { cn } from '@/lib/utils';

export default function Topbar({ onMenuClick }: { onMenuClick?: () => void }) {
  const { auth } = usePage().props as any;
  const admin = auth?.user;

  // Simple Dark Mode Toggle
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-zinc-200 bg-white/75 px-4 shadow-sm backdrop-blur-md sm:gap-x-6 sm:px-6 lg:px-8 dark:border-zinc-800 dark:bg-zinc-950/75 dark:shadow-none">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-zinc-700 lg:hidden dark:text-zinc-400"
        onClick={onMenuClick}
      >
        <span className="sr-only">Open sidebar</span>
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Separator */}
      <div className="h-6 w-px bg-zinc-200 lg:hidden dark:bg-zinc-800" aria-hidden="true" />

      <div className="flex flex-1 justify-end gap-x-4 self-stretch lg:gap-x-6">
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <button
            type="button"
            onClick={toggleDarkMode}
            className="-m-2.5 p-2.5 text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300"
          >
            <span className="sr-only">Toggle dark mode</span>
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <button type="button" className="-m-2.5 p-2.5 text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300 relative">
            <span className="sr-only">View notifications</span>
            <Bell className="h-5 w-5" aria-hidden="true" />
            <span className="absolute top-2.5 right-2 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-950" />
          </button>

          {/* Separator */}
          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-zinc-200 dark:lg:bg-zinc-800" aria-hidden="true" />

          {/* Profile dropdown */}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="-m-1.5 flex items-center p-1.5 focus:outline-none">
                <span className="sr-only">Open user menu</span>
                <Avatar.Root className="inline-flex h-8 w-8 select-none items-center justify-center overflow-hidden rounded-full align-middle bg-emerald-100 dark:bg-emerald-900">
                  <Avatar.Fallback className="leading-1 text-[15px] font-medium text-emerald-700 dark:text-emerald-300">
                    {admin?.name?.charAt(0) || 'A'}
                  </Avatar.Fallback>
                </Avatar.Root>
                <span className="hidden leading-none lg:flex lg:items-center ml-3">
                  <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100" aria-hidden="true">
                    {admin?.name || 'Administrator'}
                  </span>
                </span>
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="min-w-[200px] bg-white rounded-xl shadow-lg ring-1 ring-zinc-200 p-1 will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-50 dark:bg-zinc-900 dark:ring-zinc-800"
                sideOffset={5}
                align="end"
              >
                <div className="px-3 py-2 border-b border-zinc-100 dark:border-zinc-800 mb-1">
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{admin?.name}</p>
                  <p className="text-xs text-zinc-500 truncate dark:text-zinc-400">{admin?.email}</p>
                </div>
                
                <DropdownMenu.Item className="group text-[13px] leading-none text-zinc-700 rounded-md flex items-center h-[35px] px-[10px] relative select-none outline-none data-[highlighted]:bg-zinc-100 data-[highlighted]:text-zinc-900 cursor-pointer dark:text-zinc-300 dark:data-[highlighted]:bg-zinc-800 dark:data-[highlighted]:text-zinc-50">
                  Your profile
                </DropdownMenu.Item>
                <DropdownMenu.Item className="group text-[13px] leading-none text-zinc-700 rounded-md flex items-center h-[35px] px-[10px] relative select-none outline-none data-[highlighted]:bg-zinc-100 data-[highlighted]:text-zinc-900 cursor-pointer dark:text-zinc-300 dark:data-[highlighted]:bg-zinc-800 dark:data-[highlighted]:text-zinc-50">
                  Settings
                </DropdownMenu.Item>
                
                <DropdownMenu.Separator className="h-[1px] bg-zinc-200 m-[5px] dark:bg-zinc-800" />
                
                <DropdownMenu.Item asChild className="group text-[13px] leading-none text-red-600 rounded-md flex items-center h-[35px] px-[10px] relative select-none outline-none data-[highlighted]:bg-red-50 cursor-pointer dark:text-red-400 dark:data-[highlighted]:bg-red-950/50">
                  <Link href={route('admin.logout')} method="post" as="button" className="w-full text-left">
                    Sign out
                  </Link>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>
    </div>
  );
}
