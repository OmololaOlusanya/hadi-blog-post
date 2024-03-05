'use client';

import { Box, Button, Typography, styled } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export const StyledContainer = styled(Box)(({ theme: { spacing } }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  padding: spacing(3),
}));

const NotFund = () => {
  return (
    <StyledContainer>
      <Typography variant="h5" gutterBottom>
        Oops! Page Not Found
      </Typography>
      <Typography paragraph>
        The page you are looking for might have been removed, had its name
        changed, or does not exist.
      </Typography>
      <Button variant="contained" component={Link} href="/">
        Go to Home
      </Button>
    </StyledContainer>
  );
};
export default NotFund;
