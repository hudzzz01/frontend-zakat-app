import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";
import Allert from "./Allert";
import Navbar from "../../Navbar,";
import { Outlet } from "react-router";
import Footer from "../../Footer";

export default function Layout() {


    const { isAllert } = useContext(AppContext)

    let allertElement;
    if(isAllert){
        allertElement = <Allert/>
    }else{
        allertElement = <></>
    }

    return (
        <div>
            <Navbar/>
            {allertElement}
            <div className="main"> <Outlet /> </div>
            <Footer/>
        </div>
    )
}