import { Outlet } from "react-router-dom";
import { MinimalHeader } from "../components/MinimalHeader";

export default function MinimalLayout(){
    return(
        <>
            <div className=" fixed w-screen h-dvh overflow-hidden flex flex-col justify-between">
            <MinimalHeader/>
            <Outlet/>
            </div>
        </>
    )
}