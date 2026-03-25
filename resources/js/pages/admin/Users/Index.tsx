import React, { useState } from 'react';
import { Head, router, Link } from '@inertiajs/react';
import AdminLayout from '@/layouts/AdminLayout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/Admin/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/Admin/Table';
import { Badge } from '@/components/Admin/Badge';
import { Search, Filter, Shield, UserX, UserCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function UsersIndex({ users, filters, auth }: any) {
  const [searchTerm, setSearchTerm] = useState(filters.search || '');
  const [roleFilter, setRoleFilter] = useState(filters.role || 'all');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    setTimeout(() => {
      router.get(route('admin.users.index'), { search: value, role: roleFilter }, { preserveState: true, replace: true });
    }, 500);
  };

  const handleRoleChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setRoleFilter(value);
    router.get(route('admin.users.index'), { search: searchTerm, role: value }, { preserveState: true });
  };

  const toggleStatus = (id: number, currentStatus: boolean) => {
    if (confirm(`Are you sure you want to ${currentStatus ? 'deactivate' : 'activate'} this user?`)) {
      router.post(route('admin.users.update', id), { is_active: !currentStatus });
    }
  };

  const changeRole = (id: number, newRole: string) => {
    if (confirm(`Change this user's role to ${newRole}?`)) {
      router.post(route('admin.users.update', id), { role: newRole });
    }
  };

  return (
    <AdminLayout>
      <Head title="Manage Users" />

      <div className="px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold leading-7 text-zinc-900 sm:truncate sm:text-3xl sm:tracking-tight dark:text-zinc-50">
              Users & Roles
            </h2>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Manage system access, roles, and user accounts.
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
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="block w-full rounded-xl border-0 py-2 pl-10 text-zinc-900 ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-700 dark:focus:ring-emerald-500"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Filter className="h-4 w-4 text-zinc-400" />
                <select
                  value={roleFilter}
                  onChange={handleRoleChangeFilter}
                  className="block w-full rounded-xl border-0 py-2 pl-3 pr-10 text-zinc-900 ring-1 ring-inset ring-zinc-300 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-700"
                >
                  <option value="all">All Roles</option>
                  <option value="Admin">Admin</option>
                  <option value="Agent">Agent</option>
                  <option value="Applicant">Applicant</option>
                </select>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.data.map((user: any) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium text-zinc-900 dark:text-zinc-100">
                      {user.name}
                    </TableCell>
                    <TableCell className="text-zinc-500 dark:text-zinc-400">{user.email}</TableCell>
                    <TableCell>
                      <select 
                        className="text-sm rounded-md border-zinc-200 py-1 pl-2 pr-8 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
                        value={user.role}
                        onChange={(e) => changeRole(user.id, e.target.value)}
                        disabled={user.id === auth.user.id}
                      >
                        <option value="Admin">Admin</option>
                        <option value="Agent">Agent</option>
                        <option value="Applicant">Applicant</option>
                      </select>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={user.is_active ? 'success' : 'secondary'}
                        className="capitalize"
                      >
                        {user.is_active ? 'Active' : 'Inactive'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      {user.id !== auth.user.id && (
                        <button
                          onClick={() => toggleStatus(user.id, user.is_active)}
                          className={cn(
                            "p-2 rounded-lg transition-colors flex items-center justify-center ml-auto",
                            user.is_active 
                              ? "text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30" 
                              : "text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
                          )}
                          title={user.is_active ? 'Deactivate User' : 'Activate User'}
                        >
                          {user.is_active ? <UserX className="h-4 w-4" /> : <UserCheck className="h-4 w-4" />}
                        </button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
                {users.data.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center text-zinc-500 dark:text-zinc-400">
                      No users found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
          
          {users.links && users.links.length > 3 && (
             <div className="border-t border-zinc-200 dark:border-zinc-800 px-6 py-4 flex items-center justify-between">
             <div className="text-sm text-zinc-500 dark:text-zinc-400">
               Showing <span className="font-medium text-zinc-900 dark:text-zinc-100">{users.from || 0}</span> to <span className="font-medium text-zinc-900 dark:text-zinc-100">{users.to || 0}</span> of <span className="font-medium text-zinc-900 dark:text-zinc-100">{users.total}</span> results
             </div>
             <div className="flex gap-1">
               {users.links.map((link: any, i: number) => (
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
