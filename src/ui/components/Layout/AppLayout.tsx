import { Outlet } from "react-router-dom";
import Header from "../Header";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="px-4 md:px-6 pt-24 pb-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
