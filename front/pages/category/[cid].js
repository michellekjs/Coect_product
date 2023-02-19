// TODO: 윗부분 색상 그라디언트
import { useMediaQuery } from 'react-responsive';

import Layout from "../../comps/Layout";
import ArticleSummary from "../../comps/ArticleSummary";
import React, { useState } from "react";
import Link from "next/link";

import ArticleSummaryToday from "../../comps/ArticleSummaryToday";

import { brands, articles, colors } from "../../shared";
export function getStaticPaths() {
	return {
		paths: brands.map((_, i) => ({ params: { cid: String(i + 1) } })),
		fallback: false,
	};
}

export function getStaticProps({ params }) {
	return { props: { cid: params.cid, key: params.cid } };
}

export default function CategoryIdPage(props) {
	const isDesktop = useMediaQuery({
		query: '(min-width: 1045px)'
	})
	const isMobile = useMediaQuery({ query: '(max-width: 1045px)' });
	
	const articlesInBrand = articles.filter(
		(article) => article.brand == brands[props.cid - 1].name
	);

	const [resultarticle, setarticle] = useState(articlesInBrand);

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

	return (
		<Layout>
			<div style={{
				width: "100%",
				height: 419,
				// background with linear gradient
				background: 'linear-gradient(#E9EAF0, rgba(0,0,0,0));',
				position: 'absolute',
				top: 0,
				zIndex: -1
			}}/>
			
			<div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<div style={{ width: '100%', paddingLeft: 10, paddingRight: 30, paddingTop: 16, paddingBottom: 16, boxSizing: 'border-box' }}>
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
							<span style={{ color: colors.primary }}>{resultarticle.length}</span>
						</div>
						<div>
							<div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
								{isDesktop && 
									resultarticle.map((a, i) =>
										<ArticleSummary article={a}/>
									)
								}
								{isMobile && 
									resultarticle.map((a, i) =>
										<ArticleSummaryToday article={a}/>
									)
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
