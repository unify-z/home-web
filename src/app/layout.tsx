import type { Metadata } from 'next'
import "./globals.css";
import style9 from "style9";
import AnalyticsScript from './AnalyticsScript';

const styles = style9.create({
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: "var(--bg-color)",
  },
});

export const metadata: Metadata = {
  title: "unify-z's Home Page",
  description: "A home page for unify-z",
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="Zh-cn">
      <head>
        <AnalyticsScript />
      </head>
      <body className={styles("body")}>
        {children}
      </body>
    </html>
  );
}
