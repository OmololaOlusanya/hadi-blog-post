import { Box, Typography } from '@mui/material';
import { Post } from '../provider/BlogProvider';
import { FC } from 'react';
import { formatDate } from '@/utils/helper';

interface Props {
  post: Partial<Post>;
}
const PostSummary: FC<Props> = ({
  post: { title, author, excerpt, publicationDate },
}) => {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 500, mb: 1 }}>
        {title}
      </Typography>
      <Typography sx={{ mb: 2, fontStyle: 'italic' }}>{author}</Typography>
      <Typography variant="body2" mb={2}>
        {excerpt}
      </Typography>
      <Typography>{formatDate(publicationDate || '')}</Typography>
    </Box>
  );
};

export default PostSummary;
