import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../context/Context";
import "../styles/_NavBar.scss";
import "../styles/_DarkTheme.scss";

const NavBar = () => {
	const context = useContext(Context);
	const [isMobile, setIsMobile] = useState(true);
	const [cerrarModal, setCerrarModal] = useState(false);
	const handleClick = () => {
		context.setDarkTheme(!context.darkTheme);
	};

	const handleClickHamburguerMobile = () => {
		setIsMobile(!isMobile);
	};
	return (
		<div>
			<nav className="navbar">
				<ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
					<li>
						<Link
							className="prueba"
							to="/"
							onClick={handleClickHamburguerMobile}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							className="prueba"
							to="/about"
							onClick={handleClickHamburguerMobile}
						>
							About
						</Link>
					</li>
					<li>
						<Link className="prueba" to="/skills">
							Skills
						</Link>
					</li>
					<li>
						<Link className="prueba" to="/experience">
							Experience
						</Link>
					</li>
					<li>
						<Link className="prueba" to="/projects">
							Projects
						</Link>
					</li>
					<li>
						<Link className="prueba" to="/contact">
							Contact
						</Link>
					</li>
					<button onClick={handleClick}>
						Cambiar modo {context.darkTheme ? "💡" : "🌙"}
					</button>
					<button
						className="mobile-menu-icon"
						onClick={handleClickHamburguerMobile}
					>
						{isMobile ? (
							<i className="fas fa-bars"></i>
						) : (
							<i className="fas fa-times"></i>
						)}
					</button>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
