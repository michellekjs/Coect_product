import { useState, useRef, useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import YouTube from "react-youtube";

import Layout from "../../comps/Layout";
import Subtitle from "../../comps/Subtitle";
import ArticleSummaryToday from "../../comps/ArticleSummaryToday";
import TextUnit from "../../comps/TextUnit";
import Author from "../../comps/Author.js";

import { articles, categories, colors } from "../../shared";

export function getStaticPaths() {
	return {
		paths: articles.map((_) => ({ params: { aid: String(_.id) } })),
		fallback: false,
	};
}

export function getStaticProps({ params }) {
	return { props: { aid: params.aid } };
}

// export async function getStaticPaths() {
//     return {
//         paths: articles.map(a => ({ params: { aid: a.id } })),
//         fallback: false
//     }
//   }

export default function ArticleIdPage(props) {
	const [player, setPlayer] = useState(null);
	const [currentTime, setCurrentTime] = useState(0);

	const getCurrentTimeInterval = useRef(null);

	const onPlayerReady = (event) => {
		setPlayer(event.target);
		clearInterval(getCurrentTimeInterval.current);
		getCurrentTimeInterval.current = setInterval(() => {
			setCurrentTime(event.target.getCurrentTime());
		}, 1000);
	};

	const isDesktop = useMediaQuery({
		query: "(min-width: 1045px)",
	});
	const isMobile = useMediaQuery({ query: "(max-width: 1045px)" });
	const isYoutube = useMediaQuery({ query: "(max-width: 690px)" });

	const styles = {
		cell: {
			borderColor: "#919191",
			borderStyle: "solid",
			borderWidth: 1,
		},
	};

	const article = articles.find((a) => a.id == props.aid);

	const relatedArticles = useRef(
		articles
			.filter(
				(a) =>
					a.brand == article.brand &&
					a.model == article.model &&
					a.id != article.id
			)
			.sort(() => 0.5 - Math.random())
			.slice(0, 3) // 랜덤으로 3개 뽑기
	);

	return (
		<Layout>
			<div
				style={{
					maxWidth: 1032,
					marginTop: isMobile? 40: 72,
					display: "flex",
					flexDirection: "column",
					gap: 112,
				}}
			>
				<div style={{ margin: isMobile ? "10px" : "0px" }}>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 16,
							margin: isMobile ? "10px" : "0px",
						}}
					>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: 4,
								fontSize: 14,
								color: colors.primary,
							}}
						>
							<span>{article.brand}</span>
							<span style={{ color: "#BDBDBD" }}>&gt;</span>
							<span>{article.model}</span>
						</div>
						<div style={{ dipslay: "flex", gap: 6 }}>
							<div style={{ fontWeight: "500", fontSize: isMobile ? 24 : 32 }}>
								{article.title}
							</div>
							<div style={{ display: "flex", gap: 6, alignItems: "center" }}>
								<Author
									name={article.channelName}
									image={article.channelImageUrl}
								/>
								<span style={{ color: "#919191" }}>|</span>
								<span style={{ fontSize: 16, color: "#919191" }}>
									{article.date.replaceAll("-", ".") + "."}
								</span>
							</div>
						</div>
					</div>
					<div
						style={{
							position: "sticky",
							top: 0,
							paddingTop:60,
							alignSelf: "flex-start",
							display: "flex",
							gap: isMobile ? 5 : 30,
							justifyContent: "center",
							alignItems: "center",
							// width: "100%",
							// height: 350,
							marginTop: 36,
							zIndex: 2,
							background:
								"linear-gradient(to top, rgba(255,255,255,0), white 30px)",
							paddingBottom: 30,
						}}
					>
						<div
							style={{
								borderRadius: 8,
								overflow: "hidden",
								// top: 20,
								// width: isMobile ? "70%" : "95%",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								alignContents:"center",
								width:"100%",
								height:"100%",
								backgroundColor: "white",
							}}
						>
							<YouTube
								videoId={article.videoId}
								opts={{width: isYoutube? 356: 654, height: isYoutube? 200: 368 }}
								style={{width: isYoutube? 356: 654, height: isYoutube? 200: 368}}
								onReady={onPlayerReady}
							/>
						</div>
						{isDesktop &&
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: 20,
								maxHeight: 330,
								overflow: "scroll",
								flexGrow: 1,
								borderRadius: 8,
								borderWidth: 1,
								borderColor: "#919191",
								borderStyle: "solid",
								paddingTop: 18,
								paddingLeft: 20,
								paddingRight: 20,
								paddingBottom: 18,
								position: 'sticky',
								top:40
							}}
						>
							
							<div>
							<div style={{ fontSize: 18, marginBottom:20, color: colors.primaryDark }}>
								목차
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									gap: 16,
								}}
							>
								{article.summaries.map((s, i) => (
									<a
										onClick={() => {
											player.seekTo(s.start);
										}}
										href="#/"
										style={{
											fontSize: isMobile ? 14 : 18,
											textDecoration: "none",
											color:
												currentTime >= s.start &&
												(i >= article.summaries.length - 1 ||
													currentTime < article.summaries[i + 1].start)
													? colors.primary
													: colors._300,
										}}
									>
										{i + 1}. {s.subject}
									</a>
								))}
							</div>
						</div>
						
						</div>
}
				
					</div>
					<div style={{display: "flex", flexDirection: "row",justifyContent:"space-between", marginTop:"30px",gap:20 }}>
						{isMobile && <div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: 20,
								maxHeight: 330,
								overflow: "scroll",
								flexGrow: 1,
								borderRadius: 8,
								borderWidth: 1,
								borderColor: "#919191",
								borderStyle: "solid",
								paddingTop: 18,
								paddingLeft: 20,
								paddingRight: 20,
								paddingBottom: 18,
								boxSizing: 'border-box',
								// position: 'sticky',
								// top:10
							}}
						>
							<div style={{ fontSize: 16, color: colors.primaryDark }}>
								목차
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									gap: 16,
								}}
							>
								{article.summaries.map((s, i) => (
									<a
										onClick={() => {
											player.seekTo(s.start);
										}}
										href="#/"
										style={{
											fontSize: isMobile ? 14 : 18,
											textDecoration: "none",
											color:
												currentTime >= s.start &&
												(i >= article.summaries.length - 1 ||
													currentTime < article.summaries[i + 1].start)
													? colors.primary
													: colors._300,
										}}
									>
										{i + 1}. {s.subject}
									</a>
								))}
							</div>
						</div>
}
						<div
							style={{
								width: "100%",
								paddingLeft: isMobile ? 10 : 1,
								paddingRight: isMobile ? 10 : 1,
								boxSizing: "border-box",
								// height:350
							}}
						>
							<table
								style={{
									width: "100%",
									borderCollapse: "collapse",
									borderRadius: 8,
									borderStyle: "hidden",
									boxShadow: "0 0 0 1px #919191",
									overflow: "hidden",
								}}
							>
								<tr
									style={{
										textAlign: "center",
										fontSize: isMobile ? 16 : 16,
										height: "30px",
									}}
								>
									<th colspan="2">SORENTO / 4세대</th>
								</tr>
								{[
									"코드네임",
									"차량형태",
									"승차인원",
									"전장/전폭",
									"0~100km/h",
									"가격",
									"연비",
									"연료",
									"구동방식",
								].map((_) => (
									<tr>
										<td
											style={{
												width: isMobile ? 100 : 216,
												paddingTop: 11,
												paddingBottom: 11,
												paddingLeft: 15,
												paddingRight: 15,
												textAlign: "center",
												backgroundColor: colors.primaryDark,
												color: "white",
												fontSize: 12,
												...styles.cell,
											}}
										>
											{_}
										</td>
										<td style={{ ...styles.cell }}></td>
									</tr>
								))}
							</table>
						</div>
					</div>
					<div
						style={{
							margin: "10px",
							marginTop: 60,
							display: "flex",
							flexDirection: "column",
							gap: 20,
						}}
					>
						{article.summaries.map((summary, i) =>
							summary.text ? (
								<TextUnit
									key={i}
									subject={`${i + 1}. ${summary.subject}`}
									start={summary.start}
									isPlaying={
										currentTime >= summary.start &&
										(i >= article.summaries.length - 1 ||
											currentTime < article.summaries[i + 1].start)
									}
									seekTo={() => player.seekTo(summary.start)}
								>
									{summary.text}
								</TextUnit>
							) : (
								<div
									key={i}
									style={{
										textAlign: "center",
										marginTop: 20,
										marginBottom: 20,
									}}
								>
									<img
										src={`/imgs/figures/${summary.image}`}
										style={{ width: 400 }}
										alt="영상 캡쳐 이미지"
									></img>
								</div>
							)
						)}
					</div>
				</div>
				{relatedArticles.current.length > 0 && (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 32,
							marginTop: 112,
						}}
					>
						<div style={{ fontSize: 20, display: "flex" }}>
							<span style={{ color: colors.primary }}>{article.brand}</span>
							&nbsp;
							<span style={{ color: colors.primary }}>{article.model}</span>
							&nbsp;
							<span>관련 영상 더보기</span>
						</div>
						<div
							style={{
								width: "100%",
								display: "flex",
								gap: 36,
								flexDirection: isDesktop ? "row" : "column",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							{relatedArticles.current.map((article) => (
								<div key={article.id} style={{ flex: 1 }}>
									<ArticleSummaryToday article={article} />
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</Layout>
	);
}
