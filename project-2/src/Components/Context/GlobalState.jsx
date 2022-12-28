import React, {
  useReducer,
  //   createContext,
  useEffect,
  createContext,
  useState,
} from "react";
import Reducer from "./Reducer";
// initial state
const inititalState = {
  favourites: localStorage.getItem("favourites")
    ? JSON.parse(localStorage.getItem("favourites"))
    : [],
};

export const GlobalContext = createContext(inititalState);

//provider
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, inititalState);
  const ACTIONS = {
    ADD_FAVOURITE: "add to favourites",
    REMOVE_FAVOURITE: "remove from favourites",
  };

  useEffect(() => {
    const handleStorage = () => {
      // Place for a function responsible for
      // pulling and displaying local storage data
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    };
    window.addEventListener("storage", handleStorage());
    return () => window.removeEventListener("storage", handleStorage());
  }, []);

  const addTitleToFavourits = (show) => {
    dispatch({ type: "ADD_FAVOURITE", payload: show });
  };
  const removeTitleFromFavourits = (id) => {
    dispatch({ type: "REMOVE_FAVOURITE", payload: id });
  };
  return (
    <GlobalContext.Provider
      value={{
        favourites: state.favourites,
        addTitleToFavourits,
        removeTitleFromFavourits,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
