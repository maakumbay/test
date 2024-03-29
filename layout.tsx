import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";
import Sidebara from "./components/Sidebara";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex">
          <div>
            <Sidebara />
          </div>
          <div className="p-7">{children}</div>

          {/* <div className="flex">
            <div className="basis-[12%] h-screen ">
              <Sidebar />
            </div>
            <div className="basis-[88%] ">{children}</div>
          </div> */}
        </main>
      </body>
    </html>
  );
}
