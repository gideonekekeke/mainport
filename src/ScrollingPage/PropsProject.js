import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";

const PropsProject = ({ fd, title, desc, pic, git, site, pro }) => {
	return (
		<div>
			<MainCardHold fd={fd}>
				<FirstBox src={pic} />
				<SecondBox>
					<Holder>
						<h3>{pro}</h3>
						<Title>{title}</Title>
						<Desc>{desc}</Desc>

						<p>Vscode Sublime Text Atom </p>
						<BottomHold>
							<ButHold href={git}>
								<AiOutlineGithub />
							</ButHold>
							<ButHold href={site}>
								<FiExternalLink />
							</ButHold>
						</BottomHold>
					</Holder>
				</SecondBox>
			</MainCardHold>
		</div>
	);
};

export default PropsProject;

const BottomHold = styled.div`
	display: flex;
`;
const ButHold = styled.a`
	color: white;
	font-size: 25px;
	cursor: pointer;
	margin: 5px;

	:hover {
		color: #64f4ab;
	}

	@media screen and (max-width: 760px) {
		font-size: 20px;
		margin-top: -5px;
	}
`;

const Desc = styled.div`
	width: 600px;
	height: 150px;
	background: #25262a;
	margin-top: 20px;
	border-radius: 5px;
	display: flex;
	/* justify-content: center; */
	align-items: center;
	text-align: center;
	font-size: 17px;
	color: white;
	padding: 10px;
	box-shadow: 0px 5px 2px -5px rgba(0, 0, 0, 0.4);
	z-index: 1;

	@media screen and (max-width: 760px) {
		width: 320px;
	}
`;

const Holder = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-end;
	@media screen and (max-width: 760px) {
		align-items: flex-start;
		width: 320px;
	}
`;
const Title = styled.div`
	color: white;
	font-weight: bold;
	font-size: 20px;
`;

const MainCardHold = styled.div`
	display: flex;
	padding-bottom: 20px;
	flex-wrap: wrap;
	flex-direction: ${({ fd }) => fd};

	@media screen and (max-width: 760px) {
		justify-content: center;
		align-items: center;
		padding-bottom: 0;
	}
`;
const FirstBox = styled.img`
	width: 500px;
	height: 400px;
	background-color: #64f4ab;
	border-radius: 5px;
	object-fit: cover;
	opacity: 0.3;
	cursor: pointer;

	:hover {
		background-color: #64f4ab;

		opacity: 1;
	}

	@media screen and (max-width: 760px) {
		width: 320px;
		height: 300px;
	}
`;
const SecondBox = styled.div`
	width: 500px;
	height: 400px;

	display: flex;
	justify-content: flex-end;
	margin: 10px;

	h3 {
		color: #64f4ab;
		font-size: 13px;
	}
	p {
		color: silver;
		font-size: 10px;
	}

	@media screen and (max-width: 760px) {
		width: 320px;
		justify-content: center;
		height: 350px;
	}
`;
