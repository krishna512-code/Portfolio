import "./globals.css";
import { Outfit , Ovo  } from "next/font/google";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
    subsets: ["latin"],
    weight: ["400"],
});

export const metadata = {
    title: "Portfolio-Krishna Kant Narayan",
    description: "Portfolio of Krishna Kant Narayan, showcasing projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
