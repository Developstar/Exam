import React from 'react'

const URL = 'https://api.github.com/users/Developstar/repos'
export default function GithubFetchPage(){
  const [items, setItems] = useState([])
  const [users] = useState('Developstar')

  useEffect(()=>{
    const fetchRepos = async() =>{
      const res = await fetch(`https://api.github.com/users/${users}/repos?page=1&per_page=10&sort=updated`)
      const data = await res.json()
    }
  },[])
  
  return(
    <>
    <h1>Hello World</h1>
    </>
  )
}