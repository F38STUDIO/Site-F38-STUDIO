// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import logo from './2.png';

function Footer() {
    return(
        <footer>
    <div class="container-fluid bg-black text-light p-4">
        <div class="row row-cols-4 ">
            <div class="col">
                <img src={logo} alt="NAKUNE LOGO"/>
            </div>
            <div class="col">
                <h5>Poduct</h5>
                <ul class="list-unstyled">
                    <li><a class="text-decoration-none text-white" href="#">Send Stone</a></li>
                    <li><a class="text-decoration-none text-white" href="#"> Stone</a></li>
                    <li><a class="text-decoration-none text-white" href="#">Send Stone</a></li>
                    <li><a class="text-decoration-none text-white" href="#">Send Stone</a></li>
                </ul>
               
            </div>


            <div class="col">
                <h5>Service</h5>
                <ul class="list-unstyled">
                    <li><a class="text-decoration-none text-white" href="#">Send Stone</a></li>
                    <li><a class="text-decoration-none text-white" href="#"> Stone</a></li>
                    <li><a class="text-decoration-none text-white" href="#">Send Stone</a></li>
                    <li><a class="text-decoration-none text-white" href="#">Send Stone</a></li>
                </ul>
               
            </div>

            <div class="col">
                <h5>Contact information</h5>
                <ul class="list-unstyled">
                    <li><a class="text-decoration-none list-style-none text-white" href="#">3181 Al Imam Saud Ibn Abdul Aziz Branch Rd, 
                        An Nuzhah, Riyadh 12474, 
                        Saudi Arabia</a></li>
                  
                </ul>
               
            </div>
            
        </div>
    </div>
</footer>
    );
}

export default Footer;