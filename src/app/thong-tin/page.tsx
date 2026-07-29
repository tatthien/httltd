import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Thông tin các ban ngành | Hội Thánh Tin Lành Thủ Đức',
  description: 'Thông tin về các ban ngành trong Hội Thánh Tin Lành Thủ Đức.',
};

const ministries = [
  {
    name: 'Ban Thiếu Ấu Nhi',
    schedule: '8h30 – 10h00 Chúa Nhật hàng tuần',
    members: '~150 em',
    description: 'Trải qua cùng 80 năm phát triển của Hội Thánh, ban Nhi đồng (nay là Ban Thiếu – Ấu – Nhi) hiện đang là nơi sinh hoạt của khoảng 150 em, với sự giúp đỡ của các thầy cô và anh chị cộng tác viên. Các em sinh hoạt và học lời Chúa theo từng lớp từ 8h30 đến 10h00 mỗi sáng Chúa nhật hằng tuần song song với giờ thờ phượng Chúa của Hội thánh và được chia làm 5 lớp theo từng độ tuổi: Nhà trẻ: dưới 3 tuổi, Ấu Nhi từ 4 – 6 tuổi, Nhi Đồng 1 từ 7 – 8 tuổi, Nhi Đồng 2 từ 9 – 10 tuổi và Thiếu Nhi từ 11 – 12 tuổi. Hàng tuần các em sẽ sinh hoạt vui chơi đầu giờ học, tôn vinh Chúa, cầu nguyện, dâng hiến, đố Kinh Thánh và nghe kể những câu chuyện theo loạt bài học Kinh Thánh. Bên cạnh đó còn có các chương trình đặc biệt như Thánh Kinh Hè và Chương trình truyền giảng dành riêng cho các em.',
  },
  {
    name: 'Ban Thiếu Niên',
    schedule: '14h30 – 16h30 Chiều Chúa Nhật',
    members: '30–40 bạn',
    description: 'Sau hơn 26 năm (từ năm 1992-2018) thành lập và phát triển, dưới sự yêu thương chở che của Chúa cùng với sự yêu thương, giúp đỡ và dẫn dắt của Anh Chị hướng dẫn mà Ban Thiếu Niên đã có thể duy trì và phát triển mạnh mẽ cho đến ngày hôm nay. Hiện tại BTN đang sinh hoạt đều đặn vào mỗi trưa Chủ Nhật hàng tuần vào lúc 14h30-16h30. Đến với BTN Thủ Đức các bạn sẽ có cơ hội được cùng nhau thờ phượng Chúa hát ngợi khen, lắng nghe lời Chúa, sinh hoạt với các bạn cùng lứa, cùng nhau thông công, tham gia các hoạt động thi đua và vui chơi và đặc biệt cùng nhau kinh nghiệm Chúa.',
  },
  {
    name: 'Ban Thanh Niên',
    schedule: '14h30 Chúa Nhật hàng tuần',
    members: '~180 bạn',
    description: 'Đồng hành cùng Hội Thánh, Ban thanh niên Thủ Đức trải qua 80 năm thành lập và phát triển với khoảng 180 bạn đến từ rất nhiều tỉnh thành khác nhau. Ban thanh niên Thủ Đức cùng nhau nhóm lại vào 14h30 Chúa nhật hàng tuần với những chương trình thông công, học Kinh Thánh, đố Kinh Thánh hay chương trình tổng kết, sinh nhật vào mỗi cuối quý. Các bạn TN còn được tổ chức sinh hoạt theo 12 nhóm nhỏ vào mỗi tối Thứ 3 hàng tuần với loạt bài học Kinh Thánh theo sách Tin Lành Luca. Ngoài ra, Ban thanh niên Thủ Đức còn có 9 nhóm chức năng, bao gồm: Nhóm nhạc, nhóm âm thanh, nhóm máy chiếu, nhóm tiếp tân, nhóm đố KT, nhóm chương trình, nhóm TVCS, nhóm chứng đạo, nhóm cầu nguyện.',
  },
  {
    name: 'Ban Thanh Tráng',
    schedule: '16h00 Chúa Nhật hàng tuần',
    members: '~30 bạn',
    description: 'Được thành lập vào tháng 7/2010, Ban Thanh Tráng hiện nay có khoảng 30 bạn trung tín nhóm lại. Đặc trưng lứa tuổi thường hay bị cuốn hút trong công việc xã hội, sự nghiệp, bận rộn cuộc sống gia đình dễ bỏ qua sự thờ phượng Chúa. Nhưng cảm ơn Chúa, Ban Thanh Tráng thấy rõ nhu cầu trang bị lời dạy của Chúa trong hôn nhân gia đình, trong nuôi dạy con cái, nhu cầu hiệp lại với nhau để cùng thông công, chăm sóc, gây dựng đời sống thuộc linh. Ban Thanh Tráng sinh hoạt lúc 16h00 ngày Chúa Nhật hàng tuần với các chương trình: học lời Chúa, Thảo luận KT, Đố KT, điểm sách, khéo tay hay làm, làm chứng…',
  },
  {
    name: 'Ban Tráng Niên',
    schedule: '17h30 – 19h00 Chiều Chúa Nhật',
    members: '25–35 thành viên',
    description: 'Được thành lập từ năm 1997, Ban Tráng Niên là nơi sinh hoạt gắn kết của những tín hữu từ 40 đến 50 tuổi. Tuy là lứa tuổi với nhiều lo toan trong cuộc sống gia đình, nhưng cảm tạ Chúa vì Ngài vẫn ở cùng Ban Tráng Niên trong suốt 21 năm qua để gìn giữ và nuôi lớn mỗi thành viên trong sự nhận biết Ngài. Ban Tráng Niên sinh hoạt mỗi tuần lúc 17h30-19h00 vào mỗi chiều Chúa Nhật. Bên cạnh chương trình nhóm lại cùng học Kinh Thánh, Ban Tráng Niên còn tham gia cộng tác với Hội Thánh trong nhiều công việc chung và giao lưu thông công với nhiều anh em tại các Hội Thánh khác.',
  },
  {
    name: 'Ban Trung Niên',
    schedule: '19h30 Thứ Sáu hàng tuần',
    members: '20–30 thành viên',
    description: 'Cùng với sự phát triển của Hội Thánh, Ban Trung Niên được lớn lên từng ngày trong sự dẫn dắt của Chúa. Ban Trung Niên sinh hoạt vào lúc 19h30 thứ 6 hàng tuần không chỉ để cùng thờ phượng Chúa, cùng học Kinh Thánh và sinh hoạt niềm tin mà đây còn là cơ hội để các thành viên chia sẻ với nhau những kinh nghiệm quý báu về chăm sóc sức khỏe, cách sống gương mẫu cho con cháu, cách giải quyết những mâu thuẫn trong gia đình nhiều thế hệ.',
  },
  {
    name: 'Ban Lão Niên',
    schedule: 'Chúa Nhật cuối tháng (sau Lễ 2)',
    members: '45+ ông bà trên 60 tuổi',
    description: 'Từng được thành lập từ những năm 90 nhưng do những biến đổi của từng thời kỳ mà phải tạm ngưng sinh hoạt, đến năm 2014 Chúa đã cho Ban Lão Niên được tái lập với hơn 45 ông, bà trên 60 tuổi tham gia. Hiện nay, Ban Lão Niên nhóm lại sau giờ thờ phượng Chúa lễ 2 vào Chúa Nhật tuần cuối của mỗi tháng. Với các nội dung như bồi linh, cầu thay, ngợi khen, làm chứng, học Kinh Thánh theo chủ đề, sinh nhật; cùng như thông công cùng các Hội Thánh bạn.',
  },
  {
    name: 'Ban Phụ Nữ',
    schedule: '15h00 Thứ Bảy hàng tuần',
    members: '20–25 ban viên',
    description: 'Ban Phụ Nữ được thành lập từ năm 2002 với mục đích đáp ứng nhu cầu đời sống thuộc linh và giúp đỡ nhau của các chị, em trong cả Hội Thánh. Ban Phụ Nữ thờ phượng Chúa và sinh hoạt thường xuyên vào lúc 15h00 chiều Thứ Bảy hàng tuần với khoảng 20 – 25 ban viên tham dự, được chia thành ba nhóm nhỏ và luân phiên phụ trách chương trình với các tiết mục như học Lời Chúa, cầu thay, thảo luận Kinh Thánh, đố Kinh Thánh… Bên cạnh đó, Ban Phụ Nữ còn có các chuyến du lịch dã ngoại, cũng như tham gia thông công, bồi linh tại các Hội Thánh bạn và khu vực.',
  },
];

export default function ThongTinPage() {
  return (
    <div>
      <PageHero title="Thông Tin Các Ban Ngành" />

      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ministries.map((ministry, idx) => (
              <ScrollReveal key={idx}>
                <div className="bg-white rounded-xl overflow-hidden shadow-xs flex flex-col h-full">
                  <div className="p-6 bg-[#faf8f5]">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{ministry.name}</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#a38a35] font-semibold">
                      <span>{ministry.schedule}</span>
                    </div>
                  </div>
                  <div className="p-6 text-slate-600 text-sm leading-relaxed flex-1">
                    <p>{ministry.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
