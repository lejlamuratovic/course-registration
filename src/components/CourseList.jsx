import CourseCard from "./CourseCard";
import { Container, Grid, Box } from "@mui/material";

const CourseList = ({ courses }) => {
	return (
		<Container maxWidth="lg">
			<Box display="flex" justifyContent="center">
				<Grid container spacing={2} justifyContent="center">
					{courses.map((course) => (
						<Grid item key={course.courseId} xs={12} sm={6} md={4} lg={3}>
							<CourseCard course={course} />
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	);
};

export default CourseList;
