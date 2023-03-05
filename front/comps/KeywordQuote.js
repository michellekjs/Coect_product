import Link from "next/link";
import Image from "next/image";
import Author from "./Author";
import { useMediaQuery } from "react-responsive";
import React, { useState } from "react";
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

	const isDesktop = useMediaQuery({
		query: "(min-width: 1045px)",
	});
	const isMobile = useMediaQuery({ query: "(max-width: 1045px)" });
	console.log(props.article)
	return (
		<div
			className={style.vl}
			style={{
				width: 280,
				height: 200,
				paddingLeft: isMobile ? 10 : 30,
			}}
		>
			<Image
				src={require("../public/imgs/start-quote.svg")}
				width={20}
				height={20}
				alt="quote"
				className={style.quote}
			/>
			<div
				style={{
					boxSizing: "border-box",
					fontSize: 14,
					fontWeight: 200,
					whiteSpace: "normal",
					display: "-webkit-box",
					WebkitBoxOrient: "vertical",
					WebkitLineClamp: isMobile ? 3 : 5,
					overflow: "hidden",
					textOverflow: "ellipsis",
					wordBreak: "break-all",
					lineHeight: 1.5,
				}}
			>
				{
					props.article.summaries.filter((s) => s.subject === props.keyword)[0]
						.text
				}
				{/* {props.article.summaries[0].text} */}
			</div>
			<div style={{display:'flex', justifyContent:'flex-end', width:"100%"}} >
			<Image 
				src={require("../public/imgs/close-quote.svg")}
				width={20}
				height={20}
				alt="quote"
				className={style.quote}
			/>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					marginTop:20
				}}
			>
				<Author
					verySmall
					name={props.article.channelName}
					image={props.article.channelImageUrl}
				/>
				<Link
					href={`/article/${props.article.article_id}/`}
					className={style.link}

				>
					{" "}
					시청하기{" "}
				</Link>
			</div>
		</div>
	);
}
