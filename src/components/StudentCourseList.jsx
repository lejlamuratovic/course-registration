import React from "react";
import StudentCourseCard from "./StudentCourseCard";
import { Container, Grid, Box } from "@mui/material";

const StudentCourseList = ({ courses }) => {
	return (
		<Container maxWidth="lg">
			<Box display="flex" justifyContent="center">
				<Grid container spacing={2} justifyContent="center">
					{courses.map((course, index) => (
						<Grid item key={index} xs={12} sm={6} md={4} lg={3}>
							<StudentCourseCard course={course} />
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	);
};

export default StudentCourseList;
