import React from "react";


export default function Profile(props){
    return(
        <>
        <article >
            
            <div className='eachCom'>
              <div ><img className='userImg'src={props.owner.avatar_url} alt={props.owner.login} /></div>
              
                 <h1>{props.owner.login}</h1>
                <p className='repoDetails'>Repo Name: {props.name}</p>
                <p>Language: {props.language}</p>
            </div>
            
        </article>
     
        
        </>
    )
}




