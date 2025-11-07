// src/pages/NewsEventsMain.tsx
import React, { useState, useMemo, useEffect } from "react";
import { Link } from "@inertiajs/react";
import {
  Calendar,
  Search,
  Filter,
  X,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  User,
  FileText,
  Tag,
  Building,
  CalendarDays,
  TrendingUp,
  History,
  ChevronDown,
  Grid,
  List,
  ExternalLink,
  Archive,
  Bell,
  Newspaper,
  RotateCcw,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import NewsCard from "./NewsCard";
import EventCard from "./EventCard";
import PressReleaseItem from "./PressReleaseItem";

// Types pour TypeScript
interface NewsItem {
  id: number;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime?: string;
}

interface EventItem {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  color?: string;
  category?: string;
  isPast?: boolean;
  isUpcoming?: boolean;
  isLatest?: boolean;
}

interface PressReleaseItem {
  title: string;
  date: string;
  pdfLink: string;
  ministry?: string;
  category?: string;
}

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  hasEvents: boolean;
  events: EventItem[];
}

type FilterType = "all" | "upcoming" | "past" | "latest";
type ViewMode = "calendar" | "list";

const NewsEventsSection = () => {
  // États pour la recherche et le filtrage
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMinistry, setSelectedMinistry] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDateRange, setSelectedDateRange] = useState({
    start: "",
    end: "",
  });
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showFilters, setShowFilters] = useState(true); // Visible par défaut
  const [eventFilter, setEventFilter] = useState<FilterType>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("calendar");
  const [activeTab, setActiveTab] = useState<"news" | "events" | "press">(
    "news"
  );

  // Données d'exemple enrichies avec des dates réelles
  const newsData: NewsItem[] = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      category: "Immigration",
      title: "New Visa Policies Announced for 2024",
      excerpt:
        "The government has just announced a series of updates to visa application processes, aimed at streamlining and improving efficiency for applicants worldwide.",
      date: "2024-01-15",
      author: "Jane Doe",
      readTime: "5 min read",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
      category: "Business",
      title: "Success Story: From Applicant to Resident",
      excerpt:
        "Meet John, who successfully navigated complex business visa process with our help and is now a thriving entrepreneur.",
      date: "2024-01-10",
      author: "John Smith",
      readTime: "3 min read",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
      category: "Study",
      title: "Top 5 Universities for International Students",
      excerpt:
        "We've compiled a list of the best universities that offer outstanding programs and support for international students.",
      date: "2024-01-05",
      author: "Emily White",
      readTime: "7 min read",
    },
  ];

  const today = new Date();
  const eventsData: EventItem[] = [
    {
      id: 1,
      title: "Free Webinar: US Student Visa Application",
      date: "2024-02-15",
      time: "03:00 PM - 04:30 PM EST",
      location: "Online (Zoom)",
      description:
        "Join our experts for a comprehensive guide on filling out your US student visa application without errors.",
      color: "bg-[#0099cc]",
      category: "Webinar",
      isUpcoming: true,
    },
    {
      id: 2,
      title: "Workshop: Path to Canadian Permanent Residency",
      date: "2024-02-22",
      time: "10:00 AM - 01:00 PM EST",
      location: "New York Office, 72 MainSail Drive",
      description:
        "An in-depth workshop covering the Express Entry system, provincial nominee programs, and more.",
      color: "bg-green-500",
      category: "Workshop",
      isUpcoming: true,
    },
    {
      id: 3,
      title: "Immigration Fair: European Opportunities",
      date: "2024-03-05",
      time: "09:00 AM - 05:00 PM EST",
      location: "Convention Center, Hall A",
      description:
        "Explore immigration pathways to various European countries with representatives from multiple embassies.",
      color: "bg-purple-500",
      category: "Fair",
      isUpcoming: true,
    },
    {
      id: 4,
      title: "Info Session: Australian Skilled Migration",
      date: "2024-01-12",
      time: "02:00 PM - 03:30 PM EST",
      location: "Online (Teams)",
      description:
        "Learn about the skilled migration program and how to improve your chances of receiving an invitation.",
      color: "bg-orange-500",
      category: "Info Session",
      isLatest: true,
    },
    {
      id: 5,
      title: "Legal Updates: New Immigration Laws",
      date: "2023-12-20",
      time: "11:00 AM - 12:00 PM EST",
      location: "Online (Webex)",
      description:
        "Understanding the recent changes in immigration legislation and how they affect your applications.",
      color: "bg-red-500",
      category: "Legal",
      isPast: true,
    },
  ];

  const pressReleasesData: PressReleaseItem[] = [
    {
      title: "Firm Expands Services to Include European Immigration",
      date: "2024-01-20",
      pdfLink: "#",
      ministry: "Immigration",
      category: "Expansion",
    },
    {
      title: "Partnership with Leading University for Student Programs",
      date: "2024-01-01",
      pdfLink: "#",
      ministry: "Education",
      category: "Partnership",
    },
    {
      title: "CEO Named Top Immigration Lawyer of the Year",
      date: "2023-12-15",
      pdfLink: "#",
      ministry: "Legal Affairs",
      category: "Award",
    },
    {
      title: "New Digital Platform Launched for Visa Applications",
      date: "2023-11-30",
      pdfLink: "#",
      ministry: "Technology",
      category: "Technology",
    },
    {
      title: "Government Announces Changes to Work Permit Requirements",
      date: "2023-11-15",
      pdfLink: "#",
      ministry: "Labor",
      category: "Policy",
    },
  ];

  // Listes pour les filtres
  const ministries = useMemo(() => {
    const uniqueMinistries = [
      ...new Set(
        pressReleasesData.map((item) => item.ministry).filter(Boolean)
      ),
    ];
    return uniqueMinistries;
  }, []);

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(
        [
          ...eventsData.map((e) => e.category),
          ...pressReleasesData.map((p) => p.category),
        ].filter(Boolean)
      ),
    ];
    return uniqueCategories;
  }, []);

  // Filtrer les communiqués de presse
  const filteredPressReleases = useMemo(() => {
    return pressReleasesData.filter((item) => {
      const matchesSearch = item.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesMinistry =
        !selectedMinistry || item.ministry === selectedMinistry;
      const matchesCategory =
        !selectedCategory || item.category === selectedCategory;

      let matchesDateRange = true;
      if (selectedDateRange.start && selectedDateRange.end) {
        const itemDate = new Date(item.date);
        const startDate = new Date(selectedDateRange.start);
        const endDate = new Date(selectedDateRange.end);
        matchesDateRange = itemDate >= startDate && itemDate <= endDate;
      }

      return (
        matchesSearch && matchesMinistry && matchesCategory && matchesDateRange
      );
    });
  }, [searchTerm, selectedMinistry, selectedCategory, selectedDateRange]);

  // Filtrer les événements selon le filtre sélectionné
  const filteredEvents = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let filtered = eventsData;

    switch (eventFilter) {
      case "upcoming":
        filtered = eventsData.filter((event) => new Date(event.date) >= today);
        break;
      case "past":
        filtered = eventsData.filter((event) => new Date(event.date) < today);
        break;
      case "latest":
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        filtered = eventsData.filter((event) => {
          const eventDate = new Date(event.date);
          return eventDate >= thirtyDaysAgo && eventDate <= today;
        });
        break;
    }

    return filtered;
  }, [eventFilter]);

  // Fonctions pour le calendrier
  const getDaysInMonth = (date: Date): CalendarDay[] => {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const startDate = new Date(firstDayOfMonth);
    startDate.setDate(startDate.getDate() - firstDayOfMonth.getDay());

    const days: CalendarDay[] = [];
    const current = new Date(startDate);

    for (let i = 0; i < 42; i++) {
      const date = new Date(current);
      const isCurrentMonth = date.getMonth() === month;
      const dateStr = date.toISOString().split("T")[0];
      const dayEvents = filteredEvents.filter(
        (event) => event.date === dateStr
      );

      days.push({
        date,
        isCurrentMonth,
        hasEvents: dayEvents.length > 0,
        events: dayEvents,
      });

      current.setDate(current.getDate() + 1);
    }

    return days;
  };

  const calendarDays = useMemo(
    () => getDaysInMonth(currentMonth),
    [currentMonth, filteredEvents]
  );

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const formatMonthYear = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  const getEventsForSelectedDate = () => {
    if (!selectedDate) return [];
    const dateStr = selectedDate.toISOString().split("T")[0];
    return filteredEvents.filter((event) => event.date === dateStr);
  };

  // Composant pour les filtres unifiés
  const UnifiedFilterPanel = () => (
    <div
      className={`overflow-hidden transition-all duration-500 ${
        showFilters
          ? "max-h-[500px] opacity-100 mb-8"
          : "max-h-0 opacity-0 mb-0"
      }`}
    >
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 flex items-center">
            <Filter className="w-5 h-5 mr-2 text-[#0099cc] flex-shrink-0" />
            Advanced Filters
          </h3>
          <button
            onClick={() => setShowFilters(false)}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
            aria-label="Close filters"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filtres en grille responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {/* Recherche - Prend toute la largeur sur mobile */}
          <div className="sm:col-span-2 xl:col-span-1">
            <label className="block text-sm font-semibold text-gray-800 mb-2 flex items-center">
              <Search className="w-4 h-4 mr-2 text-gray-600 flex-shrink-0" />
              Search Content
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099cc] focus:border-transparent transition-all pr-10 text-gray-900 placeholder-gray-500"
                placeholder="Type to search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Ministère */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2 flex items-center">
              <Building className="w-4 h-4 mr-2 text-gray-600 flex-shrink-0" />
              Ministry
            </label>
            <div className="relative">
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099cc] focus:border-transparent appearance-none bg-white transition-all pr-10 text-gray-900"
                value={selectedMinistry}
                onChange={(e) => setSelectedMinistry(e.target.value)}
              >
                <option value="" className="text-gray-900">
                  All Ministries
                </option>
                {ministries.map((ministry) => (
                  <option
                    key={ministry}
                    value={ministry}
                    className="text-gray-900"
                  >
                    {ministry}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>
            </div>
          </div>

          {/* Catégorie */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2 flex items-center">
              <Tag className="w-4 h-4 mr-2 text-gray-600 flex-shrink-0" />
              Category
            </label>
            <div className="relative">
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099cc] focus:border-transparent appearance-none bg-white transition-all pr-10 text-gray-900"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="" className="text-gray-900">
                  All Categories
                </option>
                {categories.map((category) => (
                  <option
                    key={category}
                    value={category}
                    className="text-gray-900"
                  >
                    {category}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>
            </div>
          </div>

          {/* Date Range - Prend toute la largeur sur mobile, 2 colonnes sur tablette+ */}
          <div className="sm:col-span-2 xl:col-span-1">
            <label className="block text-sm font-semibold text-gray-800 mb-2 flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-gray-600 flex-shrink-0" />
              Date Range
            </label>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <input
                  type="date"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099cc] focus:border-transparent transition-all text-gray-900"
                  value={selectedDateRange.start}
                  onChange={(e) =>
                    setSelectedDateRange((prev) => ({
                      ...prev,
                      start: e.target.value,
                    }))
                  }
                />
                {selectedDateRange.start && (
                  <button
                    onClick={() =>
                      setSelectedDateRange((prev) => ({ ...prev, start: "" }))
                    }
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    aria-label="Clear start date"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
              <div className="relative">
                <input
                  type="date"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099cc] focus:border-transparent transition-all text-gray-900"
                  value={selectedDateRange.end}
                  onChange={(e) =>
                    setSelectedDateRange((prev) => ({
                      ...prev,
                      end: e.target.value,
                    }))
                  }
                />
                {selectedDateRange.end && (
                  <button
                    onClick={() =>
                      setSelectedDateRange((prev) => ({ ...prev, end: "" }))
                    }
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    aria-label="Clear end date"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Filtre supplémentaire pour les événements */}
        {activeTab === "events" && (
          <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-200">
            <label className="block text-sm font-semibold text-gray-800 mb-3 flex items-center">
              <Clock className="w-4 h-4 mr-2 text-gray-600 flex-shrink-0" />
              Event Status
            </label>
            <div className="flex flex-wrap gap-3">
              {["all", "upcoming", "ongoing", "past"].map((status) => (
                <button
                  key={status}
                  onClick={() => setEventFilter(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    eventFilter === status
                      ? "bg-[#0099cc] text-white shadow-md"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {status === "all" && "All Events"}
                  {status === "upcoming" && "Upcoming"}
                  {status === "ongoing" && "Ongoing"}
                  {status === "past" && "Past"}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Footer avec compteur et bouton reset */}
        <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-700 font-medium">
            {activeTab === "press" && (
              <span className="flex items-center">
                <FileText className="w-4 h-4 mr-2" />
                {filteredPressReleases.length} press release
                {filteredPressReleases.length !== 1 ? "s" : ""} found
              </span>
            )}
            {activeTab === "events" && (
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {filteredEvents.length} event
                {filteredEvents.length !== 1 ? "s" : ""} found
              </span>
            )}
            {activeTab === "news" && (
              <span className="flex items-center">
                <Newspaper className="w-4 h-4 mr-2" />
                {newsData.length} news article{newsData.length !== 1 ? "s" : ""}
              </span>
            )}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedMinistry("");
                setSelectedCategory("");
                setSelectedDateRange({ start: "", end: "" });
                setEventFilter("all");
              }}
              className="px-4 sm:px-6 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset Filters
            </button>

            <button
              onClick={() => setShowFilters(false)}
              className="px-4 sm:px-6 py-2 bg-[#0099cc] text-white rounded-lg hover:bg-[#0088bb] transition-colors font-medium"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Composant pour les filtres d'événements
  const EventFilterTabs = () => (
    <div className="flex flex-wrap gap-2 mb-6">
      {[
        { key: "all", label: "All Events", icon: Calendar },
        { key: "upcoming", label: "Upcoming", icon: TrendingUp },
        { key: "past", label: "Past Events", icon: History },
        { key: "latest", label: "Latest", icon: Bell },
      ].map(({ key, label, icon: Icon }) => (
        <button
          key={key}
          onClick={() => setEventFilter(key as FilterType)}
          className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all ${
            eventFilter === key
              ? "bg-[#0099cc] text-white shadow-lg transform scale-105"
              : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
          }`}
        >
          <Icon className="w-4 h-4 mr-2" />
          {label}
          {key === "all" && (
            <span className="ml-2 bg-blue-100 text-[#0099cc] px-2 py-0.5 rounded-full text-xs">
              {eventsData.length}
            </span>
          )}
          {key === "upcoming" && (
            <span className="ml-2 bg-green-100 text-green-600 px-2 py-0.5 rounded-full text-xs">
              {eventsData.filter((e) => e.isUpcoming).length}
            </span>
          )}
          {key === "past" && (
            <span className="ml-2 bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">
              {eventsData.filter((e) => e.isPast).length}
            </span>
          )}
          {key === "latest" && (
            <span className="ml-2 bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full text-xs">
              {eventsData.filter((e) => e.isLatest).length}
            </span>
          )}
        </button>
      ))}
    </div>
  );

  // Composant pour le calendrier
  const CalendarView = () => {
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-[#0099cc] to-[#007aa3] text-white p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Events Calendar</h2>
            <div className="flex items-center space-x-4">
              <div className="flex bg-white/20 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("calendar")}
                  className={`px-3 py-1.5 rounded-md transition-all ${viewMode === "calendar" ? "bg-white text-[#0099cc]" : "text-white hover:bg-white/10"}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`px-3 py-1.5 rounded-md transition-all ${viewMode === "list" ? "bg-white text-[#0099cc]" : "text-white hover:bg-white/10"}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrevMonth}
                  className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h3 className="text-lg font-medium min-w-[200px] text-center">
                  {formatMonthYear(currentMonth)}
                </h3>
                <button
                  onClick={handleNextMonth}
                  className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {viewMode === "calendar" ? (
          <>
            <div className="p-4">
              <div className="grid grid-cols-7 gap-2 mb-2">
                {weekDays.map((day) => (
                  <div
                    key={day}
                    className="text-center text-sm font-semibold text-gray-600 py-2"
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((day, index) => {
                  const isSelected =
                    selectedDate &&
                    day.date.getDate() === selectedDate.getDate() &&
                    day.date.getMonth() === selectedDate.getMonth() &&
                    day.date.getFullYear() === selectedDate.getFullYear();

                  const isToday =
                    day.date.getDate() === new Date().getDate() &&
                    day.date.getMonth() === new Date().getMonth() &&
                    day.date.getFullYear() === new Date().getFullYear();

                  return (
                    <div
                      key={index}
                      className={`relative h-24 p-2 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                        !day.isCurrentMonth
                          ? "bg-gray-50 text-gray-400"
                          : "bg-white hover:bg-blue-50"
                      } ${isSelected ? "ring-2 ring-[#0099cc] bg-blue-50" : ""} ${
                        isToday
                          ? "bg-blue-100 border-[#0099cc]"
                          : "border-gray-200"
                      }`}
                      onClick={() => handleDateClick(day.date)}
                    >
                      <div
                        className={`text-sm font-semibold ${isToday ? "text-[#0099cc]" : ""}`}
                      >
                        {day.date.getDate()}
                      </div>

                      {day.hasEvents && (
                        <div className="mt-1 space-y-1">
                          {day.events.slice(0, 2).map((event, eventIndex) => (
                            <div
                              key={eventIndex}
                              className={`h-1.5 rounded-full ${event.color || "bg-[#0099cc]"}`}
                              title={event.title}
                            ></div>
                          ))}
                          {day.events.length > 2 && (
                            <div className="text-xs text-gray-500 font-medium">
                              +{day.events.length - 2}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {selectedDate && (
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center text-lg">
                  <CalendarDays className="w-5 h-5 mr-2 text-[#0099cc]" />
                  Events for{" "}
                  {selectedDate.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </h3>
                {getEventsForSelectedDate().length > 0 ? (
                  <div className="space-y-3">
                    {getEventsForSelectedDate().map((event) => (
                      <div
                        key={event.id}
                        className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800 mb-2">
                              {event.title}
                            </h4>
                            <div className="space-y-1 text-sm text-gray-600">
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2 text-gray-400" />
                                {event.time}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                                {event.location}
                              </div>
                            </div>
                          </div>
                          <div
                            className={`w-3 h-3 rounded-full ${event.color || "bg-[#0099cc]"}`}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500">
                      No events scheduled for this date.
                    </p>
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="p-6">
            <div className="space-y-4">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-4 h-4 rounded-full mt-1 ${event.color || "bg-[#0099cc]"}`}
                    ></div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {event.title}
                      </h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                          {new Date(event.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-gray-400" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <main className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen py-20 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Navigation par onglets */}
        <div className="bg-white rounded-xl shadow-lg p-2 mb-8 sticky top-4 z-40">
          <div className="flex flex-wrap gap-2">
            {[
              {
                key: "news",
                label: "Latest News",
                icon: FileText,
                count: newsData.length,
              },
              {
                key: "events",
                label: "Events",
                icon: Calendar,
                count: eventsData.length,
              },
              {
                key: "press",
                label: "Press Releases",
                icon: Archive,
                count: pressReleasesData.length,
              },
            ].map(({ key, label, icon: Icon, count }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as any)}
                className={`flex-1 min-w-[150px] flex items-center justify-center px-4 py-3 rounded-lg font-medium transition-all ${
                  activeTab === key
                    ? "bg-[#0099cc] text-white shadow-md transform scale-105"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
                <span
                  className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                    activeTab === key
                      ? "bg-white/20"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Bouton de filtre global */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all shadow-lg ${
              showFilters
                ? "bg-[#0099cc] text-white"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
            }`}
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
            {showFilters && <ChevronDown className="w-4 h-4 ml-2 rotate-180" />}
          </button>
        </div>

        {/* Panneau de filtres unifié */}
        <UnifiedFilterPanel />

        {/* Section: Press Releases */}
        {activeTab === "press" && (
          <section className="mb-24" id="press-releases">
            <SectionHeader
              subtitle="Official Announcements"
              title="Press Releases"
            />

            {filteredPressReleases.length > 0 ? (
              <div className="max-w-4xl mx-auto space-y-4">
                {filteredPressReleases.map((item) => (
                  <PressReleaseItem key={item.title} {...item} />
                ))}
              </div>
            ) : (
              <div className="max-w-4xl mx-auto text-center py-16 bg-white rounded-xl shadow-lg">
                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No press releases found
                </h3>
                <p className="text-gray-500 mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedMinistry("");
                    setSelectedCategory("");
                    setSelectedDateRange({ start: "", end: "" });
                  }}
                  className="px-6 py-2 bg-[#0099cc] text-white rounded-lg hover:bg-[#007aa3] transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </section>
        )}

        {/* Section: Latest News */}
        {activeTab === "news" && (
          <section className="mb-24" id="latest-news">
            <SectionHeader
              subtitle="From Our Blog"
              title="Latest News & Insights"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsData.map((item) => (
                <NewsCard key={item.id} {...item} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/news"
                className="inline-flex items-center px-8 py-3 bg-[#0099cc] text-white font-semibold rounded-xl hover:bg-[#007aa3] transition-all transform hover:scale-105 shadow-lg"
              >
                View All News
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </section>
        )}

        {/* Section: Upcoming Events */}
        {activeTab === "events" && (
          <section id="upcoming-events">
            <SectionHeader subtitle="Join Us" title="Events Calendar" />
            <EventFilterTabs />
            <CalendarView />
          </section>
        )}
      </div>
    </main>
  );
};

export default NewsEventsSection;
