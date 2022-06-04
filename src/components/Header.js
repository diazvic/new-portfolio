import { useState } from "react";
import BurguerButton from "./BurguerButton";
import NavBar from "./NavBar";
const Header = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<>
			<NavBar open={open} />
			<BurguerButton open={open} handleClick={handleClick} />
		</>
	);
};

export default Header;
