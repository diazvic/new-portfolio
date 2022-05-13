import "../styles/_Home.scss";
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
				<i>
					<FaLinkedinIn />
				</i>
				<i>
					<FaGithub />
				</i>
				<i>
					<HiOutlineMail />
				</i>
			</div>
		</section>
	);
};

export default Home;
