import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const GradingModal = ({
	isOpen,
	onClose,
	students,
	courseId,
	updateStudentStatus,
}) => {
	const [selectedStatus, setSelectedStatus] = useState({});

	useEffect(() => {
		const initialStatuses = {};
		students.forEach((student) => {
			initialStatuses[student.address] = student.status;
		});
		setSelectedStatus(initialStatuses);
	}, [students]);

	const handleChange = (studentAddress, status) => {
		setSelectedStatus({ ...selectedStatus, [studentAddress]: status });
	};

	const handleUpdateStatus = (studentAddress) => {
		const status = selectedStatus[studentAddress];
		updateStudentStatus(studentAddress, courseId, status);
	};

	return (
		<Modal open={isOpen} onClose={onClose}>
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: 400,
					bgcolor: "background.paper",
					boxShadow: 24,
					p: 4,
					maxHeight: "70vh",
					overflowY: "auto",
				}}
			>
				<Typography variant="h6" component="h2" sx={{ mb: 2, color: "black" }}>
					Enrolled Students
				</Typography>
				<List>
					{students.map((student, index) => (
						<ListItem
							key={index}
							sx={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<ListItemText
								primary={`${student.firstName} ${student.lastName}`}
								primaryTypographyProps={{ style: { color: "black" } }}
							/>
							<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
								<Select
									value={selectedStatus[student.address]}
									onChange={(e) =>
										handleChange(student.address, e.target.value)
									}
								>
									<MenuItem value="Enrolled">Enrolled</MenuItem>
									<MenuItem value="Completed">Completed</MenuItem>
									<MenuItem value="Failed">Failed</MenuItem>
								</Select>
							</FormControl>
							<Button
								variant="outlined"
								onClick={() => handleUpdateStatus(student.address)}
							>
								Update
							</Button>
						</ListItem>
					))}
				</List>
			</Box>
		</Modal>
	);
};

export default GradingModal;
