import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CourseCard = ({ course }) => {
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
			sx={{ textAlign: "justify" }}
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
		  <Button size="small" variant="outlined">
			Enroll
		  </Button>
  
		  <Button size="small" variant="outlined">
			Learn More
		  </Button>
		</CardActions>
	  </Card>
	);
  };

export default CourseCard;
