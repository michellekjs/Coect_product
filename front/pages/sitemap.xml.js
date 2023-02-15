// 참고: https://www.zodaland.com/tech/16

// import { getServerSideSitemap } from 'next-sitemap';

import { articles, categories } from '../shared';

export default function getSitemap() {
    
    const root = 'https://coect.kr';
    const lastmod = new Date().toISOString();

    const defaultFields = [
        {
            loc: root,
            changefreq: 'daily',
            priority: 0.8,
            lastmod,
        },
        {
            loc: `${root}/article`,
            changefreq: 'daily',
            priority: 0.8,
            lastmod,
        },
    ];

    const articleFields = articles.map(a => ({
        loc: `${root}/article/${a.id}`,
        changefreq: 'daily',
        priority: 1.0,
        lastmod,
    }));

    const categoryFields = categories.map((_, i) => ({
        loc: `${root}/category/${i+1}`,
        changefreq: 'daily',
        priority: 0.9,
        lastmod,
    }));

    const fields = [...defaultFields, ...articleFields,  ...categoryFields];

    const list =  fields.reduce((acc, field) => {
        acc += `
            <url>
                <loc>${field.loc}</loc>
                <changefreq>${field.changefreq}</changefreq>
                <priority>${field.priority}</priority>
                <lastmod>${field.lastmod}</lastmod>
            </url>
        `;
        return acc;
    }, '');

    return `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${list}
        </urlset>
    `
};