import { Link } from "react-router-dom";

const footerLinks = [
  { to: "/about", label: "About Us" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Service" },
  { to: "/contact", label: "Contact Us" },
];

function Footer() {
  return (
    <footer className="mt-12 border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <span className="font-display text-lg font-bold text-ink">
            Paarsh MT
          </span>

          <nav
            aria-label="Footer"
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted"
          >
            {footerLinks.map(({ to, label }) => (
              <Link key={to} to={to} className="hover:text-primary">
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-6 text-center text-xs text-muted">
          © {new Date().getFullYear()} Paarsh MT. All rights reserved.
        </p>
        <p className="mt-1 text-center text-xs text-muted">
          Built with love by Yadnesh Narawade ❤️
        </p>
      </div>
    </footer>
  );
}

export default Footer;
