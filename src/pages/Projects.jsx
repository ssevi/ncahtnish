import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  IconButton,
  Paper,
  Tabs,
  Tab,
  Avatar,
  AvatarGroup,
} from '@mui/material'
import {
  CalendarToday as CalendarIcon,
  People as PeopleIcon,
  Launch as LaunchIcon,
  FilterList as FilterIcon,
  Science as ScienceIcon,
  Engineering as EngineeringIcon,
  Psychology as PsychologyIcon,
  Computer as ComputerIcon,
  Accessibility as AccessibilityIcon,
  School as SchoolIcon,
} from '@mui/icons-material'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const projects = [
    {
      id: 1,
      title: "iATE - Integrated Assistive Technology Environment",
      category: "Software Platform",
      status: "Active",
      duration: "2023 - 2025",
      team: ["Ms. Sneha Menon", "Dr. Rajesh Kumar", "Ms. Kavya Nair"],
      teamAvatars: [
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=50&h=50&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=50&h=50&fit=crop&crop=face"
      ],
      description: "A comprehensive software platform that integrates multiple assistive technologies into a unified environment, providing seamless access and control for users with disabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "IoT Integration", "Machine Learning", "Accessibility APIs"],
      funding: "₹30,00,000",
      partner: "Microsoft India, Assistive Technology Partners",
      progress: 75,
      color: "rgba(16, 185, 129, 0.15)"
    },
    {
      id: 2,
      title: "CP Chair - Adaptive Seating Solution",
      category: "Mobility Aids",
      status: "Active",
      duration: "2024 - 2025",
      team: ["Mr. Anand Krishnan", "Dr. Mohammed Ali", "Dr. Rajesh Kumar"],
      teamAvatars: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=50&h=50&fit=crop&crop=face"
      ],
      description: "Specially designed adaptive seating solution for children and adults with cerebral palsy, featuring customizable support systems and ergonomic design for improved posture and comfort.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      technologies: ["Ergonomic Design", "3D Printing", "Biomechanics", "Custom Fabrication"],
      funding: "₹18,00,000",
      partner: "Mobility India, Local NGOs",
      progress: 60,
      color: "rgba(147, 51, 234, 0.15)"
    },
    {
      id: 3,
      title: "Vibrating Alert System",
      category: "Communication",
      status: "Completed",
      duration: "2022 - 2023",
      team: ["Dr. Priya Sharma", "Ms. Sneha Menon", "Dr. Lakshmi Iyer"],
      teamAvatars: [
        "https://images.unsplash.com/photo-1594824111509-640e48028e91?w=50&h=50&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=50&h=50&fit=crop&crop=face"
      ],
      description: "A wearable vibrating alert system for deaf and hard-of-hearing individuals, providing tactile notifications for important sounds, calls, and environmental alerts.",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&h=400&fit=crop",
      technologies: ["Wearable Technology", "Vibration Motors", "Bluetooth", "Mobile App"],
      funding: "₹12,00,000",
      partner: "All India Institute of Speech and Hearing",
      progress: 100,
      color: "rgba(245, 158, 11, 0.15)"
    },
    {
      id: 4,
      title: "AT Device Configurator",
      category: "Software Platform",
      status: "Active",
      duration: "2023 - 2024",
      team: ["Ms. Sneha Menon", "Ms. Kavya Nair", "Dr. Rajesh Kumar"],
      teamAvatars: [
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=50&h=50&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=50&h=50&fit=crop&crop=face"
      ],
      description: "An intelligent software tool that helps clinicians and users configure assistive technology devices based on individual needs, preferences, and capabilities through guided assessment.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["AI Decision Support", "Web Application", "Database", "User Assessment"],
      funding: "₹22,00,000",
      partner: "Rehabilitation Council of India, NIEPMD",
      progress: 85,
      color: "rgba(236, 72, 153, 0.15)"
    },
    {
      id: 5,
      title: "Smart Eye Gaze Communication System",
      category: "Communication",
      status: "Active",
      duration: "2024 - 2026",
      team: ["Dr. Priya Sharma", "Ms. Kavya Nair", "Dr. Lakshmi Iyer"],
      teamAvatars: [
        "https://images.unsplash.com/photo-1594824111509-640e48028e91?w=50&h=50&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=50&h=50&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=50&h=50&fit=crop&crop=face"
      ],
      description: "Advanced eye-tracking system for individuals with severe motor disabilities, enabling communication and computer control through eye movements and gaze patterns.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
      technologies: ["Eye Tracking", "Computer Vision", "Machine Learning", "Speech Synthesis"],
      funding: "₹25,00,000",
      partner: "IIT Madras, L.V. Prasad Eye Institute",
      progress: 40,
      color: "rgba(34, 197, 94, 0.15)"
    },
    {
      id: 6,
      title: "Accessible Mobile Learning Platform",
      category: "Education",
      status: "Completed",
      duration: "2021 - 2023",
      team: ["Ms. Sneha Menon", "Dr. Lakshmi Iyer", "Ms. Kavya Nair"],
      teamAvatars: [
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=50&h=50&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=50&h=50&fit=crop&crop=face"
      ],
      description: "Mobile learning platform designed with comprehensive accessibility features for students with disabilities, including screen reader support, voice navigation, and adaptive content.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      technologies: ["React Native", "Accessibility APIs", "Text-to-Speech", "Offline Learning"],
      funding: "₹15,00,000",
      partner: "Department of Empowerment of PwD, Sarva Shiksha Abhiyan",
      progress: 100,
      color: "rgba(168, 85, 247, 0.15)"
    },
    {
      id: 7,
      title: "Prosthetic Hand Control Interface",
      category: "Prosthetics",
      status: "Active",
      duration: "2023 - 2025",
      team: ["Mr. Anand Krishnan", "Dr. Priya Sharma", "Dr. Rajesh Kumar"],
      teamAvatars: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1594824111509-640e48028e91?w=50&h=50&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=50&h=50&fit=crop&crop=face"
      ],
      description: "Advanced control interface for prosthetic hands using EMG signals and machine learning, providing intuitive and precise control for upper limb prostheses.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      technologies: ["EMG Sensors", "Signal Processing", "Machine Learning", "3D Printing"],
      funding: "₹28,00,000",
      partner: "BMVSS, IIT Delhi",
      progress: 65,
      color: "rgba(20, 184, 166, 0.15)"
    },
    {
      id: 8,
      title: "Voice Banking and Restoration System",
      category: "Communication",
      status: "Active",
      duration: "2024 - 2025",
      team: ["Dr. Lakshmi Iyer", "Dr. Priya Sharma", "Ms. Sneha Menon"],
      teamAvatars: [
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=50&h=50&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1594824111509-640e48028e91?w=50&h=50&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face"
      ],
      description: "Voice banking system that allows individuals to record and preserve their natural voice before losing speech ability, with AI-powered voice restoration technology.",
      image: "https://images.unsplash.com/photo-1590602846989-e99596d2a6ee?w=600&h=400&fit=crop",
      technologies: ["Deep Learning", "Voice Synthesis", "Audio Processing", "Cloud Storage"],
      funding: "₹20,00,000",
      partner: "AIISH, Indian Speech and Hearing Association",
      progress: 70,
      color: "rgba(59, 130, 246, 0.15)"
    }
  ]

  const categories = [
    { name: 'All', icon: <FilterIcon />, count: projects.length },
    { name: 'Software Platform', icon: <ComputerIcon />, count: projects.filter(p => p.category === 'Software Platform').length },
    { name: 'Communication', icon: <PsychologyIcon />, count: projects.filter(p => p.category === 'Communication').length },
    { name: 'Mobility Aids', icon: <AccessibilityIcon />, count: projects.filter(p => p.category === 'Mobility Aids').length },
    { name: 'Prosthetics', icon: <EngineeringIcon />, count: projects.filter(p => p.category === 'Prosthetics').length },
    { name: 'Education', icon: <SchoolIcon />, count: projects.filter(p => p.category === 'Education').length }
  ]

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const stats = [
    { number: projects.length, label: 'Total Projects', color: 'rgba(16, 185, 129, 0.2)' },
    { number: projects.filter(p => p.status === 'Active').length, label: 'Active Projects', color: 'rgba(245, 158, 11, 0.2)' },
    { number: projects.filter(p => p.status === 'Completed').length, label: 'Completed', color: 'rgba(34, 197, 94, 0.2)' },
    { number: '₹1.25Cr', label: 'Total Funding', color: 'rgba(147, 51, 234, 0.2)' },
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
          {categories.slice(1).map((category, i) => {
            const Icon = category.icon.type;
            return (
              <Icon
                key={i}
                sx={{
                  position: 'absolute',
                  fontSize: { xs: 40, md: 60 },
                  top: `${20 + (i * 15)}%`,
                  left: `${10 + (i * 12)}%`,
                  animation: `float ${8 + i}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            );
          })}
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
              Our Projects
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
              Innovative research and development initiatives in assistive health technologies
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

      {/* Filter Section */}
      <Box sx={{ bgcolor: 'background.default', py: 3, borderBottom: 1, borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              Filter Projects
            </Typography>
            <Chip 
              label={`${filteredProjects.length} ${filteredProjects.length === 1 ? 'Project' : 'Projects'}`}
              color="primary"
              variant="outlined"
            />
          </Box>
          
          <Box sx={{ overflowX: 'auto' }}>
            <Tabs
              value={activeCategory}
              onChange={(e, newValue) => setActiveCategory(newValue)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTab-root': {
                  minWidth: 'auto',
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  mr: 1,
                  textTransform: 'none',
                  fontWeight: 600,
                  '&.Mui-selected': {
                    bgcolor: 'primary.main',
                    color: 'white',
                  },
                },
                '& .MuiTabs-indicator': {
                  display: 'none',
                },
              }}
            >
              {categories.map((category) => {
                const Icon = category.icon.type;
                return (
                  <Tab
                    key={category.name}
                    value={category.name}
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Icon sx={{ fontSize: 20 }} />
                        {category.name}
                        <Chip 
                          label={category.count} 
                          size="small" 
                          sx={{ 
                            height: 20, 
                            fontSize: '0.7rem',
                            bgcolor: activeCategory === category.name ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'
                          }} 
                        />
                      </Box>
                    }
                  />
                );
              })}
            </Tabs>
          </Box>
        </Container>
      </Box>

      {/* Projects Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {filteredProjects.map((project) => (
            <Grid item xs={12} md={6} key={project.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.4s ease',
                  overflow: 'hidden',
                  borderRadius: 3,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  },
                  '&:hover .project-image': {
                    transform: 'scale(1.05)',
                  },
                  '&:hover .project-overlay': {
                    opacity: 1,
                  },
                }}
              >
                {/* Project Image */}
                <Box
                  sx={{
                    position: 'relative',
                    height: 240,
                    overflow: 'hidden',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={project.image}
                    alt={project.title}
                    className="project-image"
                    sx={{
                      transition: 'transform 0.4s ease',
                      objectFit: 'cover',
                    }}
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg width="600" height="240" xmlns="http://www.w3.org/2000/svg">
                          <rect width="600" height="240" fill="${project.color.replace('0.15', '0.3')}"/>
                          <text x="300" y="120" font-family="Arial" font-size="24" fill="#4b5563" text-anchor="middle" dominant-baseline="middle">
                            ${project.title}
                          </text>
                        </svg>
                      `)}`;
                    }}
                  />
                  
                  {/* Overlay */}
                  <Box
                    className="project-overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, ${project.color} 0%, rgba(0,0,0,0.4) 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                    }}
                  >
                    <Button
                      variant="contained"
                      endIcon={<LaunchIcon />}
                      sx={{
                        bgcolor: 'rgba(255,255,255,0.9)',
                        color: 'primary.main',
                        '&:hover': {
                          bgcolor: 'white',
                        },
                      }}
                    >
                      View Details
                    </Button>
                  </Box>

                  {/* Status Badge */}
                  <Chip
                    label={project.status}
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      bgcolor: project.status === 'Active' 
                        ? 'rgba(34, 197, 94, 0.9)' 
                        : project.status === 'Completed'
                        ? 'rgba(59, 130, 246, 0.9)'
                        : 'rgba(245, 158, 11, 0.9)',
                      color: 'white',
                      fontWeight: 600,
                    }}
                  />

                  {/* Category Badge */}
                  <Chip
                    label={project.category}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      bgcolor: 'rgba(255,255,255,0.95)',
                      color: 'text.primary',
                      fontWeight: 600,
                    }}
                  />
                </Box>

                {/* Content Section */}
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                    {project.title}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.6 }}>
                    {project.description}
                  </Typography>

                  {/* Technologies */}
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold', mb: 1, display: 'block' }}>
                      Technologies:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                      {project.technologies.map((tech, index) => (
                        <Chip
                          key={index}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: project.color,
                            color: 'text.primary',
                            fontSize: '0.7rem',
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  {/* Project Details */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <CalendarIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                      <Typography variant="caption" color="text.secondary">
                        {project.duration}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                        Funding:
                      </Typography>
                      <Typography variant="caption" color="primary" sx={{ fontWeight: 'bold' }}>
                        {project.funding}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Team */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold', display: 'block' }}>
                        Team:
                      </Typography>
                      <AvatarGroup max={3} sx={{ mt: 0.5 }}>
                        {project.teamAvatars.map((avatar, index) => (
                          <Avatar
                            key={index}
                            src={avatar}
                            sx={{ width: 32, height: 32 }}
                            title={project.team[index]}
                          />
                        ))}
                      </AvatarGroup>
                    </Box>

                    {/* Progress */}
                    {project.status === 'Active' && (
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                          Progress
                        </Typography>
                        <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                          {project.progress}%
                        </Typography>
                      </Box>
                    )}
                  </Box>

                  {/* Partners */}
                  {project.partner && (
                    <Box sx={{ mt: 2, pt: 2, borderTop: 1, borderColor: 'divider' }}>
                      <Typography variant="caption" color="text.secondary">
                        <strong>Partners:</strong> {project.partner}
                      </Typography>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
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
          <ScienceIcon sx={{ position: 'absolute', top: '20%', left: '10%', fontSize: 60, animation: 'float 8s ease-in-out infinite' }} />
          <EngineeringIcon sx={{ position: 'absolute', top: '30%', right: '15%', fontSize: 70, animation: 'float 10s ease-in-out infinite reverse' }} />
          <ComputerIcon sx={{ position: 'absolute', bottom: '20%', left: '20%', fontSize: 50, animation: 'float 7s ease-in-out infinite' }} />
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Typography variant="h2" component="h2" gutterBottom>
            Collaborate With Us
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)', mb: 4, maxWidth: '600px', mx: 'auto' }}>
            Interested in partnering with us or proposing a new project? We're always open to innovative collaborations.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
            <Box
              component="a"
              href="mailto:projects@ncahtnish.org"
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
              Propose a Project
            </Box>
            <Box
              component="a"
              href="mailto:partnerships@ncahtnish.org"
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
              Partnership Opportunities
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Projects