import './Navbars.css'


const Navbars = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-0 py-3">
      <div className="container-xl">

        <a className="navbar-brand" href="#">
          <img src="https://preview.webpixels.io/web/img/logos/clever-primary.svg" className="h-8" alt="..." />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">

          <div className="navbar-nav mx-lg-auto">
            <a className="nav-item nav-link active" href="#" aria-current="page">Home</a>
            <a className="nav-item nav-link" href="#">Product</a>
            <a className="nav-item nav-link" href="#">Features</a>
            <a className="nav-item nav-link" href="#">Pricing</a>
          </div>

          <div className="navbar-nav ms-lg-4">
            <a className="nav-item nav-link" href="#">Sign in</a>
          </div>

          <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
            <a href="#" className="btn btn-sm btn-primary w-full w-lg-auto">
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbars;