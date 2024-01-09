import CourseCard from "./CourseCard";
import { Container, Grid } from "@mui/material";

const CourseList = ({ courses }) => {
    return (
        <Container sx={{ width: '100%' }}>
            <Grid container spacing={2}>
                {courses.map((course) => (
                <Grid item key={course.courseId} xs={12} sm={6} md={4} lg={3}>
                    <CourseCard course={course} />
                </Grid>
                ))}
            </Grid>
        </Container>
    );
  };

export default CourseList;
