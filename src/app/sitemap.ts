import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const staticRoutes = [
    {
      url: 'https://yourwebsite.com',
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://yourwebsite.com/about',
      lastModified: currentDate,
      changeFrequency: 'monthly ',
      priority: 0.8,
    },
  ] as const;
  const postIds = Array.from({ length: 60 }, (_, index) => index + 1);

  const dynamicRoutes = postIds.map((id) => ({
    url: `https://yourwebsite.com/${id}`,
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
