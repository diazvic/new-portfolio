import { Link } from "react-router-dom";
import "../styles/_NavBar.scss";
const NavBar = () => {
	return (
		<div>
			<nav className="barra-navegacion">
				<ul>
					<li>
						<Link className="link-nav" to="/">
							Home
						</Link>
					</li>
					<li>
						<Link className="link-nav" to="/about">
							About
						</Link>
					</li>
					<li>
						<Link className="link-nav" to="/skills">
							Skills
						</Link>
					</li>
					<li>
						<Link className="link-nav" to="/experience">
							Experience
						</Link>
					</li>
					<li>
						<Link className="link-nav" to="/projects">
							Projects
						</Link>
					</li>
					<li>
						<Link className="link-nav" to="/contact">
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
