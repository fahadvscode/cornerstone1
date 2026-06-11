import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const staticPages = [
    { url: SITE_URL, priority: 1.0 },
    { url: `${SITE_URL}/floor-plans`, priority: 0.8 },
    { url: `${SITE_URL}/location`, priority: 0.8 },
    { url: `${SITE_URL}/builder`, priority: 0.8 },
    { url: `${SITE_URL}/amenities`, priority: 0.8 },
    { url: `${SITE_URL}/investment`, priority: 0.8 },
    { url: `${SITE_URL}/compare`, priority: 0.8 },
    { url: `${SITE_URL}/gallery`, priority: 0.8 },
    { url: `${SITE_URL}/faq`, priority: 0.8 },
    { url: `${SITE_URL}/blog`, priority: 0.8 },
    { url: `${SITE_URL}/register`, priority: 0.8 },
    { url: `${SITE_URL}/contact`, priority: 0.8 },
    { url: `${SITE_URL}/privacy`, priority: 0.3 },
  ];

  const blogPages = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.6,
  }));

  return [
    ...staticPages.map((page) => ({
      url: page.url,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: page.priority,
    })),
    ...blogPages.map((page) => ({
      ...page,
      changeFrequency: "monthly" as const,
    })),
  ];
}
