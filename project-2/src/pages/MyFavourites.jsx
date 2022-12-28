import "../App.css";
// import "./favourites.css";
import "../Components/favourites/favourites.css";
import Quotes from "../Components/Quotes/Quotes";
// import CardGrid from "../Components/cards/CardGrid";
// import { HashLink as Link } from "react-router-hash-link";
// import AddOrRemove from "../Components/favourites/AddOrRemove";

import React, { GlobalContext } from "../Components/Context/GlobalState";
import { useContext, useState } from "react";
import { GlobalProvider } from "../Components/Context/GlobalState";
import FavouriteCard from "../Components/favourites/FavouriteCard";

const MyFavourites = () => {
  const { favourites, addTitleToFavourits, removeTitleFromFavourits } =
    useContext(GlobalContext);
  console.log(addTitleToFavourits, "addTitleToFavourits from my fav page");
  //   console.log(favourites, "favouritesssss");
  const muly = favourites.map((favourite) => favourite.name);
  console.log(favourites, "favourite");
  return (
    // <GlobalProvider>
    <div>
      <div className="hero">{/* <Quotes /> */}</div>
      <div className="mal cards-section">
        {favourites.length === 0 ? (
          <h1>No Titles added</h1>
        ) : (
          favourites.map((show, index) => {
            return (
              <div key={index}>
                <FavouriteCard
                  show={show}
                  removeTitleFromFavourits={removeTitleFromFavourits}
                  favourites={favourites}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
    //{" "}
    // </GlobalProvider>
  );
};
export default MyFavourites;
