import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { WhatsAppFloatingButton } from "@/components/layouts/whatsapp-floating-button";
import NextTopLoader from "nextjs-toploader";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sabeel-ul-quran.com/"),
  title: {
    default: "Sabeel Ul Quran - Online Islamic Education",
    template: "%s | Sabeel Ul Quran",
  },
  description:
    "Learn Quran, Arabic, and Islamic Studies online with expert tutors. Courses for all ages, all regions worldwide. Start your journey today.",
  keywords: [
    "online quran classes",
    "learn quran online",
    "islamic education online",
    "arabic classes online",
    "quran for kids",
    "online madrasa",
    "islamic studies",
    "quran tutors",
    "hifz online",
    "tajweed classes",
  ],
  openGraph: {
    type: "website",
    siteName: "Sabeel Ul Quran",
    title: "Sabeel Ul Quran - Online Islamic Education",
    description:
      "Learn Quran, Arabic, and Islamic Studies online with expert tutors. Available worldwide.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabeel Ul Quran - Online Islamic Education",
    description:
      "Learn Quran, Arabic, and Islamic Studies online with expert tutors. Available worldwide.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
           <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1080938229814234');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  );
}
