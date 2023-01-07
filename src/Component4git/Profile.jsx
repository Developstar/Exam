import React from "react";


export default function Profile(props){
    return(
        <>
        <article >
            
            <div className='eachCom'>
                 <h1>{props.owner.login}</h1>
                <p className='repoDetails'>Repo Name: {props.name}</p>
                <p>Language: {props.language}</p>
            </div>
            
        </article>
     
        
        </>
    )
}




