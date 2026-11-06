import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import { themeScript } from "@/components/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${profile.name} — ${profile.role}`;
const description = `${profile.role} no ${profile.company}. Construo APIs, serviços serverless e interfaces escaláveis com React, Node.js, AWS, .NET e Go. Veja meus projetos, experiência e contato.`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: title,
    template: `%s | ${profile.name}`,
  },
  description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  keywords: [
    profile.name,
    "Reinaldo Silva",
    "Senior Software Engineer",
    "Engenheiro de Software",
    "Desenvolvedor Full Stack",
    "BTG Pactual",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "AWS",
    ".NET",
    "Go",
    "Portfólio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: profile.name,
    title,
    description: `${profile.role} no ${profile.company}. ${profile.headline}`,
    locale: "pt_BR",
    firstName: "Reinaldo",
    lastName: "Silva Tomicioli",
    username: profile.githubUser,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: `${profile.role} no ${profile.company}. ${profile.headline}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8fb" },
    { media: "(prefers-color-scheme: dark)", color: "#05060a" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="noise min-h-full bg-bg font-sans text-fg">{children}</body>
    </html>
  );
}
