// src/App/router.tsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Tours from "../pages/Tours";
import TourDetails from "../pages/TourDetails";
import About from "../pages/About";
import Contact from "../pages/Contact";
import AppNavbar from "../components/AppNavbar";
import Footer from "../components/Footer";

// Layout wrapper with navbar + footer
const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <AppNavbar />
    {children}
    <Footer />
  </>
);

// Named export of router
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/tours",
    element: <Layout><Tours /></Layout>,
  },
  {
    path: "/tours/:id",
    element: <Layout><TourDetails /></Layout>,
  },
  {
    path: "/about",
    element: <Layout><About /></Layout>,
  },
  {
    path: "/contact",
    element: <Layout><Contact /></Layout>,
  },
]);
