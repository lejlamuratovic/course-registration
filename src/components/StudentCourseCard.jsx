import React from "react";
import { Card, CardContent, Typography, Chip, Grid } from "@mui/material";

const StudentCourseCard = ({ course }) => {
    const getStatusColor = (statusIndex) => {
        switch (statusIndex) {
            case 0: // Enrolled
                return "orange";
            case 1: // Completed
                return "green";
            case 2: // Failed
                return "red";
            default:
                return "default";
        }
    };

    const statusLabels = ["Enrolled", "Completed", "Failed"];

    return (
        <Card sx = {{ }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {course.course.name}
                </Typography>
                <Chip
                    label={statusLabels[course.status] || "Unknown"}
                    sx={{
                        backgroundColor: getStatusColor(course.status),
                        color: "white",
                        marginTop: "10px",
                    }}
                />
                <Grid
                    container
                    justifyContent="space-evenly"
                    alignItems="flex-end"
                    sx={{ marginTop: "10px" }}
                >
                    <Grid item>
                        <Typography color="text.secondary"> startDate </Typography>
                    </Grid>
                    <Grid item>
                        <Typography color="text.secondary"> endDate </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default StudentCourseCard;
