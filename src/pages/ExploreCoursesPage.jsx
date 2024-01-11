import { useEffect, useState } from "react";
import { getCoursesMethod, isCurrentAddressOwner } from "../web3/contractInteraction";
import CourseList from "../components/CourseList";
import AddCourseModal from "../components/AddCourseModal";

const ExploreCoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [isOwner, setIsOwner] = useState(false);

  const fetchCourses = async () => {
    try {
      const coursesData = await getCoursesMethod(); // Fetching courses from the contract
      setCourses(coursesData);
    } catch (error) {
      console.log("Error fetching courses:", error);
    }
  };

  const checkOwnerStatus = async () => {
    const ownerStatus = await isCurrentAddressOwner();
    setIsOwner(ownerStatus);
  };

  useEffect(() => {
    fetchCourses();
    checkOwnerStatus();
  }, []);

  return (
    <>
      {isOwner && <AddCourseModal />}
      <CourseList courses={courses} />
    </>
  );
};

export default ExploreCoursesPage;
