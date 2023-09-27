import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { TableItems } from "./TableItems";

let page = 1;
const fetchData = (setStarShipsData, starShipsData, setCount) => {
    axios.get(`https://swapi.dev/api/starships/?page=${page}&limit=10`)
      .then((data) => {
        setStarShipsData([...starShipsData, ...data.data.results]); 
        setCount(data.data.count);
        page = page + 1;

    })
      .catch((error) => console.log(error));
};
export const StarShipsTable = () => {    
    const [starShipsData, setStarShipsData] = useState([]);
    const [count, setCount] = useState(0);   

    useEffect(() => {
        fetchData(setStarShipsData, starShipsData, setCount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const newData = starShipsData?.filter(x => x.crew < 10);

    const highestFilmedShip = newData.length > 0 ? newData.reduce((previous, current) => {
        const ship =  current.films.length > previous.films.length ? current : previous;
        console.log(ship);
        return ship;
      }) : "";

    if(starShipsData.length === 0) return <></>
    return(
        <div className="p-4 pt-2 m-auto bg-white set-background">                    
            <InfiniteScroll dataLength={count} next={() => {
                fetchData(setStarShipsData, starShipsData, setCount)
            }} loader={<p style={{ textAlign: "center", color:"white" }}>Loading...</p>} 
            endMessage={                
                    <p style={{ textAlign: "center", color:"white"}}>
                      <b>Yay! You have seen it all</b>
                    </p>                  
            }
             hasMore={true} >
                {
                    newData?.map((ship, idx) => (
                        <TableItems ship={ship} shipIdx={idx} highestFilmedShip={highestFilmedShip} />
                    ))
                }
            </InfiniteScroll>           
        </div>
    )
}