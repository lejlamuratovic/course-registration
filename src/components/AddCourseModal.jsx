import { useState } from "react";
import {
	Button,
	TextField,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Fab
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { addCourseMethod } from "../web3/contractInteraction";

const AddCourseModal = ({ }) => {
	const [open, setOpen] = useState(false);
	const [courseData, setCourseData] = useState({
		name: "",
		description: "",
		price: "",
		beginDate: "",
		endDate: "",
	});

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleChange = (e) => {
		setCourseData({ ...courseData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async () => {
		// convert the date to unix timestamp by taking the current date and divide it by 1000 because solidity uses unix timestamp
		const unixBeginDate = new Date(courseData.beginDate).getTime() / 1000;
		const unixEndDate = new Date(courseData.endDate).getTime() / 1000;

		const submissionData = {
			...courseData,
			beginDate: unixBeginDate,
			endDate: unixEndDate,
		};

		console.log(submissionData);

		try {
			await addCourseMethod(
			  courseData.name,
			  courseData.description,
			  courseData.price,
			  unixBeginDate,
			  unixEndDate
			);
			console.log('Course added successfully');
			handleClose();

		  } catch (error) {
			console.log('Failed to add the course:', error);
		  }

		handleClose();
	};

	return (
		<div style={{ position: 'fixed', right: 40, bottom: 60 }}>
			<Fab color="success" aria-label="add" onClick={handleClickOpen}>
				<AddIcon />
			</Fab>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Add a New Course</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						margin="dense"
						name="name"
						label="Course Name"
						type="text"
						fullWidth
						variant="standard"
						onChange={handleChange}
					/>
					<TextField
						margin="dense"
						name="description"
						label="Description"
						type="text"
						fullWidth
						multiline
						variant="standard"
						onChange={handleChange}
					/>
					<TextField
						margin="dense"
						name="price"
						label="Price"
						type="number"
						fullWidth
						variant="standard"
						onChange={handleChange}
					/>
					<TextField
						margin="dense"
						name="beginDate"
						label="Begin Date"
						type="date"
						fullWidth
						variant="standard"
						InputLabelProps={{ shrink: true }}
						onChange={handleChange}
					/>
					<TextField
						margin="dense"
						name="endDate"
						label="End Date"
						type="date"
						fullWidth
						variant="standard"
						InputLabelProps={{ shrink: true }}
						onChange={handleChange}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleSubmit}>Add</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default AddCourseModal;
