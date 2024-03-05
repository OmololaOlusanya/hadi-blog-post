import Box from '@mui/material/Box';
import React from 'react';
import { AddComment } from './AddComment';
import { useBlogContext } from '../provider/BlogProvider';
import { useParams } from 'next/navigation';
import { Stack, Typography } from '@mui/material';
import { formatDate } from '@/utils/helper';

export const Comments = () => {
  const pathname = useParams();
  const id = Number(pathname['id']);
  const { allPosts } = useBlogContext();
  const comments = allPosts?.find((post) => post.id == id)?.comments;

  const getTime = (date: Date) =>
    date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return (
    <Box>
      <AddComment id={id} />
      <Box>
        {comments?.map(({ name, text, date }, index) => (
          <Stack
            key={index}
            sx={{ p: 2.5, my: 2, border: '1px solid #ccc', borderRadius: 2 }}
          >
            {name && (
              <Typography sx={{ fontStyle: 'italic' }}>{name}</Typography>
            )}
            <Typography>{text}</Typography>

            <Typography variant='body2' sx={{ textAlign: 'end', mt:1 }}>{`${formatDate(
              date.toString()
            )} ${getTime(date)}`}</Typography>
          </Stack>
        ))}
      </Box>
    </Box>
  );
};
