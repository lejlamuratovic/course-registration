import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CourseDetailsModal from "./CourseDetailsModal";
import ConfirmationModal from "./ConfirmationModal";
import GradingModal from "./GradingModal";
import {
	enrollInCourse,
	isCurrentAddressOwner,
	getEnrolledStudentsWithNames,
	updateStudentStatus,
} from "../web3/contractInteraction";

const CourseCard = ({ course }) => {
	const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
	const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
	const [isGradingModalOpen, setIsGradingModalOpen] = useState(false);
	const [enrolledStudents, setEnrolledStudents] = useState([]);
	const [isOwner, setIsOwner] = useState(false);

	useEffect(() => {
		const checkOwnerStatus = async () => {
			const ownerStatus = await isCurrentAddressOwner();
			setIsOwner(ownerStatus);
		};

		checkOwnerStatus();
	}, []);

	const handleOpenDetailsModal = () => setIsDetailsModalOpen(true);
	const handleCloseDetailsModal = () => setIsDetailsModalOpen(false);

	const handleEnrollClick = () => setIsConfirmationOpen(true);

	const handleEnrollmentConfirmation = async () => {
		setIsConfirmationOpen(false);
		try {
			const value = course.price;
			const result = await enrollInCourse(course.courseId, value);
			console.log("Enrollment confirmed:", result);
		} catch (error) {
			console.error("Enrollment error:", error);
		}
	};

	const handleOpenGradingModal = async () => {
		// const ownerStatus = await isCurrentAddressOwner();
		// if (ownerStatus) {
		// 	console.log("Only the owner can perform this operation");
		// 	return;
		// }

		try {
			const students = await getEnrolledStudentsWithNames(course.courseId);
			setEnrolledStudents(students);
			setIsGradingModalOpen(true);
		} catch (error) {
			console.error("Error fetching enrolled students with names:", error);
		}
	};

	const handleCloseGradingModal = () => setIsGradingModalOpen(false);

	return (
		<Card
			sx={{
				display: "flex",
				flexDirection: "column",
				height: "100%",
				maxWidth: "100%",
				mb: 2,
			}}
		>
			<CardContent sx={{ flex: "1 0 auto", maxHeight: "150px" }}>
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
						WebkitLineClamp: 5,
						textOverflow: "ellipsis",
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
				{isOwner ? (
					<Button
						size="small"
						variant="outlined"
						onClick={handleOpenGradingModal}
					>
						Grade Students
					</Button>
				) : (
					<Button size="small" variant="outlined" onClick={handleEnrollClick}>
						Enroll
					</Button>
				)}
				<Button
					size="small"
					variant="outlined"
					onClick={handleOpenDetailsModal}
				>
					Learn More
				</Button>
			</CardActions>
			<CourseDetailsModal
				course={course}
				isOpen={isDetailsModalOpen}
				onClose={handleCloseDetailsModal}
			/>
			<ConfirmationModal
				isOpen={isConfirmationOpen}
				onClose={() => setIsConfirmationOpen(false)}
				onConfirm={handleEnrollmentConfirmation}
				course={course}
			/>
			<GradingModal
				isOpen={isGradingModalOpen}
				onClose={handleCloseGradingModal}
				students={enrolledStudents}
				courseId={course.courseId}
				updateStudentStatus={updateStudentStatus}
			/>
		</Card>
	);
};

export default CourseCard;
