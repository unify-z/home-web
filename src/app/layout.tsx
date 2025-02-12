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
  return (
    <html lang="Zh-cn">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://sdk.51.la/js-sdk-pro.min.js"
          id="LA_COLLECT"
          charset="UTF-8"
        />
        <Script
          strategy="afterInteractive"
          id="la-init"
          dangerouslySetInnerHTML={{
            __html: `LA.init({id:"3LEhgRw88R4WHpfa",ck:"3LEhgRw88R4WHpfa"})`,
          }}
        />
      </head>
      <body className={styles("body")}>
        {children}
      </body>
    </html>
  )
}
