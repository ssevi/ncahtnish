import { Box, Container, Typography } from '@mui/material'

const SensitizationProgram = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom textAlign="center">
          Sensitization Programs
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary">
          Building awareness and understanding about assistive technologies
        </Typography>
      </Container>
    </Box>
  )
}

export default SensitizationProgram