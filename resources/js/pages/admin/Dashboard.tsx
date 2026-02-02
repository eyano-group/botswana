import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import {
  Users,
  CheckCircle,
  XCircle,
  Clock,
  Search,
  Filter,
  Eye,
  ChevronLeft,
  ChevronRight,
  FileText,
} from "lucide-react";
import AppShell from "@/layouts/AppShell";
import PageTitle from "@/components/UI/PageTitle";

interface Application {
  id: number;
  reference_number: string;
  first_name: string;
  last_name: string;
  nationality: string;
  passport_number: string;
  visa_type: string;
  status: string;
  submitted_at: string;
  created_at: string;
}

interface Stats {
  total: number;
  pending: number;
  approved: number;
  rejected: number;
}

interface DashboardProps {
  applications: {
    data: Application[];
    links: any[];
    current_page: number;
    last_page: number;
    total: number;
  };
  stats: Stats;
  filters: {
    status?: string;
    search?: string;
  };
}

export default function Dashboard({
  applications,
  stats,
  filters,
}: DashboardProps) {
  const [search, setSearch] = useState(filters.search || "");
  const [statusFilter, setStatusFilter] = useState(filters.status || "all");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.get(
      "/admin/dashboard",
      { search, status: statusFilter },
      { preserveState: true },
    );
  };

  const handleFilterChange = (status: string) => {
    setStatusFilter(status);
    router.get("/admin/dashboard", { search, status }, { preserveState: true });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-700 border-green-200";
      case "rejected":
        return "bg-red-100 text-red-700 border-red-200";
      case "submitted":
      case "pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <AppShell>
      <Head title="Admin Dashboard" />

      <PageTitle
        title="Visa Administration"
        backgroundImage="/assets/images/resource/Immigration-and-civil-registration.png"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Admin Portal", href: "" },
        ]}
      />

      <div className="container mx-auto px-4 -mt-20 pb-12 relative z-20">
        {/* Stats Cards - Redesigned */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            label="Total Applications"
            value={stats.total}
            icon={FileText}
            iconColor="text-blue-600"
            iconBg="bg-blue-100"
          />
          <StatCard
            label="Pending Review"
            value={stats.pending}
            icon={Clock}
            iconColor="text-yellow-600"
            iconBg="bg-yellow-100"
          />
          <StatCard
            label="Approved"
            value={stats.approved}
            icon={CheckCircle}
            iconColor="text-green-600"
            iconBg="bg-green-100"
          />
          <StatCard
            label="Rejected"
            value={stats.rejected}
            icon={XCircle}
            iconColor="text-red-600"
            iconBg="bg-red-100"
          />
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden min-h-[500px]">
          {/* Toolbar */}
          <div className="border-b border-gray-100 p-6 flex flex-col md:flex-row justify-between gap-4">
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {["all", "submitted", "approved", "rejected"].map((status) => (
                <button
                  key={status}
                  onClick={() => handleFilterChange(status)}
                  className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors
                    ${
                      statusFilter === status
                        ? "bg-[#0099cc] text-white shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }
                  `}
                >
                  {status === "submitted" ? "Pending" : status}
                </button>
              ))}
            </div>

            <form onSubmit={handleSearch} className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search reference, name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-[#0099cc] focus:ring-2 focus:ring-[#0099cc]/20 outline-none transition-all"
              />
            </form>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase text-gray-500 font-semibold tracking-wider">
                  <th className="px-6 py-4">Reference</th>
                  <th className="px-6 py-4">Applicant</th>
                  <th className="px-6 py-4">Nationality</th>
                  <th className="px-6 py-4">Visa Type</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {applications.data.length > 0 ? (
                  applications.data.map((app) => (
                    <tr
                      key={app.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-mono text-sm font-medium text-[#0099cc]">
                        {app.reference_number}
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">
                          {app.first_name} {app.last_name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {app.passport_number}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {app.nationality}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className="capitalize">{app.visa_type} Visa</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {new Date(app.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border ${getStatusColor(app.status)}`}
                        >
                          {app.status === "submitted" ? "Pending" : app.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Link
                          href={`/admin/applications/${app.id}`}
                          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-[#0099cc] hover:bg-[#0099cc] hover:text-white transition-all"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-6 py-12 text-center text-gray-500"
                    >
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="w-8 h-8 text-gray-400" />
                      </div>
                      <p className="text-lg font-medium text-gray-900">
                        No applications found
                      </p>
                      <p className="text-sm">
                        Try adjusting your filters or search terms
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {applications.data.length > 0 && (
            <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Showing{" "}
                <span className="font-medium">{applications.data.length}</span>{" "}
                of <span className="font-medium">{applications.total}</span>{" "}
                results
              </div>
              <div className="flex gap-2">
                {applications.links.map((link, i) =>
                  link.url ? (
                    <Link
                      key={i}
                      href={link.url}
                      className={`px-3 py-1 rounded-md text-sm border transition-colors
                        ${
                          link.active
                            ? "bg-[#0099cc] text-white border-[#0099cc]"
                            : "border-gray-200 text-gray-600 hover:bg-gray-50"
                        }
                      `}
                      dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                  ) : (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-md text-sm border border-gray-100 text-gray-300"
                      dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                  ),
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}

function StatCard({ label, value, icon: Icon, iconColor, iconBg }: any) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
            {label}
          </p>
          <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
        </div>
        <div className={`p-3 rounded-lg ${iconBg} ${iconColor}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
