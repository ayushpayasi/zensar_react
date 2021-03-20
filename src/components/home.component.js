import React from 'react'
import Card from "./card.component"
export default function Home(props) {

    return (
        <div className="home">
            <h1>User Details</h1>
            <div className="card_holder">

            { props.data.map(obj=><Card image={obj.Image} name={obj.name} id={obj.id}/>)}
            </div>
        </div>
    )
}
