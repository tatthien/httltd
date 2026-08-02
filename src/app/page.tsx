import Link from 'next/link';
import { getAllPosts } from '@/data/posts';
import PostCard from '@/components/PostCard';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-fixed bg-cover bg-center text-white py-16 md:py-22 px-4 text-center overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: `url('/images/service-schedule-bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-[#1c1b1a]/85"></div>
        <div className="relative z-10 max-w-3xl mx-auto w-full flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">
            Giờ Thờ Phượng Chung
          </h1>
          <p className="text-white/80 text-base md:text-lg mb-7">Chúa Nhật hàng tuần</p>
          <div className="flex items-center justify-center gap-6 md:gap-10 border-y border-white/20 py-5 mb-8 flex-wrap w-full max-w-xl">
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm text-primary-light font-semibold">Lễ 1</span>
              <span className="text-xl md:text-2xl font-bold text-white">06:00 – 08:00</span>
            </div>
            <div className="w-[1px] h-10 bg-white/20 hidden sm:block"></div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm text-primary-light font-semibold">Lễ 2</span>
              <span className="text-xl md:text-2xl font-bold text-white">09:00 – 11:00</span>
            </div>
          </div>
          <Link 
            href="/gio-sinh-hoat" 
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-xs bg-primary text-white hover:bg-primary-dark transition-colors"
          >
            Xem giờ sinh hoạt
          </Link>
        </div>
      </section>

      {/* YouTube Live Stream Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-7 lg:gap-10 items-center">
              <div className="max-w-md">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1c1b1a] tracking-tight mb-3">
                  Thờ phượng trực tuyến
                </h2>
                <p className="text-[#5f5b54] leading-relaxed">
                  Xem lại buổi thờ phượng gần nhất trên kênh YouTube chính thức của Hội Thánh.
                </p>
                <a
                  href="https://www.youtube.com/@hoithanhthuduc/streams"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 text-sm font-semibold text-[#1c1b1a] underline decoration-primary underline-offset-4"
                >
                  Xem các buổi phát trực tiếp
                </a>
              </div>
              <div className="relative w-full aspect-video rounded-sm overflow-hidden border border-[#e6e4df] bg-[#1c1b1a]">
                <iframe
                  src="https://www.youtube.com/embed/LqnmAvCswTo"
                  title="Hội Thánh Tin Lành Thủ Đức - Trực Tuyến"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-14 md:py-18 bg-[#f7f6f4]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1c1b1a] tracking-tight">
                Bài Viết Mới Nhất
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentPosts.map((post) => (
              <ScrollReveal key={post.slug}>
                <PostCard
                  title={post.title}
                  slug={post.slug}
                  date={post.date}
                  categories={post.categories}
                  categoryLabels={post.categoryLabels}
                  excerpt={post.excerpt}
                  thumbnail={post.featuredImage || post.thumbnail}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
