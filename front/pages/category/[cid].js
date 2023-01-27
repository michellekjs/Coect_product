import Layout from "../../comps/Layout";
import ArticleSummary from "../../comps/ArticleSummary";
import React, { useState } from "react";
import Link from "next/link";

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
			setarticle(articlesInCategory);
		} else {
			console.log(word);
			setarticle(
				articlesInCategory.filter((article) => article.keywords.includes(word))
			);
			console.log(resultarticle);
		}
	};

	const strings = ["네옴시티가 무엇인지 더 알아보고 싶으신가요?", "해외여행 대세, 가까운 방콕은 어떤가요?", "헤드셋, 머리아파서 바꾸고 싶으셨나요?", "나에게 어떤 아이메이크업이 맞을지 도저히 모르겠다면?", "새로 나온 그랜저 , 과연 그 명성을 이어갈 수 있을까?"]

	return (
		<Layout>
			<h1 style={{ marginTop: 0 }}>{categories[props.cid - 1]}</h1>
			<Link
				href={`/article/${resultarticle[0].id}`}
				style={{
					backgroundColor: "black",
					opacity: "0.8",
					position: "absolute",
					width: "69%",
					height: "230px",
					color: "white",
					display:'flex',
					alignItems: "center",
					justifyContent: "center",
					fontSize:"24pt",
					letterSpacing:"2px",
					fontWeight:"normal",
					textDecoration:'none'
				}}
			>
				{" "}
				{strings[props.cid-1] } {'>'}
			</Link>
			<img
				src={`/imgs/figures/${props.cid}.png`}
				style={{ width: "100%", height: "230px", objectFit: "cover" }}
			/>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					marginTop: "40px",
				}}
			>
				<button
					style={{
						margin: "10px",
						backgroundColor: "white",
						borderStyle: "none",
					}}
					onClick={() => buttonClick(true)}
				>
					{" "}
					전체{" "}
				</button>
				{uniquekeyword.map((word) => (
					<button
						style={{
							margin: "10px",
							backgroundColor: "white",
							borderStyle: "none",
						}}
						onClick={() => buttonClick(word)}
					>
						{" "}
						{word}{" "}
					</button>
				))}
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginTop: "20px",
				}}
			>
				<div style={{ display: "flex", flexDirection: "column", width: "48%" }}>
					{resultarticle
						.filter((e) => resultarticle.indexOf(e) % 2 === 0)
						.map((article) => (
							<ArticleSummary key={article.id} article={article} />
						))}
				</div>
				<div style={{ display: "flex", flexDirection: "column", width: "48%" }}>
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
