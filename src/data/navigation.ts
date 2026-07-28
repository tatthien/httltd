export interface NavItem {
  label: string;
  href: string;
}

export const headerNav: NavItem[] = [
  { label: 'Trang Chủ', href: '/' },
  { label: 'Thông Báo', href: '/category/thong-bao' },
  { label: 'Tin Tức', href: '/category/tin-tuc' },
  { label: 'Bài Học', href: '/category/bai-hoc' },
  { label: 'Dâng Hiến', href: '/dang-hien' },
];

export const footerNav: NavItem[] = [
  { label: 'Thông tin', href: '/thong-tin' },
  { label: '7 Điều Cần Nhất Trên Đời', href: '/7-dieu-can-nhat-tren-doi' },
  { label: 'Lược sử Hội Thánh', href: '/luoc-su-hoi-thanh' },
  { label: 'Giờ sinh hoạt', href: '/gio-sinh-hoat' },
  { label: 'Tin Tức', href: '/category/tin-tuc' },
  { label: 'Bài Học', href: '/category/bai-hoc' },
];

export interface ChurchInfo {
  name: string;
  description: string;
  phone: string;
  email: string;
  address: string;
}

export const churchInfo: ChurchInfo = {
  name: 'Hội Thánh Tin Lành Thủ Đức',
  description: 'Đây là kênh thông tin trực tuyến chính thức của Hội Thánh Tin Lành - Chi hội Thủ Đức, được xây dựng và trực tiếp quản lý thông tin bởi Ban Truyền Thông, thuộc HTTL Chi Hội Thủ Đức.',
  phone: '+8428 6686 3485',
  email: 'truyenthonghttd@gmail.com',
  address: '156 Tô Ngọc Vân, Linh Đông, Thủ Đức, Hồ Chí Minh',
};
