import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Chip,
    Paper,
  } from '@mui/material'
  import {
    Email as EmailIcon,
    LinkedIn as LinkedInIcon,
    School as SchoolIcon,
    Science as ScienceIcon,
    Business as BusinessIcon,
  } from '@mui/icons-material'
  
  const Team = () => {
    const teamMembers = [
      {
        id: 1,
        name: "Dr. Rajesh Kumar",
        position: "Director & Principal Investigator",
        department: "Assistive Technology Research",
        bio: "Leading expert in assistive health technologies with over 15 years of experience in rehabilitation engineering and adaptive solutions.",
        email: "rajesh.kumar@ncahtnish.org",
        linkedin: "https://linkedin.com/in/rajeshkumar",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop&crop=face",
        expertise: ["Rehabilitation Engineering", "Neural Interfaces", "Research Leadership"],
        color: "rgba(16, 185, 129, 0.15)"
      },
      {
        id: 2,
        name: "Dr. Priya Sharma",
        position: "Senior Research Scientist",
        department: "Neural Interface Technology",
        bio: "Specialist in brain-computer interfaces and neural prosthetics, focusing on developing innovative solutions for motor disabilities.",
        email: "priya.sharma@ncahtnish.org",
        linkedin: "https://linkedin.com/in/priyasharma",
        image: "https://images.unsplash.com/photo-1594824111509-640e48028e91?w=600&h=400&fit=crop&crop=face",
        expertise: ["Brain-Computer Interface", "Neural Prosthetics", "Signal Processing"],
        color: "rgba(147, 51, 234, 0.15)"
      },
      {
        id: 3,
        name: "Mr. Anand Krishnan",
        position: "Lead Engineer",
        department: "Mechanical Design",
        bio: "Expert in mechanical design and prototyping of assistive devices, with a focus on prosthetics and mobility aids.",
        email: "anand.krishnan@ncahtnish.org",
        linkedin: "https://linkedin.com/in/anandkrishnan",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=face",
        expertise: ["Mechanical Design", "3D Printing", "Prosthetics"],
        color: "rgba(245, 158, 11, 0.15)"
      },
      {
        id: 4,
        name: "Ms. Sneha Menon",
        position: "Software Development Lead",
        department: "Digital Health Solutions",
        bio: "Full-stack developer specializing in accessible web applications and mobile health technologies for assistive care.",
        email: "sneha.menon@ncahtnish.org",
        linkedin: "https://linkedin.com/in/snehamenon",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=400&fit=crop&crop=face",
        expertise: ["Full-Stack Development", "Mobile Health", "Accessibility"],
        color: "rgba(236, 72, 153, 0.15)"
      },
      {
        id: 5,
        name: "Dr. Mohammed Ali",
        position: "Clinical Research Coordinator",
        department: "Clinical Studies",
        bio: "Experienced clinician coordinating research studies on assistive technology effectiveness and user experience.",
        email: "mohammed.ali@ncahtnish.org",
        linkedin: "https://linkedin.com/in/mohammedali",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop&crop=face",
        expertise: ["Clinical Research", "User Studies", "Healthcare"],
        color: "rgba(34, 197, 94, 0.15)"
      },
      {
        id: 6,
        name: "Ms. Kavya Nair",
        position: "UX/UI Designer",
        department: "User Experience",
        bio: "Passionate about creating inclusive and accessible user interfaces for assistive technology applications.",
        email: "kavya.nair@ncahtnish.org",
        linkedin: "https://linkedin.com/in/kavyanair",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=600&h=400&fit=crop&crop=face",
        expertise: ["UX Design", "Accessibility", "Human-Centered Design"],
        color: "rgba(168, 85, 247, 0.15)"
      },
      {
        id: 7,
        name: "Dr. Lakshmi Iyer",
        position: "Speech-Language Pathologist",
        department: "Communication Aids",
        bio: "Specialist in augmentative and alternative communication (AAC) technologies and speech therapy applications.",
        email: "lakshmi.iyer@ncahtnish.org",
        linkedin: "https://linkedin.com/in/lakshmiiyer",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop&crop=face",
        expertise: ["Speech Therapy", "AAC Technologies", "Communication Disorders"],
        color: "rgba(20, 184, 166, 0.15)"
      }
    ]
  
    const achievements = [
      { number: '7', label: 'Expert Team Members', color: 'rgba(16, 185, 129, 0.2)' },
      { number: '15+', label: 'Years Experience', color: 'rgba(147, 51, 234, 0.2)' },
      { number: '50+', label: 'Research Papers', color: 'rgba(245, 158, 11, 0.2)' },
      { number: '25+', label: 'Industry Partners', color: 'rgba(236, 72, 153, 0.2)' },
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
          {/* Background Pattern */}
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
            {[...Array(6)].map((_, i) => (
              <Box
                key={i}
                sx={{
                  position: 'absolute',
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  border: '2px solid currentColor',
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 80 + 10}%`,
                  animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
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
                Our Team
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  maxWidth: '600px',
                  mx: 'auto',
                  mb: 4,
                }}
              >
                Meet the dedicated professionals driving innovation in assistive health technologies
              </Typography>
  
              {/* Quick Stats */}
              <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
                {achievements.map((stat, index) => (
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
  
        {/* Team Members Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box textAlign="center" mb={6}>
            <Typography variant="h2" component="h2" gutterBottom color="text.primary">
              Our Expert Team
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
              A multidisciplinary team bringing together expertise from engineering, medicine, design, and technology
            </Typography>
          </Box>
  
          <Grid container spacing={4}>
            {teamMembers.map((member) => (
              <Grid item xs={12} sm={6} lg={4} key={member.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.4s ease',
                    overflow: 'hidden',
                    borderRadius: 3,
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    },
                    '&:hover .member-image': {
                      transform: 'scale(1.05)',
                    },
                    '&:hover .member-overlay': {
                      opacity: 1,
                    },
                  }}
                >
                  {/* Large Image Section */}
                  <Box
                    sx={{
                      position: 'relative',
                      height: 280,
                      overflow: 'hidden',
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="280"
                      image={member.image}
                      alt={member.name}
                      className="member-image"
                      sx={{
                        transition: 'transform 0.4s ease',
                        objectFit: 'cover',
                      }}
                      onError={(e) => {
                        e.target.src = `data:image/svg+xml;base64,${btoa(`
                          <svg width="600" height="280" xmlns="http://www.w3.org/2000/svg">
                            <rect width="600" height="280" fill="${member.color.replace('0.15', '0.3')}"/>
                            <text x="300" y="140" font-family="Arial" font-size="48" fill="#4b5563" text-anchor="middle" dominant-baseline="middle">
                              ${member.name.split(' ').map(n => n[0]).join('')}
                            </text>
                          </svg>
                        `)}`;
                      }}
                    />
                    
                    {/* Overlay with social icons */}
                    <Box
                      className="member-overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(135deg, ${member.color} 0%, rgba(0,0,0,0.3) 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                      }}
                    >
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <IconButton
                          href={`mailto:${member.email}`}
                          sx={{
                            bgcolor: 'rgba(255,255,255,0.9)',
                            color: 'primary.main',
                            '&:hover': {
                              bgcolor: 'white',
                              transform: 'scale(1.1)',
                            },
                          }}
                        >
                          <EmailIcon />
                        </IconButton>
                        <IconButton
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            bgcolor: 'rgba(255,255,255,0.9)',
                            color: 'primary.main',
                            '&:hover': {
                              bgcolor: 'white',
                              transform: 'scale(1.1)',
                            },
                          }}
                        >
                          <LinkedInIcon />
                        </IconButton>
                      </Box>
                    </Box>
  
                    {/* Department Badge */}
                    <Chip
                      label={member.department}
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        bgcolor: 'rgba(255,255,255,0.95)',
                        color: 'text.primary',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                      }}
                    />
                  </Box>
  
                  {/* Content Section */}
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 600, mb: 2 }}>
                      {member.position}
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.6 }}>
                      {member.bio}
                    </Typography>
                    
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold', mb: 1, display: 'block' }}>
                        Areas of Expertise:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                        {member.expertise.map((skill, index) => (
                          <Chip
                            key={index}
                            label={skill}
                            size="small"
                            sx={{
                              bgcolor: member.color,
                              color: 'text.primary',
                              fontSize: '0.7rem',
                              fontWeight: 500,
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
  
        {/* Join Our Team Section */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)',
            color: 'white',
            py: 8,
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
            <SchoolIcon sx={{ position: 'absolute', top: '20%', left: '10%', fontSize: 60, animation: 'float 8s ease-in-out infinite' }} />
            <ScienceIcon sx={{ position: 'absolute', top: '30%', right: '15%', fontSize: 70, animation: 'float 10s ease-in-out infinite reverse' }} />
            <BusinessIcon sx={{ position: 'absolute', bottom: '20%', left: '20%', fontSize: 50, animation: 'float 7s ease-in-out infinite' }} />
          </Box>
  
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <Typography variant="h2" component="h2" gutterBottom>
              Join Our Team
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)', mb: 4, maxWidth: '600px', mx: 'auto' }}>
              We're always looking for passionate individuals to join our mission of advancing assistive health technologies
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
              <Box
                component="a"
                href="mailto:careers@ncahtnish.org"
                sx={{
                  display: 'inline-block',
                  bgcolor: 'white',
                  color: 'primary.main',
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                  },
                }}
              >
                View Open Positions
              </Box>
              <Box
                component="a"
                href="/internship"
                sx={{
                  display: 'inline-block',
                  border: '2px solid rgba(255,255,255,0.5)',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Internship Program
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    )
  }
  
  export default Team