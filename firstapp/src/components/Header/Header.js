import logoImage from '../../assets/logo.png';
import hamburgerImage from '../../assets/hamburger.png';
import './Header.css'
import {useNavigate } from "react-router-dom"

let styleObj = {
    color: "#ffffff",
    backgroundColor: "#72A1E5",
    display: "flex",
    justifyContent: "Space-between",
    alignItems: "center",
    padding: "10px 20px"
}
const Header = ()=>{
    let navigate = useNavigate();


const home =()=>{
navigate('/')
}


    return(
        <div style={styleObj}>
        {/*Logo */}


        <div onClick={home} style={{cursor:'pointer'}}className="logotitle">
        <div className='logoimg'>
            <img src={logoImage}/>
        </div>

        {/*Page Title */}
        
        <div className='Title'>THE POST APP</div>
        </div>

        {/*Action icons */}
        <div className='hmb'>
            <img src={hamburgerImage}/>
        </div>
        </div>
    )
}
export default Header