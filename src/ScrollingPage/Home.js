import React from "react";
import styled from "styled-components";
import pic from "../img/8.png";
import pic2 from "../img/10.png";
import { Link } from "react-router-dom";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
// import "./home.css";
import "./App.css";

const Home = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
			id='home'>
			<ContainerHolder>
				<ContentPage>
					<FirstText>FullStack - Developer</FirstText>
					<FirstText2>Talk is cheap.</FirstText2>
					<FirstText3>Show me the Project</FirstText3>
					<FirstText4>
						I design and code beautifully simple things and I love what I do.
					</FirstText4>
					<a
						style={{ color: "#64f4ab" }}
						href='https://wa.me/2348121439674'
						target='_blank'
						rel='noopener noreferrer'>
						<FirstText5>LET'S CHAT!</FirstText5>
					</a>
					<ExperienceHolder>
						<Exp1>2 Years Experience</Exp1>
						<Exp2>10+ Projects Done</Exp2>
					</ExperienceHolder>
				</ContentPage>
				<ImagePage>
					<ImageHolder />
					<FaReact className='react' />
					<SiFirebase style={{ fontSize: "30px" }} color='#F6820D' />
					<DiMongodb className='react1' />
					<FaNode className='react2' />
					<SiJavascript className='react3' />
				</ImagePage>
			</ContainerHolder>
		</div>
	);
};

export default Home;

const ExperienceHolder = styled.div`
	margin-top: 60px;
	display: flex;
	justify-content: space-between;
	color: silver;
`;
const Exp1 = styled.div``;
const Exp2 = styled.div``;

const FirstText5 = styled.div`
	color: #64f4ab;
	margin-top: 50px;
	letter-spacing: 3px;
	border-bottom-color: #64f4ab;
	font-size: 20px;
`;

const FirstText4 = styled.div`
	color: #5b5c60;
	margin-top: 20px;
`;

const FirstText3 = styled.div`
	font-size: 45px;
	margin-top: -5px;
	letter-spacing: 1px;

	@media screen and (max-width: 600px) {
		font-size: 30px;
	}
`;
const FirstText2 = styled.div`
	font-size: 45px;
	margin-top: 20px;
	letter-spacing: 1px;
	@media screen and (max-width: 600px) {
		font-size: 30px;
	}
`;

const ContainerHolder = styled.div`
	margin: 10px;

	width: 90%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;

	margin: 20px;
	color: white;

	@media screen and (max-width: 600px) {
		margin-top: 60px;
	}
`;
const ContentPage = styled.div`
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 600px) {
		margin: 0;
		margin-top: 30px;
	}
`;
const ImagePage = styled.div`
	background-color: #29282d;
	margin-top: 100px;
	height: 500px;
	width: 500px;
	border-radius: 360px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 600px) {
		margin: 0;
		margin-top: 30px;
		height: 300px;
		width: 300px;
	}
`;
const ImageHolder = styled.div`
	height: 300px;
	width: 400px;
	object-fit: cover;
	/* background-color: red; */
`;

const FirstText = styled.div`
	height: 40px;
	width: 250px;
	background-color: #64f4ab;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	color: black;
	text-transform: uppercase;
`;
