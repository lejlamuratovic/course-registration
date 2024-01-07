import "./App.css";
import CourseCard from "./components/CourseCard";
import AddCourseModal from "./components/AddCourseModal";
import StudentCourseCard from "./components/StudentCourseCard";

function App() {
	return (
		<>
			<CourseCard />
			<AddCourseModal />
			<StudentCourseCard
				courseName="Introduction to Programming"
				status="Enrolled"
				startDate="2022-01-01"
				endDate="2022-06-01"
			/>
			<StudentCourseCard
				courseName="Introduction to Programming"
				status="Completed"
				startDate="2022-01-01"
				endDate="2022-06-01"
			/>
			<StudentCourseCard
				courseName="Introduction to Programming"
				status="Failed"
				startDate="2022-01-01"
				endDate="2022-06-01"
			/>
		</>
	);
}

export default App;
