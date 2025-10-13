import "./globals.css";

export const metadata = {
  title: "Trajetória com Jesus",
  description: "Newsletter Trajetória com Jesus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-[#F6EDDC]">{children}</body>
    </html>
  );
}
