import type { Metadata } from "next";
import "./globals.css";
import "./content.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://liuaerosol.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Aerosol, Climate & Health Laboratory | Georgia Tech",
  description: "Research on atmospheric aerosols, air quality, climate, and environmental health at Georgia Tech.",
  openGraph: { title: "Aerosol, Climate & Health Laboratory", description: "Atmospheric aerosol research at Georgia Tech.", images: [`${siteUrl}/og.png`] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
