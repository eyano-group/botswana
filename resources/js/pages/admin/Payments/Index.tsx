import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/layouts/AdminLayout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/Admin/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/Admin/Table';
import { Badge } from '@/components/Admin/Badge';
import { Search, CreditCard, Download, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PaymentsIndex({ payments, filters }: any) {
  const [searchTerm, setSearchTerm] = useState(filters.search || '');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    setTimeout(() => {
      router.get(route('admin.payments.index'), { search: value }, { preserveState: true, replace: true });
    }, 500);
  };

  return (
    <AdminLayout>
      <Head title="Payment Management" />

      <div className="px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold leading-7 text-zinc-900 sm:truncate sm:text-3xl sm:tracking-tight dark:text-zinc-50">
              Payments
            </h2>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Track transaction history and payment statuses for all applications.
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

              <button className="flex items-center gap-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 px-4 py-2 rounded-xl text-sm font-medium transition-colors">
                <Download className="h-4 w-4 text-zinc-500" />
                Export CSV
              </button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Applicant</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.data.map((payment: any) => (
                  <TableRow key={payment.id}>
                    <TableCell className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                      TXN-{payment.reference_number?.split('-')[1] || payment.id.toString().padStart(6, '0')}
                    </TableCell>
                    <TableCell className="font-medium text-zinc-900 dark:text-zinc-100">
                      {payment.first_name} {payment.last_name}
                    </TableCell>
                    <TableCell className="text-zinc-900 dark:text-zinc-100 font-semibold">
                      BWP 1,500.00
                    </TableCell>
                    <TableCell className="text-zinc-500 dark:text-zinc-400">
                      {new Date(payment.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <Badge variant="success" className="capitalize">
                        Paid
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Link
                          href={route('admin.applications.show', payment.id)}
                          className="text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 bg-zinc-50 hover:bg-emerald-50 dark:bg-zinc-800 dark:hover:bg-emerald-900/30 p-2 rounded-lg transition-colors"
                          title="View Application"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {payments.data.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center text-zinc-500 dark:text-zinc-400">
                      No payment records found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
          
          {payments.links && payments.links.length > 3 && (
            <div className="border-t border-zinc-200 dark:border-zinc-800 px-6 py-4 flex items-center justify-between">
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                Showing <span className="font-medium text-zinc-900 dark:text-zinc-100">{payments.from || 0}</span> to <span className="font-medium text-zinc-900 dark:text-zinc-100">{payments.to || 0}</span> of <span className="font-medium text-zinc-900 dark:text-zinc-100">{payments.total}</span> results
              </div>
              <div className="flex gap-1">
                {payments.links.map((link: any, i: number) => (
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
