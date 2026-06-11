import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { getAllPosts } from "@/lib/blog";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Blog | Cornerstone Towns Brampton News & Guides",
  description:
    "Expert guides and news about Cornerstone Towns Brampton by Primont Homes. Floor plans, location analysis, investment insights, and buyer guides.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <JsonLd data={breadcrumbSchema("Blog", "/blog")} />
      <PageHeader
        title="Cornerstone Towns Blog"
        subtitle="Expert guides, market analysis, and buyer resources for Cornerstone Towns Brampton"
      />

      <section className="section-padding">
        <div className="container-site">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug} className="card flex flex-col">
                <time
                  dateTime={post.date}
                  className="text-xs font-medium uppercase tracking-wider text-gold-500"
                >
                  {new Date(post.date).toLocaleDateString("en-CA", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 className="mt-2 font-heading text-xl font-semibold text-forest-900">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-forest-700"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 flex-1 text-sm text-forest-800">
                  {post.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-forest-700">{post.readingTime}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-semibold text-forest-700 hover:text-forest-600"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
