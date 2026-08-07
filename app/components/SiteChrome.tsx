"use client";

import { useState, type ReactNode } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="site-header">
    <a className="wordmark" href="/"><strong>AEROSOL</strong><span>Climate &amp; Health Laboratory<br />Georgia Tech Â· EAS</span></a>
    <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>MENU</button>
    <nav className={menuOpen ? "open" : ""} aria-label="Main navigation"><a href="/research">Research</a><a href="/people">People</a><a href="/publications">Publications</a><a href="/news">News</a><a href="/datasets">Data</a><a href="/contact">Contact</a></nav>
  </header>;
}

export function Footer() {
  return <footer><div className="wordmark"><strong>AEROSOL</strong><span>Climate &amp; Health Laboratory<br />Georgia Tech Â· EAS</span></div><p>School of Earth and Atmospheric Sciences<br />Georgia Institute of Technology<br />Atlanta, Georgia</p><p>Â© {new Date().getFullYear()} Aerosol, Climate &amp; Health Laboratory</p></footer>;
}

export function PageShell({ children }: { children: ReactNode }) { return <><Header />{children}<Footer /></>; }

