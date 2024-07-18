import { ReactNode } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

type LayoutProps = {
    children: ReactNode
}

function DefaultLayout({ children } : LayoutProps) {
    return ( 
        <div>
            <Header />
            <Navbar />
            <div className="py-10">
                {children}
            </div>
        </div>
     );
}

export default DefaultLayout;