import React, { useState } from "react";

export default function SearchBar(props) {
   const [id, setId] = React.useState('');
   const handleChange = (event) =>{
      setId(event.target.value);
   };

   return (
      <div>
          <input type='search' value={id} onChange={handleChange} />
         <button onClick={() => props.onSearch(id)}>Agregar</button> 
      </div>
   );
}
