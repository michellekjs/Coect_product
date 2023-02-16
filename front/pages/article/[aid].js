import React from "react";
// import YouTube from 'react-youtube';

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
	const styles = {
		cell: {
			borderColor: '#919191', borderStyle: 'solid', borderWidth: 1
		}
	};

	const article = articles.find((a) => a.id == props.aid);

	const recommendedArticleIdStart = Math.ceil(article.id / 4) * 4 - 3;
	const recommendedArticles = articles.filter(
		(a) =>
			a.id >= recommendedArticleIdStart &&
			a.id < recommendedArticleIdStart + 4 &&
			a.id != article.id
	);

	const relatedArticlesByKeywords = article.keywords.map((k) => ({
		keyword: k,
		articles: articles.filter(
			(a) => a.keywords.includes(k) && a.id != article.id
		),
	}));

	return (
		<Layout>
			<div style={{ maxWidth: 1032, marginTop: 72, display: 'flex', flexDirection: 'column', gap: 112 }}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
							<div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 14, color: colors.primary }}>
								<span>현대</span>
								<span style={{ color: '#BDBDBD' }}>&gt;</span>
								<span>그랜저</span>
							</div>
							<div style={{ dipslay: 'flex', gap: 6 }}>
								<div style={{ fontSize: 32 }}>
									코엑트 전직원에게 그랜저 하이브리드 제공 선언?
								</div>
								<div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
									<Author
										name={article.channelName}
										image={article.channelImageUrl}
									/>
									<span>|</span>
									<span style={{ fontSize: 16, color: '#919191' }}>{article.date.replaceAll('-','.')+'.'}</span>
								</div>
							</div>
						</div>
						<div style={{ display: 'flex', gap: 30 }}>
							<iframe style={{ borderRadius: 8, overflow: 'hidden' }}
								width="720"
								height="405"
								src={`https://www.youtube.com/embed/${article.videoId}`}
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							></iframe>

							<div style={{ flex: 1, borderRadius: 8, borderWidth: 1, borderColor: '#919191', borderStyle: 'solid', height: 405, paddingTop: 18, paddingLeft: 20, paddingRight: 20, paddingBottom: 18, boxSizing: 'border-box' }}>
								<div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
									<div style={{ fontSize: 16, color: colors.primaryDark }}>목차</div>
									<div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
										<span style={{ fontSize: 18, color: colors.primary }}>1. 가격</span>
										<span style={{ fontSize: 18, color: '#424242' }}>2. 옵션</span>
										<span style={{ fontSize: 18, color: '#424242' }}>3. 승차감</span>
										<span style={{ fontSize: 18, color: '#424242' }}>4. 총평</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: 8, borderStyle: 'hidden', boxShadow: '0 0 0 1px #919191', overflow: 'hidden' }}>
						<tr style={{ textAlign: 'center' }}>
							<th colspan="2">SORENTO / 4세대</th>
						</tr>
						{
							['코드네임', '차량형태', '승차인원', '전장/전폭', '0~100km/h', '가격', '연비', '연료', '구동방식'].map(_ => (
								<tr>
									<td style={{ width: 216, paddingTop: 11, paddingBottom: 11, paddingLeft: 15, paddingRight: 15, textAlign: 'center', backgroundColor: colors.primaryDark, color: 'white', fontSize: 12, ...styles.cell }}>{_}</td>
									<td style={{ ... styles.cell }}></td>
								</tr>
							))
						}
					</table>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
						{article.summaries.map((summary, i) =>
							summary.text ? (
								<TextUnit
									key={i}
									subject={summary.subject}
									start={summary.start}
									end={summary.end}
									// isPlaying={i==1}
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
				<div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
					<div style={{ fontSize: 20 }}>
						<span style={{ color: colors.primary }}>현대</span>&nbsp;
						<span style={{ color: colors.primary }}>코나</span>&nbsp;
						<span>관련 영상 더보기</span>
					</div>
					<div style={{ width: '100%', display: 'flex', gap: 36 }}>
						{recommendedArticles.map((article) => (
							<div key={article.id} style={{ flex: 1}}>
								<ArticleSummaryToday article={article} />
							</div>
						))}
					</div>
				</div>
			</div>
				
				
			
		</Layout>
	);
}
