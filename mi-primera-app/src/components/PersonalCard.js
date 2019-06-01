import React from "react";

function PersonalCard({nombre,apellido,children,onDuplicate})
{
    return(
    <div className="personal-card" >
      <h3>Tarjeta personal</h3>  
      <p><b>Nombre:</b>{nombre}</p>
      <p><b>Apellido:</b> {apellido}</p>
      <button onClick={onDuplicate}>Duplicar</button>
      <button>Duplicar</button>
      <button>Ediatr</button> 
      <button>Eliminar</button>       

      {children}
    </div>
    );
} 

export default PersonalCard;