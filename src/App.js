import React, { useState } from "react";

export default function App() {



    return (

        <>
            <div id="gauche">
                <nav>
                    <a href="" class="logo">China - Dashboard</a>

                    <ul class="niveau1">
                        <li class="element"> <a href="">Salariés</a> </li>
                        <li class="element"> <a href="">Postes</a> </li>
                        <li class="niveau2"> <a href="">Menu</a>
                            <ul class="">
                                <li class="element"> <a href="">Sous menu 1</a> </li>
                                <li class="element"> <a href="">Sous menu 2</a> </li>
                                <li class="element"> <a href="">Sous menu 3</a> </li>
                            </ul>
                        </li>
                        <li class="element"> <a href="">Managers</a></li>
                    </ul>
                </nav>
            </div>

            <div id="droit" style={{backgroundColor: "yellow" }}>
                hey
            </div>

        </>
    );
}