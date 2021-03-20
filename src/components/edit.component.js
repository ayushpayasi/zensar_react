import React from 'react'

export default function Edit(props) {
    const onclickHandler =(obj)=>{
        for(let i in props.data){
            if(props.data[i]['id'] === obj.target.value){
                document.getElementById("edit_id").value=props.data[i]['id'];
                document.getElementById("edit_name").value=props.data[i]['name'];
                document.getElementById("edit_address").value="NA";
                document.getElementById("edit_image").src = props.data[i]['Image']
            }
        }
        
    }
    return (
        <div className="edit">
            <div className="edit_box">
            <div className="dropdown">
                <h2> select a value To show its detail</h2>
                <select onChange= {event=> onclickHandler(event)}>
                    {props.data.length === 0 ? <div></div> :props.data.map(obj=>(<option value={obj.id}>{obj.id}</option>))}
                </select>
            </div>
            <div className="field">
                <label>img</label>
                <img id = "edit_image" src="#" style={{height:"200x",width:"200px"}}></img>
                <label >id</label>
                <input type="text" id="edit_id"></input>
                <label> name</label>
                <input type="text" id="edit_name"></input>
                <label>Address</label>
                <input type="text" style={{height:"200px"}}id="edit_address"></input>
            </div>
            </div>
        </div>
    )
}
