import type { Metadata } from "next";
import { Roboto, Space_Grotesk as SpaceGrotesk } from 'next/font/google'
import "./globals.css";
import { ChildProps } from "../types";

const roboto = Roboto({
	subsets: ['latin', 'cyrillic'],
	weight: ['100', '300', '400', '500', '700', '900'],
	variable: '--font-roboto',
})

const spaceGrotesk = SpaceGrotesk({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-space-grotesk',
})
export const metadata: Metadata = {
  title: "Startup Fullstack",
  description: "Startup Praktikum's a Next.js project",
  icons: { icon: '/logo.svg' },
};

export default function RootLayout({children}: ChildProps) {
  return (
    <html lang="en">
      <body 
    	    className={`${roboto.variable} ${spaceGrotesk.variable} overflow-x-hidden`}
				  suppressHydrationWarning
			>
			
					{children}
				
      </body>
    </html>
  );
}
