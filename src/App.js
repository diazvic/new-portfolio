import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { useState } from "react";
import Context from "./context/Context";
import "./styles/_DarkTheme.scss";
const App = () => {
	const [darkTheme, setDarkTheme] = useState(false);

	const context = {
		darkTheme: darkTheme,
		setDarkTheme: setDarkTheme,
	};

	return (
		<Context.Provider value={context}>
			<div className={darkTheme ? "modo-oscuro" : "modo-claro"}>
				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/skills" element={<Skills />} />
						<Route path="/experience" element={<Experience />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/projects" element={<Projects />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</div>
		</Context.Provider>
	);
};

export default App;
