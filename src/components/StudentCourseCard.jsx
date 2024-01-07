import React from "react";
import { Card, CardContent, Typography, Chip, Grid } from "@mui/material";

const StudentCourseCard = ({ courseName, status, startDate, endDate }) => {
	const getStatusColor = (status) => {
		switch (status) {
			case "Enrolled":
				return "orange";
			case "Completed":
				return "green";
			case "Failed":
				return "red";
			default:
				return "default";
		}
	};

	return (
		<Card>
			<CardContent>
				<Typography variant="h5" component="div">
					{courseName}
				</Typography>
				<Chip
					label={status}
					style={{
						backgroundColor: getStatusColor(status),
						color: "white",
						marginTop: "10px",
					}}
				/>
				<Grid
					container
					justifyContent="space-evenly"
					alignItems="flex-end"
					style={{ marginTop: "10px" }}
				>
					<Grid item>
						<Typography color="text.secondary">{startDate}</Typography>
					</Grid>
					<Grid item>
						<Typography color="text.secondary">{endDate}</Typography>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default StudentCourseCard;
