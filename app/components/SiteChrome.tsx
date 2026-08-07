"use client";

import { useState, type ReactNode } from "react";
import { sitePath } from "../lib/sitePath";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="site-header">
    <a className="wordmark" href={sitePath("/")}><strong>AEROSOL</strong><span>Climate &amp; Health Laboratory<br />Georgia Tech · EAS</span></a>
    <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>MENU</button>
    <nav className={menuOpen ? "open" : ""} aria-label="Main navigation"><a href={sitePath("/research")}>Research</a><a href={sitePath("/people")}>People</a><a href={sitePath("/publications")}>Publications</a><a href={sitePath("/news")}>News</a><a href={sitePath("/datasets")}>Data</a><a href={sitePath("/contact")}>Contact</a></nav>
  </header>;
}

export function Footer() {
  return <footer><div className="wordmark"><strong>AEROSOL</strong><span>Climate &amp; Health Laboratory<br />Georgia Tech · EAS</span></div><p>School of Earth and Atmospheric Sciences<br />Georgia Institute of Technology<br />Atlanta, Georgia</p><p>© {new Date().getFullYear()} Aerosol, Climate &amp; Health Laboratory</p></footer>;
}

export function PageShell({ children }: { children: ReactNode }) { return <><Header />{children}<Footer /></>; }

