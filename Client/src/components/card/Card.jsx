import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { addFav } from "../../redux/actions";

export default function Card(props) {
   //* props = character

   const dispatch =useDispatch();
   const [isFav, setIsFAv] = useState(false)
   const handleFavorite = () =>{
      if(isFav){
         setIsFAv(false);
         dispatch(removeFav(props.id))
      } else {
         setIsFAv(true);
         dispatch(addFav(props))
      }
   }

   return (
      <div
      style={{
         backgroundColor: "grey",
         margin: "20px",
         padding: "20px",
         borderRadius: "15px",
      }}
      >
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }

         <button onClick={() => props.onClose(props.id)}>X</button>
         <h2> {props.name} </h2>
         <h4>Id: {props.id}</h4>
         <h4>Status: {props.status} </h4>
         <h4>Species:  {props.species} </h4>
         <h4>Gender: {props.gender} </h4>
         <h4>Origin: {props.origin} </h4>
         <Link to={`/detail/${props.id}`}>
            <img src={props.image} alt= {props.name} /> 
         </Link>
      </div>
   );
}
