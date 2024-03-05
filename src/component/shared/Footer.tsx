'use client';
import { Box, Typography, styled } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const StyledContainer = styled(Box)(
  ({ theme: { breakpoints, spacing, palette } }) => ({
    backgroundColor: palette.primary.main,
    color: 'white',
    justifyContent: 'space-around',
    padding: spacing(3),
    [breakpoints.up('md')]: { display: 'flex' },
  })
);

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledContainer>
      <Typography variant='body2'>Copyright © {year} Blog Post. All rights reserved</Typography>
      <Box sx={{ mt: { xs: 2, md: 0 } }}>
        <FacebookIcon sx={{ mr: 1 }} /> <XIcon sx={{ mr: 1 }} />
        <InstagramIcon sx={{ mr: 1 }} />
      </Box>
    </StyledContainer>
  );
};
