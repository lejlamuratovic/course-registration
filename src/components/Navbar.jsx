import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import ApiIcon from "@mui/icons-material/Api";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar
			position="static"
			sx={{ width: "100%", position: "absolute", left: 0, top: 0 }}
		>
			<Toolbar sx={{ display: "flex", alignItems: "center", maxWidth: "100%" }}>
				<ApiIcon
					sx={{ display: { xs: "none", md: "flex" }, fontSize: 50, mr: 1 }}
				/>
				<Typography
					variant="h4"
					noWrap
					href="#responsive-app-bar"
					component={Link}
					to="/homepage"
					sx={{
						mr: 5,
						display: { xs: "none", md: "flex" },
						fontFamily: "monospace",
						fontWeight: 700,
						letterSpacing: ".3rem",
						color: "inherit",
						textDecoration: "none",
					}}
				>
					EduChain
				</Typography>

				<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
					<IconButton
						size="large"
						aria-label="navigation menu"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleOpenNavMenu}
						color="inherit"
					>
						<MenuIcon />
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={anchorElNav}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "left",
						}}
						keepMounted
						transformOrigin={{
							vertical: "top",
							horizontal: "left",
						}}
						open={Boolean(anchorElNav)}
						onClose={handleCloseNavMenu}
						sx={{
							display: { xs: "block", md: "none" },
						}}
					>
						<MenuItem
							onClick={handleCloseNavMenu}
							sx={{ fontSize: "1rem" }}
							component={Link}
							to="/explore"
						>
							<Typography textAlign="center">Explore courses</Typography>
						</MenuItem>
						<MenuItem
							onClick={handleCloseNavMenu}
							sx={{ fontSize: "1rem" }}
							component={Link}
							to="/yourcourses"
						>
							<Typography textAlign="center">Your courses</Typography>
						</MenuItem>
					</Menu>
				</Box>

				<ApiIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
				<Typography
					variant="h5"
					noWrap
					component={Link}
					to="/homepage"
					href="#responsive-app-bar"
					sx={{
						mr: 2,
						display: { xs: "flex", md: "none" },
						flexGrow: 1,
						fontFamily: "monospace",
						fontWeight: 700,
						letterSpacing: ".3rem",
						color: "inherit",
						textDecoration: "none",
					}}
				>
					EduChain
				</Typography>

				<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
					<Button
						key="Pricing"
						sx={{ my: 2, color: "white", display: "block" }}
						component={Link}
						to="/explore"
					>
						Explore courses
					</Button>
					<Button
						key="Blog"
						sx={{ my: 2, color: "white", display: "block" }}
						component={Link}
						to="/yourcourses"
					>
						Your courses
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
