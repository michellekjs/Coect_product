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
	const { brandNameEng, page, model } = router.query;

	const brand = brands.find((brand) => brand.nameEng == brandNameEng);

	const pageReal = page ? parseInt(page) : 1;

	const nArticlesInPage = 6;

	const [resultarticle, setarticle] = useState([]);

	useEffect(() => {
		setarticle(articles.filter(
			(article) => (article.brand == brand.name) && (!model || article.model == model)
		));
	}, [model]);

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
				<div style={{display:"flex", width:"100%", justifyContent:'center'}}>
					<div style={{ display: 'flex', gap: 20, justifyContent: 'end', overflowX: "scroll", width:"wrap-content", paddingLeft:30, paddingRight:30}}>
					{
						brand.models.map((m, i) => 
							<Link 
								href={`/brand/${brand.nameEng}` + (model==m.name ? '' : `?model=${m.name}`)}
								style={{ display: 'flex', flexDirection: 'column', justifyContent: 'end', gap: 15, textAlign: 'center', fontSize: model==m.name ? 16 : 14, color: model==m.name ? 'black' : colors._300, textDecoration: 'none', color: 'black'}}
								className={styles.model}
							>
								<img src={require(`../../public/imgs/models/${brand.name} ${m.name} ${m.submodels[0].name ? m.submodels[0].name + ' ' : ''}(${m.generation}세대).png`).default.src} alt="" style={{ width: model==m.name ? 220 : 170, filter: model==m.name ? '' : 'grayscale(1)' }}/>
								<span>{`${brand.name} ${m.name}`}</span>
							</Link>
						)
					}
					</div>
				</div>
				<div style={{ width: isDesktop ? 745 : 'auto', marginTop: 64 }}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
						<div style={{ 
							fontSize: 22,
							fontWeight: 500, 
							// marginLeft: "10%"
						}}>
							{ model ? model : '전체 모델' }
							<span> 리뷰 영상</span>
							<span style={{ color: colors.primary }}>&nbsp;{resultarticle.length}</span>
							<span>개</span>
							{ resultarticle.length > nArticlesInPage && <span> 중 <span style={{ color: colors.primary }}>{pageReal}</span>페이지</span> }
						</div>
						<div>
							<div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 40 : 20, justifyContent:"center", }}>
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
