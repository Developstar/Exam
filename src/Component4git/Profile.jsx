import React from "react";
import { Link } from "react-router-dom";


export default function Profile(props){
  const source = 'https://github.com/'
  const dynamic = `${props.full_name}`
  const imgUrl = source + dynamic 
    return(
        <>
        <section className='repo-info' >
            
            <div className='eachCom'>
                <p className='repoDetails'>Repo Name: {props.name}</p>
                <p className='repoDetails'>Language: {props.language}</p>
              <p className='repoDetails'>Branch:{props.default_branch}</p>
              <a href={imgUrl}>see more details</a>
            </div>
           
            
        </section>
     
        
        </>
    )
}




