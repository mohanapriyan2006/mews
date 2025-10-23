import { useContext } from "react"
import ContextData from "../context/ContextData"
import { Link, useNavigate } from "react-router-dom";
import icon from '../assets/icon.png';


const Navbar = () => {

    const { setCategory } = useContext(ContextData);
    const navigate = useNavigate();

    return (
        <div>
            <nav className="navbar nav-color" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" onClick={() => navigate('/')}><span className="badge rounded-pill logo-color fs-5 pb-2">
                        <img src={icon} alt="icon" style={{ height: '15px', width: '15px' ,marginRight:'5px'}} />
                        m<i>ews</i></span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav cat-links">
                            <li className="nav-item ">
                                <div className="nav-link active" onClick={() => setCategory("General")} aria-current="page">
                                    <Link style={{ textDecoration: 'none', color: 'white'}} to='/'>
                                        Home
                                    </Link></div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white category-link" role="button" data-bs-toggle="dropdown" onClick={() => navigate("/category")} aria-expanded="false">

                                    Category

                                </a>
                                <ul className="dropdown-menu nav-color">
                                    <li className="nav-item ">
                                        <div className="nav-link cat" onClick={() => setCategory("Technology")} aria-current="page">

                                            Technology
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link cat" onClick={() => setCategory("Business")} aria-current="page">Business</div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link cat" onClick={() => setCategory("Science")} aria-current="page">Science</div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link cat" onClick={() => setCategory("Health")} aria-current="page">Health</div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link cat" onClick={() => setCategory("Sports")} aria-current="page">Sports</div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link cat" onClick={() => setCategory("Entertainment")} aria-current="page">Entertainment</div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item ">
                                <div className="nav-link active" aria-current="page">
                                    <Link style={{ textDecoration: 'none', color: 'white' }} to='/about'>
                                        About
                                    </Link></div>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar