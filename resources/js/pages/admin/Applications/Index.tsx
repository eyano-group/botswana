import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/layouts/AdminLayout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/Admin/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/Admin/Table';
import { Badge } from '@/components/Admin/Badge';
import { Search, Filter, Eye, CheckCircle, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ApplicationsIndex({ applications, filters }: any) {
  const [searchTerm, setSearchTerm] = useState(filters.search || '');
  const [statusFilter, setStatusFilter] = useState(filters.status || 'all');

  // Simple debounce
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    setTimeout(() => {
      router.get(route('admin.applications.index'), { search: value, status: statusFilter }, { preserveState: true, replace: true });
    }, 500);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setStatusFilter(value);
    router.get(route('admin.applications.index'), { search: searchTerm, status: value }, { preserveState: true });
  };

  const updateStatus = (id: number, status: string) => {
    if (confirm(`Are you sure you want to mark this application as ${status}?`)) {
      router.post(route('admin.applications.update-status', id), { status });
    }
  };

  return (
    <AdminLayout>
      <Head title="Manage Applications" />

      <div className="px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold leading-7 text-zinc-900 sm:truncate sm:text-3xl sm:tracking-tight dark:text-zinc-50">
              Applications
            </h2>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              A list of all visa applications including their applicant details and current status.
            </p>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="relative w-full sm:w-96">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-4 w-4 text-zinc-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by name or reference..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="block w-full rounded-xl border-0 py-2 pl-10 text-zinc-900 ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-700 dark:focus:ring-emerald-500"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Filter className="h-4 w-4 text-zinc-400" />
                <select
                  value={statusFilter}
                  onChange={handleStatusChange}
                  className="block w-full rounded-xl border-0 py-2 pl-3 pr-10 text-zinc-900 ring-1 ring-inset ring-zinc-300 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-700"
                >
                  <option value="all">All Statuses</option>
                  <option value="submitted">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Applicant Name</TableHead>
                  <TableHead>Reference Ref</TableHead>
                  <TableHead>Visa Type</TableHead>
                  <TableHead>Submitted On</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applications.data.map((app: any) => (
                  <TableRow key={app.id}>
                    <TableCell className="font-medium text-zinc-900 dark:text-zinc-100">
                      {app.first_name} {app.last_name}
                    </TableCell>
                    <TableCell className="text-zinc-500 dark:text-zinc-400">{app.reference_number}</TableCell>
                    <TableCell className="text-zinc-500 dark:text-zinc-400 capitalize">{app.visa_type}</TableCell>
                    <TableCell className="text-zinc-500 dark:text-zinc-400">
                      {new Date(app.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={app.status === 'approved' ? 'success' : app.status === 'rejected' ? 'destructive' : 'warning'}
                        className="capitalize"
                      >
                        {app.status === 'submitted' ? 'Pending' : app.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Link
                          href={route('admin.applications.show', app.id)}
                          className="text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 bg-zinc-50 hover:bg-emerald-50 dark:bg-zinc-800 dark:hover:bg-emerald-900/30 p-2 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Eye className="h-4 w-4" />
                        </Link>
                        {app.status === 'submitted' && (
                          <>
                            <button
                              onClick={() => updateStatus(app.id, 'approved')}
                              className="text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 bg-zinc-50 hover:bg-emerald-50 dark:bg-zinc-800 dark:hover:bg-emerald-900/30 p-2 rounded-lg transition-colors"
                              title="Approve"
                            >
                              <CheckCircle className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => updateStatus(app.id, 'rejected')}
                              className="text-zinc-400 hover:text-red-600 dark:hover:text-red-400 bg-zinc-50 hover:bg-red-50 dark:bg-zinc-800 dark:hover:bg-red-900/30 p-2 rounded-lg transition-colors"
                              title="Reject"
                            >
                              <XCircle className="h-4 w-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {applications.data.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center text-zinc-500 dark:text-zinc-400">
                      No applications found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
          
          {applications.links && applications.links.length > 3 && (
            <div className="border-t border-zinc-200 dark:border-zinc-800 px-6 py-4 flex items-center justify-between">
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                Showing <span className="font-medium text-zinc-900 dark:text-zinc-100">{applications.from || 0}</span> to <span className="font-medium text-zinc-900 dark:text-zinc-100">{applications.to || 0}</span> of <span className="font-medium text-zinc-900 dark:text-zinc-100">{applications.total}</span> results
              </div>
              <div className="flex gap-1">
                {applications.links.map((link: any, i: number) => (
                  <Link
                    key={i}
                    href={link.url || '#'}
                    className={cn(
                      "px-3 py-1 rounded-md text-sm transition-colors",
                      link.active 
                        ? "bg-emerald-600 text-white" 
                        : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800",
                      !link.url && "opacity-50 cursor-not-allowed"
                    )}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                  />
                ))}
              </div>
            </div>
          )}
        </Card>
      </div>
    </AdminLayout>
  );
}
