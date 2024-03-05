import { Post } from '@/component/provider/BlogProvider';
import { fetchPost } from '@/utils/helper';
import { MetadataRoute } from 'next';

export default async function sitemap() {
  const currentDate = new Date();

  const staticRoutes = [
    {
      url: 'https://hadi-blog-post.vercel.app',
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://hadi-blog-post.vercel.app/about',
      lastModified: currentDate,
      changeFrequency: 'monthly ',
      priority: 0.8,
    },
  ] as const;
  
  const posts = await fetchPost();
  const dynamicRoutes = posts.map((post: Post) => ({
    url: `https://hadi-blog-post.vercel.app/${post.id}`,
    lastModified: currentDate,
    changeFrequency: 'daily',
    priority: 0.7,
  }));

  const allRoutes = [
    ...staticRoutes,
    ...dynamicRoutes,
  ] as MetadataRoute.Sitemap;

  return allRoutes;
}
