import React from "react";
import "./upd.css";
import styled from "styled-components";
import pic from "./image/me.JPG";
const UpdataProfile = () => {
	const data = {
		person: "class PERSON",
		cons: "constructor(){",
		na: "  this.name =",
		me: "Gideon Ekeke",
		yr: "this.age = new Data().getFullYear() - 2000",
		cl: "}",
		cf: "}",
		fc: "const PERSON = (firstName, LastName) =>{let FullDate = Date().getFullYear() - 2000 return firstName + LastName , FullDate + 'year'}",
		ff: "PERSON('Gideon', 'Ekeke')",
	};

	return (
		<Container id='about'>
			<MainHold>
				<UserImage src={pic} />
				<Text>
					Since i begin my journey with Codelab to become a software enginner ,
					thats the bold step i have ever taken in my life. <br /> I,m a very
					hardworking person, who always take projects been given to me serious
					and i delivered on time.
					<br /> I enjoy working with teams especially those that are serious
					for the business and also those that can tink and bring out solutions.
					<br /> Trust me am the right choice you need for your business.
				</Text>
				<Card>
					1. {data.person}
					<br />
					<span> 2. {data.cons}</span>
					<br />
					<span> 3. {data.na}</span>
					<span style={{ fontWeight: "bold" }}> "{data.me}"</span>
					<br />
					<span> 4. {data.yr}</span>
					<br />
					<span> 5. {data.cl}</span>
					<br />
					<span> 6. {data.cf}</span>
					<br />
					<br />
					<br />
					<div style={{ fontSize: "14px" }}>{data.fc}</div>
					<br />
					<div style={{ fontSize: "14px" }}>{data.ff}</div>
				</Card>
			</MainHold>
			<div class='custom-shape-divider-bottom-1642634171'>
				<svg
					data-name='Layer 1'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1200 120'
					preserveAspectRatio='none'>
					<path
						d='M1200 120L0 16.48 0 0 1200 0 1200 120z'
						class='shape-fill'></path>
				</svg>
			</div>
		</Container>
	);
};

export default UpdataProfile;

const Card = styled.div`
	height: 300px;
	width: 250px;
	background: white;
	border-radius: 5px;
	padding: 20px;
	color: black;
`;

const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 450px;
	padding-top: 150px;
	color: white;
	z-index: 1;

	@media screen and (max-width: 760px) {
		padding-top: 50px;
	}
`;
const MainHold = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 90%;
	flex-wrap: wrap;
`;
const UserImage = styled.img`
	height: 200px;
	width: 200px;
	border-radius: 50%;
	background-color: silver;
	border: 3px solid white;
	object-fit: cover;
`;
const Text = styled.div`
	width: 50%;
	font-size: 19px;

	@media screen and (max-width: 760px) {
		width: 100%;
	}
`;
