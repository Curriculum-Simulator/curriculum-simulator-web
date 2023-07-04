export default function Tab() {
    return (
        <div>
            <ul className="navbar-nav">

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="courseDropdownMenuLink" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false" role="button">
                        Cours
                    </a>

                    <ul className="dropdown-menu fade-up" aria-labelledby="courseDropdownMenuLink" role="menu">
                        <li><a className="dropdown-item" href="/courses">Search</a></li>
                        <div className="dropdown-divider"></div>
                        <li><a className="dropdown-item" href="/courses/MANAGEMENT">Gestion</a></li>
                        <li><a className="dropdown-item" href="/courses/NETWORK">Reseau</a></li>
                        <li><a className="dropdown-item" href="/courses/INDUSTRIAL">Industrielle</a></li>
                    </ul>
                </li>

                <li className="nav-item dropdown">

                    <a className="nav-link dropdown-toggle" href="#" id="programDropdownMenuLink" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false" role="button">
                        Simulateur de PAE
                    </a>
                    <ul className="dropdown-menu fade-up" aria-labelledby="programDropdownMenuLink" role="menu">
                        <li><a className="dropdown-item" href="/program?section=MANAGEMENT">Gestion</a></li>
                        <li><a className="dropdown-item" href="/program?section=NETWORK">Reseau</a></li>
                        <li><a className="dropdown-item" href="/program?section=INDUSTRIAL">Industrielle</a></li>
                    </ul>

                </li>
            </ul>
        </div>
    )
}