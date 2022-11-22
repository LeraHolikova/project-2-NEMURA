import React from "react";
import CurrentPage from "../CurrentPage";
import "./results.css";
import "../../App.css";
import Cast from "./Cast";
import { HashLink as Link } from "react-router-hash-link";


const Results = ({cast, isloading}) => {
  console.log(cast, "cast")
  // if (!isloading) {
  //   console.log(cast, "load")
  // } else {
  //   console.log("not yet")
  // }
  return isloading ? (
    `loading...`
  ) : (

        // <div>
        //   {cast.map(item =>{
        //    return <p>{item.character?.name ? item.character.name : "M"}</p>
        //   })}
           
        // </div>
        <div>
          <div className="headlines" id="headlines">
            <h1>{cast.length ? "Cast" : null}</h1>
          </div>
          <div  className="mul">
          <section className="cards-section">
            {cast.map((cast) => {
 return (
   <>
    <Link
             onClick={() => {
               window.scroll(0, 0);
             }}
             to={"/people/"  + cast.person.name + "/" + cast.person.id}
           >
             <Cast key={cast.person.id} cast={cast} />
           </Link>
     {/* <Cast key={cast.person.id} cast={cast} /> */}
   </>
 );
})}
</section>
</div>
</div>
    );
};
  
  
  export default Results;
  


