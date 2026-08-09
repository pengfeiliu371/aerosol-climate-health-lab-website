"use client";

import { useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { sitePath } from "../lib/sitePath";

const navLinks = [
  { href: "/research", label: "Research" },
  { href: "/people", label: "People" },
  { href: "/publications", label: "Publications" },
  { href: "/teaching", label: "Teaching" },
  { href: "/news", label: "News" },
  { href: "/datasets", label: "Data" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname().replace(/\/$/, "");
  return <header className="site-header">
    <a className="wordmark" href={sitePath("/")}><strong>AEROSOL</strong><span>Climate &amp; Health Laboratory<br />Georgia Tech · EAS</span></a>
    <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={`${menuOpen ? "Close" : "Open"} main navigation`}>MENU</button>
    <nav id="main-navigation" className={menuOpen ? "open" : ""} aria-label="Main navigation">
      {navLinks.map(({ href, label }) => {
        const resolvedHref = sitePath(href).replace(/\/$/, "");
        const isCurrent = pathname === resolvedHref;
        return <a href={resolvedHref} aria-current={isCurrent ? "page" : undefined} key={href}>{label}</a>;
      })}
    </nav>
  </header>;
}

export function Footer() {
  return <footer><div className="wordmark"><strong>AEROSOL</strong><span>Climate &amp; Health Laboratory<br />Georgia Tech · EAS</span></div><p>School of Earth and Atmospheric Sciences<br />Georgia Institute of Technology<br />Atlanta, Georgia</p><p>© {new Date().getFullYear()} Aerosol, Climate &amp; Health Laboratory</p></footer>;
}

export function PageShell({ children }: { children: ReactNode }) { return <><Header />{children}<Footer /></>; }

