import './Header.css';
import mg1 from '../../image/mg1.jpg';
import mg2 from '../../image/mg2.jpg';
import mg3 from '../../image/mg3.jpg';
import { Outlet } from 'react-router-dom';


const Header = () => {
    return (
        <>
        <div class="container">
            <div id="carouselExampleControls" className="carousel slide" data-mdb-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={mg1} className="d-block w-100" alt="Wild Landscape" />
                    </div>
                    <div className="carousel-item">
                        <img src={mg2} className="d-block w-100" alt="Camera" />
                    </div>
                    <div className="carousel-item">
                        <img src={mg3} className="d-block w-100" alt="Exotic Fruits" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
            <Outlet/>
        </>
    )
}

export default Header;