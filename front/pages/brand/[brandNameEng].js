// TODO: 윗부분 색상 그라디언트
import { useMediaQuery } from "react-responsive";

import Layout from "../../comps/Layout";
import ArticleSummary from "../../comps/ArticleSummary";
import KeywordQuote from "../../comps/KeywordQuote";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "../../comps/hover.module.css";

import ArticleSummaryToday from "../../comps/ArticleSummaryToday";

import { brands, articles, colors } from "../../shared";
export function getStaticPaths() {
	return {
		paths: brands.map((brand, i) => ({
			params: { brandNameEng: brand.nameEng },
		})),
		fallback: false,
	};
}

export function getStaticProps({ params }) {
	return {
		props: { brandNameEng: params.brandNameEng, key: params.brandNameEng },
	};
}

export default function CategoryIdPage(props) {
	const isDesktop = useMediaQuery({
		query: "(min-width: 1045px)",
	});
	const isMobile = useMediaQuery({ query: "(max-width: 1045px)" });

	const router = useRouter();
	const { brandNameEng, page, model } = router.query;

	const brand = brands.find((brand) => brand.nameEng == brandNameEng);

	const pageReal = page ? parseInt(page) : 1;

	const nArticlesInPage = 6;

	const [resultarticle, setarticle] = useState([]);

	useEffect(() => {
		setarticle(
			articles.filter(
				(article) =>
					article.brand == brand.name && (!model || article.model == model)
			)
		);
	}, [brand, model]);

	// const buttonClick = (word) => {
	// 	if (word == true) {
	// 		setarticle(articlesInBrand);
	// 	} else {
	// 		console.log(word);
	// 		setarticle(
	// 			articlesInBrand.filter((article) => article.keywords.includes(word))
	// 		);
	// 		console.log(resultarticle);
	// 	}
	// };
	// const myLoader = ({})=> `../../public/imgs/models/${brand.name} ${m.name} ${m.submodels[0].name ? m.submodels[0].name + ' ' : ''}(${m.generation}세대).png`

	return (
		<Layout
			title={brand.name + " - COECT"}
			description={`${brand.name} 차종: ${brand.models
				.map((_) => _.name)
				.join(", ")}`}
		>
			<div
				style={{
					width: "100%",
					height: 419,
					// background with linear gradient
					background: "linear-gradient(#E9EAF0, rgba(0,0,0,0))",
					position: "absolute",
					top: 0,
					zIndex: -1,
				}}
			/>

			<div
				style={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<div
					style={{
						width: "100%",
						paddingLeft: 30,
						paddingRight: 30,
						paddingTop: 16,
						boxSizing: "border-box",
						display: "flex",
						alignItems: "center",
						gap: 12,
					}}
				>
					<Image
						src={require(`../../public/imgs/logos/${brand.logo}`).default.src}
						alt={`${brand.name} 로고`}
						width={44}
						height={44}
					/>
					<h1 style={{ fontSize: 18, fontWeight: 500, margin: 0 }}>
						{brand.name}
					</h1>
				</div>
				<div
					style={{
						display: "flex",
						width: "100%",
						height: 170,
						justifyContent: "center",
					}}
				>
					<div
						style={{
							display: "flex",
							gap: 20,
							justifyContent: "flex-start",
							overflowX: "scroll",
							width: "wrap-content",
							paddingLeft: 30,
							paddingRight: 30,
						}}
						className={styles.scroll}
					>
						{brand.models.map((m, i) => (
							<Link
								key={i}
								href={
									`/brand/${brand.nameEng}` +
									(model == m.name ? "" : `?model=${m.name}`)
								}
								style={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "end",
									gap: 15,
									textAlign: "center",
									fontSize: model == m.name ? 16 : 14,
									color: model == m.name ? "black" : colors._300,
									textDecoration: "none",
									color: "black",
								}}
								className={isDesktop ? styles.model : null}
							>
								<img
									// loader={myLoader}
									src={require(`../../public/imgs/models/${brand.name} ${m.name} ${
										m.submodels[0].name ? m.submodels[0].name + " " : ""
									}(${m.generation}세대).png`).default.src}
									width={model == m.name ? 210 : 170}
									// height={100}
									alt="자동차 이미지"
									style={{ filter: model == m.name ? "" : "grayscale(1)" }}
								/>
								<span>{`${brand.name} ${m.name}`}</span>
							</Link>
						))}
					</div>
				</div>
				<div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', marginBottom: 150}}>
					<div style={{ fontSize: 22, fontWeight: "500" , marginTop:150}}>
								한눈에 보는 그랜저 콘텐츠 속 정보  👍
						</div>
					<div style={{marginTop:40, marginBottom:100 , display:'flex', flexDirection:"row", gap:30}}>
						<button className={styles.btn}> 디자인 </button> 
						<button className={styles.btn}> 디자인 </button> 
						<button className={styles.btn}> 디자인 </button> 
						<button className={styles.btn}> 디자인 </button> 
						<button className={styles.btn}> 디자인 </button>
					</div>
					<div style={{display:"flex", flexDirection:'row', gap:70}}>
					<KeywordQuote />
					<KeywordQuote />
					<KeywordQuote />
					</div>
				</div>
				<div style={{ width: isDesktop ? 745 : "auto", marginTop: 64 }}>
					<div style={{ display: "flex", flexDirection: "column", gap: 60 }}>
						<div
							style={{
								fontSize: isMobile ? 20 : 22,
								fontWeight: 500,
								// marginLeft: "10%"
							}}
						>
							{model ? model : "전체"}
							<span> 리뷰 영상</span>
							<span style={{ color: colors.primary }}>
								&nbsp;{resultarticle.length}
							</span>
							<span>개</span>
							{/* { resultarticle.length > nArticlesInPage && <span> 중 <span style={{ color: colors.primary }}>{pageReal}</span>페이지</span> } */}
						</div>
						<div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									gap: isMobile ? 40 : 20,
									justifyContent: "center",
								}}
							>
								{isDesktop &&
									resultarticle
										.slice(
											(pageReal - 1) * nArticlesInPage,
											pageReal * nArticlesInPage
										)
										.map((a, i) => <ArticleSummary key={i} article={a} />)}
								{isMobile &&
									resultarticle
										.slice(
											(pageReal - 1) * nArticlesInPage,
											pageReal * nArticlesInPage
										)
										.map((a, i) => <ArticleSummaryToday key={i} article={a} />)}
							</div>
						</div>
						<div
							style={{
								display: "flex",
								gap: 0,
								width: "100%",
								justifyContent: "center",
							}}
						>
							{Array.from(
								{ length: Math.ceil(resultarticle.length / nArticlesInPage) },
								(_, i) => i + 1
							).map((i) => (
								<Link
									key={i}
									href={`/brand/${props.brandNameEng}?page=${i}`}
									style={{
										width: 40,
										height: 40,
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										color: i == pageReal ? colors.primary : colors._300,
										textDecoration: "none",
									}}
									className={styles.logo}
								>
									{i}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
