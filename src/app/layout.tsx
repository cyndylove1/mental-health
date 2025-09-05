import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-jakarta",
});
export const metadata: Metadata = {
  title: "Mental Health Assessment",
  description: "Multi-Step Assessment Form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} antialiased`}>
      <body>
        <ToastContainer
          limit={1}
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {children}
      </body>
    </html>
  );
}
