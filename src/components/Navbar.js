import { Link } from "react-router-dom";
const Navbar = ({ children }) => {
  return (
    <div>
      <div className="d-print-none">
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand text-light">
              Company
            </Link>
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
                      <Link
                        className="dropdown-item"
                        to="/mantenimientos/departments"
                      >
                        Departamentos
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/mantenimientos/studies"
                      >
                        Estudios
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/mantenimientos/departments"
                      >
                        Empleados
                      </Link>
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
                      <Link
                        className="dropdown-item"
                        to="/movimientos-empleados"
                      >
                        Movimientos de empleados
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/salida-empleados">
                        Salida de empleados
                      </Link>
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
                      <Link
                        className="dropdown-item"
                        to="/reportes/listado-empleados-fecha"
                      >
                        Listado de empleados por fecha entrada
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/listado-nomina">
                        Listado nomina
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/reportes/listado-recibos-empleados"
                      >
                        Listado de recibos empleados
                      </Link>
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
