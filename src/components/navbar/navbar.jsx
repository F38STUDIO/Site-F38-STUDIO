import { Link } from "react-router-dom";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import logo from '../../assets/imgs/1.png';
import { BsCart ,BsHeart, BsSearch} from 'react-icons/bs';
import { FaUser} from 'react-icons/fa';



function Navbar() {
    return(
<div>
    <div class="container text-center">
        <img  src={logo} alt="NAKUNE"/>
    </div>

    
    <nav class="navbar navbar-default navbar-expand">
        <div class="container-fluid">
            
            <div class=" col-md-3 col-xs-12 text-center">
                <BsSearch />
            </div>

            
            <div class="text-center">
                <ul class="nav navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="#">LOREM</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">LOREM</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">LOREM</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">LOREM</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">LOREM</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">LOREM</a></li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">ENG FR</a>
                    </li>
                </ul>
            </div>
            

            <div class=" col-xs-12 col-md-3  text-center">
                <Link to="/cart"><BsCart/></Link>
                <BsHeart/>
                <FaUser/>
            </div>
        </div>

    </nav>
</div>
    );
}

export default Navbar; 