import React from "react";
import StudentCourseCard from "./StudentCourseCard";
import { Container, Grid, Box } from "@mui/material";

const StudentCourseList = ({ courses }) => {
	return (
	  <Container maxWidth="lg">
		<Grid container spacing={3} justifyContent="center" sx = {{ p: 2 }}>
		  {courses.map((course, index) => (
			<Grid item key={index} xs={12} sm={6} md={4} lg={4}>
			  <StudentCourseCard course={course} />
			</Grid>
		  ))}
		</Grid>
	  </Container>
	);
};

export default StudentCourseList;
