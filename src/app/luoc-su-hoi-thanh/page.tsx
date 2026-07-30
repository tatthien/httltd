import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Lược sử Hội Thánh | Hội Thánh Tin Lành Thủ Đức',
  description: 'Lịch sử hình thành và phát triển của Hội Thánh Tin Lành Thủ Đức từ năm 1938.',
};

export default function LuocSuPage() {
  return (
    <div>
      <PageHero title="Lược Sử Hội Thánh" />

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="post-content clearfix text-[#333] text-base md:text-lg leading-relaxed space-y-5">
              <p>
                Quận Thủ Đức, một địa danh nổi tiếng trong tỉnh Gia Định xưa; Trước năm 1975, Quận Thủ Đức với những cánh đồng lúa vàng trĩu hạt, những khu vườn cây ăn trái xum xuê, rừng cao su xanh ngát và những nhà máy kỹ nghệ thuộc vào loại lớn nhất thời bấy giờ như: Xi Măng Hà Tiên, Sữa hộp FOREMOST, Dệt VIMYTEX, Nhiệt Điện Thủ Đức . . . cùng không ít trường học từ Tiểu học đến Đại học. Ngày nay, Quận Thủ Đức thuộc thành phố Hồ Chí Minh, với hoạt động kinh tế đa dạng nên được các nhà đầu tư trong và ngoài nước đang quan tâm đầu tư trên nhiều mặt.
              </p>

              {/* 1. alignright */}
              <figure className="my-3 sm:float-right sm:ml-6 sm:mb-4 w-full sm:w-[310px] flex flex-col items-center">
                <img src="/images/luoc-su/nha-tho-dau-tien.jpg" alt="Nhà thờ đầu tiên (1940)" className="rounded-md shadow-xs w-full h-auto" />
                <figcaption className="text-sm text-[#75726b] mt-2 italic text-center">Nhà thờ đầu tiên (1940)</figcaption>
              </figure>

              <p>
                Đức Chúa Trời, Đấng Toàn tri, đang tể trị khắp mọi nơi, cho nên vào năm 1936, Chúa dẫn dắt gia đình ông Đặng Bính Nam là tín hữu người Hoa từ Vĩnh Long đến Thủ Đức, sinh sống bằng nghề thuốc Đông y (cũng là thân sinh của ông Mục sư Đặng Văn Lục).
              </p>

              <p>
                Ông Đặng Bính Nam với tấm lòng yêu mến Chúa và được Chúa Thánh Linh soi dẫn, ông nhìn thấy còn rất nhiều người chưa được nghe Tin Lành, chưa có cơ sở nhà Chúa tại đây, cho nên đã thông tin đến Ban Trị sự Nam Kỳ. Đầu năm 1938, Mục sư Phạm Văn Năm được sai phái đến Thủ Đức với sự hỗ trợ của giáo sĩ Jules Ferry.
              </p>

              <p>
                Đoàn Truyền Giáo thuê một căn phố tại chợ Thủ Đức dùng làm nơi nhóm họp thờ phượng Chúa, và rao giảng Tin Lành suốt tuần lễ vào buổi tối, ban ngày ra đi phát sách và chứng đạo cho mọi người. Vì thế, đồng bào đến nghe giảng rất đông.
              </p>

              {/* 2. alignright */}
              <figure className="my-3 sm:float-right sm:ml-6 sm:mb-4 w-full sm:w-[310px] flex flex-col items-center">
                <img src="/images/luoc-su/gs-irwin-1950.jpg" alt="Giáo sĩ E.F. Irwin thăm Hội Thánh (1950)" className="rounded-md shadow-xs w-full h-auto" />
                <figcaption className="text-sm text-[#75726b] mt-2 italic text-center">Giáo sĩ E.F. Irwin thăm Hội Thánh (1950)</figcaption>
              </figure>

              <p>
                Kết quả ban đầu tin Chúa tại căn phố thuê ở chợ Thủ Đức có ông hương cả Nguyễn Văn Hy (là thân sinh của ông hương chánh Nguyễn Văn Đồng và là ông nội của bà Nguyễn Thị Chửng ở Bình Phú-Thủ Đức, con cháu của ông hiện đang sinh hoạt với Hội Thánh, đến nay đã được 6 thế hệ). Cùng thời gian này, có ông Hồ Văn Đáp tin Chúa từ chiến dịch truyền giảng Tin Lành tại chợ Lái Thiêu, vì không có nơi nhóm lại, nên cũng về căn phố tại chợ Thủ Đức hiệp tác cùng tôi con Chúa sinh hoạt thờ phượng Chúa và rao giảng Tin Lành, (ông là thân sinh của ông chấp sự Hồ Văn In là Thư ký của Hội Thánh Thủ Đức trong nhiều năm, hiện đang sinh hoạt tại Hội Thánh Bình Chiểu –Thủ Đức). Có nhiều người tin nhận Chúa như: ông Nguyễn Văn Bi, bà Ba Chơn, ông bà Ba Mỹ, ông Sáu Đâu, ông Út Phòn, ông Tám Biển… số tín hữu ngày càng thêm lên và Hội Thánh Thủ Đức được thành lập trong cùng năm 1938.
              </p>

              <p>
                Với kết quả trên vào năm 1939 Mục sư Bùi Tự Do được Ban Trị sự Địa Hạt Đông Nam Bộ bổ nhiệm đến Hội Thánh làm chủ tọa đầu tiên. Mục sư cùng với tín hữu trong Hội Thánh tiếp tục rao giảng Tin Lành và phát triển Hội Thánh.
              </p>

              <p>
                Tạ ơn Chúa, năm 1940 Hội Thánh mua được 03 căn phố ngay tại địa điểm nhà thờ hiện nay, sửa chữa lại thành một ngôi nhà thờ khang trang, rộng rãi, để tín hữu có chỗ sinh hoạt và thờ phượng Chúa.
              </p>

              <p>
                Tháng 7 năm 1941 có một sự kiện rất đặc biệt mà không thể không nhắc đến, đó là có một chiếc xe ngựa chở &ldquo;phái đoàn Sư-sãi&rdquo; vào nhà thờ quì gối ăn năn tin nhận Chúa. Cả Hội Thánh đều bật khóc vì quyền năng Chúa quá lạ lùng. Đó là gia đình của bà Võ Thị Hiệu, cũng là trái đầu mùa của vùng đất Thạnh Mỹ Lợi – Quận 2 hiện nay.
              </p>

              <div className="clear-both" />

              {/* 3. alignleft */}
              <figure className="my-3 sm:float-left sm:mr-6 sm:mb-4 w-full sm:w-[220px] flex flex-col items-center">
                <img src="/images/luoc-su/1954.jpg" alt="Nhà thờ năm 1954" className="rounded-md shadow-xs w-full h-auto" />
                <figcaption className="text-sm text-[#75726b] mt-2 italic text-center">Nhà thờ năm 1954</figcaption>
              </figure>

              <p>
                Theo lịch sử Hội Thánh từng giai đoạn, Đức Chúa Trời đã lựa chọn, sắm sẵn và đưa đường những đầy tớ Chúa đến và dự phần cùng con dân Chúa phát triển nhà Ngài.
              </p>

              <p>Chủ tọa Hội Thánh những năm sau đó gồm có:</p>

              <ul className="list-disc pl-6 space-y-1 my-3">
                <li>Ông bà Mục sư Diệp Văn Cẩn (Năm 1944 – 1946)</li>
                <li>Ông bà Truyền đạo Phạm Đăng Minh (Năm 1946)</li>
                <li>Ông bà Truyền đạo Hồ Ngọc Diệu (Năm 1947 – 1948)</li>
                <li>Ông bà Mục sư Nguyễn Thiện Pháp (Năm 1948 – 1954)</li>
                <li>Ông bà Mục sư Trần Thự Quang (Năm 1954 – 1957)</li>
                <li>Ông bà Mục sư Nguyễn Văn Nhung (Năm 1957 – 1962)</li>
                <li>Ông bà Mục sư Trần Xuân Hỉ (Năm 1962 – 1973)</li>
              </ul>

              <p>
                Ơn Chúa quả thật quá lớn lao khi Ngài luôn yêu và đã chọn Thủ Đức để gieo ra những hạt mầm Tin Lành, để rồi trải qua nhiều năm tháng, Chúa vẫn luôn chăm sóc, nuôi nấng Hội Thánh lớn lên cùng với đức tin và sự dấn thân phục vụ hết lòng của biết bao thế hệ. Trước những việc Chúa làm, hàng ngàn con dân Ngài dù hiện đang ở tại nơi đây, hay đã từ đây đi đến nhiều nơi xa khác, vẫn luôn ghi khắc trong tấm lòng mình về ân điển dư dật ban cho của Đức Chúa Trời.
              </p>

              <div className="clear-both" />

              {/* 4. alignright */}
              <figure className="my-3 sm:float-right sm:ml-6 sm:mb-4 w-full sm:w-[284px] flex flex-col items-center">
                <img src="/images/luoc-su/1968.jpeg" alt="Nhà thờ bị sập do biến cố Tết Mậu Thân 1968" className="rounded-md shadow-xs w-full h-auto" />
                <figcaption className="text-sm text-[#75726b] mt-2 italic text-center">Nhà thờ bị sập do biến cố Tết Mậu Thân 1968</figcaption>
              </figure>

              <p>
                Vào năm 1968 trong biến cố Tết Mậu thân, nhà thờ và tư thất, bị phá hủy hoàn toàn do bom đạn chiến tranh, đây là một thử thách lớn đối với Hội Thánh Chúa. Điều lạ lùng mặc dù nhà thờ, tư thất bị sụp đổ nhưng gia đình của ông bà Mục sư Trần Xuân Hỉ và các gia đình tín hữu xung quanh được Chúa gìn giữ trong sự bình an.
              </p>

              <p>
                Trong hoàn cảnh thử thách đó, quý tôi con Chúa đã cùng nhau hiệp lại cầu nguyện, thu gom những vật liệu còn sót lại, cùng nhau chung sức, đóng góp xây dựng một ngôi nhà thờ tạm với diện tích (7 x 16m) để làm nơi sinh hoạt và thờ phượng. Đến năm 1972, Chúa cho nhà thờ được xây dựng lại với diện tích (10 x 25m).
              </p>

              <div className="clear-both" />

              {/* 5. alignleft */}
              <figure className="my-3 sm:float-left sm:mr-6 sm:mb-4 w-full sm:w-[310px] flex flex-col items-center">
                <img src="/images/luoc-su/1969.jpg" alt="Nhà thờ tạm sau biến cố Tết Mậu Thân 1968" className="rounded-md shadow-xs w-full h-auto" />
                <figcaption className="text-sm text-[#75726b] mt-2 italic text-center">Nhà thờ tạm sau biến cố Tết Mậu Thân 1968</figcaption>
              </figure>

              <p>
                Năm 1973 – 1992: ông bà Mục sư Huỳnh Văn Kiểm được mời về chủ tọa Hội Thánh.
              </p>

              <p>
                Trong hai năm (1973-1974) ông bà Mục sư, Ban Chấp sự, tín hữu trong Hội thánh, cùng đoàn Truyền giáo lưu hành của Địa hạt Đông Nam Bộ tổ chức các buổi truyền giảng cho đồng bào các khu vực: Phước Bình, Chợ Nhỏ, Suối Tiên, Thạnh Mỹ Lợi, kết quả có nhiều người tin nhận Chúa.
              </p>

              <p>
                Và để sự sinh hoạt và thờ phượng Chúa của các tín hữu được thuận tiện, đầu năm 1974 Hội Thánh tách 1 số tín hữu và tân tín hữu cư ngụ tại khu vực Phước Bình, thành lập Hội Thánh Tin Lành – Chi Hội Phước Bình.
              </p>

              <p>
                Cuối năm 1974 Hội Thánh tách 1 số tín hữu và tân tín hữu cư ngụ tại khu vực Chợ Nhỏ, thành lập Hội Thánh Tin Lành – Chi Hội Tăng Nhơn Phú nay là Chi Hội Hiệp Phú. Hai Chi hội trên vẫn được phát triển và kết quả cho đến ngày nay.
              </p>

              <p>
                Từ ngày 30/04/1975, Hội Thánh bước sang thời kỳ mới cùng đất nước Việt Nam được thống nhất hai miền Nam – Bắc.
              </p>

              <div className="clear-both" />

              {/* 6. alignright */}
              <figure className="my-3 sm:float-right sm:ml-6 sm:mb-4 w-full sm:w-[260px] flex flex-col items-center">
                <img src="/images/luoc-su/nha-tho-2002.jpg" alt="Nhà thờ năm 2002" className="rounded-md shadow-xs w-full h-auto" />
                <figcaption className="text-sm text-[#75726b] mt-2 italic text-center">Nhà thờ năm 2002</figcaption>
              </figure>

              <p>
                Tuy giai đoạn đầu Hội Thánh gặp nhiều khó khăn nhưng cảm tạ ơn Chúa, Đức Chúa Trời là Đấng tể trị mọi sự hằng ban ơn, dẫn dắt Hội Thánh Ngài phát triển cả về thuộc linh lẫn thuộc thể.
              </p>

              <p>
                Năm 1990 tường rào bao quanh khu vực nhà thờ được xây dựng để gìn giữ an ninh, trật tự khi Hội Thánh sinh hoạt, nhóm họp thờ phượng.
              </p>

              <p>
                Tháng 3 năm 1992, ông bà Truyền Đạo Đặng Văn Dũng được mời về Quản nhiệm Hội Thánh thay cho ông bà Mục sư Huỳnh Văn Kiểm.
              </p>

              <p>
                Với nhu cầu ngày càng phát triển, Quản nhiệm cùng với Ban chấp sự Hội Thánh thống nhất thực hiện nâng cấp và mở rộng diện tích ngôi nhà thờ từ (10 x 25m) thành (14 x 33m), và xây mới các hạng mục khác, khởi công từ đầu quý 3/1996 và hoàn tất năm 2002.
              </p>

              <p>
                Hội Thánh bắt đầu tổ chức Chương trình Truyền giảng vào mỗi tối Chúa nhật hàng tuần, thêm lên cơ hội để thân hữu được đến nghe về Phúc Âm và có thêm nhiều người hơn được cứu trong danh Chúa Giê-xu thêm vào Hội Thánh.
              </p>

              <p>
                Tháng 8 năm 2003 Hội Thánh Thủ Đức tổ chức Lễ Cảm Tạ 65 năm Thành Lập (1938 – 2003), cũng là dịp Hội Thánh cảm tạ Chúa đã ban ơn cho công việc nâng cấp và mở rộng nhà thờ được hoàn tất tốt đẹp, vinh hiển danh Ngài.
              </p>

              <div className="clear-both" />

              {/* 7. alignleft */}
              <figure className="my-3 sm:float-left sm:mr-6 sm:mb-4 w-full sm:w-[293px] flex flex-col items-center">
                <img src="/images/luoc-su/2003.jpg" alt="Lễ Cảm Tạ 65 năm hình thành và phát triển Hội Thánh Thủ Đức" className="rounded-md shadow-xs w-full h-auto" />
                <figcaption className="text-sm text-[#75726b] mt-2 italic text-center">Lễ Cảm Tạ 65 năm hình thành và phát triển Hội Thánh Thủ Đức</figcaption>
              </figure>

              <p>
                Tháng 4 năm 2008 Mục sư Quản nhiệm, Ban chấp sự Hội thánh, cùng với sự hỗ trợ của ông Mục sư Nguyễn Văn Lân (tỉnh Bình Dương), đã cậy ơn Chúa mở 02 điểm nhóm và được chính quyền cấp phép:
              </p>

              <p>Đó là Điểm nhóm Đồng An và Điểm nhóm Dĩ An.</p>

              <p>
                Điểm nhóm Đồng An, ban đầu nhóm lại tại nhà của ông bà Hồ Văn In – Thư ký Hội Thánh, số 21/1A, ấp Đồng An, xã Hòa Bình, Huyện Thuận An, Tỉnh Bình Dương.
              </p>

              <div className="clear-both" />

              {/* 8. alignright */}
              <figure className="my-3 sm:float-right sm:ml-6 sm:mb-4 w-full sm:w-[349px] flex flex-col items-center">
                <img src="/images/luoc-su/binh-chieu.jpg" alt="Con dân Chúa tại Điểm nhóm Bình Chiểu" className="rounded-md shadow-xs w-full h-auto" />
                <figcaption className="text-sm text-[#75726b] mt-2 italic text-center">Con dân Chúa tại Điểm nhóm Bình Chiểu</figcaption>
              </figure>

              <p>
                Với 3 tổ cầu nguyện, 60 – 80 tín hữu nhóm lại, 02 chấp sự Hội Thánh được phân công hỗ trợ và Truyền đạo Nguyễn Thương – Phụ tá Quản nhiệm được cử về làm đặc trách điểm nhóm. Để đáp ứng nhu cầu phát triển của điểm nhóm Hội Thánh đã mua 1 cơ sở tại địa chỉ số 301H Ngô Chí Quốc, P. Bình Chiểu, Quận Thủ Đức, TP.HCM, tiến hành xây dựng nhà thờ, và di đời điểm nhóm Đồng An về địa chỉ trên và đổi tên thành Điểm nhóm Bình Chiểu. Hiện nay là Chi hội Bình Chiểu do MSNC Nguyễn Thương Quản nhiệm, mỗi tuần Hội thánh nhóm lại 120 – 150 tín hữu.
              </p>

              <p>
                Điểm nhóm Dĩ An, nhóm tại nhà của ông bà Lý Ngọc An – Tín hữu Hội Thánh, Địa chỉ số 19/21, khu phố Thắng Lợi II, Thị Trấn Dĩ An, Huyện Dĩ An, Tỉnh Bình Dương.
              </p>

              <div className="clear-both" />

              {/* 9. alignleft */}
              <figure className="my-3 sm:float-left sm:mr-6 sm:mb-4 w-full sm:w-[300px] flex flex-col items-center">
                <img src="/images/luoc-su/di-an.jpg" alt="Con dân Chúa tại Điểm nhóm Dĩ An" className="rounded-md shadow-xs w-full h-auto" />
                <figcaption className="text-sm text-[#75726b] mt-2 italic text-center">Con dân Chúa tại Điểm nhóm Dĩ An</figcaption>
              </figure>

              <p>
                Với 3 tổ cầu nguyện, 60 – 80 tín hữu nhóm lại và 02 chấp sự Hội Thánh hỗ trợ cùng MSNC Võ Văn Kiêm Toàn – Phụ tá Quản nhiệm, sau đó là Truyền đạo Đào Văn Hoa – Phụ tá Quản nhiệm được cử về làm đặc trách điểm nhóm. Để đáp ứng nhu cầu phát triển của điểm nhóm Hội Thánh đã mua 1 cơ sở tại địa chỉ số 24 – 26 Nguyễn Du – KP Đông Tân, P. Dĩ An, Thị xã Dĩ An, Tỉnh Bình Dương, cho tiến hành sửa chữa, và di dời điểm nhóm Dĩ An về đây.
              </p>

              <p>
                Vào tháng 1 năm 2015, để thuận lợi cho Điểm nhóm Dĩ An từng bước chuyển lên chi hội, được đồng ý và hướng dẫn của Ban Trị sự Tổng Liên hội, điểm nhóm Dĩ An được bàn giao về cho Hội Thánh Bình Dương do Mục sư Trần Văn Hiền làm quản nhiệm, kiêm nhiệm Điểm nhóm Dĩ An. Hiện nay, đặc trách điểm nhóm là Mục sư Nguyễn Công Trứ với số tín hữu nhóm lại mỗi tuần từ 120 – 150 người.
              </p>

              <p>
                Tháng 4/2010 ông bà Mục sư Lê Đình Hiên được mời về Quản nhiệm Hội Thánh, Chúa đã ban ơn cho Hội Thánh được ổn định và phát triển.
              </p>

              <p>
                Các ban Lão niên, ban Thanh tráng được tái lập và thành lập, các tổ cầu nguyện theo khu vực được tăng lên 23 tổ, sinh hoạt hàng tuần cùng góp phần tích cực trong việc hình thành và phát triển điểm nhóm.
              </p>

              <p>
                Năm 2015, Ban vận động thành lập điểm nhóm Linh Xuân được thành lập. Đến tháng 4 năm 2016, buổi nhóm đầu tiên được tổ chức tại địa chỉ: 63/12/3 đường số 8, khu phố 1, phường Linh Xuân, quận Thủ Đức.
              </p>

              <div className="clear-both" />

              {/* 10. alignleft */}
              <figure className="my-3 sm:float-left sm:mr-6 sm:mb-4 w-full sm:w-[326px] flex flex-col items-center">
                <img src="/images/luoc-su/linh-xuan.jpg" alt="Con dân Chúa tại Điểm nhóm Linh Xuân" className="rounded-md shadow-xs w-full h-auto" />
                <figcaption className="text-sm text-[#75726b] mt-2 italic text-center">Con dân Chúa tại Điểm nhóm Linh Xuân</figcaption>
              </figure>

              <p>
                Điểm nhóm Linh Xuân, được thành lập từ 3 tổ cầu nguyện, Truyền đạo Đào Văn Hoa – Phụ tá Quản nhiệm được cử về đặc trách Điểm nhóm, cùng 2 chấp sự hỗ trợ và mỗi tuần có khoảng 60 – 100 tín hữu nhóm lại. Đến tháng 4 năm 2017, Hội Thánh nhận được giấy phép thành lập điểm nhóm Tin Lành Linh Xuân.
              </p>

              <p>
                Điểm nhóm ngày càng phát triển, để đáp ứng nhu cầu trên, Hội Thánh đã mua 1 thửa đất tại đường số 8, Phường Linh Xuân, Quận Thủ Đức và đang chuẩn bị xây nhà thờ cho Điểm nhóm Linh Xuân.
              </p>

              <p>
                Số tín hữu trong Hội Thánh Thủ Đức tiếp tục được gia tăng, mỗi buổi sáng Chúa nhật không đủ chỗ cho tín hữu ngồi bên trong nhà thờ để thờ phượng Chúa, phải ngồi ra ngoài sân mưa, nắng thất thường, Vì vậy, bắt đầu từ tháng 10/2017 Hội Thánh đã tổ chức thêm một lễ thờ phượng Chúa vào mỗi sáng Chúa nhật.
              </p>

              <p>
                Lễ 1: Bắt đầu lúc 6 giờ 00 đến 7 giờ 30, mỗi buổi nhóm có từ 150 – 200 tín hữu. Lễ 2: Từ 8 giờ 45, mỗi buổi nhóm có từ 500 – 600 tín hữu.
              </p>

              <p>
                Nhằm giúp cho tín hữu hiểu biết và sống theo lời Chúa dạy, Hội Thánh tổ chức các chương trình như: đọc &amp; học Kinh Thánh hàng ngày, thi Kinh Thánh, qua các lớp Trường Chúa nhật, Cuộc đời Chúa Cứu Thế…, ngoài ra, Hội Thánh cũng tham gia các buổi bồi linh, huấn luyện do Tổng Liên Hội hoặc Ban Đại Diện Tin Lành thành phố Hồ Chí Minh tổ chức.
              </p>

              <p>
                Công tác chỉnh trang cơ sở nhà thờ, luôn được quan tâm, trong những năm qua Hội Thánh đã thực hiện, sơn lại nhà thờ, tư thất, các phòng nhóm, các phòng kho, nhà vệ sinh, sân để xe, thay mới máy lạnh nhà thờ, trang bị màn hình led… tất cả đều từ ngân quỹ của Hội Thánh và các ân nhân dâng hiến.
              </p>

              <p>
                Về công tác Y tế – Xã hội, Hội Thánh Thủ Đức đã tổ chức những chuyến cứu trợ, giúp đỡ các gia đình gặp khó khăn ở vùng sâu, vùng xa, trong và ngoài Hội Thánh, đem lại sự an ủi, khích lệ chung cho con dân Chúa, và đồng bào.
              </p>

              <p>
                Và hôm nay là Lễ Cảm tạ kỷ niệm 80 năm Thành Lập Hội Thánh Tin Lành Thủ Đức (1938 -2018), đây là cớ rất lớn để tất cả chúng ta cùng bày tỏ tấm lòng biết ơn Đức Chúa Trời khi nhìn lại hành trình dài <strong>ƠN CÀNG THÊM ƠN</strong> mà Ngài đã ban cho từng con dân, từng gia đình qua từng giây phút, từng tháng năm.
              </p>

              <div className="clear-both" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
