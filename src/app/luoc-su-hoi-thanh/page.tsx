import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Lược sử Hội Thánh | Hội Thánh Tin Lành Thủ Đức',
  description: 'Lịch sử hình thành và phát triển của Hội Thánh Tin Lành Thủ Đức từ năm 1938.',
};

const timelineEvents = [
  {
    year: '1936–1938',
    title: 'Khởi đầu',
    content: 'Năm 1936, Chúa dẫn dắt gia đình ông Đặng Bính Nam là tín hữu người Hoa từ Vĩnh Long đến Thủ Đức sinh sống bằng nghề thuốc Đông y. Ông với tấm lòng yêu mến Chúa và được Chúa Thánh Linh soi dẫn, nhìn thấy còn rất nhiều người chưa được nghe Tin Lành, chưa có cơ sở nhà Chúa tại đây, cho nên đã thông tin đến Ban Trị sự Nam Kỳ. Đầu năm 1938, Mục sư Phạm Văn Năm được sai phái đến Thủ Đức với sự hỗ trợ của giáo sĩ Jules Ferry. Đoàn Truyền Giáo thuê một căn phố tại chợ Thủ Đức dùng làm nơi nhóm họp thờ phượng Chúa, và rao giảng Tin Lành suốt tuần lễ. Hội Thánh Thủ Đức được thành lập trong cùng năm 1938.',
  },
  {
    year: '1939',
    title: 'Chủ tọa đầu tiên',
    content: 'Mục sư Bùi Tự Do được Ban Trị sự Địa Hạt Đông Nam Bộ bổ nhiệm đến Hội Thánh làm chủ tọa đầu tiên. Mục sư cùng với tín hữu trong Hội Thánh tiếp tục rao giảng Tin Lành và phát triển Hội Thánh.',
  },
  {
    year: '1940',
    title: 'Nhà thờ đầu tiên',
    content: 'Hội Thánh mua được 03 căn phố ngay tại địa điểm nhà thờ hiện nay, sửa chữa lại thành một ngôi nhà thờ khang trang, rộng rãi, để tín hữu có chỗ sinh hoạt và thờ phượng Chúa.',
  },
  {
    year: '1941',
    title: 'Sự kiện đặc biệt',
    content: 'Tháng 7 năm 1941 có một sự kiện rất đặc biệt: một chiếc xe ngựa chở "phái đoàn Sư-sãi" vào nhà thờ quì gối ăn năn tin nhận Chúa. Cả Hội Thánh đều bật khóc vì quyền năng Chúa quá lạ lùng. Đó là gia đình của bà Võ Thị Hiệu, cũng là trái đầu mùa của vùng đất Thạnh Mỹ Lợi – Quận 2 hiện nay.',
  },
  {
    year: '1944–1973',
    title: 'Các Mục sư chủ tọa',
    content: 'Ông bà Mục sư Diệp Văn Cẩn (1944–1946), Ông bà Truyền đạo Phạm Đăng Minh (1946), Ông bà Truyền đạo Hồ Ngọc Diệu (1947–1948), Ông bà Mục sư Nguyễn Thiện Pháp (1948–1954), Ông bà Mục sư Trần Thự Quang (1954–1957), Ông bà Mục sư Nguyễn Văn Nhung (1957–1962), Ông bà Mục sư Trần Xuân Hỉ (1962–1973).',
  },
  {
    year: '1968',
    title: 'Biến cố Tết Mậu Thân',
    content: 'Trong biến cố Tết Mậu Thân, nhà thờ và tư thất bị phá hủy hoàn toàn do bom đạn chiến tranh. Điều lạ lùng mặc dù nhà thờ, tư thất bị sụp đổ nhưng gia đình của ông bà Mục sư Trần Xuân Hỉ và các gia đình tín hữu xung quanh được Chúa gìn giữ trong sự bình an. Quý tôi con Chúa đã cùng nhau hiệp lại cầu nguyện, thu gom những vật liệu còn sót lại, xây dựng một ngôi nhà thờ tạm với diện tích (7 x 16m). Đến năm 1972, nhà thờ được xây dựng lại với diện tích (10 x 25m).',
  },
  {
    year: '1973–1992',
    title: 'Mục sư Huỳnh Văn Kiểm',
    content: 'Ông bà Mục sư Huỳnh Văn Kiểm được mời về chủ tọa Hội Thánh. Trong hai năm (1973-1974), Hội Thánh tổ chức các buổi truyền giảng cho đồng bào các khu vực: Phước Bình, Chợ Nhỏ, Suối Tiên, Thạnh Mỹ Lợi, kết quả có nhiều người tin nhận Chúa.',
  },
  {
    year: '1974',
    title: 'Thành lập Chi hội mới',
    content: 'Đầu năm 1974, Hội Thánh tách một số tín hữu thành lập Hội Thánh Tin Lành – Chi Hội Phước Bình. Cuối năm 1974, thành lập thêm Chi Hội Tăng Nhơn Phú (nay là Chi Hội Hiệp Phú). Hai Chi hội vẫn được phát triển cho đến ngày nay.',
  },
  {
    year: '1992–2002',
    title: 'Mở rộng nhà thờ',
    content: 'Tháng 3 năm 1992, ông bà Truyền Đạo Đặng Văn Dũng được mời về Quản nhiệm Hội Thánh. Quản nhiệm cùng với Ban chấp sự thực hiện nâng cấp và mở rộng diện tích ngôi nhà thờ từ (10 x 25m) thành (14 x 33m), khởi công từ đầu quý 3/1996 và hoàn tất năm 2002.',
  },
  {
    year: '2003',
    title: 'Lễ Cảm Tạ 65 năm',
    content: 'Tháng 8 năm 2003, Hội Thánh Thủ Đức tổ chức Lễ Cảm Tạ 65 năm Thành Lập (1938–2003), cũng là dịp cảm tạ Chúa đã ban ơn cho công việc nâng cấp và mở rộng nhà thờ được hoàn tất tốt đẹp.',
  },
  {
    year: '2008',
    title: 'Điểm nhóm mới',
    content: 'Tháng 4 năm 2008, Hội Thánh đã mở 02 điểm nhóm: Điểm nhóm Đồng An (sau đổi tên thành Bình Chiểu) và Điểm nhóm Dĩ An. Hiện nay Chi hội Bình Chiểu mỗi tuần nhóm lại 120–150 tín hữu.',
  },
  {
    year: '2010',
    title: 'Mục sư Lê Đình Hiên',
    content: 'Tháng 4/2010, ông bà Mục sư Lê Đình Hiên được mời về Quản nhiệm Hội Thánh. Chúa đã ban ơn cho Hội Thánh được ổn định và phát triển. Các ban Lão niên, ban Thanh tráng được tái lập và thành lập, các tổ cầu nguyện theo khu vực được tăng lên 23 tổ.',
  },
  {
    year: '2015–2017',
    title: 'Điểm nhóm Linh Xuân',
    content: 'Năm 2015, Ban vận động thành lập điểm nhóm Linh Xuân được thành lập. Tháng 4 năm 2016, buổi nhóm đầu tiên được tổ chức. Tháng 4 năm 2017, Hội Thánh nhận được giấy phép thành lập điểm nhóm Tin Lành Linh Xuân, với mỗi tuần khoảng 60–100 tín hữu nhóm lại.',
  },
  {
    year: '2017',
    title: 'Hai lễ thờ phượng',
    content: 'Số tín hữu tiếp tục gia tăng, mỗi buổi sáng Chúa nhật không đủ chỗ cho tín hữu ngồi bên trong nhà thờ. Bắt đầu từ tháng 10/2017, Hội Thánh đã tổ chức thêm một lễ thờ phượng Chúa. Lễ 1: 6h00–7h30 (150–200 tín hữu). Lễ 2: 8h45 (500–600 tín hữu).',
  },
  {
    year: '2018',
    title: 'Lễ Cảm Tạ 80 năm',
    content: 'Lễ Cảm tạ kỷ niệm 80 năm Thành Lập Hội Thánh Tin Lành Thủ Đức (1938–2018), là dịp để tất cả cùng bày tỏ tấm lòng biết ơn Đức Chúa Trời khi nhìn lại hành trình dài ƠN CÀNG THÊM ƠN mà Ngài đã ban cho từng con dân, từng gia đình qua từng giây phút, từng tháng năm.',
  },
];

export default function LuocSuPage() {
  return (
    <main>
      <PageHero title="Lược Sử Hội Thánh" />

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="text-left mb-12 text-[#4a4844] text-base md:text-lg leading-relaxed pb-6">
              <p>
                Quận Thủ Đức, một địa danh nổi tiếng trong tỉnh Gia Định xưa. Trước năm 1975, Quận Thủ Đức với những 
                cánh đồng lúa vàng trĩu hạt, những khu vườn cây ăn trái xum xuê, rừng cao su xanh ngát và những nhà 
                máy kỹ nghệ thuộc vào loại lớn nhất thời bấy giờ. Ngày nay, Quận Thủ Đức thuộc thành phố Hồ Chí Minh, 
                với hoạt động kinh tế đa dạng.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-10 md:gap-12">
            {timelineEvents.map((event, idx) => (
              <ScrollReveal key={idx}>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1c1b1a] tracking-tight">{event.year}</h3>
                  <p className="text-[#4a4844] text-base md:text-lg leading-relaxed">
                    <strong className="text-[#1c1b1a] font-bold">{event.title}. </strong>
                    {event.content}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
