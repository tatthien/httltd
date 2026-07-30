import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#141413] text-[#a39f97] py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold text-white mb-1">HTTL Thủ Đức</h4>
            <p className="max-w-md text-sm text-[#a39f97] leading-relaxed">
              Đây là kênh thông tin trực tuyến chính thức của Hội Thánh Tin Lành - Chi hội Thủ Đức, được xây dựng và trực tiếp quản lý thông tin bởi Ban Truyền Thông, thuộc HTTL Chi Hội Thủ Đức.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold text-white mb-1">Liên hệ</h4>
            <div className="text-sm text-[#a39f97]">
              156 Tô Ngọc Vân, Linh Đông, Thủ Đức, Hồ Chí Minh
            </div>
            <div className="text-sm text-[#a39f97]">
              +8428 6686 3485
            </div>
            <div className="text-sm text-[#a39f97]">
              truyenthonghttd@gmail.com
            </div>
          </div>
          
          <div className="flex flex-col gap-2.5">
            <h4 className="text-base font-bold text-white mb-1">Liên kết nhanh</h4>
            <Link href="/" className="text-sm hover:text-primary-light transition-colors">Trang Chủ</Link>
            <Link href="/luoc-su-hoi-thanh" className="text-sm hover:text-primary-light transition-colors">Lược Sử Hội Thánh</Link>
            <Link href="/category/thong-bao" className="text-sm hover:text-primary-light transition-colors">Thông Báo</Link>
            <Link href="/category/tin-tuc" className="text-sm hover:text-primary-light transition-colors">Tin Tức</Link>
            <Link href="/category/bai-hoc" className="text-sm hover:text-primary-light transition-colors">Bài Học</Link>
            <Link href="/dang-hien" className="text-sm hover:text-primary-light transition-colors">Dâng Hiến</Link>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#262523] text-center text-xs text-[#736f68]">
          <p>&copy; {currentYear} Hội Thánh Tin Lành Thủ Đức.</p>
        </div>
      </div>
    </footer>
  );
}
