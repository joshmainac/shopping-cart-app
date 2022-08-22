import 'bootstrap/js/dist/offcanvas';
import './Offcanvas.css';


function Offcanvas() {
    return (
        <>
            <div className="sidebar-nav">
                <nav className="navbar navbar-light bg-light justify-content-between">
                    <div className="container-fluid">
                        <a className="navbar-brand">Shopping Cart</a>
                        <button className="navbar-toggle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* <!-- Menu --> */}
                        <div className="bg-light offcanvas offcanvas-start shadow" tabindex="-1" id="offcanvasNavbar">
                            <div className="offcanvas-body">
                                <ul className="navbar-nav">
                                    <li><a href="#" /><span className="item-text">HOME</span></li>
                                    <li><a href="#" /><span className="item-text">ABOUT</span></li>
                                </ul>

                            </div>
                        </div>


                    </div>

                </nav>
            </div>



        </>


    );
}

export default Offcanvas;