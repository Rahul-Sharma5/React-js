import './Nav.css';

import { Outlet, useNavigate } from 'react-router-dom';

const Navigation = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav className="navbar navbar-expand-lg  bg-light px-0 py-3">
                <div className="container-xl">

                    <a className="navbar-brand" href="#">
                        <img src="https://preview.webpixels.io/web/img/logos/clever-primary.svg" className="h-8" alt="..." />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">

                        <div className="navbar-nav mx-lg-auto nav-link-active">
                            <a className="nav-item nav-link" href="#" aria-current="page">Home</a>
                            <a className="nav-item nav-link" href="Services">Services</a>
                            <a className="nav-item nav-link" href="Contact">Contact Us</a>
                            <a className="nav-item nav-link" href="Cart">Cart</a>
                        </div>

                        <div className="navbar-nav ms-lg-4">
                            <a onClick={() => { navigate("/login") }
                            } className="nav-item nav-link" >Sign in</a>
                        </div>

                        <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
                            <a href="#" className="btn btn-sm btn-primary w-full w-lg-auto">
                                Register
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />

        </>
    )
}

export default Navigation;