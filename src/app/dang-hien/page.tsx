import { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Dâng Hiến | Hội Thánh Tin Lành Thủ Đức',
  description: 'Mọi khoản dâng hiến xin vui lòng liên hệ Ban Thủ quỹ Hội Thánh hoặc chuyển khoản.',
};

export default function DangHienPage() {
  return (
    <div className="bg-white">
      <PageHero title="Dâng Hiến" />

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <p className="text-[#1c1b1a] text-base md:text-lg leading-relaxed mb-6 font-medium">
            Mọi khoản dâng hiến xin vui lòng liên hệ Ban Thủ quỹ Hội Thánh hoặc chuyển khoản:
          </p>

          <div className="flex flex-col gap-2 text-[#2d2c2a] text-base md:text-lg leading-relaxed mb-10">
            <h3 className="font-bold text-[#1c1b1a] text-lg md:text-xl mb-1">Tài Khoản VND</h3>
            <p><span className="text-[#1c1b1a] font-normal">Tên tài khoản: </span><strong className="font-bold">CHI HOI THU DUC – HOI THANH TIN LANH VIET NAM (MIEN NAM)</strong></p>
            <p><span className="text-[#1c1b1a] font-normal">Số tài khoản: </span><strong className="font-bold">1042680425</strong></p>
            <p><span className="text-[#1c1b1a] font-normal">Ngân hàng: </span><strong className="font-bold">Ngân Hàng Vietcombank – Chi nhánh TP. Hồ Chí Minh</strong></p>
          </div>

          <div className="flex justify-center my-10">
            <div className="w-full max-w-md">
              <img 
                src="/images/dang-hien-qr.jpg" 
                alt="Thông tin chuyển khoản Vietcombank - Chi Hội Thủ Đức" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
