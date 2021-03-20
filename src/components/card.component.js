import React from 'react'

export default function Card(props) {
    return (
        <div className="card">
            <div className="card_img">
                <h4>Id:{props.id}</h4>
                <img src={props.image} alt="image"/>
            </div>
            <div className="card_body">
                {props.name}
            </div>
            
        </div>
    )
}
