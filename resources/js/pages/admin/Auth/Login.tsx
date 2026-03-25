import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/Admin/Card';

export default function Login({ status }: { status?: string }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('admin.login.store'), {
      onFinish: () => reset('password'),
    });
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Head title="Admin Login" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="h-12 w-12 rounded-2xl bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Lock className="h-6 w-6 text-white" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Admin Portal
        </h2>
        <p className="mt-2 text-center text-sm text-zinc-600 dark:text-zinc-400">
          Secure access for administrators and agents.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <Card className="border-none shadow-xl shadow-zinc-200/50 dark:shadow-none bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-3xl overflow-hidden">
          <CardHeader className="pb-4 pt-8 text-center sm:text-left">
            <CardTitle className="text-xl">Welcome back</CardTitle>
            <CardDescription>Enter your credentials to manage applications.</CardDescription>
          </CardHeader>
          <CardContent className="pb-8">
            {status && (
              <div className="mb-4 font-medium text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 p-3 rounded-xl border border-emerald-100 dark:border-emerald-900/50">
                {status}
              </div>
            )}

            <form onSubmit={submit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5 ml-1">
                  Email address
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 text-zinc-400 group-focus-within:text-emerald-500 transition-colors" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    className={cn(
                      "block w-full pl-10 pr-3 py-2.5 bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:ring-2 focus:ring-emerald-500 transition-all sm:text-sm",
                      errors.email && "ring-2 ring-red-500"
                    )}
                    placeholder="name@company.com"
                    required
                  />
                </div>
                {errors.email && <p className="mt-1.5 text-xs text-red-500 ml-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5 ml-1">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 text-zinc-400 group-focus-within:text-emerald-500 transition-colors" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                    className={cn(
                      "block w-full pl-10 pr-3 py-2.5 bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:ring-2 focus:ring-emerald-500 transition-all sm:text-sm",
                      errors.password && "ring-2 ring-red-500"
                    )}
                    placeholder="••••••••"
                    required
                  />
                </div>
                {errors.password && <p className="mt-1.5 text-xs text-red-500 ml-1">{errors.password}</p>}
              </div>

              <div className="flex items-center justify-between ml-1">
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    checked={data.remember}
                    onChange={(e) => setData('remember', e.target.checked)}
                    className="h-4 w-4 rounded border-zinc-300 text-emerald-600 focus:ring-emerald-500 dark:bg-zinc-800 dark:border-zinc-700"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-zinc-600 dark:text-zinc-400">
                    Keep me signed in
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={processing}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-2xl shadow-lg shadow-emerald-500/20 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-[0.98]"
                >
                  {processing ? "Authenticating..." : (
                    <>
                      Sign in to dashboard
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
        
        <p className="mt-8 text-center text-xs text-zinc-500 dark:text-zinc-500 uppercase tracking-widest font-semibold">
          Eyano Botswana Visa System
        </p>
      </div>
    </div>
  );
}
