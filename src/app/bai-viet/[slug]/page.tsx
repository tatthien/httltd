import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPosts, getPostBySlug, getPostsByCategory, categoryLabels } from '@/data/posts';
import PostCard from '@/components/PostCard';
import ScrollReveal from '@/components/ScrollReveal';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allPosts = getAllPosts();
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Không tìm thấy bài viết' };

  return {
    title: `${post.title} | Hội Thánh Tin Lành Thủ Đức`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Format date to Vietnamese
  const dateObj = new Date(post.date);
  const formattedDate = dateObj.toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  // Get related posts from the same category
  const primaryCategory = post.categories[0];
  const relatedPosts = primaryCategory
    ? getPostsByCategory(primaryCategory)
        .filter((p) => p.slug !== post.slug)
        .slice(0, 3)
    : [];

  return (
    <main className="bg-white min-h-screen">
      {/* Title & One-line Metadata Header */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 pt-10 md:pt-14 pb-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1c1b1a] tracking-tight leading-tight mb-4">
          {post.title}
        </h1>
        <div className="flex items-center justify-center gap-3 text-xs md:text-sm text-[#55524d] flex-wrap">
          <span>Ngày đăng: <time dateTime={post.date} className="font-semibold text-[#1c1b1a]">{formattedDate}</time></span>
          {post.categoryLabels && post.categoryLabels.length > 0 && (
            <>
              <span>&bull;</span>
              <span className="inline-flex items-center gap-1">Chuyên mục: 
                {post.categoryLabels.map((label, idx) => (
                  <Link
                    key={idx}
                    href={`/category/${post.categories[idx]}`}
                    className="text-[#bca141] font-bold hover:underline ml-1"
                  >
                    {label}
                  </Link>
                ))}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Centered Image */}
      <div className="max-w-3xl mx-auto px-4 md:px-6 mb-12">
        <div className="w-full aspect-16/10 rounded-md overflow-hidden bg-[#f7f6f4] shadow-2xs">
          <img 
            src={post.thumbnail || 'https://picsum.photos/800/500'} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Post Content */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <article className="post-detail">
            <div className="post-content">
              <MDXRemote source={post.content} />
            </div>
          </article>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-14 md:py-18 bg-[#f7f6f4]">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1c1b1a] tracking-tight">
                  Bài Viết Liên Quan
                </h2>
                <p className="text-[#66635d] text-sm mt-2">
                  Các bài viết khác trong chuyên mục{' '}
                  {categoryLabels[primaryCategory] || primaryCategory}
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relPost) => (
                <ScrollReveal key={relPost.slug}>
                  <PostCard
                    title={relPost.title}
                    slug={relPost.slug}
                    date={relPost.date}
                    categories={relPost.categories}
                    categoryLabels={relPost.categoryLabels}
                    excerpt={relPost.excerpt}
                    thumbnail={relPost.thumbnail}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
