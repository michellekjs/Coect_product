import Layout from "../../comps/Layout";
import ArticleSummary from "../../comps/ArticleSummary";

import { categories, articles } from "../../shared";
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

	const uniquekeyword = [...new Set(keywordlist)];
  // const [articlechosen,choose] = useState("");
  // const [filteredarticle, changearticle] = useState(articles)
  // const buttonclick = (word) => {
  //   if (articlechosen=="") {

  //   }
  // }

	return (
		<Layout>
			<h1 style={{ marginTop: 0 }}>{categories[props.cid - 1]}</h1>
			 <img src={`/imgs/figures/${props.cid}.png`} style={{ width: '100%', height: '230px',objectFit: 'cover'}} />
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
          marginTop:"40px"
				}}
			>
				{uniquekeyword.map((word) => (
					<button style={{ margin: "10px", backgroundColor:'white',  borderStyle:'none', }} onClick={() => buttonClick(word)}> {word} </button>
				))}
			</div>
      <div style={{ display: "flex" , justifyContent:'space-between' , marginTop:"20px"}}>
				<div style={{ display: "flex", flexDirection: "column", width:"48%" }}>
					{articlesInCategory
						.filter((e) => articlesInCategory.indexOf(e) % 2 !== 0)
						.map((article) => (
							<ArticleSummary key={article.id} article={article} />
						))}
				</div>
				<div style={{ display: "flex", flexDirection: "column", width:"48%" }}>
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
