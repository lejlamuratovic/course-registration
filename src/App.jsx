import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ExploreCoursesPage from "./pages/ExploreCoursesPage";
import HomePage from "./pages/HomePage";
import YourCoursesPage from "./pages/YourCoursesPage";
import ConnectPage from "./pages/ConnectPage";

function App() {
	const location = useLocation();

	const shouldDisplayNavbar = location.pathname !== "/";

	return (
		<>
			{shouldDisplayNavbar && <Navbar />}
			<Routes>
				<Route path="/" element={<ConnectPage />} />
				<Route path="/homepage" element={<HomePage />} />
				<Route path="/explore" element={<ExploreCoursesPage />} />
				<Route path="/yourcourses" element={<YourCoursesPage />} />
			</Routes>
		</>
	);
}

export default App;
