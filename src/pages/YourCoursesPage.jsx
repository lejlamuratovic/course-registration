import { useEffect, useState } from "react";
import { getStudentCoursesWithStatusMethod } from "../web3/contractInteraction";
import StudentCourseList from "../components/StudentCourseList";

const YourCoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const coursesData = await getStudentCoursesWithStatusMethod();
        setCourses(coursesData);
      } catch (error) {
        console.log("Error fetching courses:", error);
      }
    }

    fetchCourses();
  }, []);

  return (
    <>
      <StudentCourseList courses={courses} />
    </>
  );
};

export default YourCoursesPage;
