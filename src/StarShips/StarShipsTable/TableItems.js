import React from "react";
import StarShip1 from '../../Assets/starship1.jpg';
import StarShip2 from '../../Assets/starship2.jpg';
import StarShip3 from '../../Assets/starship3.jpg';
import StarShip4 from '../../Assets/starship4.jpg';
import StarShip5 from '../../Assets/starship5.jpg';
import StarShip6 from '../../Assets/starship6.jpg';
import StarShip7 from '../../Assets/starship7.jpg';
import StarShip8 from '../../Assets/starship8.jpg';
import StarShip9 from '../../Assets/starship9.jpg';
import StarShip10 from '../../Assets/starship10.jpg';
import Trophy from '../../Assets/trophy.jpg';

const starShipImages = [
    StarShip1, StarShip2, StarShip3, StarShip4, StarShip5, StarShip6, StarShip7, StarShip8, StarShip9, StarShip10
]

export const TableItems = ({ ship, shipIdx, highestFilmedShip }) => {
    console.log("ship", highestFilmedShip);
    return(
        <div className="d-flex border rounded m-auto content-width align-items-center my-4">
            <img src={starShipImages[shipIdx > 9 ? shipIdx % 10 : shipIdx]} alt="These are starship images" height={200} width={400} />
            <div className="px-4">
                <strong>Ship name: </strong>
                <i>{ship.name}</i>
                {highestFilmedShip.name === ship.name && 
                <img src={Trophy} alt="This ship has been filmed in highest number of films." height={30} width={30} className="mx-1" />}
                <div className="my-2">
                    <strong>Model: </strong>
                    <i>{ship.model}</i>
                </div>
                <div>
                    <strong>Number of films: </strong>
                    <i>{ship.films.length}</i>
                </div>
            </div>
        </div>
    )
}