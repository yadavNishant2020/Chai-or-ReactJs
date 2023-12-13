// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/yadavnishant2020')
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className="flex flex-col items-center text-center p-4 bg-gray-600 text-white text-3xl">Github Followers: {data.followers}
        <img className="m-4" src={data.avatar_url} alt="Git Picture" srcSet="" width={300}/>
    </div>
  )
}

export default Github


