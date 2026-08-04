import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background">
      <Navbar />
      <Outlet />
      <div>Footer</div>
    </div>
  );
}

export default Layout;
