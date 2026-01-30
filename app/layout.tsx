import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeRegistry from "./theme-registry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <ThemeRegistry>
          <Navbar />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
