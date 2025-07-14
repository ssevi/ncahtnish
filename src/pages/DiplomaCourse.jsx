import { Box, Container, Typography } from '@mui/material'

const DiplomaCourse = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom textAlign="center">
          Diploma in Assistive Technology
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary">
          Comprehensive one-year program in assistive health technologies
        </Typography>
      </Container>
    </Box>
  )
}

export default DiplomaCourse