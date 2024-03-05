import React from 'react';
import { StyledContainer, SummaryBox } from '../blog/Details';
import { Box, Typography } from '@mui/material';

const MessageSection = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => (
  <Box my={4}>
    <Typography variant="h5">{title}</Typography>
    <Typography>{content}</Typography>
  </Box>
);

export const About = () => {
  return (
    <StyledContainer>
      <SummaryBox>
        <Typography variant="h6" fontStyle="italic">
          Hey there! I'm Omolola, the creator and writer behind Blog Posts. I'm
          passionate about a lot of things, and I created this space to share my
          thoughts, experiences, and insights with you.
        </Typography>
      </SummaryBox>

      <MessageSection
        title="Our Mission:"
        content="Our mission is simple: to get you informed and entertained. Through engaging content, insightful articles, and thought-provoking discussions."
      />
      <MessageSection
        title="Thank You:"
        content="Before you go, I want to express my gratitude for being here. Thank you for taking the time to explore Blog Post. I hope you find inspiration, insight, and enjoyment in your visit."
      />
    </StyledContainer>
  );
};
