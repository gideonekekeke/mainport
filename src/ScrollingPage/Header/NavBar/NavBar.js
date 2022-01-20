import React from "react";
import styled from "styled-components";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import { MdContactPhone } from "react-icons/md";
import { AiFillFacebook } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import SideBar from "../SideBar/SideBar";
import { animateScroll as scroll, Link } from "react-scroll";

const NavBar = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<Container>
			<Logo>
				<FaLessThan style={{ color: "#64F4AB" }} /> GIDEON EKEKE{" "}
				<FaGreaterThan style={{ color: "#64F4AB" }} />
			</Logo>
			<MainHold>
				<NavHold
					offset={-70}
					duration={1000}
					activeClass='active'
					smooth={true}
					to='home'>
					<span>
						<AiFillHome />
					</span>
					<div>HOME</div>
				</NavHold>
				<NavHold
					offset={-70}
					duration={1000}
					activeClass='active'
					smooth={true}
					to='about'>
					<span>
						<BsPersonLinesFill />
					</span>
					<div>ABOUT</div>
				</NavHold>
				<NavHold
					offset={-70}
					duration={1000}
					activeClass='active'
					smooth={true}
					to='projects'>
					<span>
						<AiFillProject />
					</span>
					<div>PROJECTS</div>
				</NavHold>
				<NavHold>
					<span>
						<MdContactPhone />
					</span>
					<div>CONTACT</div>
				</NavHold>
			</MainHold>
			<SocialHold>
				<span>
					<AiFillFacebook />
				</span>
				<span>
					<BsGithub />
				</span>
				<span>
					<AiFillMessage style={{ color: "#64F4AB" }} />
				</span>
			</SocialHold>
			<SideHold>
				<AiOutlineMenuUnfold onClick={toggle} />
			</SideHold>
			{isOpen ? <SideBar toggle={toggle} isOpen={isOpen} /> : null}
		</Container>
	);
};

export default NavBar;

const SideHold = styled.div`
	display: none;

	font-size: 25px;

	@media screen and (max-width: 768px) {
		display: block;
	}
`;

const Container = styled.div`
	height: 70px;

	background: #25262a;
	display: flex;
	align-items: center;
	justify-content: space-around;
	position: fixed;
	width: 100%;
	z-index: 1001;
	color: white;
`;
const Logo = styled.div`
	display: flex;
	align-items: center;
	padding: 10px;
	/* font-size: 13px; */

	:hover {
		color: #64f4ab;
		cursor: pointer;
	}
`;
const MainHold = styled.div`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
const SocialHold = styled.div`
	font-size: 20px;
	span {
		margin: 10px;
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
const NavHold = styled(Link)`
	display: flex;
	align-items: center;

	font-size: 13px;
	color: #c0c0c0;
	cursor: pointer;
	transition: all 350ms;
	margin: 15px;
	font-weight: bold;

	:hover {
		opacity: 1;
		border-bottom: 1px solid #64f4ab;
		color: #64f4ab;

		span {
			color: white;
		}
	}
`;
