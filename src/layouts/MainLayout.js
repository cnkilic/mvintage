import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
