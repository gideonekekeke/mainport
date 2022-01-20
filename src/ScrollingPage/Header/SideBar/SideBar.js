import React, { useContext } from "react";

import "./sid.css";
import styled from "styled-components";
import {
	MenuOutlined,
	PlusCircleOutlined,
	ProfileOutlined,
	HomeOutlined,
	SettingOutlined,
	PoweroffOutlined,
	CloseOutlined,
} from "@ant-design/icons";

import { CgMenu } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { BsNewspaper } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { Input } from "antd";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
// import "antd/dist/antd.css";

import { animateScroll as scroll, Link } from "react-scroll";

// import {
//   SidebarContainer,
//   Icon,
//   CloseIcon,
//   SideBtnWrap,
//   SidebarRoute,
//   SidebarLink,
//   SidebarWrapper,
//   SidebarMenu,
// } from "./SideBarElement";

const SideBar = ({ isOpen, toggle }) => {
	return (
		<>
			<SidebarContainer isOpen={isOpen}>
				<div
					style={{
						height: "100%",
						width: "300px",
						backgroundColor: "#25262a",
					}}>
					<div
						style={{
							display: "flex",
							// justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
							width: "100%",
							height: "100%",
						}}>
						<CloseOutlined
							onClick={toggle}
							style={{
								marginLeft: "200px",
								marginTop: "50px",
								fontSize: "20px",
								cursor: "pointer",
							}}
						/>

						<div
							style={{
								marginTop: "10px",
								fontSize: "20px",
								fontWeight: "BOLD",
							}}>
							Menu
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								marginTop: "25px",
								flexDirection: "column",
							}}>
							<Link
								onClick={toggle}
								style={{ cursor: "pointer" }}
								offset={-70}
								duration={1000}
								activeClass='active'
								smooth={true}
								to='home'>
								<div
									style={{
										display: "flex",
										justifyContent: "space-around",
										alignItems: "center",
										// backgroundColor: "red",
										marginTop: "40px",
										// width: "80%",
										borderTop: "1px solid silver",
									}}>
									<AiFillHome />
									<div
										style={{
											marginLeft: "10px",
											fontSize: "17px",
											margin: "10px",
										}}>
										Home
									</div>
								</div>
							</Link>
							<Link
								onClick={toggle}
								style={{ cursor: "pointer" }}
								offset={-70}
								duration={1000}
								activeClass='active'
								smooth={true}
								to='about'>
								<div
									style={{
										display: "flex",
										justifyContent: "space-around",
										alignItems: "center",
										// backgroundColor: "red",
										marginTop: "10px",
										// width: "80%",
										// borderTop: "1px solid silver",
									}}>
									<BsFillPersonLinesFill />
									<div
										style={{
											marginLeft: "10px",
											fontSize: "17px",
											margin: "10px",
										}}>
										About
									</div>
								</div>
							</Link>
							<Link
								onClick={toggle}
								style={{ cursor: "pointer" }}
								offset={-70}
								duration={1000}
								activeClass='active'
								smooth={true}
								to='projects'>
								<div
									style={{
										display: "flex",
										justifyContent: "space-around",
										alignItems: "center",
										// backgroundColor: "red",
										marginTop: "10px",
										// width: "80%",
										// borderTop: "1px solid silver",
									}}>
									<AiFillProject />
									<div
										style={{
											marginLeft: "10px",
											fontSize: "17px",
											margin: "10px",
										}}>
										Projects
									</div>
								</div>
							</Link>
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "space-around",
								width: "200px",
								fontSize: "25px",
								marginTop: "20px",
							}}>
							<a
								style={{ color: "white" }}
								href='https://web.facebook.com/gideon.ekeke.3'>
								<AiFillFacebook />
							</a>
							<a
								style={{ color: "white" }}
								href='  https://github.com/gideonekekeke'>
								<AiFillGithub />
							</a>
							<a
								style={{ color: "#64f4ab" }}
								href='https://wa.me/2348121439674'
								target='_blank'
								rel='noopener noreferrer'>
								<AiFillMessage color='#64f4ab' />
							</a>
						</div>
					</div>
				</div>
			</SidebarContainer>
		</>
	);
};
export default SideBar;

const SidebarContainer = styled.div`
	position: fixed;
	width: 100%;
	z-index: 9999;
	height: 100%;
	background: rgba(0, 0, 0, 0.667);
	align-items: center;
	display: grid;
	top: 0;
	left: 0;

	color: white;
`;
