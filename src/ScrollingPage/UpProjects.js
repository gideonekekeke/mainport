import React from "react";
import styled from "styled-components";
import PropsProject from "./PropsProject";
import pic1 from "../img/sk.jpg";
import pic2 from "../img/ap2.jpg";
import pic3 from "../img/ap3.png";
import pic4 from "../img/ap4.png";
import pic5 from "../img/ap5.jpg";
import pic6 from "../img/ap6.jpg";
import pic7 from "../img/cl.png";
import pic8 from "../img/wa.jpg";
import "./upc.css";

const UpProjects = () => {
	return (
		<div id='projects'>
			<Container>
				<h2 style={{ color: "silver", fontWeight: "bold" }}>Projects</h2>
				<br />
				<br />
				<br />
				<PropsProject
					pro='Personal Project'
					title='MyService'
					desc='a web app that connects a skilled worker and a client looking for the skilled worker to work for them eg. electrician, capenter, mechanic, tailoring '
					git=''
					site='https://myservicecon.web.app/'
					pic={pic3}
				/>
				<PropsProject
					pro='Client Project'
					fd='row-reverse'
					title='Udeme Kitchen'
					desc='an e-cormerce food platform that gives user the right to other food online and pay with thier card or from bank and also you get your product delievered on time '
					git=''
					site='https://udemekitchen.herokuapp.com/'
					pic={pic4}
				/>
				<PropsProject
					pro='Personal Project'
					title='Movie-webapp'
					desc='an online movie app where user can get any movie he/she likes, user pay for the particular movie they wants and it takes them to where they can watch that movie '
					git=''
					site='https://redux-movie.herokuapp.com/'
					pic={pic6}
				/>
				<PropsProject
					pro='Client Project'
					fd='row-reverse'
					title='Ajegunle Security app'
					desc='its an app that is used to report , send a message to the government if they is any fireoutbreak , or fighting, raping or killing in that perticular community. also you can call any security officer you want through the app'
					git='https://github.com/gideonekekeke/ajegunle-hackaton'
					site='https://security-dev-project.firebaseapp.com/'
					pic={pic2}
				/>
				<PropsProject
					pro='Personal Project'
					title='Weather Application'
					desc='   This is weather app used for checking the weather of a particular
            country or city.'
					git='https://github.com/gideonekekeke/React-weather-app'
					site='https://wetherreact.herokuapp.com/'
					pic={pic1}
				/>
				<PropsProject
					pro='Personal Project'
					fd='row-reverse'
					title='Todo Webapp'
					desc='a todo app where you create a task to do for the day.(NC) '
					git='https://github.com/gideonekekeke/2do-app'
					site='https://personeltodo.firebaseapp.com/'
					pic={pic5}
				/>
				<PropsProject
					pro='Personal Project'
					title=' Api Webapp'
					desc='a Rest api which a developer can use for free, and also contains documentation for any developer with any programming language can use'
					git='https://github.com/gideonekekeke/2do-app'
					site='https://codelabapis.web.app/'
					pic={pic7}
				/>
				<PropsProject
					pro='Personal Project'
					fd='row-reverse'
					title='  Whatsapp Build'
					desc='this is a whatsapp web app built from scratch .'
					git='https://github.com/gideonekekeke/2do-app'
					site='https://whatsappchat-df80d.web.app/'
					pic={pic8}
				/>
			</Container>
		</div>
	);
};

export default UpProjects;
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
