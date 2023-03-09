"use client";

import Head from 'next/head'
import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/router";
import { useMediaQuery } from 'react-responsive';
import { slide as Menu } from 'react-burger-menu';
import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import Logo from "../public/imgs/logo.svg";

// https://bluewings.github.io/unobstructed-hangul-regular-expression/
import { getRegExp } from 'korean-regexp';

import { brands, colors } from "../shared";

import style from './hover.module.css';

export default function Layout({ title, description, children }) {

	const router = useRouter();

	const isBigScreen = useMediaQuery({
		query: '(min-width: 1045px)'
	})
	const isMobile = useMediaQuery({ query: '(max-width: 1045px)' });

	const [opacity,setOpacity] = useState(100);
	const [results, setResults] = useState([]);
	const [resultIndex, setResultIndex] = useState(-1);

	const models = [];
	for (const brand of brands) {
		for (const model of brand.models) {
			models.push({ brandName: brand.name, brandNameEng: brand.nameEng, modelName: model.name });
		}
	}

	const autocomplete = (text) => {
		if (!text) { 
			setResults([]);
			return;
		}
        const filtered = models.filter(m => getRegExp(text.replace(' ', '').toLowerCase()).test((m.brandName+ m.modelName).toLowerCase()));
        setResults(filtered);
    };


	// const myLoader = ({ src }) => {
	// 	// return `require('../public/imgs/logo.svg')`
	// }

	const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '15px',
      height: '15px',
      right: isMobile ? "20px" : '40px',
      top: ' 23px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      top: "0px",
      height: '100%',
      width : "50%",
    },
    bmMenu: {
      background: '#FAFAFA',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
	// const styles = {
	// 	big: {

	// 	},
	// 	small: {}
	// };

	useEffect(function mount() {
    function onScroll() {
      	setOpacity(window.scrollY)
		// console.log(opacity)
    }

    window.addEventListener("scroll", onScroll);

    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });


	return (
		<html>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				
				<meta property="og:type" content="website"/>
				<meta property="og:title" content={title}/>
				<meta property="og:description" content={description}/>
				<meta property="og:image" content="/og.png"/>
			</Head>
			<body>
				<div style={{ width: '100%', overflow:"clip" }}>
					{isMobile && 
						<div>
							<Menu right styles={styles}>
								{brands.map((brand) => {
								return (
									<Link
										key={brand.id}
										href={`/brand/${brand.nameEng}`}
										style={{ textDecoration: 'none', color: '#424242', fontSize: 15, marginBottom : 10 }}
									>
										{brand.name}
									</Link>
								);
							})}
							</Menu>
						</div>
					}
					<div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: isMobile? 16 : 30, paddingRight: 30, paddingTop: 16, paddingBottom: 16, boxSizing: 'border-box', width: '100%', alignItems:'center', position:'sticky', top: 0, zIndex:10, backdropFilter: 'blur(8px)',backgroundColor: isMobile ? 'white' : 'rgba(255, 255, 255, 0.8)', height: isMobile ? 60 : 80 }}>
						<div style={{ display: 'flex', flexDirection: 'row', gap: 32, alignItems: 'center' }}>
							<Link href="/" style={{ display: 'flex', gap: 6, alignItems: 'baseline', textDecoration: 'none' }}>
								<Image 
									src={Logo}
									alt="COECT 로고"
									style={{ opacity: opacity<350 ? 1 : 0.8 }}
									width = {105}
									height = {44}
								/>
							</Link>
						{
							isBigScreen && <div>
								<div style={{ 
									width: 300,
									// height: 32,
									display: "flex",
									// justifyContent: "space-between",
									alignItems: "center",
									border: `1.5px solid ${colors._700}`,
									borderRadius: 5,
									position: 'relative',
									backgroundColor: 'white',
									paddingTop: 8,
									paddingBottom: 8,
								}}>
									<Image src={require('../public/imgs/search.svg')} width={20} height={20} style={{ marginLeft: 12, marginRight: 8}}/>
									<input
										style={{
											flex: 1,
											// paddingLeft: 12,
											paddingRight: 12,
											border: "none",
											outline: "none",
											// fontSize: 12,
										}}
										type="text"
										placeholder="원하는 차종을 검색해보세요."
										onChange={e => autocomplete(e.target.value)}
										onKeyDown={e => {
											if (e.key === "Enter" && resultIndex >= 0) {
												setResultIndex(-1);
												setResults([]);
												const r = results[resultIndex];
												router.push(`/brand/${r.brandNameEng}?model=${r.modelName}`);
											}

											let newResultIndex = resultIndex;
											if (e.key === "ArrowDown") newResultIndex += 1;
											else if (e.key === "ArrowUp") newResultIndex -= 1;

											if (newResultIndex < -1) newResultIndex = results.length - 1;
											else if (newResultIndex >= results.length) newResultIndex = -1;

											setResultIndex(newResultIndex);
										}}
									/>
								</div>
								<div style={{ position: 'relative', width: '100%', height: 0 }}>
								{results.length > 0 && (
									<div style={{
										position: "absolute",
										top: -5,
										paddingTop: 5,
										left: 2,
										width: '98%',
										display: 'flex',
										flexDirection: 'column',
										// right: 0,
										backgroundColor: "white",
										border: `1.5px solid ${colors._700}`,
										borderBottomLeftRadius: 5,
										borderBottomRightRadius: 5,
										zIndex: -1,
										paddingBottom: 4,
									}}>
										{results.map((model, index) => {
											return (
												<Link
													key={index}
													href={`/brand/${model.brandNameEng}?model=${model.modelName}`}
													style={{
														paddingTop: 4,
														paddingBottom: 4,
														paddingLeft: 12,
														textDecoration: "none",
														color: 'black',
														// borderBottom: `1px solid ${colors._700}`,
														fontSize: 14,
														display: 'flex',
														alignItems: 'center',
														backgroundColor: resultIndex === index ? colors._700 : 'white',
													}}
													className={style.autocompleteItem}
													onClick={() => {
														setResultIndex(-1);
														setResults([])
													}}
												>
													<Image src={require('../public/imgs/search.svg')} width={20} height={20} style={{marginRight: 8}}/>
													{model.brandName} {model.modelName}
												</Link>
											)
										})}
									</div>
								)}
								</div>
							</div>
						}
						</div>
						{isBigScreen && <div style={{display:'flex', flexDirection: 'row', gap: 10 }}>
							{brands.map((brand, index) => {
								return (
									<Link
										key={index + 1}
										href={`/brand/${brand.nameEng}`}
										style={{ textDecoration: 'none', color: '#424242', fontSize: 15, opacity: opacity<350 ? 1 : 0.8 }}
									>
										{brand.name}
									</Link>
								);
							})}
						</div>}
						
						
					</div>
					<div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						{children}
					</div>
					<br />
					<br />
					<br />
					<br />
					<br />
					<div style={{ textAlign: "center", color: "#959595" }}>© 2023 Coect</div>
					<br />
					<br />
				</div>
			</body>
		</html>
	);
}
