import { Outlet } from "react-router-dom";
import { MinimalHeader } from "../components/MinimalHeader";

export default function MinimalLayout(){
    return(
        <>
            <div className="w-screen h-screen overflow-auto flex flex-col justify-between">
            <MinimalHeader/>
            <Outlet/>
            </div>
        </>
    )
}