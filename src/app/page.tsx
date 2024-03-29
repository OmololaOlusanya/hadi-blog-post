import { Blogs } from '@/component/blog/Blogs';
import { AppLayout } from '@/component/layout.tsx/AppLayout';
import { BlogProvider } from '@/component/provider/BlogProvider';
import { fetchPost } from '@/utils/helper';

const Home = async () => {
  const posts = await fetchPost();

  return (
    <BlogProvider posts={posts}>
      <AppLayout>
        <Blogs />
      </AppLayout>
    </BlogProvider>
  );
};

export default Home;
