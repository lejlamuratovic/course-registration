import { Card, CardContent, Typography, Chip, Box } from "@mui/material";

const StudentCourseCard = ({ course }) => {
    const getStatusColor = (statusIndex) => {
        const statusColors = {
            0: "orange", // Enrolled
            1: "green", // Completed
            2: "red", // Failed
        };
        return statusColors[statusIndex] || "default";
    };

    const statusLabels = ["Enrolled", "Completed", "Failed"];

    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold", textAlign: "center" }}
                    color="primary"
                >
                    {course.course.name}
                </Typography>
            </CardContent>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    p: 2,
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Chip
                    label={statusLabels[course.status] || "Unknown"}
                    sx={{
                        backgroundColor: getStatusColor(course.status),
                        color: "white",
                        mb: 1,
                    }}
                />
                <Typography color="text.secondary">
                    {course.course.startDate} - {course.course.endDate}
                </Typography>
            </Box>
        </Card>
    );
};

export default StudentCourseCard;
