import ArticleSummary from "../../../comps/ArticleSummary"

import { categories, articles } from "../../shared"

export function generateStaticParams() {
  return categories.map((_, i) => ({ cid: String(i+1) }));
}

export default function CategoryIdPage({ params }) {

  const articlesInCategory = articles.filter(article => article.category == params.cid)

  return (
      <div>
        <h1 style={{ marginTop: 0 }}>{categories[params.cid-1]}</h1>
        <div>
          {
            articlesInCategory.map(article => <ArticleSummary article={article} />)
          }
        </div>
      </div>
  )
};