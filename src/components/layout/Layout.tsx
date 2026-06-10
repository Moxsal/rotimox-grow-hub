import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingWhatsApp from "../FloatingWhatsApp";
import SupportChat from "../SupportChat";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
      <SupportChat />
    </div>
  );
};

export default Layout;
