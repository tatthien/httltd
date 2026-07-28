import { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Dâng Hiến | Hội Thánh Tin Lành Thủ Đức',
  description: 'Mọi khoản dâng hiến xin vui lòng liên hệ Ban Thủ quỹ Hội Thánh hoặc chuyển khoản.',
};

export default function DangHienPage() {
  return (
    <main>
      <PageHero title="Dâng Hiến" />

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-xl mx-auto mb-10 text-slate-600 text-lg">
            <p>
              Mọi khoản dâng hiến xin vui lòng liên hệ Ban Thủ quỹ Hội Thánh hoặc quét mã QR / chuyển khoản:
            </p>
          </div>

          <div className="max-w-xl mx-auto mb-8 bg-white rounded-lg overflow-hidden shadow-xs">
            <div className="bg-[#1c1b1a] p-6 flex items-center justify-between text-white">
              <h2 className="text-xl font-bold text-[#bca141] m-0">Tài Khoản VND</h2>
            </div>
            <div className="p-6 md:p-8 flex flex-col items-center gap-6">
              <div className="w-full max-w-xs rounded-md overflow-hidden shadow-2xs border border-[#e6e4df] bg-white p-2">
                <img 
                  src="/images/dang-hien-qr.jpg" 
                  alt="Mã QR chuyển khoản Vietcombank - Chi Hội Thủ Đức" 
                  className="w-full h-auto object-contain rounded-xs"
                />
              </div>

              <div className="flex flex-col gap-4 text-left w-full">
                <div className="flex flex-col gap-1 pb-3 border-b border-[#f0eee8]">
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Tên tài khoản</span>
                  <span className="text-base font-semibold text-slate-900">CHI HOI THU DUC – HOI THANH TIN LANH VIET NAM (MIEN NAM)</span>
                </div>
                <div className="flex flex-col gap-1 pb-3 border-b border-[#f0eee8]">
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Số tài khoản</span>
                  <span className="text-2xl font-bold text-[#a38a35] tabular-nums tracking-wide">1042680425</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Ngân hàng</span>
                  <span className="text-base font-semibold text-slate-900">Ngân Hàng Vietcombank – Chi nhánh TP. Hồ Chí Minh</span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-xl mx-auto p-6 bg-[#faf8f5] rounded-lg text-slate-600 text-sm md:text-base leading-relaxed">
            <p>
              <strong className="text-slate-900">Lưu ý:</strong> Khi chuyển khoản, xin vui lòng ghi rõ nội dung chuyển khoản 
              (ví dụ: Dâng hiến, Dâng hiến xây dựng, v.v.) để Ban Thủ quỹ tiện theo dõi và ghi nhận.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
