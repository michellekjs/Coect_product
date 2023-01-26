import Layout from '../comps/Layout';
import ArticleSummary from '../comps/ArticleSummary';

import { articles } from '../shared';

export default function MainPage() {

    return (
        <Layout>
            <h1 style={{ marginTop: 0 }}>추천 콘텐츠</h1>
            {
                articles.sort(() => Math.random() - 0.5).slice(0,5).map(article => <ArticleSummary key={article.id} article={article} />)
            }
        </Layout>
    )
};