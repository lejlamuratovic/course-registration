import { useEffect, useState } from "react";
import { getCoursesMethod } from "../web3/contractInteraction";
import CourseList from "../components/CourseList";

const ExploreCoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const coursesData = await getCoursesMethod(); // fetching courses from the contract

        setCourses(coursesData);
      } catch (error) {
        console.log("Error fetching courses:", error);
      }
    }

    fetchCourses();
  }, []);

  return (
    <>
      <CourseList courses={courses}/>
    </>
  );
};

export default ExploreCoursesPage;
