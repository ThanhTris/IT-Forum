import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
  hideLayout?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, hideLayout = false }) => {
  if (hideLayout) return <>{children}</>;

  return (
    <div>
      <Header isLoggedIn={true} username="Nguyễn Thanh Trí" />
      <div className="flex w-full">
        <Sidebar />
        <main className="flex-1 ml-64 mt-16">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;