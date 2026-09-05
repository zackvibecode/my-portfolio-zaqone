import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import localFont from "next/font/local";

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  weight: "100 900",
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = localFont({
  src: "./fonts/jetbrains-mono-latin.woff2",
  weight: "100 800",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZAQONE — Digital Marketing Systems Builder",
  description:
    "ZAQONE builds websites, CRM systems, marketing automation, AI chatbots and WhatsApp flows that help businesses capture, manage and convert leads faster.",
  keywords: [
    "ZAQONE",
    "Digital Marketing",
    "CRM",
    "Automation",
    "AI Chatbot",
    "WhatsApp Chatbot",
    "Meta Ads",
    "Lead Generation",
    "Next.js",
  ],
  authors: [{ name: "Muhammad Zarul Zaquan Bin Nasaruddin" }],
  openGraph: {
    title: "ZAQONE — Digital Marketing Systems Builder",
    description:
      "Websites, CRM systems, automation workflows and AI chatbot systems that capture, manage and convert leads faster.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('zaqone-theme');
    var theme = stored === 'dark' ? 'dark' : 'light';
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.body && document.body.classList.add('light');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
