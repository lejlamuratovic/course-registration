import { Box, Container, Typography, Button } from "@mui/material";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <Container sx={{ display: "flex", alignContent: "center", alignItems:"center", flexDirection:"column" }}>
		<Typography variant="h4" sx={{ textAlign: "center", fontWeight: 'bold', mb: 2 }}>
			Elevate Your Skills with Our Courses
		</Typography>
      <img src={logo} alt="logo" />
	  <Box sx={{ textAlign: "center", mt: 2, display: "flex"}}>
		<Button 
			variant="contained" 
			size="large" 
			sx={{ m: 2, p: 2, minWidth: '200px' }} 						
			component={Link}
			to="/explore"> 
			Explore Courses 
		</Button>
		<Button 
			variant="contained" 
			size="large" 
			sx={{ m: 2, p: 2, minWidth: '200px' }} 						
			component={Link}
			to="/yourcourses"> 
			Your Courses 
		</Button>
	  </Box>
    </Container>
  );
};

export default Homepage;
