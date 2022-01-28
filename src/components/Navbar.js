const Navbar = ({ children }) => {
  return (
    <div>
      <div className="d-print-none">
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand text-light" href="/">
              Company
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-light"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href="/"
                  >
                    Mantenimientos
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="/departments">
                        Departamentos
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/studies">
                        Estudios
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/employees">
                        Empleados
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-light"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href="/"
                  >
                    Operaciones
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="/movimientos-empleados"
                      >
                        Movimientos de empleados
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/salida-empleados">
                        Salida de empleados
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-light"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href="/"
                  >
                    Reportes
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="/listado-empleados-fecha"
                      >
                        Listado de empleados por fecha entrada
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/listado-nomina">
                        Listado nomina
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/listado-recibos-empleados"
                      >
                        Listado de recibos empleados
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="px-4 py-2">{children}</div>
    </div>
  );
};

export default Navbar;
