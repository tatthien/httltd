import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hội Thánh Tin Lành Thủ Đức",
  description: "Kênh thông tin trực tuyến chính thức của Hội Thánh Tin Lành - Chi hội Thủ Đức",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        <Header />
        <main className="pt-[70px] md:pt-[80px] min-h-[calc(100vh-300px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
