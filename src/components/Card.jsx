export default function Card(props) {
   return (
      <div>
          <button onClick={props.onClose}>X</button>
         <h2> {props.name} </h2>
         <h3>Status: {props.status} </h3>
         <h3>Species:  {props.species} </h3>
         <h3>Gender: {props.gender} </h3>
         <h3>Origin: {props.origin} </h3>
         <img src={props.image} alt= {props.name} /> 
      </div>
   );
}
