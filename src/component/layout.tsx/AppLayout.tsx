import React from 'react';
import { Box, Stack } from '@mui/material';
import { NavBar } from '../shared/Navbar';
import { Footer } from '../shared/Footer';

interface PageTemplateProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

export const AppLayout = ({
  children,
  showFooter = true,
}: PageTemplateProps) => {
  return (
    <Stack sx={{ minHeight: '100vh' }}>
      <NavBar />
      <Box marginTop="70px" flexGrow={1}>
        {children}
      </Box>
      {showFooter && <Footer />}
    </Stack>
  );
};
