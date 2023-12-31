import Link from "next/link";
import Image from "next/image";
import Layout from "../../comps/Layout";
import ArticleSummaryHot from "../../comps/ArticleSummaryHot";
import ArticleSummaryToday from "../../comps/ArticleSummaryToday";
import { useMediaQuery } from "react-responsive";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../../comps/hover.module.css";
import { useState, useRef, useCallback } from "react";
// import { GetServerSideProps, InferGetServe drSidePropsType } from "next";
import KeywordQuote from "../../comps/KeywordQuote.js";

import { articles, categories, brands, colors } from "../../shared";
export default function MainPage() {
	const isDesktop = useMediaQuery({
		query: "(min-width: 1045px)",
	});
	const isMobile = useMediaQuery({ query: "(max-width: 1045px)" });

	const randarr = Array.from({length: 3}, _ => Math.floor(Math.random()*10))

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
	const keywords = ["공간", "가격", "디자인", "성능", "기능"];

	function getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}

	function refreshHot() {
		let model = hot.model;
		while (model == hot.model) {
			model = ["그랜저", "코나"][Math.floor(getRandomArbitrary(0, 2))];
		}
		setHot(getHot("현대", model));
	}


	const articlesRecent = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));

	return (
		<Layout
			title="COECT - Fusion of Video & Text"
			description="COECT는 양질의 영상들을 텍스트로 재가공해 영상 속 필요한 정보를 빠르게 정리할 수 있는 새로운 콘텐츠 경험을 제공합니다."
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: 70,
					alignItems: "center",
					width: "100vw",
				}}
			>
				<div style={{ width: "100%" }}>
					<Carousel
						autoPlay={true}
						infiniteLoop
						emulateTouch
						showThumbs={false}
						// renderIndicator={(onClickHandler, isSelected, index, label) => {
						// 	const defStyle = {
						// 		marginLeft: 20,
						// 		backgroundColor: "black",
						// 		cursor: "pointer",
						// 		borderRadius: "50%"
						// 	};
						// 	const style = isSelected
						// 		? { ...defStyle, backgroundColor: "lightgray" }
						// 		: { ...defStyle };
						// 	return (
						// 		<span
						// 			// style={style}
						// 			onClick={onClickHandler}
						// 			onKeyDown={onClickHandler}
						// 			value={index}
						// 			key={index}
						// 			role="button"
						// 			tabIndex={0}
						// 			aria-label={`${label} ${index + 1}`}
						// 		>
						// 			<span className={isDesktop ? styles.dot : styles.dotmobile} style={style}></span>
						// 		</span>
						// 	);
						// }}
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
									<Image
										src={require("../../public/imgs/arrow_left.svg")}
										alt={`왼쪽으로 전환`}
										height={40}
										width={40}
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
									<Image
										src={require("../../public/imgs/arrow_right.svg")}
										alt={`오른쪽으로 전환`}
										width={15}
										height={15}
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
									/>
								</a>
							)
						}
					>
						{[
							{
								cover: "grandeurcover.webp",
								title: [
									"그랜저 7세대",
									"세단 제왕의 귀환,",
									"풀체인지 그랜져 리뷰 영상들 보러 가기",
								],
								to: "/car/brand/HYUNDAI?model=그랜저",
							},
							{
								cover: "konacover.webp",
								title: [
									"코나 2세대",
									"5년 만에 완전히 바뀐",
									"‘디 올 뉴 코나’ 리뷰 영상 보러가기",
								],
								to: "/car/brand/HYUNDAI?model=코나",
							},
						].map((item, i) => (
							<Link
								key={i}
								href={item.to}
								style={{
									flex: "none",
									width: "100%",
									height: isMobile ? 180 : 358,
									background: `linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
								url('${require(`../../public/imgs/${item.cover}`).default.src}')`,
									display: "flex",
									backgroundSize: "cover",
									backgroundPosition: "center center",
									alignItems: "center",
									textAlign: "center",
									textDecoration: "none",
								}}
							>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										width: "100%",
										alignItems: "center",
									}}
								>
									<div
										style={{
											fontSize: isMobile ? 12 : 15,
											color: "white",
											textAlign: isMobile ? "start" : "center",
											marginLeft: isMobile ? "20px" : "0px",
											width: "100%",
											marginBottom: 15,
										}}
									>
										{item.title[0]}
									</div>
									<div
										style={{
											fontSize: isMobile ? 16 : 28,
											color: "white",
											textAlign: isMobile ? "start" : "center",
											marginLeft: isMobile ? "20px" : "0px",
											width: "100%",
											whiteSpace: "pre-line",
										}}
									>
										{item.title.slice(1, 3).join(isMobile ? "\r\n" : " ")}
									</div>
								</div>
							</Link>
						))}
					</Carousel>
				</div>

				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: isMobile ? 90 : 180,
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
						<div style={{ fontSize: 22, fontWeight: "500" }}>
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
							{articles.slice(1, 4).map((article) => (
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
						<div style={{ fontSize: isMobile ? 20 : 22, fontWeight: "500" }}>
							제조사별 리뷰영상 찾기 🔎
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
								{brands.map((brand, i) => (
									<Link
										key={i}
										href={`/car/brand/${brand.nameEng}`}
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
										<Image
											src={
												require(`../../public/imgs/logos/${brand.logo}`).default
													.src
											}
											alt={`${brand.name} 로고`}
											width={isDesktop ? 60 : 40}
											height={isDesktop ? 60 : 40}
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
								].map((range, i) => (
									<div
										key={i}
										style={{
											width: "100%",
											display: "flex",
											alignItems: "center",
											gap: 20,
											justifyContent: "flex-start",
										}}
									>
										{brands.slice(range.start, range.end).map((brand, j) => (
											<Link
												key={j}
												href={`/car/brand/${brand.nameEng}`}
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
												<Image
													src={
														require(`../../public/imgs/logos/${brand.logo}`)
													}
													alt={`${brand.name} 로고`}
													width={40}
													height={40}
												/>
												<span style={{ fontSize: 16 }}>{brand.name}</span>
											</Link>
										))}
									</div>
								))}
							</div>
						)}
					</div>
					<div
						style={{
							width: "95%",
							display: "flex",
							alignItems: "center",
							flexDirection: "column",
						}}
					>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								width: "100%",
								flexDirection: isMobile ? "column" : "row",
								gap: isMobile ? 5 : 20,
								fontSize: 22,
								fontWeight: "500",
							}}
						>
							{isDesktop && (
								<div style={{ display: "flex", gap: 10, alignItems: "center" }}>
									<div
										style={{ display: "flex", gap: 8, alignItems: "center" }}
									>
										<span style={{ fontSize: 20 }}>🔥</span>
										<span style={{ fontSize: 22 }}>사람들이 주목하는 차량</span>
									</div>
									<span style={{ color: colors.primary, fontSize: 22 }}>
										#{hot.model}
									</span>
								</div>
							)}
							{isMobile && (
								<div
									style={{
										display: "flex",
										gap: 5,
										alignItems: "center",
										flexDirection: "column",
									}}
								>
									<div
										style={{ display: "flex", gap: 8, alignItems: "center" }}
									>
										<span style={{ fontSize: 18 }}>🔥</span>
										<span style={{ fontSize: 20 }}>사람들이 주목하는 차량</span>
									</div>
									<span style={{ color: colors.primary, fontSize: 20 }}>
										#{hot.model}
									</span>
								</div>
							)}

							{isDesktop && (
								<button
									onClick={refreshHot}
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										gap: 4,
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
										marginTop: isMobile ? 15 : 0,
										// width:"100%"
									}}
								>
									<Image
										src={require("../../public/imgs/refresh.svg")}
										alt="새로고침 아이콘"
										width={20}
										height={20}
									/>
									<span style={{ fontSize: 14 }}>주목하는 차량 더보기</span>
								</button>
							)}
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
						<div style={{display:"flex", width:"100%", justifyContent:"center",boxSizing: "content-box",alignItems:"center"}}>
						<div style={{display:"flex", flexDirection:"row", width: isMobile? "100vw" : "100%", justifyContent: isMobile? "flex-start" : "space-between", marginTop:60, overflowX:"scroll", boxSizing:"border-box", gap:isMobile? 50: 0}}className={styles.scroll}>
						
						{
							hot.articles.slice(0,3).map(
								(a,k) =>
								<KeywordQuote keyword={"any"} key={k} article={a}/>	
							)
						}

						{/* {
							[...hot].sort(_ => Math.random() - 0.5).slice(0,3).map(
								a => 
								<KeywordQuote keyword={"any"} article={a}/>	
							)
						} */}
						
						</div>
						</div>

						{isMobile && (
							<button
								onClick={refreshHot}
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									gap: 6,
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
									marginTop: 30,
									// width:"100%",
									textDecoration: "none",
									color: "black",
								}}
							>
								<Image
									src={require("../../public/imgs/refresh.svg")}
									alt="새로고침 아이콘"
									width={20}
									height={20}
								/>
								<span style={{ fontSize: 14 }}>주목하는 차량 더보기</span>
							</button>
						)}
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: isMobile ? 30 : 60,
						}}
					>
						<div style={{ fontSize: isMobile ? 20 : 22, fontWeight: "500" }}>
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

// export async function getStaticProps({ req, res }) {
//   res.setHeader(
//     'Cache-Control',
//     'public, s-maxage=10, stale-while-revalidate=59'
//   );

//   return {
//     // props: {
//     //   time: new Date().toISOString(),
//     // },
//   };
// }