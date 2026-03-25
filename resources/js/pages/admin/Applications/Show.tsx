import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/layouts/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/Admin/Card';
import { Badge } from '@/components/Admin/Badge';
import { ArrowLeft, CheckCircle, XCircle, FileText, User, MapPin, Calendar, Clock, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ApplicationShow({ application }: any) {
  
  const updateStatus = (status: string) => {
    if (confirm(`Are you sure you want to mark this application as ${status}?`)) {
      router.post(route('admin.applications.update-status', application.id), { status });
    }
  };

  return (
    <AdminLayout>
      <Head title={`Application: ${application.reference_number}`} />

      <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-6">
        
        {/* Header section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link 
              href={route('admin.applications.index')}
              className="p-2 -ml-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 rounded-full transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <h2 className="text-2xl font-bold leading-7 text-zinc-900 sm:truncate sm:text-3xl sm:tracking-tight dark:text-zinc-50 flex items-center gap-3">
                {application.first_name} {application.last_name}
                <Badge variant={application.status === 'approved' ? 'success' : application.status === 'rejected' ? 'destructive' : 'warning'} className="text-sm capitalize">
                  {application.status}
                </Badge>
              </h2>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                Reference: <span className="font-mono">{application.reference_number}</span> • Submitted on {new Date(application.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>

          {application.status === 'submitted' && (
            <div className="flex gap-3">
              <button
                onClick={() => updateStatus('rejected')}
                className="inline-flex items-center px-4 py-2 bg-white dark:bg-zinc-900 border border-red-200 dark:border-red-900/50 rounded-xl font-medium text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <XCircle className="w-4 h-4 mr-2" />
                Reject
              </button>
              <button
                onClick={() => updateStatus('approved')}
                className="inline-flex items-center px-4 py-2 bg-emerald-600 border border-transparent rounded-xl font-medium text-sm text-white hover:bg-emerald-500 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Approve
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader className="border-b border-zinc-100 dark:border-zinc-800 pb-4">
                <CardTitle className="flex items-center text-lg gap-2 text-zinc-800 dark:text-zinc-200">
                  <User className="h-5 w-5 text-emerald-500" />
                  Applicant Information
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                  <div>
                    <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Full Name</dt>
                    <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-100">{application.first_name} {application.middle_name} {application.last_name}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Date of Birth</dt>
                    <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-100">{application.date_of_birth}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Email Address</dt>
                    <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-100">{application.email}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Phone Number</dt>
                    <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-100">{application.phone}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Nationality</dt>
                    <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-100">{application.nationality}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Passport Number</dt>
                    <dd className="mt-1 text-sm font-mono text-zinc-900 dark:text-zinc-100">{application.passport_number}</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="border-b border-zinc-100 dark:border-zinc-800 pb-4">
                <CardTitle className="flex items-center text-lg gap-2 text-zinc-800 dark:text-zinc-200">
                  <MapPin className="h-5 w-5 text-emerald-500" />
                  Travel Details
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                  <div>
                    <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Visa Type</dt>
                    <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-100 capitalize">{application.visa_type}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Purpose of Visit</dt>
                    <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-100">{application.purpose}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Arrival Date</dt>
                    <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-100">{application.arrival_date}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Departure Date</dt>
                    <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-100">{application.departure_date}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Accommodation</dt>
                    <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-900/50 p-3 rounded-lg border border-zinc-100 dark:border-zinc-800">
                      {application.accommodation}
                    </dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-lg gap-2 text-zinc-800 dark:text-zinc-200">
                  <FileText className="h-5 w-5 text-emerald-500" />
                  Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/30 group hover:border-emerald-300 transition-colors">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg shrink-0">
                      <FileText className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="truncate">
                      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">Passport Scan</p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">Required document</p>
                    </div>
                  </div>
                  <button className="p-2 text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    <Download className="h-5 w-5" />
                  </button>
                </div>

                <a 
                  href={route('visa.download-pdf', application.reference_number)} 
                  target="_blank"
                  className="flex items-center justify-between p-3 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/30 group hover:border-emerald-300 transition-colors w-full"
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg shrink-0">
                      <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="truncate text-left">
                      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">Application PDF</p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">Generated automatically</p>
                    </div>
                  </div>
                  <div className="p-2 text-zinc-400 hover:text-blue-600 transition-colors">
                    <Download className="h-5 w-5" />
                  </div>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-lg gap-2 text-zinc-800 dark:text-zinc-200">
                  <Clock className="h-5 w-5 text-emerald-500" />
                  Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-3 space-y-6">
                  
                  {/* Status Timeline item */}
                  {application.status !== 'submitted' && (
                    <div className="relative pl-6">
                      <div className={cn(
                        "absolute -left-2 top-1 h-4 w-4 rounded-full ring-4 ring-white dark:ring-zinc-950",
                        application.status === 'approved' ? 'bg-emerald-500' : 'bg-red-500'
                      )} />
                      <div className="text-sm">
                        <p className="font-medium text-zinc-900 dark:text-zinc-100 capitalize">{application.status}</p>
                        <p className="text-zinc-500 dark:text-zinc-400 mt-0.5">{new Date(application.reviewed_at || application.updated_at).toLocaleString()}</p>
                        {application.notes && (
                          <div className="mt-2 p-3 bg-zinc-50 dark:bg-zinc-900 rounded-lg text-xs text-zinc-600 dark:text-zinc-300 border border-zinc-100 dark:border-zinc-800">
                            <strong>Note:</strong> {application.notes}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Submitted item */}
                  <div className="relative pl-6">
                    <div className="absolute -left-2 top-1 h-4 w-4 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-white dark:ring-zinc-950" />
                    <div className="text-sm">
                      <p className="font-medium text-zinc-900 dark:text-zinc-100">Application Submitted</p>
                      <p className="text-zinc-500 dark:text-zinc-400 mt-0.5">{new Date(application.created_at).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}
