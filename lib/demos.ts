export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'BLOG',
    items: [
      {
        name: 'Create Post',
        slug: 'post/create',
        description: 'Create UI that is shared across routes',
      },
      {
        name: 'See All Post',
        slug: 'post',
        description: 'Create UI that is shared across routes',
      },
    ],
  },
];
