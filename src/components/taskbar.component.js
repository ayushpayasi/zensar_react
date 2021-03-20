import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom"
import logo from "../assets/logo.png"

export default function Taskbar(props) {

    const clickHandler=(event)=>{
        props.door.play()
        const bun = document.getElementsByClassName("bun");
        bun[0].style.transition = "transform 0.5s"
        const bun_menu = document.getElementsByClassName("bun_menu")  
        bun_menu[0].style.transition = "height 0.5s"
        if(bun_menu[0].style.height === "25px"){
            bun[0].style.transform = "rotate(0deg)";
            bun_menu[0].style.height = "0px";
    }
        else{
            bun[0].style.transform = "rotate(90deg)";
            bun_menu[0].style.height = "25px";
        }
    
    }

    const playClick =(event)=>{
        props.mouseclick.play()
    }

    return (
        <React.Fragment>
        <div className="taskbar_holder">
            <div className="taskbar_home">
              <Link onClick={(event)=>{playClick(event)}} className="links_anchor" to="/">  AyushPayasi</Link>
            </div>
            <div className="taskbar_content">
                <div className="links">
                    <img className="logo_img" src={logo}/>
                </div>
                <div className="links">
                    <Link onClick={(event)=>{playClick(event)}} className="links_anchor" to="/search"><a> SEARCH</a></Link>
                    <Link onClick={(event)=>{playClick(event)}} className="links_anchor" to="/contact"><a> CONTACT</a></Link>
                </div>
            </div>
            <div className="bun">
            <IconButton onClick={(event)=>{clickHandler(event)}}style={{color:"white"}} aria-label="menu">
                <MenuIcon />
            </IconButton>
            </div>

        </div>
        <div className="bun_menu">
        <div className="bun_menu_items">
            <Link onClick={(event)=>{playClick(event)}} className="links_anchors" to="/about"><a> SEARCH</a></Link>
            <Link onClick={(event)=>{playClick(event)}} className="links_anchors" to="/contact"><a> CONTACT</a></Link>
        </div>
    </div></React.Fragment>
    )
}

