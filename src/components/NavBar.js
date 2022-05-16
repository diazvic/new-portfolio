import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context/Context";
import "../styles/_NavBar.scss";
import "../styles/_DarkTheme.scss";
const NavBar = () => {
	const context = useContext(Context);

	const handleClick = () => {
		context.setDarkTheme(!context.darkTheme);
	};

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
					<button onClick={handleClick}>
						Cambiar modo {context.darkTheme ? "💡" : "🌙"}
					</button>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
