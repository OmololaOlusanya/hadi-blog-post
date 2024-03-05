import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const NotFund = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        p: 3,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Oops! Page Not Found
      </Typography>
      <Typography  paragraph>
        The page you are looking for might have been removed, had its name
        changed, or does not exist.
      </Typography>
      <Button variant="contained" component={Link} href="/">
        Go to Home
      </Button>
    </Box>
  );
};
export default NotFund;
