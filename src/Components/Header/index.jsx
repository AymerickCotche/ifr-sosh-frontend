function Header() {
  return (
    <div className="">
      <div className="header-one">

        <div className="container header-one d-flex flex-wrap justify-content-center">
          <a className="navbar-brand me-md-auto" href="#">
            <img src="https://sosh.cdn.woopic.com/elcossosh/libs//1684850186684874004/modules/sosh/dist/icons/elcos/logo.ad3f09d018b0d7b92d405c0e181834f3.svg" alt="Logo-sosh" width="98" height="50" />
          </a>
          <div className="">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Aide & contact</a>
              </li>
              <li className="nav-item">
                
                <div className="dropdown">
                  <button className="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  JACKSON - jackson@sosh.re
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Mon espace client</a></li>
                    <li><a className="dropdown-item" href="#">Mes factures</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Se déconnecter</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-bottom">
        <div className="container">

          <nav className="navbar navbar-expand-lg navbar-light">
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <a href="/#" className="nav-link text-black ">Forfaits mobile</a>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link text-black">Boite Internet</a>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link text-black">Téléphones</a>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link text-black">Bons plans</a>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link text-black">Espace client</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>


    </div>
  );
}

export default Header;
