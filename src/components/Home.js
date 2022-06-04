import "../styles/_Home.scss";
import { github, linkedin, mail } from "../utils/Variables";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";
const Home = () => {
	return (
		<section>
			<h1>Maria Victoria Diaz</h1>
			<h2>
				I'm a
				<Typewriter
					words={[" Frontend Developer"]}
					loop={5}
					cursor
					cursorStyle="_"
					typeSpeed={70}
					deleteSpeed={50}
				/>
			</h2>
			<div>
				<a href={linkedin}>
					<FaLinkedinIn />
				</a>
				<a href={github}>
					<FaGithub />
				</a>
				<a href={mail}>
					<HiOutlineMail />
				</a>
			</div>
		</section>
	);
};

export default Home;
