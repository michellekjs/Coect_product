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

export default function CategoryIdPage(props) {
	const isDesktop = useMediaQuery({
		query: '(min-width: 1045px)'
	})
	const isMobile = useMediaQuery({ query: '(max-width: 1045px)' });

  const router = useRouter();
	const { page } = router.query;

  const pageReal = page ? parseInt(page) : 1;

  const nArticlesInPage = 6;

  const resultarticle = articles

	return (
		<Layout title={'전체 리뷰 영상 - COECT'} description={`${brands.map(_ => _.name).join(', ')} 등 브랜드 리뷰 영상 ${resultarticle.length}개.`}>
			<div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<div style={{ width: isDesktop ? 745 : 'auto', marginTop: 64 }}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
						<div style={{ 
							fontSize: isMobile ? 20: 22,
							fontWeight: 500, 
							// marginLeft: "10%"
						}}>
							<span>전체 리뷰 영상</span>
							<span style={{ color: colors.primary }}>&nbsp;{resultarticle.length}</span>
							<span>개</span>
							{ resultarticle.length > nArticlesInPage && <span> 중 <span style={{ color: colors.primary }}>{pageReal}</span>페이지</span> }
						</div>
						<div>
							<div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 40 : 20, justifyContent:"center", }}>
								{isDesktop && 
									resultarticle.slice((pageReal-1)*nArticlesInPage, pageReal*nArticlesInPage).map((a, i) =>
										<ArticleSummary key={i} article={a}/>
									)
								}
								{isMobile && 
									resultarticle.slice((pageReal-1)*nArticlesInPage, pageReal*nArticlesInPage).map((a, i) =>
										<ArticleSummaryToday key={i} article={a}/>
									)
								}
							</div>
						</div>
						<div style={{ display: 'flex', gap: 0, width: '100%', justifyContent: 'center' }}>
						{
							Array.from({ length: Math.ceil(resultarticle.length / nArticlesInPage) }, (_, i) => i + 1).map((i) =>
								<Link
									key={i}
									href={`/article?page=${i}`}
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
