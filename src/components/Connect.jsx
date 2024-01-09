import AddLinkIcon from "@mui/icons-material/AddLink";
import ApiIcon from "@mui/icons-material/Api";
import initializeWeb3 from "../web3/initializeWeb3";
import { getCoursesMethod } from "../web3/contractInteraction";
import {
	registerStudentOnBlockchain,
	checkStudentRegistration,
} from "../web3/contractInteraction";
import { Button, Paper, Typography, TextField, Container } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Connect = () => {
	const [walletConnected, setWalletConnected] = useState(false);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [address, setAddress] = useState("");
	const [isRegistered, setIsRegistered] = useState(false);
	const navigate = useNavigate();

	const handleConnectWallet = async () => {
		console.log("Connecting to wallet..."); // debugging log

		try {
			const web3 = initializeWeb3();
			if (!web3) {
				console.error("Web3 not initialized");
				return;
			}

			console.log("Requesting account access..."); // debugging log
			const addresses = await window.ethereum.request({
				method: "eth_requestAccounts",
			});

			if (addresses.length === 0) {
				console.error("No address provided.");
				return;
			}

			console.log("Connected to address:", addresses[0]); // debugging log

			// Check if student is already registered
			const isRegistered = await checkStudentRegistration(addresses[0]);

			if (isRegistered) {
				console.log("User is already registered");
				setIsRegistered(true);
				navigate("/homepage");
			} else {
				console.log("User is not registered");
				setIsRegistered(false);
				setWalletConnected(true);
				setAddress(addresses[0]);
			}

			// call contract interaction function, just testing that it works
			const result = await getCoursesMethod();
			console.log("getCoursesMethod() result:", result); // debugging log
		} catch (error) {
			console.error("Error connecting to MetaMask:", error);
		}
	};

	const handleSubmit = async () => {
		if (!firstName || !lastName) {
			alert("Please enter both first and last names.");
			return;
		}

		try {
			await registerStudentOnBlockchain(address, firstName, lastName);
			alert("Student registered successfully!");
			navigate("/homepage"); // Redirect to homepage after successful registration
		} catch (error) {
			console.error("Error registering student:", error);
			alert("Failed to register student.");
		}
	};

	return (
		<Paper sx={{ p: 2, margin: "auto", flexGrow: 1 }}>
			<ApiIcon sx={{ fontSize: 70, m: 1 }} color="primary" />
			<Typography variant="h3" color="primary" sx={{ fontWeight: "bold" }}>
				Welcome to EduChain
			</Typography>
			{!walletConnected ? (
				<Container>
					<Typography variant="h4">
						Please connect your wallet to continue
					</Typography>
					<Button
						variant="contained"
						color="primary"
						sx={{ mt: 4, p: 2, fontSize: "23px" }}
						onClick={handleConnectWallet}
					>
						<AddLinkIcon sx={{ fontSize: 40, mr: 1 }} />
						Connect Wallet
					</Button>
				</Container>
			) : isRegistered ? (
				<Typography variant="h4">Redirecting to homepage...</Typography>
			) : (
				<Container>
					<Container sx={{ width: "100%" }}>
						<TextField
							label="First Name"
							variant="outlined"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							sx={{ mt: 2 }}
						/>
						<TextField
							label="Last Name"
							variant="outlined"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							sx={{ mt: 2, ml: 2 }}
						/>
					</Container>

					<Button
						variant="contained"
						color="primary"
						sx={{ mt: 4, p: 1, fontSize: "23px", width: "90%", mb: 2 }}
						onClick={handleSubmit}
					>
						Submit
					</Button>
				</Container>
			)}
		</Paper>
	);
};

export default Connect;
