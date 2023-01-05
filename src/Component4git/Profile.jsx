import React from "react";


export default function Profile(props){
    return(
        <>
        <article className='bg'>
            <img src={props.owner.avatar_url} alt={props.owner.login} />
            <div>
                <h2>{props.owner.login}</h2>
                <p>Repo Name: {props.name}</p>
                <p>Language: {props.language}</p>
            </div>
            
        </article>
     
        
        </>
    )
}