import React from "react";
import styled from "styled-components";
import { FaNode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { Button } from "antd";

const Body = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
			id='about'>
			<CardContainer>
				<BoxHolder>
					<BoxHolding1>
						<GeneralHolder>
							<TextNameHolder>
								<TextName1>Back-End</TextName1>
								<FaNode
									style={{
										marginRight: "20px",
										fontSize: "20px",
										color: "#64f4ab ",
									}}
								/>
							</TextNameHolder>
							<TextName2>
								create and build my backend with node js and firebase
							</TextName2>

							<FirstText5>10 PROJECTS</FirstText5>
						</GeneralHolder>
					</BoxHolding1>
					<BoxHolding1>
						<GeneralHolder>
							<TextNameHolder>
								<TextName1>Front-End</TextName1>
								<FaReact
									style={{
										marginRight: "20px",
										fontSize: "20px",
										color: "#64f4ab ",
									}}
								/>
							</TextNameHolder>
							<TextName2>create and build my frontend with React js</TextName2>

							<FirstText5>10 PROJECTS</FirstText5>
						</GeneralHolder>
					</BoxHolding1>
					<BoxHolding1>
						<GeneralHolder>
							<TextNameHolder>
								<TextName1>DataBase</TextName1>
								<SiFirebase
									color='#F6820D'
									style={{
										marginRight: "20px",
										fontSize: "20px",
									}}
								/>
							</TextNameHolder>
							<TextName2>
								I use Either mongodb or firebase for my data base
							</TextName2>

							<FirstText5>10 PROJECTS</FirstText5>
						</GeneralHolder>
					</BoxHolding1>
				</BoxHolder>
			</CardContainer>
		</div>
	);
};

export default Body;

const ContetnHolderText3 = styled.div`
	margin: 10px;
	font-size: 15px;
	color: white;
	color: white;

	width: 42ch;
	animation: typing 14s steps(45, end), blink-caret 0.85s step-end infinite;
	animation-iteration-count: infinite;

	white-space: nowrap;
	overflow: hidden;
	border-right: 3px solid;
	font-size: 15px;

	@keyframes typing {
		from {
			width: 0;
		}
		@keyframes blink {
			50% {
				border-color: transparent;
			}
		}
	}

	@media screen and (max-width: 600px) {
		font-size: 10px;
	}

	/* margin-top: 10px; */
`;

const ContetnHolderText4 = styled.div`
	margin: 10px;
	font-size: 12px;
	color: white;
	margin-top: 10px;
	color: silver;
	/* background-color: red;s */
	width: 500px;
	line-height: 1.5;

	@media screen and (max-width: 600px) {
		width: 90%;
	}
`;

const ContetnHolderText2 = styled.div`
	margin: 10px;
	font-size: 30px;
	color: white;
	margin-top: 10px;
`;
const ContetnHolderText1 = styled.div`
	color: gray;
	margin: 10px;
`;

const FirstText5 = styled.div`
	color: #64f4ab;
	margin-top: 10px;
	letter-spacing: 3px;
	border-bottom-color: #64f4ab;
	font-size: 10px;
	margin-left: 10px;
`;

const TextName2 = styled.div`
	font-size: 10px;
	width: 200px;
	margin-left: 10px;
	margin-top: 10px;
	color: silver;
`;

const GeneralHolder = styled.div`
	display: flex;
	flex-direction: column;
`;

const TextName1 = styled.div`
	margin-left: 10px;
	color: white;
`;
const TextNameHolder = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	/* background: red; */
	margin-top: 10px;
`;

const BoxHolder = styled.div`
	display: flex;

	@media screen and (max-width: 600px) {
		flex-direction: column;
	}
`;
const BoxHolding1 = styled.div`
	height: 110px;
	width: 500px;
	background-color: #2d2e32;
	border-radius: 5px;
	box-shadow: 0px 5px 7px -2px rgba(0, 0, 0, 0.35);
	margin: 10px;

	@media screen and (max-width: 600px) {
		width: 300px;
	}
`;
const ContentHolder = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 100px;

	@media screen and (max-width: 600px) {
		margin: 0;
	}

	Button {
		width: 200px;
		height: 40px;
		margin: 10px;
		cursor: pointer;
		border-radius: 5px;
		font-size: 15px;

		&:hover {
			background-color: #64f4ab;
			color: black;
		}
	}
`;

const CardContainer = styled.div`
	/* height: 300px; */
	/* width: 300px; */
	background-color: #25262a;
	display: flex;
	/* justify-content: space-between; */
	/* background-color: red; */
	width: 80%;
	flex-wrap: wrap;
	margin-top: -90px;
	z-index: 1;
	/* align-items: center; */

	@media screen and (max-width: 600px) {
		width: 90%;
		justify-content: center;
		align-items: center;
		flex-direction: column-reverse;
		margin-top: 0;
	}
`;

// <ContentHolder>
// 	<ContetnHolderText1>Introduction</ContetnHolderText1>
// 	<ContetnHolderText2>Hello! I'm Gideon Ekeke</ContetnHolderText2>
// 	<ContetnHolderText3>
// 		The Journey of a Thosand miles Begins with A Step.
// 	</ContetnHolderText3>
// 	<ContetnHolderText4>
// 		Since i begin my journey with Codelab to become a software enginner ,
// 		thats the bold step i have ever taken in my life. I,m a very hardworking
// 		person, who always take projects been given to me serious and i
// 		delivered on time. I enjoy working with teams especially those that are
// 		serious for the business and also those that can tink and bring out
// 		solutions. Trust me am the right choice you need for your business.
// 	</ContetnHolderText4>
// 	<Button>Downlaod Cv</Button>
// </ContentHolder>;
