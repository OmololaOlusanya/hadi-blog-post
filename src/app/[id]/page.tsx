import { Details } from '@/component/blog/Details';
import { AppLayout } from '@/component/layout.tsx/AppLayout';
import { BlogProvider } from '@/component/provider/BlogProvider';
import { fetchPost } from '@/utils/helper';
import React, { FC } from 'react';

const PostDetailPage: FC<{ params: { id: string } }> = async ({
  params: { id },
}) => {
  const posts = await fetchPost();

  return (
    <BlogProvider posts={posts}>
      <AppLayout>
        <Details id={id} />
      </AppLayout>
    </BlogProvider>
  );
};

export default PostDetailPage;
