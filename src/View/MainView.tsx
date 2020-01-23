import React from "react";
import { Sidebar } from "./Sidebar/Sidebar";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";

interface MainViewProps {}

export const MainView: React.FC<MainViewProps> = props => {
    return (
        <>
            <header>
                <Header projectName={"dummy"} />
            </header>
            <main>
                <aside>
                    <Sidebar />
                </aside>
                <Main />
            </main>
        </>
    );
};
