import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Cloud from '../../assets/AWS_Cloud.png';
import Machine from '../../assets/AWS_ML.png';
import Cyber from '../../assets/Cybersecurity.png';
import Threats from '../../assets/ThreatLandscape.png';
import Intro from '../../assets/IntroToCyber.png';
import Fundamentals from '../../assets/Fundamentals.png';

const Certifications = () => {

  const certificationData = [
    {
      image: Cloud,
      alt: 'AWS Cloud Foundations Badge',
      badgeLink: 'https://www.credly.com/badges/6370f2f8-0164-479a-bfcb-3ccc7b880b12/public_url'
    },
    {
      image: Machine,
      alt: 'AWS Machine Learning Foundations Badge',
      badgeLink: 'https://www.credly.com/badges/2d435c18-9b08-47c9-8220-e7424681ebdd/public_url'
    },
    {
      image: Cyber,
      alt: 'Cybersecurity Badge',
      badgeLink: 'https://www.credly.com/badges/d334d1c9-60b2-4f55-895a-54babcbdcb79/public_url'
    },
    {
      image: Threats,
      alt: 'Threat Landscape Badge',
      badgeLink: 'https://www.credly.com/badges/91ccc37d-dad8-45a0-a249-253ec1014d3a/public_url'
    },
    {
      image: Intro,
      alt: 'Intro to Cybersecurity Badge',
      badgeLink: 'https://www.credly.com/badges/8512a83e-2924-4e04-864b-0b2d8e4f88a9/public_url',
    },
    {
      image: Fundamentals,
      alt: 'Cybersecurity Fundamentals Badge',
      badgeLink: 'https://www.credly.com/badges/b2aa2a9f-4790-45ad-8935-b1aaeb56efe7/public_url'
    },
  ];

  return (
    <div className='gradient__bg flex flex-col min-h-screen '>
      <h1 className='text-5xl text-white px-4 sm:px-8 py-4 sm:py-8 md:px-24 md:py-10'>Certifications</h1>
      <div className='flex flex-wrap justify-center gap-4 sm:justify-start px-24'>
        {/* AWS CLOUD FOUNDATIONS BADGE */}
        {certificationData.map((certification, index) =>
          <Card key={index} sx={{ maxWidth: 200 }} className='mb-4'>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                image={certification.image}
                alt={certification.alt}
              />
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" className='hover:text-black'>
              <a href={certification.badgeLink} target="_blank" rel="noopener noreferrer">Credly</a>
              </Button>
            </CardActions>
          </Card>
        )};
      </div>
    </div>
  );
};

export default Certifications;
