'use client';

import { useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2'; // Grid2 component from MUI
import Image from 'next/image';
import { styled } from '@mui/material/styles';

const ImageWrapper = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  borderRadius: '8px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    aspectRatio: '1/1',
    borderRadius: '8px',
  },
}));

function TabPanel(props: { children: React.ReactNode; value: number; index: number }) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ProductSlider = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const images = {
    products: [
      {
        src: '/first-home.jpg',
        title: 'Buying your first home with Better',
        description:
          'Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day.',
      },
      {
        src: '/one-day-mortgage.jpg',
        title: 'One Day Mortgage',
        description:
          'Traditional lenders deliver a Commitment Letter in a few weeks. We do it in one day.',
      },
      {
        src: '/better-heloc.jpg',
        title: 'Better HELOC',
        description:
          'Introducing One Day HELOC—your express lane to getting cash from your home. Access up to 90% of your home equity as cash in as little as 7 days.',
      },
      {
        src: '/insurance.jpg',
        title: 'Insurance',
        description:
          'Shop, bundle, and save on insurance coverage for home, auto, life, and more.',
      },
    ],
    calculators: [
      {
        src: '/mortgage-calculator.jpg',
        title: 'Mortgage Calculator',
        description:
          'Calculate your mortgage payments quickly and easily to determine how much you can afford.',
      },
      {
        src: '/affordability-calculator.jpg',
        title: 'Affordability Calculator',
        description:
          'Estimate the maximum home you can afford using our homeownership affordability calculator.',
      },
      {
        src: '/heloc-calculator.jpg',
        title: 'HELOC Calculator',
        description:
          'Quickly see how much equity you can borrow from your home with our HELOC calculator.',
      },
      {
        src: '/fixed-rate-calculator.jpg',
        title: 'Fixed-rate Loan Calculator',
        description:
          'Compare different fixed-rate loans to find the best option for you.',
      },
    ],
    faqs: [
      {
        src: '/good-dti.jpg',
        title: 'Good Debt-to-Income Ratio for Home Loan',
        description:
          'Learn about the ideal debt-to-income ratio when applying for a home loan.',
      },
      {
        src: '/buy-house-without-realtor.jpg',
        title: 'Buying a House without Realtor',
        description:
          'Thinking about buying a house without a real estate agent? Read this guide first.',
      },
      {
        src: '/loan-timeline.jpg',
        title: 'Timeline for Homebuying Process',
        description:
          'We’ve broken the homebuying process into 8 easy steps to make it less daunting.',
      },
      {
        src: '/conventional-loan.jpg',
        title: 'Conventional Loan Requirements',
        description: 'Understand the key requirements for conventional loans.',
      },
    ],
  };

  return (
    <Box sx={{ width: '100%', marginTop: 4 }}>
      {/* Tab Selector */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="product calculator faq tabs"
          variant="scrollable"
          scrollButtons="auto"
          centered
        >
          <Tab label="Our Products" {...a11yProps(0)} />
          <Tab label="Calculators" {...a11yProps(1)} />
          <Tab label="Guides & FAQs" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Grid2 container spacing={4}>
          {images.products.map((product, index) => (
            <Grid2 key={index} size={{xs:12, sm:6 ,md:6}}>
              <ImageWrapper>
                <Image
                  src={product.src}
                  alt={product.title}
                  width={400}
                  height={400}
                  style={{ objectFit: 'cover', aspectRatio: '1 / 1' }}
                />
              </ImageWrapper>
              <Typography variant="h6" sx={{ mt: 2 }}>
                {product.title}
              </Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Grid2>
          ))}
        </Grid2>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Grid2 container spacing={4}>
          {images.calculators.map((calculator, index) => (
            <Grid2 key={index} size={{xs:12, sm:6 ,md:6}}>
              <ImageWrapper>
                <Image
                  src={calculator.src}
                  alt={calculator.title}
                  width={400}
                  height={400}
                  style={{ objectFit: 'cover', aspectRatio: '1 / 1' }}
                />
              </ImageWrapper>
              <Typography variant="h6" sx={{ mt: 2 }}>
                {calculator.title}
              </Typography>
              <Typography variant="body2">{calculator.description}</Typography>
            </Grid2>
          ))}
        </Grid2>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Grid2 container spacing={4}>
          {images.faqs.map((faq, index) => (
            <Grid2 key={index} size={{xs:12, sm:6 ,md:6}}>
              <ImageWrapper>
                <Image
                  src={faq.src}
                  alt={faq.title}
                  width={400}
                  height={400}
                  style={{ objectFit: 'cover', aspectRatio: '1 / 1' }}
                />
              </ImageWrapper>
              <Typography variant="h6" sx={{ mt: 2 }}>
                {faq.title}
              </Typography>
              <Typography variant="body2">{faq.description}</Typography>
            </Grid2>
          ))}
        </Grid2>
      </TabPanel>
    </Box>
  );
};

export default ProductSlider;
