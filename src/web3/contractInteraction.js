import initializeWeb3 from "./initializeWeb3";

const web3 = initializeWeb3();

const contractABI =[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_beginDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_endDate",
				"type": "uint256"
			}
		],
		"name": "addCourse",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_courseId",
				"type": "uint256"
			}
		],
		"name": "enrollInCourse",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_student",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_courseId",
				"type": "uint256"
			},
			{
				"internalType": "enum CourseRegistration.CourseStatus",
				"name": "_status",
				"type": "uint8"
			}
		],
		"name": "markCourseStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_firstName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_lastName",
				"type": "string"
			}
		],
		"name": "registerStudent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_courseId",
				"type": "uint256"
			}
		],
		"name": "removeCourse",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_courseId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_beginDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_endDate",
				"type": "uint256"
			}
		],
		"name": "updateCourse",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "courses",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "courseId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "beginDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endDate",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isActive",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "courseToStudents",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllCourses",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "courseId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "beginDate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "endDate",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isActive",
						"type": "bool"
					}
				],
				"internalType": "struct CourseRegistration.Course[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_courseId",
				"type": "uint256"
			}
		],
		"name": "getCourse",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "courseId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "beginDate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "endDate",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isActive",
						"type": "bool"
					}
				],
				"internalType": "struct CourseRegistration.Course",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum CourseRegistration.CourseStatus",
				"name": "status",
				"type": "uint8"
			}
		],
		"name": "getCoursesByStatus",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "courseId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "beginDate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "endDate",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isActive",
						"type": "bool"
					}
				],
				"internalType": "struct CourseRegistration.Course[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_student",
				"type": "address"
			}
		],
		"name": "getStudentCourses",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "studentAddress",
				"type": "address"
			}
		],
		"name": "getStudentDetails",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "firstName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "lastName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "studentId",
						"type": "uint256"
					}
				],
				"internalType": "struct CourseRegistration.Student",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_student",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_courseId",
				"type": "uint256"
			}
		],
		"name": "getStudentStatusInCourse",
		"outputs": [
			{
				"internalType": "enum CourseRegistration.CourseStatus",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_courseId",
				"type": "uint256"
			}
		],
		"name": "listStudentsInCourse",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "studentCourseStatuses",
		"outputs": [
			{
				"internalType": "enum CourseRegistration.CourseStatus",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "studentEnrolledCourses",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "students",
		"outputs": [
			{
				"internalType": "string",
				"name": "firstName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "lastName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "studentId",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const contractAddress = "0xe72816a5b92e64115c88f3197a102d8d0f5fe627";

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
        console.error("Web3 is not initialized");
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
