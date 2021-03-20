import React,{useEffect,useState} from 'react'
import axios from "axios"
import Card from "./card.component"
export default function Home(props) {
        const [data,setData] = useState([]);
            useEffect(() => {
                axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json").then(res=>setData(res.data))
            }, [])

    return (
        <div className="home">
            <h1>User Details</h1>
            <div className="card_holder">
            {data.map(obj=><Card image={obj.Image} name={obj.name} id={obj.id}/>)}
            </div>
        </div>
    )
}
