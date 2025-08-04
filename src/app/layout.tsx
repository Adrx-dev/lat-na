// app/layout.tsx
import { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Home | Lakambini Archives",
  description:
    "A platform for Grade XI Lakambini students to share academic insights, experiences, and stories that inspire our community.",
        icons: {
    icon: "/favicon.ico", // ← this is your favicon
  },
  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f[]=switzer@400,500,600,700&display=swap"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen h-full antialiased bg-white text-gray-900">
        <SessionProvider>
          <div className="flex flex-col min-h-screen w-full max-w-screen overflow-x-hidden">
            <main className="flex-1 w-full px-4 sm:px-6 md:px-8 py-6">
              {children}
            </main>
            <footer className="w-full px-4 sm:px-6 md:px-8 py-4 text-sm text-center text-gray-500 border-t">
              &copy; {new Date().getFullYear()} AdrxDev. All rights reserved.
            </footer>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
