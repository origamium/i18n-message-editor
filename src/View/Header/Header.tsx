import React from "react";
import { AppBar } from "@material-ui/core";

export interface HeaderProps {
    projectName: string
}

export const Header: React.FC<HeaderProps> = props => {
    return <AppBar>
        はい
    </AppBar>
};
