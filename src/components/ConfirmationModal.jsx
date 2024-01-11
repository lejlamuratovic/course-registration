import React from "react";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Button,
} from "@mui/material";

const ConfirmationModal = ({ isOpen, onClose, onConfirm, course }) => {
	return (
		<Dialog open={isOpen} onClose={onClose}>
			<DialogTitle>Enroll in Course</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Are you sure you want to enroll in {course.name}?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose} color="primary">
					Cancel
				</Button>
				<Button onClick={onConfirm} color="primary" autoFocus>
					Yes, Enroll
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ConfirmationModal;
