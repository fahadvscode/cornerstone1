import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { createPageMetadata } from "@/lib/metadata";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(post.title, `/blog/${slug}`),
          articleSchema({
            title: post.title,
            description: post.description,
            slug: post.slug,
            date: post.date,
            author: post.author,
          }),
        ]}
      />

      <article className="section-padding">
        <div className="container-site max-w-3xl">
          <Link
            href="/blog"
            className="mb-6 inline-block text-sm font-medium text-forest-700 hover:text-forest-600"
          >
            ← Back to Blog
          </Link>

          <header className="mb-8">
            <time
              dateTime={post.date}
              className="text-sm font-medium text-gold-500"
            >
              {new Date(post.date).toLocaleDateString("en-CA", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="mt-2 font-heading text-4xl font-bold text-forest-900">
              {post.title}
            </h1>
            <p className="mt-2 text-forest-700">
              By {post.author} · {post.readingTime}
            </p>
          </header>

          <div className="prose-site">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>

          <div className="mt-12 rounded-lg bg-cream-100 p-8 text-center">
            <h2 className="font-heading text-2xl font-bold text-forest-900">
              Ready to Register for VIP Access?
            </h2>
            <p className="mt-2 text-forest-800">
              Be the first to receive floor plans and pricing for Cornerstone Towns.
            </p>
            <Link href="/register" className="btn-primary mt-4 inline-flex">
              Register Now
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
