import {
  Bell,
  Home,
  LogOut,
  MessageCircle,
  Search,
  User,
  Users,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/profile", label: "Profile", icon: User },
  { to: "/friends", label: "Friends", icon: Users },
  { to: "/messages", label: "Messages", icon: MessageCircle },
  { to: "/notifications", label: "Notifications", icon: Bell },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
          </span>
          <span className="font-display text-xl font-bold text-ink">
            Paarsh MT
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted hover:bg-bg hover:text-ink"
                }`
              }
            >
              <Icon size={18} />
              <span className="hidden lg:inline">{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <form
            role="search"
            className="hidden items-center gap-2 rounded-full border border-border bg-bg px-3 py-1.5 sm:flex"
          >
            <label htmlFor="site-search" className="sr-only">
              Search here
            </label>
            <Search size={16} className="text-muted" />
            <input
              id="site-search"
              type="search"
              placeholder="Search here..."
              className="w-40 bg-transparent text-sm text-ink placeholder:text-muted focus:outline-none"
            />
          </form>

          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:border-primary hover:text-primary"
          >
            <LogOut size={16} />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>

      <nav
        aria-label="Primary mobile"
        className="flex items-center justify-around border-t border-border py-2 md:hidden"
      >
        {navLinks.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 text-xs ${
                isActive ? "text-primary" : "text-muted"
              }`
            }
          >
            <Icon size={20} />
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
