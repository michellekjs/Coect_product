import Layout from "../../comps/Layout";
import ArticleSummary from "../../comps/ArticleSummary";
import React, { useState } from 'react';

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
  // let resultarticle = articlesInCategory

  const [resultarticle, setarticle] = useState(articlesInCategory);

  const buttonClick = (word) => {
    if (word == true) {
       setarticle(articlesInCategory)
    } 
    else {
      console.log(word)
       setarticle(articlesInCategory.filter((article) => article.keywords.includes(word)))
       console.log(resultarticle)
    }
  }

	return (
		<Layout>
			<h1 style={{ marginTop: 0 }}>{categories[props.cid - 1]}</h1>
			 <img src={`/imgs/figures/${props.cid}.png`} style={{ width: '100%', height: '230px',objectFit: 'cover'}} />
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
          marginTop:"40px",
				}}
			>
      <button style={{ margin: "10px", backgroundColor:'white',  borderStyle:'none', }}  onClick={() => buttonClick(true)}> 전체 </button>
      {uniquekeyword.map((word) => (
        <button style={{ margin: "10px", backgroundColor:'white',  borderStyle:'none', }} onClick={() => buttonClick(word)}> {word} </button>
      ))}
			</div>
      <div style={{ display: "flex" , justifyContent:'space-between' , marginTop:"20px"}}>
      	<div style={{ display: "flex", flexDirection: "column", width:"48%" }}>
					{resultarticle
						.filter((e) => resultarticle.indexOf(e) % 2 === 0)
						.map((article) => (
							<ArticleSummary key={article.id} article={article} />
						))}
				</div>
				<div style={{ display: "flex", flexDirection: "column", width:"48%" }}>
					{resultarticle
						.filter((e) => resultarticle.indexOf(e) % 2 !== 0)
						.map((article) => (
							<ArticleSummary key={article.id} article={article} />
						))}
				</div>
			</div>
		</Layout>
	);
}
