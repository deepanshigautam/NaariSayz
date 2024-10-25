import type { Metadata } from "next";
import '../global.css'

export const metadata: Metadata = {
  title: "NaariSayz",
  description: "NaariSayz is a blog where you can find articles on various topics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
