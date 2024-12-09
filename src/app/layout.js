import Menu from "@/components/menu/Menu";
import "./globals.css";

export const metadata = {
  title: "My Animated Navigation Menu",
  description: "Animation With GSAP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
