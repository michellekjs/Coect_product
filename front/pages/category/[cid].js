import Layout from "../../comps/Layout";
import ArticleSummary from "../../comps/ArticleSummary";

import { categories, articles } from "../../shared";
import beauty from '../../public/imgs/figures/beauty.png';

export function getStaticPaths() {
	return {
		paths: categories.map((_, i) => ({ params: { cid: String(i + 1) } })),
		fallback: false,
	};
}

export function getStaticProps({ params }) {
	return { props: { cid: params.cid } };
}

export default function CategoryIdPage(props) {
	const articlesInCategory = articles.filter(
		(article) => article.category == props.cid
	);
	const keywordlist = articlesInCategory.map((article) => article.keywords[0]);

	return (
		<Layout>
			<h1 style={{ marginTop: 0 }}>{categories[props.cid - 1]}</h1>
      <div style={{width: '100px'}}>
        <img src={beauty}/>
      </div>
      <div> 
      최신 뷰티 틀렌드 알아보러 가기
      </div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{keywordlist.map((word) => (
					<div style={{ margin: "10px" }}> {word} </div>
				))}
			</div>
			<div style={{ display: "flex" }}>
				<div style={{ display: "flex", flexDirection: "column" }}>
					{articlesInCategory
						.filter((e) => articlesInCategory.indexOf(e) % 2 !== 0)
						.map((article) => (
							<ArticleSummary key={article.id} article={article} />
						))}
				</div>
				<div style={{ display: "flex", flexDirection: "column" }}>
					{articlesInCategory
						.filter((e) => articlesInCategory.indexOf(e) % 2 === 0)
						.map((article) => (
							<ArticleSummary key={article.id} article={article} />
						))}
				</div>
			</div>
		</Layout>
	);
}
