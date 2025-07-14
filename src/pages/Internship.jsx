import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Chip,
    Button,
    Paper,
    Stepper,
    Step,
    StepLabel,
    StepContent,
    Avatar,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Divider,
  } from '@mui/material'
  import {
    Schedule as ScheduleIcon,
    People as PeopleIcon,
    School as SchoolIcon,
    CheckCircle as CheckCircleIcon,
    Engineering as EngineeringIcon,
    Assignment as AssignmentIcon,
    Psychology as PsychologyIcon,
    Science as ScienceIcon,
    Email as EmailIcon,
    Phone as PhoneIcon,
    Timeline as TimelineIcon,
    Build as BuildIcon,
  } from '@mui/icons-material'
  
  const Internship = () => {
    const programPhases = [
      {
        phase: "Phase 1",
        duration: "First 2 weeks",
        title: "Orientation & Clinical Exposure",
        description: "Comprehensive orientation at NISH with clinical exposure across various departments",
        activities: [
          "Introduction to NISH and assistive technology landscape",
          "Clinical exposure in Occupational Therapy department",
          "Hands-on experience in Physiotherapy settings",
          "Observation in Neurodevelopmental Sciences",
          "Interactive sessions with healthcare professionals",
          "Understanding challenges faced by persons with disabilities"
        ],
        color: "rgba(16, 185, 129, 0.15)"
      },
      {
        phase: "Phase 2", 
        duration: "Remaining 2.5 months",
        title: "Project Development",
        description: "Problem identification, planning, and development of innovative assistive technology solutions",
        activities: [
          "Real-life problem identification through clinical observations",
          "Project planning and feasibility analysis",
          "Literature review and technology research",
          "Prototype design and development",
          "Creation of DIY assistive solutions",
          "Testing and refinement of developed solutions",
          "Documentation and final project submission"
        ],
        color: "rgba(147, 51, 234, 0.15)"
      }
    ]
  
    const firstBatch = [
      {
        sl: 1,
        name: "Varsha B R",
        college: "TKM College of Engineering",
        department: "ECE",
        email: "vbr170305@gmail.com",
        phone: "7736707993"
      },
      {
        sl: 2,
        name: "M Sneha Suresh",
        college: "TKM College of Engineering",
        department: "ECE", 
        email: "snehasureshnambiar@gmail.com",
        phone: "8157865619"
      },
      {
        sl: 3,
        name: "Gouri Nandana P S",
        college: "TKM College of Engineering",
        department: "ECE",
        email: "gourinandanaps27@gmail.com", 
        phone: "9567243660"
      },
      {
        sl: 4,
        name: "Devika Sajeevan",
        college: "TKM College of Engineering",
        department: "ECE",
        email: "sajedevika362@gmail.com",
        phone: "8089481345"
      },
      {
        sl: 5,
        name: "Abhinav S",
        college: "CET Trivandrum",
        department: "Applied Electronics and Instrumentation",
        email: "abhinavambadisan@gmail.com",
        phone: "9497094541"
      }
    ]
  
    const secondBatch = [
      {
        sl: 1,
        name: "Fathima Nusaiba K P",
        college: "TKM College of Engineering",
        department: "ECE",
        email: "nusaibakp884816@gmail.com",
        phone: "8848164570"
      },
      {
        sl: 2,
        name: "Ashin S Shaji", 
        college: "TKM College of Engineering",
        department: "ECE",
        email: "ashinsshaji@gmail.com",
        phone: "7306298915"
      },
      {
        sl: 3,
        name: "Adhya Raj B",
        college: "TKM College of Engineering", 
        department: "ECE",
        email: "adhyabraj@gmail.com",
        phone: "8590691330"
      },
      {
        sl: 4,
        name: "Ajish",
        college: "TKM College of Engineering",
        department: "ECE", 
        email: "ajishtm7@gmail.com",
        phone: "8590382528"
      }
    ]
  
    const stats = [
      { number: '9', label: 'Total Interns 2025', color: 'rgba(16, 185, 129, 0.2)' },
      { number: '3', label: 'Months Duration', color: 'rgba(147, 51, 234, 0.2)' },
      { number: '2', label: 'Active Batches', color: 'rgba(245, 158, 11, 0.2)' },
      { number: '2', label: 'Partner Colleges', color: 'rgba(34, 197, 94, 0.2)' },
    ]
  
    const achievements = [
      {
        icon: <PsychologyIcon />,
        title: "Clinical Exposure",
        description: "Comprehensive exposure to OT, PT, and Neurodevelopmental Sciences departments"
      },
      {
        icon: <BuildIcon />,
        title: "Hands-on Development", 
        description: "Development of DIY assistive devices tailored for specific user needs"
      },
      {
        icon: <ScienceIcon />,
        title: "Problem-Based Learning",
        description: "Real-world problem identification through direct clinical observations"
      },
      {
        icon: <EngineeringIcon />,
        title: "Innovation Focus",
        description: "Emphasis on innovative technology-based solutions for accessibility"
      }
    ]
  
    return (
      <Box>
        {/* Header Section */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)',
            color: 'white',
            py: { xs: 8, md: 12 },
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background Elements */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.1,
              pointerEvents: 'none',
            }}
          >
            <SchoolIcon sx={{ position: 'absolute', top: '15%', left: '8%', fontSize: 60, animation: 'float 8s ease-in-out infinite' }} />
            <EngineeringIcon sx={{ position: 'absolute', top: '25%', right: '12%', fontSize: 70, animation: 'float 10s ease-in-out infinite reverse' }} />
            <ScienceIcon sx={{ position: 'absolute', bottom: '20%', left: '15%', fontSize: 50, animation: 'float 7s ease-in-out infinite' }} />
            <BuildIcon sx={{ position: 'absolute', bottom: '30%', right: '8%', fontSize: 55, animation: 'float 9s ease-in-out infinite reverse' }} />
          </Box>
  
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            <Box textAlign="center">
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 'bold',
                  mb: 3,
                }}
              >
                Internship Program 2025
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  maxWidth: '800px',
                  mx: 'auto',
                  mb: 2,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                }}
              >
                Assistive Technology Development
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  maxWidth: '700px',
                  mx: 'auto',
                  mb: 4,
                }}
              >
                A structured 3-month program providing engineering students with practical clinical exposure and hands-on experience in developing innovative assistive technology solutions
              </Typography>
  
              {/* Quick Stats */}
              <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
                {stats.map((stat, index) => (
                  <Grid item xs={6} sm={3} key={index}>
                    <Paper
                      sx={{
                        p: 3,
                        textAlign: 'center',
                        background: `linear-gradient(135deg, ${stat.color} 0%, rgba(255,255,255,0.1) 100%)`,
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.2)',
                      }}
                    >
                      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                        {stat.number}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                        {stat.label}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </Box>
  
        {/* Program Structure */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box textAlign="center" mb={6}>
            <Typography variant="h2" component="h2" gutterBottom color="text.primary">
              Program Structure
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
              A carefully designed two-phase program combining clinical exposure with hands-on project development
            </Typography>
          </Box>
  
          <Grid container spacing={4}>
            {programPhases.map((phase, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                    },
                    background: `linear-gradient(135deg, ${phase.color} 0%, rgba(255,255,255,1) 100%)`,
                    border: `1px solid ${phase.color.replace('0.15', '0.3')}`,
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    {/* Header */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Avatar
                        sx={{
                          bgcolor: phase.color.replace('0.15', '0.3'),
                          color: 'primary.main',
                          mr: 2,
                          width: 60,
                          height: 60,
                          fontSize: '1.2rem',
                          fontWeight: 'bold',
                        }}
                      >
                        {phase.phase.split(' ')[1]}
                      </Avatar>
                      <Box>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 1 }}>
                          {phase.title}
                        </Typography>
                        <Chip label={phase.duration} color="primary" />
                      </Box>
                    </Box>
  
                    {/* Description */}
                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.6, mb: 3 }}>
                      {phase.description}
                    </Typography>
  
                    {/* Activities */}
                    <Box>
                      <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Key Activities:
                      </Typography>
                      <List dense>
                        {phase.activities.map((activity, actIndex) => (
                          <ListItem key={actIndex} sx={{ py: 0.5, px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 24 }}>
                              <CheckCircleIcon sx={{ fontSize: 16, color: 'primary.main' }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary={activity} 
                              primaryTypographyProps={{ variant: 'body2' }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
  
        {/* Current Batches */}
        <Box sx={{ bgcolor: 'background.default', py: 8 }}>
          <Container maxWidth="lg">
            <Box textAlign="center" mb={6}>
              <Typography variant="h2" component="h2" gutterBottom color="text.primary">
                Current Interns - 2025
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
                Meet our talented engineering students currently participating in the internship program
              </Typography>
            </Box>
  
            {/* First Batch */}
            <Paper sx={{ mb: 4, overflow: 'hidden' }}>
              <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  First Batch - June 2025
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  5 Students • TKM College of Engineering (4), CET Trivandrum (1)
                </Typography>
              </Box>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 'bold' }}>Sl No</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>College</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Department</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Phone</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {firstBatch.map((student) => (
                      <TableRow key={student.sl} hover>
                        <TableCell>{student.sl}</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>{student.name}</TableCell>
                        <TableCell>{student.college}</TableCell>
                        <TableCell>{student.department}</TableCell>
                        <TableCell>{student.email}</TableCell>
                        <TableCell>{student.phone}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
  
            {/* Second Batch */}
            <Paper sx={{ overflow: 'hidden' }}>
              <Box sx={{ bgcolor: 'secondary.main', color: 'white', p: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  Second Batch - Late June 2025
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  4 Students • All from TKM College of Engineering
                </Typography>
              </Box>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 'bold' }}>Sl No</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>College</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Department</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Phone</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {secondBatch.map((student) => (
                      <TableRow key={student.sl} hover>
                        <TableCell>{student.sl}</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>{student.name}</TableCell>
                        <TableCell>{student.college}</TableCell>
                        <TableCell>{student.department}</TableCell>
                        <TableCell>{student.email}</TableCell>
                        <TableCell>{student.phone}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Container>
        </Box>
  
        {/* Program Highlights */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box textAlign="center" mb={6}>
            <Typography variant="h2" component="h2" gutterBottom color="text.primary">
              Program Highlights
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
              Key features that make our internship program unique and impactful
            </Typography>
          </Box>
  
          <Grid container spacing={4}>
            {achievements.map((achievement, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 4,
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      width: 64,
                      height: 64,
                      mx: 'auto',
                      mb: 2,
                      bgcolor: 'primary.main',
                    }}
                  >
                    {achievement.icon}
                  </Avatar>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {achievement.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {achievement.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
  
        {/* Current Progress */}
        <Box sx={{ bgcolor: 'background.default', py: 8 }}>
          <Container maxWidth="lg">
            <Box textAlign="center" mb={6}>
              <Typography variant="h2" component="h2" gutterBottom color="text.primary">
                Current Progress & Activities
              </Typography>
            </Box>
  
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card sx={{ p: 4, height: '100%' }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    ✅ Completed Activities
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="success" />
                      </ListItemIcon>
                      <ListItemText primary="Introduction to various clinical departments at NISH" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="success" />
                      </ListItemIcon>
                      <ListItemText primary="Clinical exposure in Occupational Therapy, Physiotherapy, and Neurodevelopmental Sciences" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="success" />
                      </ListItemIcon>
                      <ListItemText primary="Interactive sessions with healthcare professionals" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="success" />
                      </ListItemIcon>
                      <ListItemText primary="Understanding day-to-day challenges faced by individuals with disabilities" />
                    </ListItem>
                  </List>
                </Card>
              </Grid>
  
              <Grid item xs={12} md={6}>
                <Card sx={{ p: 4, height: '100%' }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'warning.main' }}>
                    🚧 In Progress
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <TimelineIcon color="warning" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="DIY Assistive Device Development" 
                        secondary="Students are developing simple assistive devices tailored for children or individuals with specific needs"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <BuildIcon color="warning" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Project Prototyping" 
                        secondary="Active participation in prototype development and testing phases"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <AssignmentIcon color="warning" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Final Project Documentation" 
                        secondary="Preparation of final outcomes and project reports"
                      />
                    </ListItem>
                  </List>
  
                  <Box sx={{ mt: 3, p: 2, bgcolor: 'warning.light', borderRadius: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      📅 Expected Completion: End of internship period (September 2025)
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
  
        {/* Future Applications */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box textAlign="center" mb={6}>
            <Typography variant="h2" component="h2" gutterBottom color="text.primary">
              Future Applications
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
              Interested in joining our next internship batch? Here's how to apply
            </Typography>
          </Box>
  
          <Paper sx={{ p: 6, textAlign: 'center' }}>
            <EngineeringIcon sx={{ fontSize: 80, color: 'primary.main', mb: 3 }} />
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              Applications for 2026 Opening Soon
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              We'll be accepting applications for our next internship batch in early 2026. 
              Stay tuned for announcements and application guidelines.
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center', mt: 4 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<EmailIcon />}
                href="mailto:internships@ncahtnish.org"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 'bold',
                }}
              >
                Get Notified
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="mailto:info@ncahtnish.org"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 'bold',
                }}
              >
                Ask Questions
              </Button>
            </Box>
  
            <Box sx={{ mt: 4, p: 3, bgcolor: 'primary.light', borderRadius: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                Eligibility Requirements:
              </Typography>
              <Typography variant="body2">
                • Engineering students (preferably ECE, Applied Electronics, or related fields)<br/>
                • Strong interest in assistive technology and healthcare<br/>
                • Commitment to complete the full 3-month program<br/>
                • Good academic standing and communication skills
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    )
  }
  
  export default Internship