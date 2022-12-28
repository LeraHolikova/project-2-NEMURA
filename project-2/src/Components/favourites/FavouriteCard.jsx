import React, { useState } from "react";
// import Modal from "./Modal";
// import "../Components/cards/cards.css";
import image from "../../assets/Image_not_available.png";
// import { Navigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
// import MyFavourites from "../../pages/MyFavourites";
// import AddToFavourite from "../favourites/AddToFavourite";
import AddOrRemove from "../favourites/AddOrRemove";

// import CurrentPage from "../../pages/CurrentPage";
// import { Link } from "react-router-dom";

const FavouriteCard = ({
  type,
  show,
  addTitleToFavourits,
  favourites,
  removeTitleFromFavourits,
}) => {
  const addedShow = favourites.find((i) => i.id === show.id);

  // console.log(show.show.id, "added show");
  // console.log(removeTitleFromFavourits, "removeTitleFromFavourits show");

  const avoidDuplicate = addedShow ? true : false;
  // console.log(type);

  const ratingConditional = (rating) => {
    if (rating <= 2) {
      return "⭐️";
    }
    if (rating > 2 && rating <= 4) {
      return "⭐️ ⭐️";
    }
    if (rating > 4 && rating <= 6) {
      return "⭐️ ⭐️ ⭐️";
    }
    if (rating > 6 && rating <= 8) {
      return "⭐️ ⭐️ ⭐️ ⭐️";
    }
    if (rating > 8 && rating <= 10) {
      return "⭐️ ⭐️ ⭐️ ⭐️ ⭐️";
    } else {
      return "---";
    }
  };
  let name = "muly";
  // console.log(, "currentPage");
  // console.log(show.show, "check");
  return (
    <>
      <div className="card">
        <div className="card-image">
          <Link
            onClick={() => {
              window.scroll(0, 0);
            }}
            to={"/shows/" + show?.name + "/" + show?.id}
          >
            <img
              className="card-img"
              src={show?.image ? show?.image?.medium : image}
            />
          </Link>
        </div>
        <div className="card-info">
          <p className="result-name">
            <strong>{show?.name}</strong>
          </p>
          <p>
            Network:{" "}
            {show?.network && show?.network.name
              ? show?.network.name
              : " Unknown"}
          </p>
          <p>
            <strong> </strong>
            {ratingConditional(Math.round(show?.rating?.average))}
          </p>
        </div>
        <AddOrRemove show={show} type={type} />
        {/* <div>
          <button
            className="overlay"
            disabled={avoidDuplicate}
            onClick={() => removeTitleFromFavourits(show?.id)}
          >
            remove
          </button>
        </div> */}
      </div>
    </>
  );
};

export default FavouriteCard;
