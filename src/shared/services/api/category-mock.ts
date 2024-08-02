import { Category } from '@entities/category/model/category.model';

export const categories: Category[] = [
    {
        id: 1,
        slug: 'category-1',
        name: 'Для ванны и туалета',
        image: 'https://i.imgur.com/pvyZlZQ.jpeg',
        hasChild: true,
    },
    {
        id: 2,
        slug: 'category-2',
        name: 'Керамогранит',
        image: 'https://i.imgur.com/HkzOReT.jpeg',
        hasChild: false,
    },
    {
        id: 3,
        slug: 'category-3',
        name: 'Керамогранит Керамогранит Керамогранит Керамогранит Керамогранит Керамогранит Керамогранит',
        image: 'https://i.imgur.com/HkzOReT.jpeg',
        hasChild: false,
    },
    {
        id: 4,
        slug: 'category-3',
        name: 'Керамогранит',
        image: 'https://i.imgur.com/HkzOReT.jpeg',
        hasChild: false,
    },
];
