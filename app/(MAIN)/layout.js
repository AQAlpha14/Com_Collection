import Footer from "@/components/Footer/Footer";
import React from "react";

export default function Layout({ children }) {
  return <div>
    
    {children}
    <Footer />
    </div>;
}
