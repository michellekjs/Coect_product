import Link from "next/link";
import Layout from "../comps/Layout";
import ArticleSummaryHot from "../comps/ArticleSummaryHot";
import ArticleSummaryTop from "../comps/ArticleSummaryTop";
import ArticleSummaryToday from "../comps/ArticleSummaryToday";
import { useMediaQuery } from "react-responsive";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../comps/hover.module.css";
import { useState, useRef, useCallback } from "react";

import { articles, categories, brands, colors } from "../shared";
export default function MainPage() {
	const isDesktop = useMediaQuery({
		query: "(min-width: 1045px)",
	});
	const isMobile = useMediaQuery({ query: "(max-width: 1045px)" });

	function getHot(brand, model) {
		return {
			brand: brand,
			model: model,
			articles: articles
				.filter((article) => article.brand == brand && article.model == model)
				.sort((a, b) => b.date > a.date),
		};
	}

	const [hot, setHot] = useState(getHot("현대", "그랜저"));

	function getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}

	function refreshHot() {
		let model = hot.model;
		while (model == hot.model) {
			model = ["그랜저", "토레스", "코나"][
				Math.floor(getRandomArbitrary(0, 3))
			];
		}
		setHot(getHot("현대", model));
	}

	const articlesRecent = articles.sort((a, b) => b.date > a.date);

	return (
		<Layout>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: 50,
					alignItems: "center",
					width: "100vw",
				}}
			>
				<div style={{ width: "100%" }}>
					<Carousel
						autoPlay={false}
						infiniteLoop
						emulateTouch
						renderArrowPrev={(clickHandler, hasPrev, label) =>
							isDesktop && (
								<a
									onClick={clickHandler}
									href="#/"
									style={{
										width: 130,
										height: "100%",
										position: "absolute",
										zIndex: 1,
										display: "flex",
										justifyContent: "center",
										paddingLeft: 60,
										paddingRight: 60,
									}}
								>
									<img
										src={require("../public/imgs/arrow_left.svg").default.src}
										alt={`왼쪽으로 전환`}
									/>
								</a>
							)
						}
						renderArrowNext={(clickHandler, hasNext, label) =>
							isDesktop && (
								<a
									onClick={clickHandler}
									href="#/"
									style={{
										width: 130,
										height: "100%",
										position: "absolute",
										top: 0,
										right: 0,
										zIndex: 1,
										display: "flex",
										justifyContent: "center",
										paddingLeft: 60,
										paddingRight: 60,
									}}
								>
									<img
										src={require("../public/imgs/arrow_right.svg").default.src}
										alt={`오른쪽으로 전환`}
									/>
								</a>
							)
						}
					>
						{Array(3)
							.fill(0)
							.map((_) => (
								<div
									style={{
										flex: "none",
										width: "100%",
										height: isMobile ? 180 : 358,
										background: `linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
									url('${require(`../public/imgs/cover.png`).default.src}')`,
										display: "flex",
										backgroundSize: "cover",
										backgroundPosition: "center center",
										alignItems: "center",
										textAlign: "center",
									}}
								>
									<div
										style={{
											fontSize: isMobile ? 16 : 28,
											color: "white",
											textAlign: isMobile ? "start" : "center",
											marginLeft: isMobile ? "20px" : "0px",
											width: "100%",
										}}
									>
										세단 제왕의 귀환, {isMobile && <br />} 풀체인지 그랜져 리뷰
										영상들 보러 가기
									</div>
								</div>
							))}
					</Carousel>
				</div>

				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: 180,
						maxWidth: 1032,
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: isMobile ? 30 : 60,
						}}
					>
						<div style={{ fontSize: 22, fontWeight: 500 }}>
							차량 리뷰 Pick 👍
						</div>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								flexDirection: isMobile ? "column" : "row",
								gap: isMobile ? 20 : 36,
								width: isMobile ? "80%" : "100%",
							}}
						>
							{articlesRecent.slice(1, 4).map((article) => (
								<div key={article.id} style={{ flex: 1 }}>
									<ArticleSummaryToday key={article.id} article={article} />
								</div>
							))}
						</div>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: isMobile ? 30 : 60,
						}}
					>
						<div style={{ fontSize: 22, fontWeight: 500 }}>
							차량 리뷰 찾아보기 🔎
						</div>
						{isDesktop && (
							<div
								style={{
									width: 940,
									display: "flex",
									alignItems: "center",
									gap: 36,
									justifyContent: "space-between",
								}}
							>
								{brands.map((brand) => (
									<Link
										href={`/brand/${brand.nameEng}`}
										style={{
											display: "flex",
											flexDirection: "column",
											gap: 4,
											justifyContent: "center",
											alignContent: "center",
											textAlign: "center",
											alignItems: "center",
											width: isMobile ? "60px" : "100px",
											height: isMobile ? "60px" : "100px",
											textDecoration: "none",
											color: "black",
										}}
										className={styles.logo}
									>
										<img
											src={
												require(`../public/imgs/logos/${brand.logo}`).default
													.src
											}
											alt={`${brand.name} 로고`}
											style={{
												width: isDesktop ? 60 : 40,
												height: isDesktop ? 60 : 40,
											}}
											className={isDesktop ? styles.logo : styles.normal}
										/>
										<span style={{ fontSize: 16 }}>{brand.name}</span>
									</Link>
								))}
							</div>
						)}
						{isMobile && (
							<div>
								{" "}
								{[
									{ start: 0, end: 4 },
									{ start: 4, end: 9 },
								].map((range) => (
									<div
										style={{
											width: "100%",
											display: "flex",
											alignItems: "center",
											gap: 20,
											justifyContent: "space-between",
										}}
									>
										{brands.slice(range.start, range.end).map((brand) => (
											<Link
												href={`/brand/${brand.nameEng}`}
												style={{
													display: "flex",
													flexDirection: "column",
													gap: 4,
													justifyContent: "center",
													alignContent: "center",
													textAlign: "center",
													alignItems: "center",
													width: "60px",
													height: "60px",
													marginBottom: "40px",
													textDecoration: "none",
													color: "black",
												}}
												className={isMobile ? styles.normal : styles.logo}
											>
												<img
													src={
														require(`../public/imgs/logos/${brand.logo}`)
															.default.src
													}
													alt={`${brand.name} 로고`}
													style={{ width: 40, height: 40 }}
												/>
												<span style={{ fontSize: 16 }}>{brand.name}</span>
											</Link>
										))}
									</div>
								))}
							</div>
						)}
					</div>
					<div style={{ width: "95%",display: "flex",
								alignItems: "center", flexDirection:'column' }}>
						<div
							style={{
								display: "flex",
								alignItems: "center", 
								flexDirection: isMobile ? "column" : "row",
								gap: isMobile ? 5 : 16,
								fontSize: 22,
								fontWeight: 500,
							}}
						>
							<div>🔥 요즘 사람들이 주목하는 차량</div>
							<div style={{ color: colors.primary, fontSize: 18 }}>
								#{hot.model}
							</div>
						</div>
						<div
							style={{
								display: "flex",
								alignItems: "flex-start",
								gap: 24,
								marginTop: 40,
								flexDirection: isMobile ? "column" : "row",
							}}
						>
							{hot.articles.slice(0, 2).map((a, i) => (
								<div key={i} style={{ flex: 1 }}>
									<ArticleSummaryHot key={i} article={a} />
								</div>
							))}
							{/*  */}{" "}
						</div>
						<button
							onClick={refreshHot}
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent:"center",
								gap: 14,
								paddingLeft: isMobile ? 10 : 16,
								paddingRight: isMobile ? 10 : 16,
								paddingTop: 10,
								paddingBottom: 10,
								borderRadius: 9999,
								borderColor: "#BDBDBD",
								borderWidth: 1,
								borderStyle: "solid",
								background: "white",
								cursor: "pointer",
								marginTop: 15,
								// width:"100%"
							}}
						>
							<img
								src={require("../public/imgs/refresh.svg").default.src}
								alt="새로고침 아이콘"
								style={{ width: 20, height: 20 }}
							/>
							<span style={{ fontSize: 14 }}>주목하는 차량 더보기</span>
						</button>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: isMobile ? 30 : 60,
						}}
					>
						<div style={{ fontSize: 22, fontWeight: 500 }}>
							최신 차량 리뷰 콘텐츠
						</div>
						{[0, 3].map((i) => (
							<div
								key={i}
								style={{
									display: "flex",
									alignItems: "center",
									flexDirection: isMobile ? "column" : "row",
									gap: 36,
								}}
							>
								{articlesRecent.slice(i, i + 3).map((article) => (
									<div key={article.id} style={{ flex: 1 }}>
										<ArticleSummaryToday key={article.id} article={article} />
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</Layout>
	);
}
