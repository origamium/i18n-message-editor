import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export interface HeaderProps {
    projectName: string;
}

export const Header: React.FC<HeaderProps> = ({ projectName }) => {
    return (
        <AppBar position={"static"}>
            <Toolbar>
                <Typography>{projectName}</Typography>
            </Toolbar>
        </AppBar>
    );
};
