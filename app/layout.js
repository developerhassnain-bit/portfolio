import "./globals.css";

export const metadata = {
  title: "Hassnain | Full Stack Developer & Next.js Specialist",
  description: "Portfolio of Hassnain, a Full-stack Engineer crafting scalable, high-performance web experiences using React, Next.js, Node.js, and MongoDB.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
