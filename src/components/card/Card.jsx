export default function Card(props) {
   return (
      <div
      style={{
         backgroundColor: "grey",
         margin: "20px",
         padding: "20px",
         borderRadius: "15px",
      }}
      >
          <button onClick={() => props.onClose(props.id)}>X</button>
         <h2> {props.name} </h2>
         <h4>Id: {props.name}</h4>
         <h3>Status: {props.status} </h3>
         <h3>Species:  {props.species} </h3>
         <h3>Gender: {props.gender} </h3>
         <h3>Origin: {props.origin} </h3>
         <img src={props.image} alt= {props.name} /> 
      </div>
   );
}
