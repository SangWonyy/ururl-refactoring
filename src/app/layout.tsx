import "src/style/reset.css";
import "src/style/globalTheme.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReactQueryProvider from "@src/component/common/ReactQueryProvider";
import MSWInit from "@src/component/common/MSWInit";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "URURL - URL을 가장 쉽게 관리하는 방법",
  description:
    "PM/PO/기획자를 위한 URL 관리 사이트. 카카오톡과 확장 프로그램으로 URURL에서 URL을 편리하게 저장하고 읽어요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <MSWInit>{children}</MSWInit>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
