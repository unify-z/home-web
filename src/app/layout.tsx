import type { Metadata } from 'next'
import Script from 'next/script'
import "./globals.css";
import style9 from "style9";

const styles = style9.create({
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: "var(--bg-color)",
  },
})

export const metadata: Metadata = {
  title: "unify-z's Home Page",
  description: "A home page for unify-z",
  icons: '/favicon.ico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const handleLAOnLoad = () => {
      (window as any).LA.init({ id: "3LEhgRw88R4WHpfa", ck: "3LEhgRw88R4WHpfa" });
  };

  return (
    <html lang="Zh-cn">
      <head>
        <Script
          strategy="afterInteractive"
          src="//sdk.51.la/js-sdk-pro.min.js"
          id="LA_COLLECT"
          charSet="UTF-8"
          onLoad={handleLAOnLoad}
        />
      </head>
      <body className={styles("body")}>
        {children}
      </body>
    </html>
  )
}
