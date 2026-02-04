import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { WhatsAppFloatingButton } from "@/components/layouts/whatsapp-floating-button";
import NextTopLoader from "nextjs-toploader";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sabeel Ul Quran - Islamic Education",
  description: "Learn Quran, Arabic, and Islamic Studies with expert tutors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <NextTopLoader
						color="#d4af37"
						height={2}
						crawlSpeed={50}
						speed={1000}
						showSpinner={false}
					/>
            {children}
            <WhatsAppFloatingButton />
          </ThemeProvider>
      </body>
    </html>
  );
}
