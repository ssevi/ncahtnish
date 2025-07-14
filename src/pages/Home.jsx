import { Link } from 'react-router-dom'
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  Avatar,
} from '@mui/material'
import {
  ArrowForward as ArrowForwardIcon,
  People as PeopleIcon,
  MenuBook as BookIcon,
  Work as WorkIcon,
  EmojiEvents as AwardIcon,
  Favorite as HeartIcon,
  Lightbulb as LightbulbIcon,
} from '@mui/icons-material'

const Home = () => {
  const features = [
    {
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      title: "Expert Team",
      description: "Dedicated professionals working on cutting-edge assistive technologies",
      link: "/team"
    },
    {
      icon: <LightbulbIcon sx={{ fontSize: 40 }} />,
      title: "Innovative Projects",
      description: "Research and development projects focused on assistive health technologies",
      link: "/projects"
    },
    {
      icon: <WorkIcon sx={{ fontSize: 40 }} />,
      title: "Internship Program",
      description: "Hands-on learning opportunities for aspiring professionals",
      link: "/internship"
    },
    {
      icon: <BookIcon sx={{ fontSize: 40 }} />,
      title: "Diploma Course",
      description: "Comprehensive education in assistive technology and rehabilitation",
      link: "/diploma-course"
    },
    {
      icon: <HeartIcon sx={{ fontSize: 40 }} />,
      title: "Sensitization Program",
      description: "Awareness programs to promote inclusive technology adoption",
      link: "/sensitization-program"
    },
    {
      icon: <AwardIcon sx={{ fontSize: 40 }} />,
      title: "AT Course",
      description: "Specialized training in assistive technology applications",
      link: "/at-course"
    }
  ]

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)',
          color: 'white',
          py: { xs: 8, md: 16 },
          position: 'relative',
          overflow: 'hidden',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Complex Background Patterns */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
          }}
        >
          {/* Flowing Blob Shapes */}
          <Box
            sx={{
              position: 'absolute',
              top: '-10%',
              right: '-10%',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(59, 130, 246, 0.08) 50%, transparent 100%)',
              borderRadius: '50% 40% 60% 30%',
              animation: 'morphBlob 20s ease-in-out infinite',
              '@keyframes morphBlob': {
                '0%, 100%': { borderRadius: '50% 40% 60% 30%', transform: 'rotate(0deg) scale(1)' },
                '25%': { borderRadius: '60% 50% 40% 70%', transform: 'rotate(90deg) scale(1.1)' },
                '50%': { borderRadius: '40% 60% 50% 40%', transform: 'rotate(180deg) scale(0.9)' },
                '75%': { borderRadius: '70% 30% 50% 60%', transform: 'rotate(270deg) scale(1.05)' },
              },
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              bottom: '-15%',
              left: '-15%',
              width: '350px',
              height: '350px',
              background: 'radial-gradient(circle, rgba(147, 51, 234, 0.12) 0%, rgba(236, 72, 153, 0.06) 50%, transparent 70%)',
              borderRadius: '40% 60% 50% 70%',
              animation: 'morphBlob 25s ease-in-out infinite reverse',
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              top: '30%',
              left: '60%',
              width: '200px',
              height: '200px',
              background: 'linear-gradient(45deg, rgba(245, 158, 11, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%)',
              borderRadius: '50% 80% 30% 60%',
              animation: 'morphBlob 15s ease-in-out infinite',
            }}
          />

          {/* Particle Field */}
          {[...Array(20)].map((_, i) => {
            const colors = [
              'rgba(16, 185, 129, 0.4)', // emerald
              'rgba(147, 51, 234, 0.4)', // purple
              'rgba(245, 158, 11, 0.4)', // amber
              'rgba(236, 72, 153, 0.4)', // pink
              'rgba(34, 197, 94, 0.4)',  // green
              'rgba(255, 255, 255, 0.3)', // white
            ];
            return (
              <Box
                key={i}
                sx={{
                  position: 'absolute',
                  width: Math.random() * 6 + 3,
                  height: Math.random() * 6 + 3,
                  bgcolor: colors[i % colors.length],
                  borderRadius: '50%',
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  boxShadow: `0 0 10px ${colors[i % colors.length]}`,
                  animation: `particle${i % 3} ${Math.random() * 10 + 5}s linear infinite`,
                  '@keyframes particle0': {
                    '0%': { transform: 'translateY(0px) translateX(0px)', opacity: 0.3 },
                    '50%': { opacity: 1 },
                    '100%': { transform: 'translateY(-100px) translateX(50px)', opacity: 0 },
                  },
                  '@keyframes particle1': {
                    '0%': { transform: 'translateY(0px) translateX(0px)', opacity: 0.3 },
                    '50%': { opacity: 0.8 },
                    '100%': { transform: 'translateY(-80px) translateX(-30px)', opacity: 0 },
                  },
                  '@keyframes particle2': {
                    '0%': { transform: 'translateY(0px) translateX(0px)', opacity: 0.3 },
                    '50%': { opacity: 0.6 },
                    '100%': { transform: 'translateY(-120px) translateX(20px)', opacity: 0 },
                  },
                }}
              />
            )
          })}

          {/* Neural Network Connections */}
          <svg
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: 0.1,
            }}
          >
            <defs>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
              <linearGradient id="connectionGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(16, 185, 129, 0.3)" />
                <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
                <stop offset="100%" stopColor="rgba(147, 51, 234, 0.3)" />
              </linearGradient>
              <linearGradient id="connectionGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(245, 158, 11, 0.25)" />
                <stop offset="100%" stopColor="rgba(236, 72, 153, 0.25)" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Animated connection lines */}
            <path
              d="M100,50 Q300,100 500,80 T900,120"
              fill="none"
              stroke="url(#connectionGradient1)"
              strokeWidth="2"
              strokeDasharray="5,5"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;-10"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
            
            <path
              d="M0,200 Q200,150 400,180 T800,160"
              fill="none"
              stroke="url(#connectionGradient2)"
              strokeWidth="1.5"
              strokeDasharray="3,3"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;-6"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>
          </svg>

          {/* Technology Icons with Enhanced Animations */}
          <Box
            sx={{
              position: 'absolute',
              top: '10%',
              left: '5%',
              animation: 'complexFloat 8s ease-in-out infinite',
              '@keyframes complexFloat': {
                '0%, 100%': { transform: 'translateY(0px) rotate(0deg) scale(1)' },
                '25%': { transform: 'translateY(-15px) rotate(90deg) scale(1.1)' },
                '50%': { transform: 'translateY(-30px) rotate(180deg) scale(0.9)' },
                '75%': { transform: 'translateY(-15px) rotate(270deg) scale(1.05)' },
              },
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(255,255,255,0.1) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.1)',
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </Box>
          </Box>

          <Box
            sx={{
              position: 'absolute',
              top: '15%',
              right: '8%',
              animation: 'complexFloat 10s ease-in-out infinite reverse',
            }}
          >
            <Box
              sx={{
                width: 100,
                height: 100,
                borderRadius: '20px',
                background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.12) 0%, rgba(255,255,255,0.08) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(147, 51, 234, 0.2)',
                boxShadow: '0 0 20px rgba(147, 51, 234, 0.1)',
              }}
            >
              <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
              </svg>
            </Box>
          </Box>

          <Box
            sx={{
              position: 'absolute',
              bottom: '20%',
              left: '10%',
              animation: 'complexFloat 12s ease-in-out infinite',
            }}
          >
            <Box
              sx={{
                width: 70,
                height: 70,
                borderRadius: '15px',
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(255,255,255,0.12) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(6px)',
                transform: 'rotate(45deg)',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                boxShadow: '0 0 15px rgba(245, 158, 11, 0.1)',
              }}
            >
              <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor" style={{ transform: 'rotate(-45deg)' }}>
                <path d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z"/>
              </svg>
            </Box>
          </Box>

          <Box
            sx={{
              position: 'absolute',
              bottom: '10%',
              right: '15%',
              animation: 'complexFloat 9s ease-in-out infinite reverse',
            }}
          >
            <Box
              sx={{
                width: 90,
                height: 90,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(255,255,255,0.06) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(12px)',
                border: '2px solid rgba(236, 72, 153, 0.2)',
                boxShadow: '0 0 25px rgba(236, 72, 153, 0.1)',
              }}
            >
              <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9,11H15L13.5,7.5L9,11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
              </svg>
            </Box>
          </Box>
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            {/* Main Content */}
            <Grid item xs={12} lg={8}>
              <Box>
                <Typography
                  variant="h1"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '2.5rem', md: '4.5rem' },
                    fontWeight: 'bold',
                    mb: 3,
                    animation: 'fadeInUp 1s ease-out',
                    '@keyframes fadeInUp': {
                      '0%': { opacity: 0, transform: 'translateY(30px)' },
                      '100%': { opacity: 1, transform: 'translateY(0)' },
                    },
                  }}
                >
                  NCAHT NISH
                </Typography>
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '1.25rem', md: '1.75rem' },
                    color: 'rgba(255, 255, 255, 0.9)',
                    mb: 3,
                    animation: 'fadeInUp 1s ease-out 0.2s both',
                  }}
                >
                  National Centre for Assistive Health Technologies at National Institute for Speech and Hearing
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    color: 'rgba(255, 255, 255, 0.8)',
                    mb: 4,
                    lineHeight: 1.6,
                    animation: 'fadeInUp 1s ease-out 0.4s both',
                  }}
                >
                  Pioneering innovative solutions in assistive health technologies to empower individuals with disabilities and enhance quality of life through cutting-edge research, education, and development.
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 2,
                    mb: 4,
                    animation: 'fadeInUp 1s ease-out 0.6s both',
                  }}
                >
                  <Button
                    component={Link}
                    to="/projects"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      bgcolor: 'white',
                      color: 'primary.main',
                      fontWeight: 600,
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        bgcolor: 'grey.100',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Explore Our Projects
                  </Button>
                  <Button
                    component={Link}
                    to="/team"
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                      color: 'white',
                      fontWeight: 600,
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        borderColor: 'white',
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Meet Our Team
                  </Button>
                </Box>

                {/* Quick Stats */}
                <Grid container spacing={3} sx={{ animation: 'fadeInUp 1s ease-out 0.8s both' }}>
                  {[
                    { number: '50+', label: 'Projects', color: 'rgba(16, 185, 129, 0.15)' },
                    { number: '100+', label: 'Students', color: 'rgba(147, 51, 234, 0.15)' },
                    { number: '25+', label: 'Experts', color: 'rgba(245, 158, 11, 0.15)' },
                  ].map((stat, index) => (
                    <Grid item xs={4} key={index}>
                      <Box
                        sx={{
                          textAlign: 'center',
                          p: 2,
                          borderRadius: 2,
                          background: `linear-gradient(135deg, ${stat.color} 0%, rgba(255,255,255,0.1) 100%)`,
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                          },
                        }}
                      >
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                          {stat.number}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                          {stat.label}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>

            {/* Side Visual Element */}
            <Grid item xs={12} lg={4}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 200, md: 300 },
                  animation: 'fadeInRight 1s ease-out 1s both',
                  '@keyframes fadeInRight': {
                    '0%': { opacity: 0, transform: 'translateX(30px)' },
                    '100%': { opacity: 1, transform: 'translateX(0)' },
                  },
                }}
              >
                {/* Central Hub */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(255,255,255,0.15) 100%)',
                    backdropFilter: 'blur(15px)',
                    border: '2px solid rgba(245, 158, 11, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'pulse 3s ease-in-out infinite',
                    boxShadow: '0 0 30px rgba(245, 158, 11, 0.2)',
                  }}
                >
                  <LightbulbIcon sx={{ fontSize: 40, color: 'rgba(245, 158, 11, 0.9)' }} />
                </Box>

                {/* Orbiting Elements */}
                {[
                  { Icon: PeopleIcon, color: 'rgba(16, 185, 129, 0.15)' },
                  { Icon: BookIcon, color: 'rgba(147, 51, 234, 0.15)' },
                  { Icon: WorkIcon, color: 'rgba(236, 72, 153, 0.15)' },
                  { Icon: HeartIcon, color: 'rgba(34, 197, 94, 0.15)' }
                ].map(({ Icon, color }, index) => (
                  <Box
                    key={index}
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${color} 0%, rgba(255,255,255,0.1) 100%)`,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      animation: `orbit${index} 10s linear infinite`,
                      transformOrigin: '0 0',
                      boxShadow: `0 0 15px ${color}`,
                      [`@keyframes orbit${index}`]: {
                        '0%': {
                          transform: `translate(-50%, -50%) rotate(${index * 90}deg) translateX(120px) rotate(${-index * 90}deg)`,
                        },
                        '100%': {
                          transform: `translate(-50%, -50%) rotate(${index * 90 + 360}deg) translateX(120px) rotate(${-index * 90 - 360}deg)`,
                        },
                      },
                    }}
                  >
                    <Icon sx={{ fontSize: 24 }} />
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h2" component="h2" gutterBottom color="text.primary">
              What We Offer
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: '600px', mx: 'auto' }}
            >
              Comprehensive programs and initiatives designed to advance assistive health technologies
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <Card
                  component={Link}
                  to={feature.link}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4,
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
                    <Avatar
                      sx={{
                        bgcolor: 'primary.main',
                        width: 64,
                        height: 64,
                        mx: 'auto',
                        mb: 2,
                      }}
                    >
                      {feature.icon}
                    </Avatar>
                    <Typography variant="h5" component="h3" gutterBottom color="text.primary">
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {feature.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                    <Button
                      color="primary"
                      endIcon={<ArrowForwardIcon />}
                      sx={{ fontWeight: 600 }}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} lg={6}>
              <Typography variant="h2" component="h2" gutterBottom color="text.primary">
                Our Mission
              </Typography>
              <Typography variant="h6" color="text.secondary" paragraph>
                To advance the field of assistive health technologies through innovative research, comprehensive education, 
                and practical solutions that enhance accessibility and improve the quality of life for individuals with disabilities.
              </Typography>
              <Box component="ul" sx={{ pl: 0, listStyle: 'none' }}>
                {[
                  'Developing cutting-edge assistive technologies',
                  'Training the next generation of professionals',
                  'Creating awareness about assistive technologies',
                  'Building inclusive communities through technology'
                ].map((item, index) => (
                  <Box
                    key={index}
                    component="li"
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        bgcolor: 'primary.main',
                        borderRadius: '50%',
                        mt: 1,
                        mr: 2,
                        flexShrink: 0,
                      }}
                    />
                    <Typography variant="body1" color="text.secondary">
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, #f0f9ff 0%, #dbeafe 100%)',
                  p: 4,
                }}
              >
                <Typography variant="h4" component="h3" gutterBottom color="text.primary">
                  Vision
                </Typography>
                <Typography variant="h6" color="text.primary" sx={{ lineHeight: 1.6 }}>
                  To be a global leader in assistive health technologies, creating a world where innovative solutions 
                  break down barriers and empower every individual to reach their full potential, regardless of their abilities.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, bgcolor: 'primary.main', color: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} textAlign="center">
            {[
              { number: '50+', label: 'Active Projects' },
              { number: '100+', label: 'Students Trained' },
              { number: '25+', label: 'Team Members' },
              { number: '10+', label: 'Years of Excellence' }
            ].map((stat, index) => (
              <Grid item xs={6} lg={3} key={index}>
                <Typography variant="h2" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {stat.number}
                </Typography>
                <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Home