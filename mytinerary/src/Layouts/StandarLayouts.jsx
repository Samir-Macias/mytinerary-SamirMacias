import React from "react";
import { Outlet } from "react-router-dom";

export default function StandarLayouts() {
    return (
        <>
            <header>
                <h1>
                    <header>
                    </header>
                </h1>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <h2>
                    <footer></footer>
                </h2>
            </footer>
        </>
    )
}