import React,{useState,useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import Loading from '../Component4git/Loading'
import Profile from '../Component4git/Profile'
const URL = 'https://api.github.com/users/Developstar/repos'

const Image = () => {
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://api.github.com/users/${location.state.id}`);
      const data = await res.json();
      setAvatarUrl(data.avatar_url);
    }
    fetchData();
  }, []);

  return (
    <img src={avatarUrl} alt="Repository owner's avatar" />
  );
}






export default function GithubFetchPage(){
  const location = useLocation();
  console.log(location)
const [items, setItems] = useState([])
  const [users] = useState('Developstar')


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
      <Image />
     
    {!items?<Loading/>:<>
    <section>
      
      <h1>Viewing {location.state.id}'s Repository</h1>
      
    </section>

    <div>
      {items.map((item) =>(
      <section className='repoContainer'>
        <div >
          <Profile key={item.id} {...item} />
        </div>
      </section>
      
        
      ))}
      
    </div>
    </>  }
    
      <p>
        <Link className="errorpage-link" to="/">
          Back Home
        </Link>
      </p>
    </>
  )
}