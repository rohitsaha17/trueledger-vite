import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import {
  LayoutDashboard,
  Briefcase,
  Image,
  FileText,
  LogOut,
  ArrowLeft,
} from "lucide-react";

const sidebarLinks = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Case Studies", href: "/admin/case-studies", icon: Briefcase },
  { label: "Media Gallery", href: "/admin/media", icon: Image },
  { label: "Blog Posts", href: "/admin/blog", icon: FileText },
];

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/admin/login");
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-black/[0.06] flex flex-col shrink-0">
        <div className="p-5 border-b border-black/[0.06]">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-brand transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            Back to Site
          </Link>
          <h1 className="font-heading font-bold text-lg text-ink mt-2">
            Admin Panel
          </h1>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive =
              link.href === "/admin"
                ? location.pathname === "/admin"
                : location.pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? "bg-brand-tint text-brand"
                    : "text-muted-foreground hover:bg-muted hover:text-ink"
                }`}
              >
                <Icon className="size-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-black/[0.06]">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors w-full cursor-pointer"
          >
            <LogOut className="size-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-6 md:p-8 max-w-6xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
