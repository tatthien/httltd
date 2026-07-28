import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Post {
  slug: string;
  title: string;
  date: string;
  categories: string[];
  categoryLabels: string[];
  author: string;
  excerpt: string;
  content: string;
  thumbnail?: string;
  featuredImage?: string;
}

export const categoryLabels: Record<string, string> = {
  'thong-bao': 'Thông Báo',
  'tin-tuc': 'Tin Tức',
  'bai-hoc': 'Bài Học',
  'khac': 'Khác',
};

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts: Post[] = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const { data, content } = matter(fileContents);
      const cleanContent = content.trim().replace(/^(?:#|##)\s+.*?\n+/, '');
      const image = data.featuredImage || data.thumbnail || data.coverImage || 'https://picsum.photos/400/250';

      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        categories: data.categories || [],
        categoryLabels: data.categoryLabels || [],
        author: data.author || '',
        excerpt: data.excerpt || '',
        featuredImage: image,
        thumbnail: image,
        content: cleanContent,
      };
    });

  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const posts: Post[] = getAllPosts();

export function getPostsByCategory(categorySlug: string): Post[] {
  return getAllPosts().filter((post) => post.categories.includes(categorySlug));
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getDateParts(slug: string, date: string): { year: string; month: string; day: string } {
  const [year, month, day] = date.split('T')[0].split('-');
  return { year, month, day };
}
