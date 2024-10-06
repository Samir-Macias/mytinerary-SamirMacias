import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function StandarLayouts() {
    return (
        <>
            <header>
               <NavBar></NavBar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
              <Footer></Footer>
            </footer>
        </>
    )
}