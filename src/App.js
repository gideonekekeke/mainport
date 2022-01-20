import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollingPage from "./ScrollingPage/ScrollingPage";

import Footer from "./ScrollingPage/Footer/Footer";

const App = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route exact path='/' element={<ScrollingPage />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
};

export default App;
