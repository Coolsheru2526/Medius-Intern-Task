'use client';

import { Box, Button, Typography, Avatar, Grid2 } from '@mui/material';
import { FiHome, FiDollarSign, FiTrendingUp, FiPhoneCall } from 'react-icons/fi';
import { FaRegUserCircle } from 'react-icons/fa';

const StartSection:React.FC = () => {
  return (
    <Box sx={{ mt: '100px', textAlign: 'center' }}> {/* Add top margin to push content below header */}
      <Avatar sx={{ width: 80, height: 80, margin: 'auto', mb: 2 }}>
        <FaRegUserCircle size={60} />
      </Avatar>

      <Typography variant="h4" component="h1" gutterBottom>
        Hi, I'm Betsy! What can I help you with?
      </Typography>

      {/* Stack buttons vertically */}
      <Grid2 container spacing={2} direction="column" alignItems="center" sx={{ mb: 4 }}>
        <Grid2 size={{xs:12,sm:8,md:6}}>
          <Button
            variant="outlined"
            startIcon={<FiHome />}
            fullWidth
            sx={{
              py: 2,
              borderRadius: '8px',
              fontSize: '1.2rem',
              '&:hover': {
                backgroundColor: '#4CAF50', // Green background on hover
                color: 'white',
                borderColor: '#4CAF50',
              },
            }}
          >
            Buying a home
          </Button>
        </Grid2>

        <Grid2 size={{xs:12,sm:8,md:6}}>
          <Button
            variant="outlined"
            startIcon={<FiTrendingUp />}
            fullWidth
            sx={{
              py: 2,
              borderRadius: '8px',
              fontSize: '1.2rem',
              '&:hover': {
                backgroundColor: '#4CAF50', // Green background on hover
                color: 'white',
                borderColor: '#4CAF50',
              },
            }}
          >
            Refinance my mortgage
          </Button>
        </Grid2>

        <Grid2 size={{xs:12,sm:8,md:6}}>
          <Button
            variant="outlined"
            startIcon={<FiDollarSign />}
            fullWidth
            sx={{
              py: 2,
              borderRadius: '8px',
              fontSize: '1.2rem',
              '&:hover': {
                backgroundColor: '#4CAF50', // Green background on hover
                color: 'white',
                borderColor: '#4CAF50',
              },
            }}
          >
            Get cash from my home
          </Button>
        </Grid2>
      </Grid2>

      <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 4, mb: 4 }}>
        <Box>
          <Typography variant="h4">$100B</Typography>
          <Typography variant="body1">home loans funded entirely online</Typography>
        </Box>
        <Box>
          <Typography variant="h4">400K</Typography>
          <Typography variant="body1">Customers who chose a Better Mortgage</Typography>
        </Box>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="body1">
          After a few questions, you’ll unlock:
        </Typography>
        <Box
          sx={{
            backgroundColor: '#f0f4f7',
            display: 'inline-block',
            px: 4,
            py: 2,
            borderRadius: '8px',
            mt: 2,
            textAlign: 'left',
          }}
        >
          <Typography variant="body2">✔️ Custom mortgage rates</Typography>
          <Typography variant="body2">✔️ Exclusive offers</Typography>
          <Typography variant="body2">✔️ A personalized dashboard</Typography>
        </Box>
      </Box>

      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FiPhoneCall size={24} />
        <Typography variant="body1" sx={{ ml: 1 }}>
          Need help? Call (415) 523 8837
        </Typography>
      </Box>
    </Box>
  );
};

export default StartSection;
