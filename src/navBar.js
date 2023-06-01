import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars" aria-hidden="true"></i>
            </label>
            <Link to="vape_guide_v2/src/pages/home">Vape Haven</Link>
            <ul>
                <li>
                    <Link to="vape_guide_v2/src/pages/home">Home</Link>
                </li>
                <li>
                    <Link to="vape_guide_v2/src/pages/begginer">Beginner</Link>
                </li>
                <li>
                    <Link to="vape_guide_v2/src/pages/intermediate">Intermediate</Link>
                </li>
                <li>
                    <Link to="vape_guide_v2/src/pages/expert">Expert</Link>
                </li>
                <li>
                    <Link to="/newsR">News</Link>
                </li>
                <li>
                    <Link to="vape_guide_v2/src/pages/calculator">Calculator</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;
