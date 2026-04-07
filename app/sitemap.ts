
import { MetadataRoute } from 'next';
import { getAllClasses } from './data/classes'; 

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.grazedu.web.id';

  // Fetch dynamic class data
  const classes = await getAllClasses();

  // Create dynamic class routes
  const classRoutes = classes.map((classItem) => ({
    url: `${baseUrl}/kelas/${classItem.slug}`,
    lastModified: new Date(),
  }));

  // Define static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/kelas`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/wcl-pbi/socmed-strategist`,
      lastModified: new Date(),
    },
  ];

  // Combine static and dynamic routes
  return [...staticRoutes, ...classRoutes];
}
