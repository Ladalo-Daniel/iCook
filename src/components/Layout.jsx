import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import ContactHeader from "./ContactHeader";
import Footer from "./Footer";
import SideNav from "./SideNav";


export default function Layout() {
    return(
        <div>
            <ContactHeader />
            <Header />
             <main className="container">
                <SideNav />
                <Outlet />
             </main>
            <Footer />
        </div>
    )
}