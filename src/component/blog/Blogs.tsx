'use client';
import {
  Button,
  Grid,
  Link,
  Pagination,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { useBlogContext } from '../provider/BlogProvider';
import { URLS } from '@/constants/urls';
import { useRouter } from 'next/navigation';
import PostSummary from './PostSummary';

const Header = styled(Stack)(({ theme: { breakpoints, palette } }) => ({
  background: `linear-gradient(to right, ${palette.primary.main}, ${palette.secondary.main})`,
  height: '180px',
  justifyContent: 'center',
  alignItems: 'center',
  [breakpoints.up('md')]: { height: '260px' },
}));

const Container = styled(Stack)(({ theme: { spacing } }) => ({
  padding: spacing(2.5),
  borderRadius: spacing(1.7),
  backgroundColor: 'white',
  height: '100%',
  boxShadow: '0 0px 3px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
}));

export const Blogs = () => {
  const { getCurrentPagePosts, totalPages, currentPage, updateCurrentPage } =
    useBlogContext();
  const router = useRouter();

  return (
    <Box>
      <Header>
        <Typography variant="h4" color="white">
          Latest Updates
        </Typography>
      </Header>
      <Box sx={{ bgcolor: 'secondary.light', p: 3, pl: { xs: 0, md: 3 } }}>
        <Grid
          container
          spacing={3}
          sx={{
            width: { lg: '75%', md: '80%', sm: '85%', xs: '100%' },
            mx: 'auto',
            py: { md: 3 },
          }}
        >
          {getCurrentPagePosts().map((post) => {
            return (
              <Grid key={post.id} xs={12} sm={6} md={4} item>
                <Container
                  onClick={() => router.push(`${URLS.home}${post.id}`)}
                >
                  <Box flexGrow={1}>
                    <PostSummary
                      post={{
                        title: post.title,
                        author: post.author,
                        publicationDate: post.publicationDate,
                        excerpt: post.excerpt,
                      }}
                    />
                  </Box>
                  <Box>
                    <Button
                      href={`${URLS.home}${post.id}`}
                      color="secondary"
                      variant="text"
                      component={Link}
                      sx={{ textTransform: 'capitalize', mt: 3 }}
                    >
                      View more
                    </Button>
                  </Box>
                </Container>
              </Grid>
            );
          })}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(_, value) => updateCurrentPage(value)}
          />
        </Box>
      </Box>
    </Box>
  );
};
