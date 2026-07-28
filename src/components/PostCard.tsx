import Link from 'next/link';

interface PostCardProps {
  title: string;
  slug: string;
  date: string;
  categories?: string[];
  categoryLabels?: string[];
  excerpt?: string;
  thumbnail?: string;
}

export default function PostCard({
  title,
  slug,
  date,
  thumbnail,
}: PostCardProps) {
  const postUrl = `/bai-viet/${slug}`;
  const displayThumbnail = thumbnail || 'https://picsum.photos/400/250';
  
  // Format date to Vietnamese
  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <article className="group bg-white rounded-md p-5 shadow-2xs hover:shadow-md transition-all duration-200 h-full flex flex-col justify-between">
      <div className="flex flex-col flex-1">
        <h3 className="text-base font-bold leading-snug mb-2">
          <Link href={postUrl} className="text-[#1c1b1a] group-hover:text-[#bca141] transition-colors">
            {title}
          </Link>
        </h3>

        <div className="text-xs text-[#a38a35] font-medium mb-4 mt-auto">
          <time dateTime={date}>{formattedDate}</time>
        </div>
      </div>

      <Link href={postUrl} className="block relative w-full aspect-16/10 rounded-sm overflow-hidden bg-[#f7f6f4] shrink-0">
        <img 
          src={displayThumbnail} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </Link>
    </article>
  );
}
