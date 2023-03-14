import Link from "next/link";
import Image from "next/image";
import Author from "./Author";
import { useMediaQuery } from "react-responsive";
import React, { useState, useEffect } from "react";
import { colors } from "../shared";

import style from "./hover.module.css";
import { StartQuote } from "../public/imgs/start-quote.svg";
import { EndQuote } from "../public/imgs/close-quote.svg";

export default function KeywordQuote(props) {
	const [selected, setSelected] = useState({
		summaries: [],
		channelImageUrl: "",
		channelId: "",
		videoId: "",
	});

	const [quote, setquote] = useState("");
	const [topic, settopic] = useState("");
	// const [keyword, setKeyword] = useState()


	useEffect(() => {
		if (props.keyword === "any") {
		setquote(props.article.summaries[Math.floor(Math.random()*props.article.summaries.length)].text)
	} else {
		
		setquote(
			props.article.summaries.filter((s) => s.subject === props.keyword)[0].text
		);

		settopic(props.article.summaries.filter((s) => s.subject === props.keyword)[0].topic)
	}

	}, [props.article, props.keyword]);

	const isDesktop = useMediaQuery({
		query: "(min-width: 1045px)",
	});
	const isMobile = useMediaQuery({ query: "(max-width: 1045px)" });
	const keywords = ["공간", "가격", "디자인", "성능", "기능"];
	// console.log(props.article)
	return (
		<div
			className={style.vl}
			style={{
				boxSizing: "content-box",
				width: 260,
				height: 150,
				paddingLeft: 10 ,
				
				
			}}
		>
		<div style={{display:"flex", flexDirection:"row"}}>
			<Image
				src={require("../public/imgs/start-quote.svg")}
				width={10}
				height={10}
				alt="quote"
				className={style.quote}
				style={{marginRight:10}}
			/>
			<div
				style={{
					width: isMobile ? 200 : 260,
					fontSize: 14,
					fontWeight: 200,
					whiteSpace: "normal",
					display: "-webkit-box",
					WebkitBoxOrient: "vertical",
					WebkitLineClamp: isMobile ? 4 : 5,
					overflow: "hidden",
					textOverflow: "ellipsis",
					wordBreak: "break-all",
					lineHeight: 1.5,
					fontWeight: '400'
				}}
			>
			<span style={{color: "#2B6F7D", fontWeight:"700"}}> {props.keyword == "any" ? "" : topic +"  |"} </span>
			<span>{quote} </span>
			
			</div>

			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					marginTop: 20,
				}}
			>
				<Author
					verySmall
					name={props.article.channelName}
					image={props.article.channelImageUrl}
				/>
				<Link
					href={`/car/article/${props.article.id}/`}
					className={style.link}
				>
					{" "}
					시청하기{" "}
				</Link>
			</div>
		</div>
	);
}
