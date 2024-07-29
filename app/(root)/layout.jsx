import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import { TransactionProvider } from "@/context/TransactionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bank App",
  description: "Your intutive bank app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <TransactionProvider>
        <div className="min-h-screen bg-gray-100 p-4">
          <Navbar/>
          <main className="mt-4">{children}</main>
        </div>
        </TransactionProvider>
      </body>
    </html>
  );
}
