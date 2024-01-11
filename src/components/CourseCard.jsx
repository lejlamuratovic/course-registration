import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CourseDetailsModal from "./CourseDetailsModal";
import ConfirmationModal from "./ConfirmationModal";
import { enrollInCourse } from "../web3/contractInteraction";

const CourseCard = ({ course }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleEnrollClick = () => {
    setIsConfirmationOpen(true);
  };

  const handleEnrollmentConfirmation = async () => {
    setIsConfirmationOpen(false);
    try {
      const value = course.price;
      const result = await enrollInCourse(course.courseId, value);
      console.log("Enrollment confirmed:", result);
    } catch (error) {
      console.log("Enrollment error:", error);
    }
  };

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', maxWidth: '100%', mb: 2 }}>
      <CardContent sx={{ flex: '1 0 auto', maxHeight: '150px' }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="primary"
          sx={{ fontWeight: "bold", mb: 1 }}
        >
          {course.name}
        </Typography>
		<Typography
			variant="body2"
			color="text.secondary"
			sx={{
				display: "-webkit-box",
				overflow: "hidden",
				WebkitBoxOrient: "vertical",
				WebkitLineClamp: 5, // number of lines as needed
				textOverflow: 'ellipsis',
			}}
		>
  			{course.description}
		</Typography>

      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          p: 2,
        }}
      >
        <Button size="small" variant="outlined" onClick={handleEnrollClick}>
          Enroll
        </Button>
        <Button size="small" variant="outlined" onClick={handleOpenModal}>
          Learn More
        </Button>
      </CardActions>
      <CourseDetailsModal
        course={course}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
        onConfirm={handleEnrollmentConfirmation}
        course={course}
      />
    </Card>
  );
};

export default CourseCard;
