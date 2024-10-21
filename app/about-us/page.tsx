'use client';

import React from 'react';
import { Box, Typography, Container, Grid2 } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

const YoutubeEmbed = ({ embedId }: { embedId: string }) => (
  <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${embedId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </Box>
);

const AboutUs:React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 8 }}>
      
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#027437', fontWeight: 'bold' }}>
          Our Mission
        </Typography>
        <Typography variant="h2" component="h1" gutterBottom>
          We’re making homeownership simpler, faster — <br />
          and more importantly, more accessible for all Americans.
        </Typography>
      </Box>

      <Box sx={{ backgroundColor: '#027437', p: 4, textAlign: 'center', color: 'white', mb: 6 }}>
        <Typography variant="h3" component="h2" gutterBottom>
          How We're Changing Things
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', margin: 'auto' }}>
          Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. 
          Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers'.
          <br /><br />
          That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.
        </Typography>
      </Box>

      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          Backed By
        </Typography>
        <Grid2 container justifyContent="center" spacing={4}>
          {['SoftBank', 'ally', 'citi', 'PingAnBank', 'GoldmanSachs', 'KPCB', 'AmericanExpress'].map((partner, index) => (
            <Grid2 key={index} size={{xs:6,sm:3,md:2}}>
              {partner}
            </Grid2>
          ))}
        </Grid2>
      </Box>

      {/* Timeline Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Company Timeline
        </Typography>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="span">
                2014
              </Typography>
              <Typography color="textSecondary">
                Better.com is founded with the goal of simplifying homeownership for everyone.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="span">
                2017
              </Typography>
              <Typography color="textSecondary">
                Expanded operations to more regions, helping millions of customers secure homes.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="span">
                2020
              </Typography>
              <Typography color="textSecondary">
                Raised significant investment from global financial leaders, positioning for further growth.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="span">
                The Future
              </Typography>
              <Typography color="textSecondary">
                Continuing to innovate and provide accessible homeownership solutions to millions more.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>

      <YoutubeEmbed embedId="1KjYlLBM9j4" />
    </Container>
  );
};

export default AboutUs;
