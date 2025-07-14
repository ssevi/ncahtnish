import { Box, Container, Typography } from '@mui/material'

const ATCourse = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom textAlign="center">
          Assistive Technology Courses
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary">
          Professional training programs in assistive technology
        </Typography>
      </Container>
    </Box>
  )
}

export default ATCourse