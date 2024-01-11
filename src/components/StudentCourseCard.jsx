import { Card, CardContent, Typography, Chip, Box } from "@mui/material";

const StudentCourseCard = ({ course }) => {
	const getStatusColor = (statusIndex) => {
		const statusColors = {
			0: "orange", // Enrolled
			1: "green", // Completed
			2: "red", // Failed
		};
		return statusColors[statusIndex] || "default";
	};

	const statusLabels = ["Enrolled", "Completed", "Failed"];

	return (
		<Card sx={{ maxWidth: "100%", mb: 2 }}>
			<CardContent>
				<Typography
					gutterBottom
					variant="h5"
					component="div"
					sx={{ fontWeight: "bold", mb: 1, textAlign: "center" }}
					color="primary"
				>
					{course.course.name}
				</Typography>
				<Typography
					variant="body2"
					color="text.secondary"
					sx={{
						display: "-webkit-box",
						overflow: "hidden",
						WebkitBoxOrient: "vertical",
						WebkitLineClamp: 2,
						textAlign: "center",
					}}
				>
					{course.course.description}
				</Typography>
			</CardContent>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					p: 2,
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Chip
					label={statusLabels[course.status] || "Unknown"}
					sx={{
						backgroundColor: getStatusColor(course.status),
						color: "white",
						mb: 1,
					}}
				/>
				<Typography color="text.secondary">
					{course.course.startDate} - {course.course.endDate}
				</Typography>
			</Box>
		</Card>
	);
};

export default StudentCourseCard;
