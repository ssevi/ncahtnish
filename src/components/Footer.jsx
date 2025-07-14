import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    IconButton,
  } from '@mui/material'
  import {
    GitHub as GitHubIcon,
    Email as EmailIcon,
    Phone as PhoneIcon,
    LocationOn as LocationIcon,
  } from '@mui/icons-material'
  
  const Footer = () => {
    return (
      <Box
        component="footer"
        sx={{
          bgcolor: 'grey.900',
          color: 'white',
          py: 6,
          mt: 'auto',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Organization Info */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                NCAHT NISH
              </Typography>
              <Typography variant="body2" color="grey.300" paragraph>
                National Centre for Assistive Health Technologies at National Institute for Speech and Hearing
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <LocationIcon sx={{ mr: 1, fontSize: 16 }} />
                <Typography variant="body2" color="grey.300">
                  Thiruvananthapuram, Kerala, India
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <PhoneIcon sx={{ mr: 1, fontSize: 16 }} />
                <Typography variant="body2" color="grey.300">
                  +91 471 2444200
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ mr: 1, fontSize: 16 }} />
                <Typography variant="body2" color="grey.300">
                  info@ncahtnish.org
                </Typography>
              </Box>
            </Grid>
  
            {/* Quick Links */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link
                  href="/team"
                  color="grey.300"
                  underline="hover"
                  sx={{ '&:hover': { color: 'white' } }}
                >
                  Our Team
                </Link>
                <Link
                  href="/projects"
                  color="grey.300"
                  underline="hover"
                  sx={{ '&:hover': { color: 'white' } }}
                >
                  Projects
                </Link>
                <Link
                  href="/internship"
                  color="grey.300"
                  underline="hover"
                  sx={{ '&:hover': { color: 'white' } }}
                >
                  Internship Program
                </Link>
                <Link
                  href="/diploma-course"
                  color="grey.300"
                  underline="hover"
                  sx={{ '&:hover': { color: 'white' } }}
                >
                  Diploma Course
                </Link>
                <Link
                  href="/at-course"
                  color="grey.300"
                  underline="hover"
                  sx={{ '&:hover': { color: 'white' } }}
                >
                  AT Course
                </Link>
              </Box>
            </Grid>
  
            {/* Social Links */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Connect With Us
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <IconButton
                  component="a"
                  href="https://github.com/ssevi"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'grey.300',
                    '&:hover': { color: 'white' },
                  }}
                >
                  <GitHubIcon />
                </IconButton>
              </Box>
              <Typography variant="body2" color="grey.300">
                Empowering lives through innovative assistive health technologies
              </Typography>
            </Grid>
          </Grid>
  
          <Box
            sx={{
              borderTop: '1px solid',
              borderColor: 'grey.800',
              mt: 4,
              pt: 3,
              textAlign: 'center',
            }}
          >
            <Typography variant="body2" color="grey.300">
              © {new Date().getFullYear()} NCAHT NISH. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    )
  }
  
  export default Footer;