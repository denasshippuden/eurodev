import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devis Travaux Belgique",
  description:
    "Service de mise en relation entre particuliers et professionnels partenaires pour demandes de devis en Belgique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
    (() => {
      try {
        const savedTheme = localStorage.getItem("theme");
        const theme = savedTheme === "light" || savedTheme === "dark"
          ? savedTheme
          : (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

        document.documentElement.dataset.theme = theme;
        document.documentElement.style.colorScheme = theme;
      } catch (_) {}
    })();
  `;

  return (
    <html lang="fr" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
