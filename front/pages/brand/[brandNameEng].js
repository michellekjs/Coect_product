// TODO: 윗부분 색상 그라디언트
import { useMediaQuery } from 'react-responsive';

import Layout from "../../comps/Layout";
import ArticleSummary from "../../comps/ArticleSummary";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'

import styles from "../../comps/hover.module.css"

import ArticleSummaryToday from "../../comps/ArticleSummaryToday";

import { brands, articles, colors } from "../../shared";
export function getStaticPaths() {
	return {
		paths: brands.map((brand, i) => ({ params: { brandNameEng: brand.nameEng } })),
		fallback: false,
	};
}

export function getStaticProps({ params }) {
	return { props: { brandNameEng: params.brandNameEng, key: params.brandNameEng } };
}

export default function CategoryIdPage(props) {
	const isDesktop = useMediaQuery({
		query: '(min-width: 1045px)'
	})
	const isMobile = useMediaQuery({ query: '(max-width: 1045px)' });

	const router = useRouter();
	const { brandNameEng, page } = router.query;

	const brand = brands.find((brand) => brand.nameEng == brandNameEng);

	const pageReal = page ? parseInt(page) : 1;

	const nArticlesInPage = 6;

	const [resultarticle, setarticle] = useState(articles.filter(
		(article) => (article.brand == brand.name)
	));

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
				<div style={{ display: 'flex', gap: 20, justifyContent: 'center', overflow: "scroll", width: "100%" }}>
				{
					Array(6).fill(0).map((_, i) => 
						<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'end', gap: i==2 ? 0 : 24, textAlign: 'center', fontSize: i==2 ? 16 : 14, color: i==2 ? 'black' : colors._300}}>
							<img src={require('../../public/imgs/' + (i==2 ? 'car_selected.png' : 'car_deselected.png')).default.src} alt="" style={{ width: i==2 ? 220 : 170 }}/>
							<span>{ i==2 ? '현대 코나' : '현대 아반떼' }</span>
						</div>
					)
				}
				</div>
				<div style={{ width: isDesktop ? 745 : 'auto', marginTop: 64 }}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
						<div style={{ 
							// display: 'flex', gap: 12,
							fontSize: 25, 
							marginLeft: "10%"
						}}>
							<span>리뷰 영상</span>
							<span style={{ color: colors.primary }}>&nbsp;{resultarticle.length}</span>
							<span>개</span>
							{ resultarticle.length > nArticlesInPage && <span> 중 {pageReal}페이지</span> }
						</div>
						<div>
							<div style={{ display: 'flex', flexDirection: 'column', gap: 40, alignItems: "center",justifyContent:"center", }}>
								{isDesktop && 
									resultarticle.slice((pageReal-1)*nArticlesInPage, pageReal*nArticlesInPage).map((a, i) =>
										<ArticleSummary article={a}/>
									)
								}
								{isMobile && 
									resultarticle.slice((pageReal-1)*nArticlesInPage, pageReal*nArticlesInPage).map((a, i) =>
										<ArticleSummaryToday article={a}/>
									)
								}
							</div>
						</div>
						<div style={{ display: 'flex', gap: 0, width: '100%', justifyContent: 'center' }}>
						{
							Array.from({ length: Math.ceil(resultarticle.length / nArticlesInPage) }, (_, i) => i + 1).map((i) =>
								<Link
									href={`/brand/${props.brandNameEng}?page=${i}`}
									style={{ 
										width: 40, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', color: i==pageReal ? colors.primary : colors._300,
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
