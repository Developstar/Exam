import React from "react";


export default function Profile(props){
  const source = 'https://github.com/'
  const dynamic = `${props.full_name}`
  const imgUrl = source + dynamic 
    return(
        <>
        <section className='repo-info' >
            
            <div className='eachCom'>
                <p className='repoDetails'>Repo Name: {props.name}</p>
                <p className='repoDetails'>Language:{props.language}</p>
              <p className='repoDetails'>Branch:{props.default_branch}</p>
              <p className='repoDetails' >Description:{props.description}</p>
              
              <div className='button-click'>
                <a style={{ color: 'black', background:'white', textDecoration: 'none', border: '0.1rem solid black', borderRadius:'0.4rem', padding:'0.3rem'}} href={imgUrl}>see more details</a>
              </div>
              </div>  
        </section>
        </>
    )
}




