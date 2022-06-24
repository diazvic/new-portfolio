import "../styles/_Projects.scss";
import buscadorPeliculas from "../images/buscadorPeliculas.png";
import buscadorArte from "../images/buscadorArte.png";
import ahorradas from "../images/ahorradas.png";
import generadorMemes from "../images/generadorMemes.png";
import primerPortafolio from "../images/primerPortafolio.png";
import mercadito from "../images/mercadito.png";
import rickandmorty from "../images/rickandmorty.png";

const Projects = () => {
	return (
		<>
			<h1 className="title-projects">Projects</h1>
			<div className="container-projects">
				<div className="box-projects">
					<img src={buscadorPeliculas} />
					<h3>Buscador de Peliculas</h3>
					<a
						href="https://diazvic-buscador-de-peliculas.netlify.app/"
						target="_blanck"
					>
						<button>Live</button>
					</a>
					<a
						href="https://github.com/diazvic/buscador-de-peliculas"
						target="_blanck"
					>
						<button>Github</button>
					</a>
					<span>React</span>
					<span>Sass</span>
					<span>Material UI</span>
				</div>

				<div className="box-projects">
					<img src={buscadorArte} />
					<h3>Buscador de Arte</h3>
					<a href="https://buscadordearte.netlify.app/" target="_blanck">
						<button>Live</button>
					</a>
					<a href="https://github.com/diazvic/buscadorDeArte" target="_blanck">
						<button>Github</button>
					</a>
					<span>JavaScript</span>
					<span>HTML</span>
					<span>Sass</span>
				</div>

				<div className="box-projects">
					<img src={ahorradas} />
					<h3>Ahorradas</h3>
					<a
						href="https://sofiabernabeicejas.github.io/AhorrADAs/"
						target="_blanck"
					>
						<button>Live</button>
					</a>
					<a
						href="https://github.com/SOFIABERNABEICEJAS/AhorrADAs"
						target="_blanck"
					>
						<button>Github</button>
					</a>
					<span>JavaScript</span>
					<span>HTML</span>
					<span>Bulma</span>
				</div>

				<div className="box-projects">
					<img src={generadorMemes} />
					<h3>Generador de Memes</h3>
					<a
						href="https://roci16.github.io/Proyecto-Editor-De-Meme/"
						target="_blanck"
					>
						<button>Live</button>
					</a>
					<a
						href="https://github.com/diazvic/Proyecto-Editor-De-Meme"
						target="_blanck"
					>
						<button>Github</button>
					</a>
					<span>JavaScript</span>
					<span>HTML</span>
					<span>Css</span>
				</div>

				<div className="box-projects">
					<img src={primerPortafolio} />
					<h3>Primer portfolio</h3>
					<a
						href="https://diaz-vic-ada-portafolio.netlify.app/"
						target="_blanck"
					>
						<button>Live</button>
					</a>
					<a href="https://github.com/diazvic/ada-portafolio" target="_blanck">
						<button>Github</button>
					</a>
					<span>HTML</span>
					<span>Css</span>
					<span>Flexbox</span>
				</div>

				<div className="box-projects">
					<img src={mercadito} />
					<h3>Tienda con Api de Mercado Libre</h3>
					<a
						href="https://api-mercadolibre-react.netlify.app/"
						target="_blanck"
					>
						<button>Live</button>
					</a>
					<a
						href="https://github.com/diazvic/api-mercadolibre-react"
						target="_blanck"
					>
						<button>Github</button>
					</a>
					<span>React</span>
					<span>Material UI</span>
				</div>

				<div className="box-projects">
					<img src={rickandmorty} />
					<h3>Rick and Morty</h3>
					<a
						href="https://rick-and-morty-api-react.netlify.app/"
						target="_blanck"
					>
						<button>Live</button>
					</a>
					<a
						href="https://github.com/diazvic/rick-and-morty-react"
						target="_blanck"
					>
						<button>Github</button>
					</a>
					<span>React</span>
					<span>Sass</span>
				</div>
			</div>
		</>
	);
};

export default Projects;
