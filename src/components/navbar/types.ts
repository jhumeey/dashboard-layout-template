import { Dispatch, SetStateAction } from "react";


export interface NavbarProps {
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
    sidebarOpen: boolean;
}


export interface SidebarProps {
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
    sidebarOpen: boolean;
}