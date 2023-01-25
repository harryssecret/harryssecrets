export interface Frontmatter {
  title: string;
  description: string;
  image: { src: string; alt: string };
  tags: string[];
  draft: boolean;
}
