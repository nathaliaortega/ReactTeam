import React from "react";

function ColorCard({name,isLight,lightClass,darkClass})
{
    var isLightVar=isLight?lightClass:darkClass;
    var pTetx=isLight?"Light":"Dark";
    return(

        <div className={`color-card ${isLightVar}`} >
          <h3 >{name}</h3>
          <p>{pTetx}</p>
        </div>
    );
    
} 

export default ColorCard;