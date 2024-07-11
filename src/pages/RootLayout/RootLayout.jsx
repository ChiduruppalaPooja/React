import { Outlet } from "react-router-dom";
import SideBar from "../../components/common/SideBar";
import TopNavigation from "../../components/common/TopNavigation";
export default function RootLayout() {
    return (
        <>    
            <SideBar/>
            <TopNavigation/>
            <Outlet />
        </>
    );
}