import React,{useState} from 'react'
import searchIcon from "../assets/search_icon.png"
import Card from "./card.component"
export default function Search(props) {
    const[searchBy,setSearchBy] = useState("id");
    const[searched,setSearched] = useState([]);
    
    const clickHandler = (event,value)=>{
        document.getElementById("search_input").value=""
        document.getElementById("id").style.color="black"
        document.getElementById("name").style.color="black"
        if( "id"=== value){
            document.getElementById("id").style.color="var(--ternary)"
        }
        else{
            document.getElementById("name").style.color="var(--ternary)"
        }
        setSearchBy(value)
    }

    const searchHandler =(event)=>{
        var pattern = new RegExp("^"+event.target.value,"i");
        const arr =[]
        for(let i in props.data){
            const op = props.data[i][searchBy].match(pattern)
            if(op !== null){
                arr.push(i)
            }
        }
        setSearched(arr)
    }

    return (
        <div className="search">
            <div className="search_box">
                <div className="search_bar">
                    <input id="search_input" onChange={(event)=>{searchHandler(event)}} type="text"></input>
                    <img src={searchIcon}/>
                </div>
            
                <label>Search By </label>
                <div className="button_box">
                    <div id="id" style = {{color:"var(--ternary)"}}onClick={(event)=>{clickHandler(event,"id")}}>#id</div>
                    <div id="name" onClick={(event)=>{clickHandler(event,"name")}}>#name</div>
                </div>
                <div className="result">
                    {
                        searched.map(obj=><Card image={props.data[obj].Image} id ={props.data[obj].id} name={props.data[obj].name} />)
                    }
                </div>
            </div>
        </div>
    )
}
