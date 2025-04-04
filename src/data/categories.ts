import type { Category } from '@/types';

export const categoryMap = new Map<string, Category>([
  [
    'clothing',
    {
      id: 'clothing',
      name: 'Clothing',
      photo:
        'https://images.unsplash.com/photo-1619473792839-1d3b0355a7c8?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'shoes',
    {
      id: 'shoes',
      name: 'Shoes',
      photo:
        'https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'jewelry',
    {
      id: 'jewelry',
      name: 'Jewelry',
      photo:
        'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'watches',
    {
      id: 'watches',
      name: 'Watches',
      photo:
        'https://images.unsplash.com/photo-1451290173668-9a14beaf714c?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'electronics',
    {
      id: 'electronics',
      name: 'Electronics',
      photo:
        'https://images.unsplash.com/photo-1588459460688-561668329db5?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'music',
    {
      id: 'music',
      name: 'Music',
      photo:
        'https://images.unsplash.com/photo-1458560871784-56d23406c091?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
]);
