import ArticleSummary from "../../../comps/ArticleSummary"

import categories from "../../shared"

export default function Category({ params }) {

  return (
      <div>
        <h1 style={{ marginTop: 0 }}>{categories[params.cid]}</h1>
        <div>
          <ArticleSummary />
          <ArticleSummary />
          <ArticleSummary />
          <ArticleSummary /> 
        </div>
      </div>
  )
};