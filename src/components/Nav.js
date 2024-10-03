import logo from "../images/logo.svg";

function Nav(){
    return(<nav>
            <img src={logo} alt="Logo"/>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="About">About</a></li>
                <li><a href="Menu">Menu</a></li>
                <li><a href="Reservation">Reservations</a></li>
                <li><a href="Order">Order Online</a></li>
                <li><a href="Login">Login</a></li>
            </ul>
    </nav>);
}


export default Nav;