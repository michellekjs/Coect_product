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

import { brands, articles, colors, subjects } from "../../shared";

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
	const keywords = ["공간", "가격", "디자인", "성능", "기능"];
	const router = useRouter();
	const { brandNameEng, page, model } = router.query;
	const brand = brands.find((brand) => brand.nameEng == brandNameEng);
	const pageReal = page ? parseInt(page) : 1;
	const nArticlesInPage = 6;
	const [resultarticle, setarticle] = useState([]);
	const [keywordarticle, setkeywordarticle] = useState([]);
	const [keyword, setkeyword] = useState(keywords[0]);

	useEffect(() => {
		setarticle(
			articles.filter(
				(article) =>
					article.brand == brand.name && (!model || article.model == model)
			)
		);

		setkeywordarticle(
			(model == "" || keyword=="") ? "" : articles.filter(
				(article) =>
					article.brand == brand.name &&
					(!model || article.model == model) &&
					article.summaries.filter((s) => s.subject == keyword).length > 0
			)
		);
	}, [brand, model]);

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
						src={require(`../../public/imgs/logos/${brand.logo}`)}
						alt={`${brand.name} 로고`}
						width={44}
						height={44}
					/>
					<div style={{ fontSize: 18, fontWeight: 500, margin: 0 }}>
						{brand.name}
					</div>
					<div style={{ fontSize: 18, fontWeight: 500, marginLeft:-6 }}>
						{model}
					</div>
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
								onClick={()=>setkeyword("공간")}
								// onClick={() => setarticle("")}
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
									src={
										require(`../../public/imgs/models/${brand.name} ${m.name} ${
											m.submodels[0].name ? m.submodels[0].name + " " : ""
										}(${m.generation}세대).png`).default.src
									}
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
				{ model && 
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						marginBottom: 40,
					}}
				>
					<div
						style={{
							fontSize: isMobile ? 18 : 20,
							fontWeight: "500",
							marginTop: isMobile ? 80 : 120,
						}}
					>
						{model} 영상 속 정보 바로보기 🔎
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							gap: 20,
						}}
					>
						{" "}
						<div
							style={{
								marginTop: 40,
								marginBottom: 40,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								flexDirection: "row",
								gap: isMobile ? 10 : 20,
							}}
						>
							{isDesktop &&
								keywords.map((word, k) => (
									<button
									key = {k}
										className={styles.btn}
										style={{ 
											width: 120, 
											backgroundColor: word==keyword && '#2B6F7D',
  											color: word==keyword && 'white',
										}}
										onClick={() => {
											setkeyword(word);
										}}
									>
										{word}
									</button>
								))
							}

							{isMobile && (
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										gap: 10,
									}}
								>
									<div
										style={{ display: "flex", flexDirection: "row", gap: 10 }}
									>
										{keywords.slice(0, 2).map((word, k) => (
											<button
											key = {k}
												className={styles.btn}
												style={{ 
													width: 100, fontSize: 14,
													backgroundColor: word==keyword && '#2B6F7D',
  													color: word==keyword && 'white',
												}}
												onClick={() => {
													setkeyword(word);
												}}
											>
												{word}
											</button>
										))
										}
									</div>
									<div
										style={{ display: "flex", flexDirection: "row", gap: 10 }}
									>
										{keywords.slice(2, 5).map((word, k) => (
											<button
											key = {k}
												className={styles.btn}
												style={{ 
													width: 100, fontSize: 14,
													backgroundColor: word==keyword && '#2B6F7D',
  													color: word==keyword && 'white',
												}}
												onClick={() => {
													setkeyword(word);
												}}
											>
												{word}
											</button>
										))}
									</div>
								</div>
							)
						}
						</div>
						<div
							style={{
								display: "flex",
								width: "100%",
								// height: 200,
								justifyContent:"center",
							}}
						>
						<div style={{display:"flex", width:"100vw", justifyContent:"center",boxSizing: "content-box",}}>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									gap: 80,
									justifyContent: "flex-start",
									overflowX: "scroll",
									width: "wrap-content",
									paddingLeft: 30,
									paddingRight: 30,
									
								}}
								className={styles.scroll}
							>
								{resultarticle
									.filter(
										(r) =>
											r.summaries.filter((a) => a.subject === keyword).length >
											0
									)
									.map((article, k) => (
										<KeywordQuote article={article} keyword={keyword} key={k}/>
									))
									.slice(0, 3)}
							</div>
						</div >
					</div>
					</div>
				</div>
}
				<div style={{ width: isDesktop ? 745 : "auto"}}>
					<div style={{ display: "flex", flexDirection: "column", gap: 60 }}>
						<div
							style={{
								fontSize: isMobile ? 20 : 22,
								fontWeight: 500,
							marginTop:80,
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
