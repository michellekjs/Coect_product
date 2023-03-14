"use client";

import Head from "next/head";
import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { slide as Menu } from "react-burger-menu";
import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import Logo from "../public/imgs/logo_main.svg";
import Car from "../public/imgs/carlogo.svg";
import Fashion from "../public/imgs/fashionlogo.svg";
import Trip from "../public/imgs/triplogo.svg";
import Electric from "../public/imgs/electriclogo.svg";
import { getRegExp } from "korean-regexp";

import { articles, categories, brands, colors } from "../shared";
import style from "../comps/hover.module.css";

export default function MainPage() {
	const isDesktop = useMediaQuery({
		query: "(min-width: 1045px)",
	});
	const isMobile = useMediaQuery({ query: "(max-width: 1045px)" });
	const [results, setResults] = useState([]);
	const [resultIndex, setResultIndex] = useState(-1);

	const models = [];
	for (const brand of brands) {
		for (const model of brand.models) {
			models.push({
				brandName: brand.name,
				brandNameEng: brand.nameEng,
				modelName: model.name,
			});
		}
	}

	const autocomplete = (text) => {
		if (!text) {
			setResults([]);
			return;
		}
		const filtered = models.filter((m) =>
			getRegExp(text.replace(" ", "").toLowerCase()).test(
				(m.brandName + m.modelName).toLowerCase()
			)
		);
		setResults(filtered);
	};

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<Link
				href="/"
				style={{
					display: "flex",
					gap: 6,
					alignItems: "baseline",
					textDecoration: "none",
				}}
			>
				<Image src={Logo} alt="COECT" width={160} height={80} />
			</Link>
			<div> 영상 속 필요한 정보만 찾아 빠르게 읽으세요 </div>
			<div>
				<div
					style={{
						width: 300,
						// height: 32,
						display: "flex",
						// justifyContent: "space-between",
						alignItems: "center",
						border: `1.5px solid ${colors._700}`,
						borderRadius: 5,
						position: "relative",
						backgroundColor: "white",
						paddingTop: 8,
						paddingBottom: 8,
					}}
				>
					<Image
						src={require("../public/imgs/search.svg")}
						width={20}
						height={20}
						style={{ marginLeft: 12, marginRight: 8 }}
					/>
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
						onChange={(e) => autocomplete(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter" && resultIndex >= 0) {
								setResultIndex(-1);
								setResults([]);
								const r = results[resultIndex];
								router.push(
									`/car/brand/${r.brandNameEng}?model=${r.modelName}`
								);
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
				<div style={{ position: "relative", width: "100%", height: 0 }}>
					{results.length > 0 && (
						<div
							style={{
								position: "absolute",
								top: -5,
								paddingTop: 5,
								left: 2,
								width: "98%",
								display: "flex",
								flexDirection: "column",
								// right: 0,
								backgroundColor: "white",
								border: `1.5px solid ${colors._700}`,
								borderBottomLeftRadius: 5,
								borderBottomRightRadius: 5,
								zIndex: -1,
								paddingBottom: 4,
							}}
						>
							{results.map((model, index) => {
								return (
									<Link
										key={index}
										href={`/car/brand/${model.brandNameEng}?model=${model.modelName}`}
										style={{
											paddingTop: 4,
											paddingBottom: 4,
											paddingLeft: 12,
											textDecoration: "none",
											color: "black",
											// borderBottom: `1px solid ${colors._700}`,
											fontSize: 14,
											display: "flex",
											alignItems: "center",
											backgroundColor:
												resultIndex === index ? colors._700 : "white",
										}}
										className={style.autocompleteItem}
										onClick={() => {
											setResultIndex(-1);
											setResults([]);
										}}
									>
										<Image
											src={require("../public/imgs/search.svg")}
											width={20}
											height={20}
											style={{ marginRight: 8 }}
										/>
										{model.brandName} {model.modelName}
									</Link>
								);
							})}
						</div>
					)}
				</div>
				<div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
				<Image src={Car} width={60} height={60} />
				<Image src={Electric} width={60} height={60} />
				<Image src={Fashion} width={60} height={60} />
					<Image src={Trip} width={60} height={60} />
				</div>
			</div>
		</div>
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
