import Link from 'next/link';
import { getAllPosts } from '@/data/posts';
import PostCard from '@/components/PostCard';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 6);

  return (
    <div>
      {/* YouTube Live Stream Section */}
      <section className="py-10 md:py-14 bg-[#f7f6f4]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="relative w-full aspect-video rounded-sm overflow-hidden shadow-xs bg-[#1c1b1a]">
              <iframe
                src="https://www.youtube.com/embed/5ldIQY6-XPM"
                title="Hội Thánh Tin Lành Thủ Đức - Trực Tuyến"
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hero Section */}
      <section 
        className="relative bg-fixed bg-cover bg-center text-white py-16 md:py-22 px-4 text-center overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: `url('/images/service-schedule-bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-[#1c1b1a]/85"></div>
        <div className="relative z-10 max-w-3xl mx-auto w-full flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wider text-white mb-2">
            Giờ Thờ Phượng Chung
          </h2>
          <p className="text-white/80 font-semibold text-base mb-6">Chúa Nhật hàng tuần</p>
          <div className="flex items-center justify-center gap-6 md:gap-10 bg-[#1c1b1a]/90 backdrop-blur-xs rounded-sm p-6 mb-8 flex-wrap w-full max-w-xl">
            <div className="flex flex-col items-center gap-1">
              <span className="text-[0.7rem] uppercase tracking-widest text-[#bca141] font-bold">Lễ 1</span>
              <span className="text-xl md:text-2xl font-bold text-white">06:00 – 08:00</span>
            </div>
            <div className="w-[1px] h-10 bg-white/20 hidden sm:block"></div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-[0.7rem] uppercase tracking-widest text-[#bca141] font-bold">Lễ 2</span>
              <span className="text-xl md:text-2xl font-bold text-white">09:00 – 11:00</span>
            </div>
          </div>
          <Link 
            href="/gio-sinh-hoat" 
            className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-xs bg-[#bca141] text-[#1c1b1a] hover:bg-[#a38a35] hover:text-white transition-colors shadow-sm"
          >
            Xem Giờ Sinh Hoạt
          </Link>
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
