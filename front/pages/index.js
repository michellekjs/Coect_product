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

	const categories = ['차량', '전자기기', '패션', '여행']
		const logos = [Car, Electric, Fashion, Trip]

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
				minHeight: "100vh",
				gap: 30,
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
			<div style={{ fontSize: isMobile ? 12 : 18, color: "#6F6F6F"}}>
				{" "}
				영상 속 <span style={{ color: "#2B6F7D" }}> 필요한 </span> 정보만 찾아{" "}
				<span style={{ color: "#2B6F7D" }}>빠르게</span> 읽으세요{" "}
			</div>
			<div
				style={{
					width: isMobile ? 250 : 500,
					marginTop: 30,
					height: 30,
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
						fontSize: 12,
					}}
					type="text"
					placeholder="원하는 차종을 검색해보세요."
					onChange={(e) => autocomplete(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter" && resultIndex >= 0) {
							setResultIndex(-1);
							setResults([]);
							const r = results[resultIndex];
							router.push(`/car/brand/${r.brandNameEng}?model=${r.modelName}`);
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
			{isDesktop &&
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
					gap: isMobile ? 80 : 100,
					fontSize: 14,
				}}
			>
			{categories.map((category, k) => 
			<Link
					href="/car"
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						gap: 8,
					}}
				>
					<Image src={logos[k]} width={60} height={60} />
					<div style={{color:'black', textDecoration:"none"}}> {category} </div>
				</Link>
			) }
			
			</div>
}
{isMobile &&
<div style={{display:"flex", flexDirection:"column", gap:30}}> 
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
					gap: isMobile ? 80 : 100,
					fontSize: 14,
				}}
			>
			{categories.slice(0,2).map((category, k) => 
			<Link
					href="/car"
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						gap: 8,
					}}
				>
					<Image src={logos[k]} width={60} height={60} />
					<div style={{color:'black', textDecoration:"none"}}> {category} </div>
				</Link>
			) }
			</div>
				<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
					gap: isMobile ? 80 : 100,
					fontSize: 14,
				}}
			>
			{categories.slice(2,4).map((category, k) => 
			<Link
					href="/car"
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						gap: 8,
					}}
				>
					<Image src={logos[k+2]} width={60} height={60} />
					<div style={{color:'black', textDecoration:"none"}}> {category} </div>
				</Link>
			) }
			</div>
			</div>
}
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
