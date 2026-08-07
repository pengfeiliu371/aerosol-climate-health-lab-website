import type { Metadata } from "next";
import "./globals.css";
import "./content.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://liu.eas.gatech.edu"),
  title: "Aerosol, Climate & Health Laboratory | Georgia Tech",
  description: "Research on atmospheric aerosols, air quality, climate, and environmental health at Georgia Tech.",
  openGraph: { title: "Aerosol, Climate & Health Laboratory", description: "Atmospheric aerosol research at Georgia Tech.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

