"use client"
import "../styles/globals.css"
import {Provider} from "react-redux";
import store from "../redux/store";
import "../styles/globals.css";
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><Provider store={store}>{children}</Provider></body>
    </html>
  )
}