import "../styles/_About.scss";
import fotoAbout from "../images/fotoAbout.jpg";
const About = () => {
	return (
		<div>
			<section className="container-about">
				<p>
					Me considero una persona metódica, que disfruta de trabajar en equipo
					y alcanzar nuevos objetivos, durante la pandemia comencé a interesarme
					en la programación, al principio viendo cursos en Youtube y luego
					buscando una manera formal de ampliar mis conocimientos. En esta
					búsqueda comencé con mis estudios en ADA ITW, aprendiendo y aplicando
					tecnologías tales como HTML, CSS, JS, REACT, GIT, SASS, Material UI y
					APIs. Actualmente habiendo egresado de ADA sigo trabajando día a día
					en mejorar mis proyectos y ampliar mis conocimientos, en búsqueda de
					una nueva oportunidad de aplicarlos en el ámbito laboral.
				</p>
				<img alt="foto de perfil" src={fotoAbout} />
			</section>
		</div>
	);
};

export default About;
