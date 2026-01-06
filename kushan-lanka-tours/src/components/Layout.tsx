import { Outlet } from "react-router-dom";
import Navbar from "./AppNavbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1 mt-5 pt-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
