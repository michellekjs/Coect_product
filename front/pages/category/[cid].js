// TODO: 윗부분 색상 그라디언트
import { useMediaQuery } from 'react-responsive';

import Layout from "../../comps/Layout";
import ArticleSummary from "../../comps/ArticleSummary";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'

import styles from "../../comps/hover.module.css"

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

	const brand = brands[props.cid - 1];
	
	const articlesInBrand = articles.filter(
		(article) => article.brand == brand.name
	);

	const router = useRouter()
	const { page } = router.query

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
				<div style={{ width: '100%', paddingLeft: 30, paddingRight: 30, paddingTop: 16, paddingBottom: 16, boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: 12 }}>
					<img src={require(`../../public/imgs/logos/${brand.logo}`).default.src} alt={`${brand.name} 로고`} style={{ width: 44, height: 44 }}/>
					<span style={{ fontSize: 22 }}>{brand.name}</span>		
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
						<div style={{ 
							// display: 'flex', gap: 12,
							fontSize: 25
						}}>
							<span>리뷰 영상</span>
							<span style={{ color: colors.primary }}>&nbsp;{resultarticle.length}</span>
							{ page && page!=1 && <span>개 중 {page}페이지</span> }
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
						<div style={{ display: 'flex', gap: 0, width: '100%', justifyContent: 'center' }}>
						{
							Array.from({length: 10}, (_, i) => i + 1).map((i) =>
								<Link
									href={`/category/${props.cid}?page=${i}`}
									style={{ 
										width: 40, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', color: i==1 ? colors.primary : colors._300,
										textDecoration: 'none',
									}}
									className={ styles.logo }
								>
									{i}
								</Link>
							)
						}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
