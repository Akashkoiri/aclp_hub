import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// provider
import { QueryProvider } from "@/components/providers/query-provider";
import { ThemeProvider } from "@/components/providers/theme-provider"
// Shad-cn comps
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Navbar from "@/components/navbar";

// Styles
import "./globals.css";
import { Separator } from "@/components/ui/separator";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider defaultOpen={false}>
              <AppSidebar />
              <div className="flex flex-col w-full">
                <Navbar />
                <Separator />
                <main className="flex-1 overflow-auto mx-40">
                  {children}
                </main>
              </div>
            </SidebarProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html >
  );
}
