import Link from "next/link";
import Image from "next/image";
import Author from "./Author";
import { useMediaQuery } from "react-responsive";
import { colors } from "../shared";

import style from "./hover.module.css";

export default function KeywordQuote(props) {
	return (
			<div className={style.vl}>
				<div
					style={{
						fontSize: 14,
						fontWeight: 400,
						whiteSpace:'normal',
						display: "-webkit-box",
						WebkitBoxOrient: "vertical",
						WebkitLineClamp: 5,
						overflow: "hidden",
						textOverflow: "ellipsis",
						wordBreak:"break-all",
						lineHeight:1.5
					}}
				>
					{/* { props.article.summaries.map ((s)=>
					if (s.subject == props.keyword) {
						s.text
					})} */}
						{props.article.summaries[0].text}
				</div>
				<div style={{ display: "flex", flexDirection: "row", justifyContent:"space-between",  }}>
					<Author
						verySmall
						name={"모트라인 MOTLine"}
						image={
							"https://yt3.ggpht.com/ytc/AL5GRJWahWOoAeQEIJ25Seu0NJrPEJ-x8JDoNxZdZq6jHg=s88-c-k-c0x00ffffff-no-rj"
						}
					/>
					<Link href={`/article/26/`} className={style.link}> 시청하기 </Link>
				</div>
			</div>
	);
}
