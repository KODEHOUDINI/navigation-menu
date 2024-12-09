import localFont from "next/font/local";
import Menu from "@/components/menu/Menu";
import "./globals.css";

const shredHanded = localFont({
  src: "./fonts/ShredHanded.woff",
  variable: "--font-shred-handed",
  weight: "100 900",
});

export const metadata = {
  title: "My Animated Navigation Menu",
  description: "Animation With GSAP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${shredHanded.variable}`}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
