import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Epilogue, Open_Sans } from "next/font/google";

const epilogue = Epilogue({ subsets: ["latin"], variable: "--font-epilogue" });
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Stronger Gym",
  description: "The next episody of your body with our gym",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${epilogue.variable} ${roboto.variable} ${openSans.variable} ${epilogue.className} bg-pr-black`}
      >
        {children}
      </body>
    </html>
  );
}
