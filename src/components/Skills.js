import "../styles/_Skills.scss";
import "../images/postman.svg";
const Skills = () => {
	return (
		<div className="skills-container">
			<h2>Skills</h2>
			<p>
				Me encanta aprender cosas nuevas y experimentar con nuevas tecnologías.
				Estos son algunos de los principales lenguajes, tecnologías,
				herramientas y plataformas con los que he trabajado:
			</p>
			<h4>Languages</h4>
			<div className="languages">
				<i class="devicon-html5-plain-wordmark colored">
					<p>HTML5</p>
				</i>
				<i class="devicon-css3-plain-wordmark colored">
					<p>CSS3</p>
				</i>
				<i class="devicon-javascript-plain colored">
					<p>JavaScript</p>
				</i>
			</div>
			<h4>Frameworks</h4>
			<div className="frameworks">
				<i class="devicon-react-original colored">
					<p>React</p>
				</i>
				<i class="devicon-sass-original colored">
					<p>Sass</p>
				</i>
				<i class="devicon-materialui-plain colored">
					<p>Material UI</p>
				</i>
				<i class="devicon-bulma-plain colored">
					<p>Bulma</p>
				</i>
			</div>
			<h4>Tools</h4>
			<div className="tools">
				<i class="devicon-git-plain colored">
					<p>Git</p>
				</i>
				<i class="devicon-github-original colored">
					<p>Github</p>
				</i>
				<i class="devicon-trello-plain colored">
					<p>Trello</p>
				</i>
				<i>
					<img src={require("../images/postman.svg").default} />
					<p>Postman</p>
				</i>
				<i class="devicon-apple-original colored">
					<p>Ios</p>
				</i>
			</div>
		</div>
	);
};

export default Skills;
