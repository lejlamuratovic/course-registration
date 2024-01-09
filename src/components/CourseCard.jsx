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
		<Card sx={{ maxWidth: 345 }}>
			<CardContent>
				<Typography
					gutterBottom
					variant="h5"
					component="div"
					color="primary"
					sx={{ fontWeight: "bold" }}
					textAlign="left"
				>
					{course.name}
				</Typography>

				<Typography
					variant="body2"
					color="text.secondary"
					textAlign="left"
					sx={{
						textAlign: "justify",
						textOverflow: "ellipsis",
						overflow: "hidden",
						whiteSpace: "nowrap",
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
					pl: 4,
					pr: 4,
					pb: 2,
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
