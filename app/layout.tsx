import './globals.css';

export const metadata = {
  title: 'Мой чат',
  description: 'учебный проект',
};

export default function RootLayout({
  children}: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="ru">
      <body className="bg-[#1a1b1e] text-white min-h-screen">
        {children}
      </body>
    </html>
    )
  };
  