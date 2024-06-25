import React, { useEffect ,useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data,setData] = useState([])
    // useEffect(() => {
    // fetch('https://api.github.com/users/rohit-bhardwajj')
    // .then((response)=>response.json())
    // .then(data=>{console.log(data)
    //     setData(data);
    // })
    // }, [])
    

  return (
      <div className='text-center bg-gray-600 text-white p-4 text-3xl leading-relaxed'>
      <img src={data.avatar_url} alt="" width={150} className='rounded-full mx-auto' />
        <p>github username : {data.login}</p>
    <p>Public Repos : {data.public_repos}</p>
    <p>Followers : {data.followers}</p>
    </div>
    
  )
}

export default Github

export const GithubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/rohit-bhardwajj')
    
    return response.json();
}