import StudentCourseCard from "./StudentCourseCard";
import { Container, Grid } from "@mui/material";

const StudentCourseList = ({ courses }) => {
  return (
    <Container sx={{ }}>
      <Grid container spacing={2}>
        {courses.map((course, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <StudentCourseCard course={course} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default StudentCourseList;
