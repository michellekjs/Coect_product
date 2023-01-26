import Layout from "../../comps/Layout"
import ArticleSummary from "../../comps/ArticleSummary"

import { categories, articles } from "../../shared"

export function getStaticPaths() {
  return {
    paths: categories.map((_, i) => ({ params: { cid: String(i+1) } })),
    fallback: false
  };
}

export function getStaticProps({ params }) {
  return { props: { cid: params.cid } };
}

export default function CategoryIdPage(props) {

  const articlesInCategory = articles.filter(article => article.category == props.cid)

  return (
      <Layout>
        <h1 style={{ marginTop: 0 }}>{categories[props.cid-1]}</h1>
        <div>
          {
            articlesInCategory.map(article => <ArticleSummary key={article.id} article={article} />)
          }
        </div>
      </Layout>
  )
};