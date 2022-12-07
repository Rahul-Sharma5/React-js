import { Link } from "react-router-dom"

const Actionbtn = ()=>{
    return(
        <Link to='/posttitle' style={{textDecoration: "none"}}> <div style={{
            width: "200px",
            backgroundColor: "#72A1E5",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            borderRadius: "5px",
            margin: "50px 0",
            marginLeft: "calc(50% - 100px)",
            cursor: "pointer",   
            }}>
            View Posts
        </div>
        </Link>
    )
}
export default Actionbtn