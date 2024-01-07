import "./App.css";
import Connect from "./components/Connect";
import Navbar from "./components/Navbar";
import ExploreCoursesPage from "./pages/ExploreCoursesPage";
import HomePage from "./pages/HomePage";
import YourCoursesPage from "./pages/YourCoursesPage";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/explore" element={<ExploreCoursesPage />} />
				<Route path="/yourcourses" element={<YourCoursesPage />} />
			</Routes>
		</>
	);
}

export default App;
