import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Giờ Sinh Hoạt | Hội Thánh Tin Lành Thủ Đức',
  description: 'Lịch sinh hoạt hàng tuần của Hội Thánh Tin Lành Thủ Đức.',
};

const schedule = [
  {
    day: 'Chúa Nhật',
    highlight: true,
    activities: [
      { time: '6:00 – 7:30', name: 'Thờ Phượng Chúa – Lễ 1' },
      { time: '7:45 – 8:45', name: 'Trường Chúa nhật – Lớp Giáo lý Báp-têm – Lớp Giáo lý Hậu Báp-têm' },
      { time: '9:00 – 10:30', name: 'Thờ Phượng Chúa – Lễ 2' },
      { time: '08:30 – 10:00', name: 'Ban Thiếu Ấu Nhi' },
      { time: '14:00 – 16:30', name: 'Chương trình nhóm của Ban Thanh niên' },
      { time: '15:00 – 17:00', name: 'Chương trình nhóm của Ban Thiếu niên' },
      { time: '16:30 – 18:30', name: 'Chương trình nhóm của Ban Thanh tráng' },
      { time: '18:00 – 19:30', name: 'Chương trình nhóm của Ban Tráng niên' },
    ],
  },
  {
    day: 'Hằng Ngày',
    highlight: false,
    activities: [
      { time: '05:30 – 06:00', name: 'Cầu nguyện tại nhà thờ' },
    ],
  },
  {
    day: 'Thứ Hai',
    highlight: false,
    activities: [
      { time: '19:30 – 20:30', name: 'Trưởng, phó các tổ cầu nguyện sinh hoạt & học Kinh Thánh' },
    ],
  },
  {
    day: 'Thứ Ba',
    highlight: false,
    activities: [
      { time: '19:00 – 21:00', name: 'Sinh hoạt ban ngành, tập hát, học Kinh Thánh' },
    ],
  },
  {
    day: 'Thứ Tư',
    highlight: false,
    activities: [
      { time: '19:00 – 21:00', name: 'Ban Chứng đạo thờ phượng Chúa và sinh hoạt' },
      { time: '19:30 – 20:30', name: 'Lớp Cuộc Đời Chúa Cứu Thế' },
    ],
  },
  {
    day: 'Thứ Năm',
    highlight: false,
    activities: [
      { time: '', name: 'Thăm viếng tổ cầu nguyện' },
      { time: '', name: 'Cầu nguyện tại các tổ cầu nguyện (chẵn & lẻ)' },
    ],
  },
  {
    day: 'Thứ Sáu',
    highlight: false,
    activities: [
      { time: '19:30 – 21:00', name: 'Ban Trung niên thờ phượng Chúa và sinh hoạt' },
      { time: '19:00 – 21:00', name: 'Ban Truyền giảng ra đi chứng đạo & chăm sóc tân tín hữu' },
    ],
  },
  {
    day: 'Thứ Bảy',
    highlight: false,
    activities: [
      { time: '06:00 – 07:00', name: 'Lớp Ti-mô-thê thảo luận bài học Trường Chúa nhật' },
      { time: '08:00 – 11:30', name: 'Ban Truyền giảng ra đi chứng đạo' },
      { time: '15:00 – 16:30', name: 'Ban Phụ nữ thờ phượng Chúa và sinh hoạt' },
      { time: '18:00 – 19:30', name: 'Lớp Trường Chúa nhật & Lớp Cuộc Đời Chúa Cứu Thế' },
      { time: '19:00 – 21:00', name: 'Ban Truyền giảng ra đi chứng đạo & chăm sóc tân tín hữu' },
      { time: '19:30 – 21:00', name: 'Ban Âm nhạc & Ban Cắm Hoa' },
      { time: '19:30 – 21:00', name: 'Truyền giảng tại nhà thờ (Tuần thứ 3 mỗi tháng)' },
    ],
  },
];

export default function GioSinhHoatPage() {
  return (
    <main>
      <PageHero title="Giờ Sinh Hoạt" />

      <section className="py-12 md:py-16 bg-[#faf9f6]">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-5">
            {schedule.map((item, idx) => (
              <ScrollReveal key={idx}>
                <div className="bg-white rounded-sm overflow-hidden shadow-2xs">
                  <div className={`py-2.5 px-5 flex items-center gap-3 ${item.highlight ? 'bg-[#1c1b1a] text-white' : 'bg-[#f7f6f4]'}`}>
                    <h3 className={`font-bold text-sm uppercase tracking-wider ${item.highlight ? 'text-[#bca141]' : 'text-[#1c1b1a]'}`}>{item.day}</h3>
                  </div>
                  <div className="p-3 md:p-4 px-5 flex flex-col gap-1">
                    {item.activities.map((activity, aIdx) => (
                      <div key={aIdx} className="flex gap-4 py-1.5 items-center">
                        {activity.time && (
                          <span className="font-bold text-[#a38a35] text-xs uppercase tracking-wider min-w-[110px] shrink-0">{activity.time}</span>
                        )}
                        <span className="text-[#2d2c2a] text-sm leading-tight">{activity.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
