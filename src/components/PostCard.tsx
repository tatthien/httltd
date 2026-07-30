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
  categoryLabels,
  excerpt,
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
    <article className="group bg-white rounded-sm border border-[#e6e4df] overflow-hidden h-full flex flex-col transition-colors duration-150 hover:border-[#c9c5bb]">
      <Link href={postUrl} className="block relative w-full aspect-16/10 overflow-hidden bg-[#f7f6f4] shrink-0">
        <img 
          src={displayThumbnail} 
          alt={title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </Link>

      <div className="flex flex-col p-5 flex-1">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#69655d] font-medium mb-2">
          {categoryLabels?.[0] && <span>{categoryLabels[0]}</span>}
          {categoryLabels?.[0] && <span aria-hidden="true">·</span>}
          <time dateTime={date}>{formattedDate}</time>
        </div>

        <h3 className="text-lg font-bold leading-snug mb-2">
          <Link href={postUrl} className="text-[#1c1b1a] group-hover:underline decoration-primary underline-offset-4">
            {title}
          </Link>
        </h3>

        {excerpt && (
          <p className="text-sm text-[#5f5b54] leading-relaxed line-clamp-2">
            {excerpt}
          </p>
        )}
      </div>
    </article>
  );
}
