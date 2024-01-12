// SPDX-License-Identifier: MIT
pragma solidity 0.8.22;

contract CourseRegistration {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    struct Course {
        uint courseId;
        string name;
        string description;
        uint price;
        uint beginDate;
        uint endDate;
        bool isActive;
    }

    struct Student {
        string firstName;
        string lastName;
        uint studentId;
    }

    struct CourseWithStatus {
        Course course;
        CourseStatus status;
    }


    // mappings
    mapping(uint => Course) public courses; 
    mapping(address => Student) public students;
    mapping(address => uint[]) public studentEnrolledCourses;
    mapping(address => mapping(uint => CourseStatus)) public studentCourseStatuses; // nested mappings that maps student's address to another mapping of course id to student's status of that course
    mapping(uint => address[]) public courseToStudents; // maps course id to list of student addresses enrolled

    enum CourseStatus { Enrolled, Completed, Failed }

    uint private nextCourseId = 1;
    uint private nextStudentId = 1;


    // modifiers
    modifier incrementCourseId() {
        _; 
        nextCourseId++;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this operation");
        _;
    }

    modifier verifyEnrollment(uint _courseId){
        require(courses[_courseId].isActive, "Course is not active");
        require(block.timestamp < courses[_courseId].beginDate, "Enrollment period has ended");
        _;
    }

    modifier checkStudentNotRegistered(address _student) {
        require(students[_student].studentId == 0, "Student is already registered");
        _;
    }

    modifier checkPayment(uint _amount, uint _price) {
        require(_amount >= _price * 10**18, "Insufficient amount to enroll");
        _;
    }

    modifier checkStudentRegistered(address _student) {
        require(students[_student].studentId != 0, "Student is not registered");
        _;
    }

    //events
    event addedCourse(uint courseid, string _name);
    event enrollStudent(address studentAddress, uint courseId);



    //functions
    function addCourse(string memory _name, string memory _description, uint _price, uint _beginDate, uint _endDate) public onlyOwner incrementCourseId {
       // uint priceInWei = _price * 10**18;
        courses[nextCourseId] = Course(nextCourseId, _name, _description, _price, _beginDate, _endDate, true);
        emit addedCourse(nextCourseId, _name);
    }

    function removeCourse(uint _courseId) public onlyOwner {
        require(courses[_courseId].courseId != 0, "Course does not exist");

        courses[_courseId].isActive = false;
    }

    function registerStudent(string memory _firstName, string memory _lastName) public checkStudentNotRegistered(msg.sender) {
        students[msg.sender] = Student(_firstName, _lastName, nextStudentId);
        nextStudentId++;
    }


    function enrollInCourse(uint _courseId) external payable verifyEnrollment(_courseId) checkPayment(msg.value, courses[_courseId].price)  checkStudentRegistered(msg.sender) {
        studentEnrolledCourses[msg.sender].push(_courseId);
        studentCourseStatuses[msg.sender][_courseId] = CourseStatus.Enrolled;

        courseToStudents[_courseId].push(msg.sender);

        (bool sent, ) = owner.call{value: msg.value}(""); 
        require(sent, "Failed payment");
        
        emit enrollStudent(msg.sender, _courseId);
    }


    function markCourseStatus(address _student, uint _courseId, CourseStatus _status) public onlyOwner {
        require(studentCourseStatuses[_student][_courseId] != CourseStatus.Completed, "Course already completed");

        studentCourseStatuses[_student][_courseId] = _status;
    }

   
    function getCourse(uint _courseId) public view returns (Course memory) {
        return courses[_courseId];
    }

    function getStudentCourses(address _student) public view returns (uint[] memory) {
        return studentEnrolledCourses[_student];
    }

    function getStudentStatusInCourse(address _student, uint _courseId) public view returns (CourseStatus) {
        return studentCourseStatuses[_student][_courseId];
    }

    function getAllCourses() public view returns (Course[] memory) {
        Course[] memory allCourses = new Course[](nextCourseId - 1);

        for(uint i = 1; i < nextCourseId; i++) {
            allCourses[i-1] = courses[i];
        }

        return allCourses;
    }

    function getCoursesByStatus(CourseStatus status) public view returns (Course[] memory) {
        uint courseCount;

        for(uint i = 1; i < nextCourseId; i++) {
            if(studentCourseStatuses[msg.sender][i] == status) {
                courseCount++;
            }
        }
        
        uint index = 0;
        Course[] memory coursesByStatus = new Course[](courseCount);
        
        for(uint i = 1; i < nextCourseId; i++) {
            if(studentCourseStatuses[msg.sender][i] == status) {
                coursesByStatus[index] = courses[i];
                index++;
            }
        }

        return coursesByStatus;
    }


    function updateCourse(uint _courseId, string memory _name, string memory _description, uint _price, uint _beginDate, uint _endDate) public onlyOwner {
        require(courses[_courseId].isActive, "Cannot update an inactive course");
        courses[_courseId] = Course(_courseId, _name, _description, _price, _beginDate, _endDate, true);
    }
    
    function getStudentDetails(address studentAddress) public view returns (Student memory) {
        return students[studentAddress];
    }

    function listStudentsInCourse(uint _courseId) public view returns (address[] memory) {
        return courseToStudents[_courseId];
    }


    function getStudentCoursesWithStatus(address _student) public view returns (CourseWithStatus[] memory) {
        uint[] memory enrolledCourses = studentEnrolledCourses[_student];
        CourseWithStatus[] memory coursesWithStatus = new CourseWithStatus[](enrolledCourses.length);

        for (uint i = 0; i < enrolledCourses.length; i++) {
            uint courseId = enrolledCourses[i];
            Course memory course = courses[courseId];
            CourseStatus status = studentCourseStatuses[_student][courseId];
            coursesWithStatus[i] = CourseWithStatus(course, status);
        }

        return coursesWithStatus;
    }
}