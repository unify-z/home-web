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
          src="https://hm.baidu.com/hm.js?659151e588c30412fdd107ade9e217bc" 
        />
      </head>
      <body className={styles("body")}>
        {children}
      </body>
    </html>
  )
}
