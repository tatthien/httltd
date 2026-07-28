import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostsByCategory, categoryLabels } from '@/data/posts';
import PostCard from '@/components/PostCard';
import ScrollReveal from '@/components/ScrollReveal';

const VALID_CATEGORIES = ['thong-bao', 'tin-tuc', 'bai-hoc'];

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return VALID_CATEGORIES.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const label = categoryLabels[slug];
  if (!label) return { title: 'Không tìm thấy' };

  return {
    title: `${label} | Hội Thánh Tin Lành Thủ Đức`,
    description: `Danh sách bài viết chuyên mục ${label} - Hội Thánh Tin Lành Thủ Đức`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  
  if (!VALID_CATEGORIES.includes(slug)) {
    notFound();
  }

  const label = categoryLabels[slug] || slug;
  const categoryPosts = getPostsByCategory(slug);

  return (
    <main className="bg-[#f7f6f4] min-h-screen py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="mb-8">
            <span className="text-xs text-[#85817a] font-medium tracking-wide block mb-1">
              Chuyên Mục &bull; {label}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1c1b1a] tracking-tight">
              {label}
            </h1>
          </div>
        </ScrollReveal>

        {categoryPosts.length === 0 ? (
          <div className="text-center py-16 text-[#75726b] text-lg bg-white rounded-md p-8 shadow-2xs">
            <p>Chưa có bài viết nào trong chuyên mục này.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryPosts.map((post) => (
              <ScrollReveal key={post.slug}>
                <PostCard
                  title={post.title}
                  slug={post.slug}
                  date={post.date}
                  categories={post.categories}
                  categoryLabels={post.categoryLabels}
                  excerpt={post.excerpt}
                  thumbnail={post.thumbnail}
                />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
