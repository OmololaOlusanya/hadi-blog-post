'use client';
import { Box, Typography, styled } from '@mui/material';
import { FC } from 'react';
import { useBlogContext } from '../provider/BlogProvider';
import Image from 'next/image';
import PostSummary from './PostSummary';
import { Comments } from './Comments';
import { notFound } from 'next/navigation';

export const StyledContainer = styled(Box)(
  ({ theme: { breakpoints, spacing } }) => ({
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: spacing(3),
    [breakpoints.up('sm')]: { width: '85%' },
    [breakpoints.up('md')]: { width: '80%' },
    [breakpoints.up('lg')]: { width: '75%' },
  })
);

export const SummaryBox = styled(Box)(
  ({ theme: { breakpoints, spacing } }) => ({
    padding: spacing(3),
    boxShadow: '0 0px 3px rgba(0, 0, 0, 0.1)',
    [breakpoints.up('md')]: { display: 'flex' },
  })
);

export const Details: FC<{ id: string }> = ({ id }) => {
  const { allPosts } = useBlogContext();
  const post = allPosts?.find((post) => post.id.toString() == id);

  if (!post && id !== 'about') {
    return notFound();
  }

  return (
    <StyledContainer>
      <SummaryBox sx={{ gap: 4 }}>
        <Box textAlign="center">
          <Image
            width={250}
            height={300}
            priority
            src={'/images/blog-image.jpg'}
            alt={post?.title || ''}
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
        <Box sx={{ mt: { xs: 3, mb: 0 } }}>
          <PostSummary
            post={{
              title: post?.title,
              author: post?.author,
              publicationDate: post?.publicationDate,
              excerpt: post?.excerpt,
            }}
          />
        </Box>
      </SummaryBox>
      <Typography mt={3}>{post?.body}</Typography>
      <Comments />
    </StyledContainer>
  );
};
