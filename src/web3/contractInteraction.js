import initializeWeb3 from "./initializeWeb3";

const web3 = initializeWeb3();

const contractABI = [
	{ inputs: [], stateMutability: "nonpayable", type: "constructor" },
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "courseid",
				type: "uint256",
			},
			{ indexed: false, internalType: "string", name: "_name", type: "string" },
		],
		name: "addedCourse",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "studentAddress",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "courseId",
				type: "uint256",
			},
		],
		name: "enrollStudent",
		type: "event",
	},
	{
		inputs: [
			{ internalType: "string", name: "_name", type: "string" },
			{ internalType: "string", name: "_description", type: "string" },
			{ internalType: "uint256", name: "_price", type: "uint256" },
			{ internalType: "uint256", name: "_beginDate", type: "uint256" },
			{ internalType: "uint256", name: "_endDate", type: "uint256" },
		],
		name: "addCourse",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "uint256", name: "", type: "uint256" },
			{ internalType: "uint256", name: "", type: "uint256" },
		],
		name: "courseToStudents",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		name: "courses",
		outputs: [
			{ internalType: "uint256", name: "courseId", type: "uint256" },
			{ internalType: "string", name: "name", type: "string" },
			{ internalType: "string", name: "description", type: "string" },
			{ internalType: "uint256", name: "price", type: "uint256" },
			{ internalType: "uint256", name: "beginDate", type: "uint256" },
			{ internalType: "uint256", name: "endDate", type: "uint256" },
			{ internalType: "bool", name: "isActive", type: "bool" },
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "_courseId", type: "uint256" }],
		name: "enrollInCourse",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [],
		name: "getAllCourses",
		outputs: [
			{
				components: [
					{ internalType: "uint256", name: "courseId", type: "uint256" },
					{ internalType: "string", name: "name", type: "string" },
					{ internalType: "string", name: "description", type: "string" },
					{ internalType: "uint256", name: "price", type: "uint256" },
					{ internalType: "uint256", name: "beginDate", type: "uint256" },
					{ internalType: "uint256", name: "endDate", type: "uint256" },
					{ internalType: "bool", name: "isActive", type: "bool" },
				],
				internalType: "struct CourseRegistration.Course[]",
				name: "",
				type: "tuple[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "_courseId", type: "uint256" }],
		name: "getCourse",
		outputs: [
			{
				components: [
					{ internalType: "uint256", name: "courseId", type: "uint256" },
					{ internalType: "string", name: "name", type: "string" },
					{ internalType: "string", name: "description", type: "string" },
					{ internalType: "uint256", name: "price", type: "uint256" },
					{ internalType: "uint256", name: "beginDate", type: "uint256" },
					{ internalType: "uint256", name: "endDate", type: "uint256" },
					{ internalType: "bool", name: "isActive", type: "bool" },
				],
				internalType: "struct CourseRegistration.Course",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "enum CourseRegistration.CourseStatus",
				name: "status",
				type: "uint8",
			},
		],
		name: "getCoursesByStatus",
		outputs: [
			{
				components: [
					{ internalType: "uint256", name: "courseId", type: "uint256" },
					{ internalType: "string", name: "name", type: "string" },
					{ internalType: "string", name: "description", type: "string" },
					{ internalType: "uint256", name: "price", type: "uint256" },
					{ internalType: "uint256", name: "beginDate", type: "uint256" },
					{ internalType: "uint256", name: "endDate", type: "uint256" },
					{ internalType: "bool", name: "isActive", type: "bool" },
				],
				internalType: "struct CourseRegistration.Course[]",
				name: "",
				type: "tuple[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "_student", type: "address" }],
		name: "getStudentCourses",
		outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "_student", type: "address" }],
		name: "getStudentCoursesWithStatus",
		outputs: [
			{
				components: [
					{
						components: [
							{ internalType: "uint256", name: "courseId", type: "uint256" },
							{ internalType: "string", name: "name", type: "string" },
							{ internalType: "string", name: "description", type: "string" },
							{ internalType: "uint256", name: "price", type: "uint256" },
							{ internalType: "uint256", name: "beginDate", type: "uint256" },
							{ internalType: "uint256", name: "endDate", type: "uint256" },
							{ internalType: "bool", name: "isActive", type: "bool" },
						],
						internalType: "struct CourseRegistration.Course",
						name: "course",
						type: "tuple",
					},
					{
						internalType: "enum CourseRegistration.CourseStatus",
						name: "status",
						type: "uint8",
					},
				],
				internalType: "struct CourseRegistration.CourseWithStatus[]",
				name: "",
				type: "tuple[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "studentAddress", type: "address" },
		],
		name: "getStudentDetails",
		outputs: [
			{
				components: [
					{ internalType: "string", name: "firstName", type: "string" },
					{ internalType: "string", name: "lastName", type: "string" },
					{ internalType: "uint256", name: "studentId", type: "uint256" },
				],
				internalType: "struct CourseRegistration.Student",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "_student", type: "address" },
			{ internalType: "uint256", name: "_courseId", type: "uint256" },
		],
		name: "getStudentStatusInCourse",
		outputs: [
			{
				internalType: "enum CourseRegistration.CourseStatus",
				name: "",
				type: "uint8",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "_courseId", type: "uint256" }],
		name: "listStudentsInCourse",
		outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "_student", type: "address" },
			{ internalType: "uint256", name: "_courseId", type: "uint256" },
			{
				internalType: "enum CourseRegistration.CourseStatus",
				name: "_status",
				type: "uint8",
			},
		],
		name: "markCourseStatus",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "string", name: "_firstName", type: "string" },
			{ internalType: "string", name: "_lastName", type: "string" },
		],
		name: "registerStudent",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "_courseId", type: "uint256" }],
		name: "removeCourse",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "", type: "address" },
			{ internalType: "uint256", name: "", type: "uint256" },
		],
		name: "studentCourseStatuses",
		outputs: [
			{
				internalType: "enum CourseRegistration.CourseStatus",
				name: "",
				type: "uint8",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "", type: "address" },
			{ internalType: "uint256", name: "", type: "uint256" },
		],
		name: "studentEnrolledCourses",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "", type: "address" }],
		name: "students",
		outputs: [
			{ internalType: "string", name: "firstName", type: "string" },
			{ internalType: "string", name: "lastName", type: "string" },
			{ internalType: "uint256", name: "studentId", type: "uint256" },
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "uint256", name: "_courseId", type: "uint256" },
			{ internalType: "string", name: "_name", type: "string" },
			{ internalType: "string", name: "_description", type: "string" },
			{ internalType: "uint256", name: "_price", type: "uint256" },
			{ internalType: "uint256", name: "_beginDate", type: "uint256" },
			{ internalType: "uint256", name: "_endDate", type: "uint256" },
		],
		name: "updateCourse",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];

const contractAddress = "0x08496Ac373f952Aaa5A34Bc58e8Eb25b9D3fC418";

const contract = new web3.eth.Contract(contractABI, contractAddress);

export const getCoursesMethod = async () => {
	const result = await contract.methods.getAllCourses().call();
	return result;
};

export const registerStudentOnBlockchain = async (
	address,
	firstName,
	lastName
) => {
	if (!web3) {
		console.log("Web3 is not initialized");
	}

	try {
		const result = await contract.methods
			.registerStudent(firstName, lastName)
			.send({ from: address });

		console.log("Transaction successful: ", result);
	} catch (error) {
		console.log("Transaction failed: ", error);
	}
};

export const checkStudentRegistration = async (address) => {
	if (!web3) {
		alert("Web3 is not initialized");
		return false;
	}

	try {
		const student = await contract.methods.getStudentDetails(address).call();
		console.log("Student details:", student);
		return student && student.studentId !== 0n; //"0"
	} catch (error) {
		console.log("Error checking student registration:", error);
		return false;
	}
};

export const enrollInCourse = async (courseId, value) => {
	if (!web3) {
		console.log("Web3 is not initialized");
		return;
	}

	const accounts = await web3.eth.getAccounts();
	const fromAddress = accounts[0];

	try {

		const weiValue = web3.utils.toWei(value.toString(), 'ether'); 

		const result = await contract.methods
			.enrollInCourse(courseId)
			.send({ from: fromAddress, value: weiValue });
		console.log("Enrollment successful: ", result);
		return result;
	} catch (error) {
		console.log("Enrollment failed: ", error);
	}
};

export const getStudentCoursesWithStatusMethod = async () => {
	if (!web3) {
		console.log("Web3 is not initialized");
		return [];
	}

	const accounts = await web3.eth.getAccounts();
	const address = accounts[0];

	try {
		const result = await contract.methods
			.getStudentCoursesWithStatus(address)
			.call();

		// convert unix time to readable dates
		const formattedResult = result.map((courseWithStatus) => {
			const beginDate = courseWithStatus.course.beginDate;
			const endDate = courseWithStatus.course.endDate;
			return {
				...courseWithStatus,
				course: {
					...courseWithStatus.course,
					startDate: new Date(Number(beginDate) * 1000).toLocaleDateString(),
					endDate: new Date(Number(endDate) * 1000).toLocaleDateString(),
				},
			};
		});

		return formattedResult;
	} catch (error) {
		console.log("Error fetching student courses with status:", error);
		return [];
	}
};

export const listenToCourseAddedEvent = (callback) => {
	if (!web3) {
		console.log("Web3 is not initialized");
		return;
	}

	if (!contract) {
		console.log("Contract is not initialized");
		return;
	}

	contract.events
		.addedCourse()
		.on("data", (event) => {
			const { courseid, _name } = event.returnValues;
			callback(courseid, _name);
		})
		.on("error", console.error);
};

export const isCurrentAddressOwner = async () => {
	if (!web3) {
		console.log("Web3 is not initialized");
		return false;
	}

	const accounts = await web3.eth.getAccounts();
	const currentAddress = accounts[0];

	const ownerAddress = await contract.methods.owner().call();

	return currentAddress.toLowerCase() === ownerAddress.toLowerCase();
};

export const addCourseMethod = async (
	name,
	description,
	price,
	beginDate,
	endDate
) => {
	if (!web3) {
		console.log("Web3 is not initialized");
		return;
	}

	const accounts = await web3.eth.getAccounts();

	const fromAddress = accounts[0];
	const priceInWei = web3.utils.toWei(price.toString(), "ether");

	try {
		const result = await contract.methods
			.addCourse(name, description, priceInWei, beginDate, endDate)
			.send({ from: fromAddress });
		console.log("Add course transaction successful: ", result);
		return result;
	} catch (error) {
		console.error("Add course transaction failed: ", error);
		throw error;
	}
};

export const getEnrolledStudentsWithNames = async (courseId) => {
	if (!web3) {
		console.log("Web3 is not initialized");
		return [];
	}

	try {
		const studentAddresses = await contract.methods
			.listStudentsInCourse(courseId)
			.call();

		const studentsDetails = await Promise.all(
			studentAddresses.map(async (studentAddress) => {
				const student = await contract.methods
					.getStudentDetails(studentAddress)
					.call();
				const statusNumber = await contract.methods
					.getStudentStatusInCourse(studentAddress, courseId)
					.call();

				const statusLabels = ["Enrolled", "Completed", "Failed"];
				const status = statusLabels[statusNumber];

				return {
					address: studentAddress,
					firstName: student.firstName,
					lastName: student.lastName,
					status: status,
				};
			})
		);

		return studentsDetails;
	} catch (error) {
		console.log("Error fetching enrolled students with names:", error);
		return [];
	}
};

export const updateStudentStatus = async (studentAddress, courseId, status) => {
	if (!web3) {
		console.log("Web3 is not initialized");
		return;
	}

	const accounts = await web3.eth.getAccounts();
	const fromAddress = accounts[0];

	try {
		const statusEnum = { Enrolled: 0, Completed: 1, Failed: 2 };
		const result = await contract.methods
			.markCourseStatus(studentAddress, courseId, statusEnum[status])
			.send({ from: fromAddress });

		console.log("Status update successful: ", result);
	} catch (error) {
		console.error("Status update failed: ", error);
	}
};
