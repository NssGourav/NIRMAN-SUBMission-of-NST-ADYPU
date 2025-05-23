import { Inter, Poppins } from "next/font/google";

export const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
