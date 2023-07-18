import React, {useEffect, useState} from "react";

export default function Use(){

   // const [user , setUser] = useState("");

    const [hiddenMessage, setHiddenMessage] = useState("");
    const handleClick = () =>{
        console.log('tu as cliqué sur handleClick')
    }
    useEffect(()=>{
        if(hiddenMessage )console.log('Message:', hiddenMessage)
    },[hiddenMessage])
    return(
        <div>
            <h1>Les uses</h1>
            <button onClick={handleClick}>handleClick</button><br/>
            Voir le message caché en cliquant<button onClick={()=>{setHiddenMessage('Voici le message caché')}}>ici</button>
            {hiddenMessage.length > 0 ? hiddenMessage : 'Pas de message'}
        </div>
    )
}