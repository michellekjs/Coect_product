// TODO: 윗부분 색상 그라디언트

import Layout from "../../comps/Layout";
import ArticleSummary from "../../comps/ArticleSummary";
import React, { useState } from "react";
import Link from "next/link";

import { categories, articles, colors } from "../../shared";
export function getStaticPaths() {
	return {
		paths: categories.map((_, i) => ({ params: { cid: String(i + 1) } })),
		fallback: false,
	};
}

export function getStaticProps({ params }) {
	return { props: { cid: params.cid, key: params.cid } };
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
			{/* <div style={{
				width: "100%",
				height: 419,
				// background with linear gradient
				background: 'linear-gradient(#e66465, #9198e5);'
			}}/> */}
			
			<div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<div style={{ width: '100%', paddingLeft: 30, paddingRight: 30, paddingTop: 16, paddingBottom: 16 }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
						<img src={require('../../public/imgs/logos/hyundai.svg').default.src} alt="현대자동차 로고" style={{ width: 44, height: 44 }}/>
						<span style={{ fontSize: 22 }}>현대</span>
					</div>			
				</div>
				<div style={{ display: 'flex', gap: 20, justifyContent: 'center' }}>
				{
					Array(6).fill(0).map((_, i) => 
						<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'end', gap: i==2 ? 0 : 24, textAlign: 'center', fontSize: i==2 ? 16 : 14, color: i==2 ? 'black' : colors._300 }}>
							<img src={require('../../public/imgs/' + (i==2 ? 'car_selected.png' : 'car_deselected.png')).default.src} alt="" style={{ width: i==2 ? 220 : 170 }}/>
							<span>{ i==2 ? '현대 코나' : '현대 아반떼' }</span>
						</div>
					)
				}
				</div>
				<div style={{ maxWidth: 745, marginTop: 64 }}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
						<div style={{ display: 'flex', gap: 12, fontSize: 25 }}>
							<span>리뷰 영상</span>
							<span style={{ color: colors.primary }}>23</span>
						</div>
						<div>
							<div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
								{
									articlesInCategory.map((a, i) =>
										<ArticleSummary article={a}/>
									)
								}
								
							</div>
						</div>
					</div>
				</div>
			</div>
			
			

			{/* <h1 style={{ marginTop: 0 }}>{categories[props.cid - 1]}</h1>
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
						key={word}
						style={{
							margin: "10px",
							backgroundColor: "white",
							borderStyle: "none",
							
						}}
						onClick={() => buttonClick(word)}
					>
						{word}
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
			</div> */}
		</Layout>
	);
}
