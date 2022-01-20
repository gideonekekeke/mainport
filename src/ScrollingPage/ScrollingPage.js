import { PictureAsPdfOutlined } from "@material-ui/icons";
import React, { useState } from "react";

import pic from "../img/2.png";
import Body from "./Body";
import HeaderNav from "./Header/HeaderNav";
import Home from "./Home";
import Projects from "./Projects";
import UpdataProfile from "./UpdataProfile";
import UpProjects from "./UpProjects";

const ScrollingPage = () => {
	return (
		<div>
			<HeaderNav />
			<Home />
			<UpdataProfile />
			<Body />
			<UpProjects />
		</div>
	);
};

export default ScrollingPage;
