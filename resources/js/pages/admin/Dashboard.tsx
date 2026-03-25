import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/layouts/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/Admin/Card';
import { Badge } from '@/components/Admin/Badge';
import { FileText, Users, CheckCircle, Clock, XCircle, ChevronRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Dashboard({ applications, stats }: any) {
  // Mock data for the chart
  const chartData = [
    { name: 'Mon', apps: 12 },
    { name: 'Tue', apps: 19 },
    { name: 'Wed', apps: 15 },
    { name: 'Thu', apps: 28 },
    { name: 'Fri', apps: 22 },
    { name: 'Sat', apps: 8 },
    { name: 'Sun', apps: 10 },
  ];

  return (
    <AdminLayout>
      <Head title="Admin Dashboard" />

      <div className="px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <h2 className="text-2xl font-bold leading-7 text-zinc-900 sm:truncate sm:text-3xl sm:tracking-tight dark:text-zinc-50">
            Overview
          </h2>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Key metrics and recent activity for Visa Management System.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-white hover:bg-zinc-50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FileText className="h-6 w-6 text-emerald-600" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="truncate text-sm font-medium text-zinc-500 dark:text-zinc-400">Total Applications</dt>
                    <dd>
                      <div className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{stats.total}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white hover:bg-zinc-50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-amber-500" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="truncate text-sm font-medium text-zinc-500 dark:text-zinc-400">Pending</dt>
                    <dd>
                      <div className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{stats.pending}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white hover:bg-zinc-50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-emerald-500" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="truncate text-sm font-medium text-zinc-500 dark:text-zinc-400">Approved</dt>
                    <dd>
                      <div className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{stats.approved}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white hover:bg-zinc-50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <XCircle className="h-6 w-6 text-red-500" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="truncate text-sm font-medium text-zinc-500 dark:text-zinc-400">Rejected</dt>
                    <dd>
                      <div className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{stats.rejected}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
          {/* Chart Section */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Application Trends</CardTitle>
                <CardDescription>Applications received over the last 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-72 w-full">
                  <ResponsiveContainer width={500} height={300}>
                    <AreaChart
                      data={chartData}
                      margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorApps" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e4e4e7" />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      />
                      <Area type="monotone" dataKey="apps" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorApps)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-1">
            <Card className="h-full flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Applications</CardTitle>
                  <CardDescription>Latest submissions needing review</CardDescription>
                </div>
                <Link href={route('admin.applications.index')} className="text-sm font-medium text-emerald-600 hover:text-emerald-500 flex items-center">
                  View all <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardHeader>
              <CardContent className="flex-1">
                <ul role="list" className="-my-5 divide-y divide-zinc-200 dark:divide-zinc-800">
                  {applications.data.slice(0, 5).map((app: any) => (
                    <li key={app.id} className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            {app.first_name} {app.last_name}
                          </p>
                          <p className="truncate text-sm text-zinc-500 dark:text-zinc-400">
                            {app.reference_number} • {app.visa_type}
                          </p>
                        </div>
                        <div>
                          <Badge 
                            variant={app.status === 'approved' ? 'success' : app.status === 'rejected' ? 'destructive' : 'warning'}
                            className="capitalize"
                          >
                            {app.status}
                          </Badge>
                        </div>
                      </div>
                    </li>
                  ))}
                  {applications.data.length === 0 && (
                    <div className="text-center py-6">
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">No recent applications.</p>
                    </div>
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
