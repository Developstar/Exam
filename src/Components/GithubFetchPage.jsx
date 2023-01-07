import React,{useState,useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import Loading from '../Component4git/Loading'
import Profile from '../Component4git/Profile'


export default function GithubFetchPage(){
  const location = useLocation();
  console.log(location)
const [items, setItems] = useState([])
  const [users] = useState('Developstar')
  const source = 'https://github.com/'
  const dynamic = `${location.state.id}`
  const imgUrl = source + dynamic + '.png'


  useEffect(()=>{
    const fetchRepos = async() =>{
      const res = await fetch(`https://api.github.com/users/${location.state.id}/repos?page=1&per_page=${location.state.num}&sort=updated`)
      const data = await res.json()
      setItems(data)
    }
    fetchRepos()
  },[])

  return(
    <>
      <div>userName: {location.state.id}</div>
      <div>RepoNum: {location.state.num}</div>
     
     

    <section>
    {!items?<Loading/>:
      <>
    <section>
      <h1>Viewing {location.state.id}'s Repository</h1>
      <div><img className='userImage' src={imgUrl} alt="Github user Image"/></div>
    </section>

   
      
      {items.map((item) =>(
      <section className='repoContainer'>
          <Profile key={item.id} {...item} />
      </section> 
      ))}
      
    
    </>  }
      </section>

      
      <section>
        < Link className="errorpage-link" to="/">
          Back Home
        </Link>
      </section>  
    </>
  )
}