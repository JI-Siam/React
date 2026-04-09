import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
export default function Root(){
    return (
    <>
        <Header></Header>
        <Outlet></Outlet>
    </> ) ; 

}