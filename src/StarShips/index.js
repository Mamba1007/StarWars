import React from "react";
import StarWarsLogo from '../Assets/Star_Wars_Logo.svg.png'
import { StarShipsTable } from "./StarShipsTable";

export const StarShips = () => (
        <>
            <div className="text-center bg-black" >
                <img src={StarWarsLogo} alt="This is star wars app" className="header-image-align" />
            </div>
            <div className="scroll-container effects">
                <h2 className="text-center pt-2  scroll-text">Below is the list of all the starships with a crew size less than 10.</h2>
            </div>
            <StarShipsTable />
        </>
)
