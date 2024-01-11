import { Modal, Box, Typography, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  boxShadow: 24,
  p: 4,
  color: '#404040'
};

const CourseDetailsModal = ({ course, isOpen, onClose }) => {
  if (!course) return null;

  const price = course.price ? course.price.toString() + ' ETH' : 'Not Available';
  const startDate = course.beginDate ? new Date(Number(course.beginDate) * 1000).toLocaleDateString() : 'Not Available';
  const endDate = course.endDate ? new Date(Number(course.endDate) * 1000).toLocaleDateString() : 'Not Available';

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="course-details-title"
      aria-describedby="course-details-description"
    >
      <Box sx={style}>
        <Typography id="course-details-title" variant="h6" component="h2" color="primary" sx={{ textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
          { course.name }
        </Typography>
        <Typography id="course-details-description" sx={{ mt: 2 }}>
          { course.description }
        </Typography>
        <Typography sx={{ mt: 2 }}>
            <span style={{ fontWeight: 'bold' }}>Price:</span> {price}
        </Typography>
        <Typography>
        <span style={{ fontWeight: 'bold' }}>Start Date:</span>  {startDate}
        </Typography>
        <Typography>
        <span style={{ fontWeight: 'bold' }}>End Date:</span>  {endDate}
        </Typography>
        <Box align="right">
            <Button onClick={onClose} sx={{ mt: 2 }} textAlign="right">Close</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CourseDetailsModal;
