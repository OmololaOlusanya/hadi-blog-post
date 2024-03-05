'use client';
import { Box, AppBar, Toolbar, styled } from '@mui/material';
import React from 'react';
import { Link } from './Link';
import { URLS } from '@/constants/urls';
import { usePathname } from 'next/navigation';
import { Colors } from '@/utils/theme';

const StyledAppbar = styled(AppBar)(({ theme }) => ({
  boxShadow: `0px 1px 24px 0px ${Colors.lightgrey}`,
  backgroundColor: 'white',
  color: theme.palette.text.primary,
  height: '70px',
  justifyContent: 'center',
}));

export const NavBar = () => {
  const pathname = usePathname();
  const aboutIsActive = pathname === URLS.about;
  return (
    <Box>
      <StyledAppbar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-around' }}>
          <Link href={URLS.home} variant="h4">
            Blog post
          </Link>
          <Link
            href={URLS.about}
            variant="h6"
            sx={
              aboutIsActive
                ? { borderBottom: `2px solid ${Colors.primary}` }
                : {}
            }
          >
            About
          </Link>
        </Toolbar>
      </StyledAppbar>
    </Box>
  );
};
