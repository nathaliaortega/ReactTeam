import React from "react";

function PersonalCard({nombre,apellido,children})
{
    return(
    <div className="personal-card">
      <h3>Tarjeta personal</h3>  
      <p><b>Nombre:</b>{nombre}</p>
      <p><b>Apellido:</b> {apellido}</p>
      {children}
    </div>
    );
} 
export default PersonalCard;