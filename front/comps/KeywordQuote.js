import Link from "next/link";
import Image from "next/image";
import Author from "./Author";
import { useMediaQuery } from "react-responsive";
import { colors } from "../shared";

import style from "./hover.module.css";

export default function KeywordQuote() {
	return (
		<>
			<div
				style={{
					display: "flex",
					width: 320,
					textDecoration: "none",
					color: "black",
					boxSizing: "content-box",
					flexDirection:'column', 
					height: 300
				}}
			>
				<div
					style={{
						fontSize: 16,
						fontWeight: 500,
						whiteSpace:'normal',
						display: "-webkit-box",
						WebkitBoxOrient: "vertical",
						WebkitLineClamp: 5,
						overflow: "hidden",
						textOverflow: "ellipsis",
						wordBreak:"break-all",
					}}
				>
					{
						"blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah"
					}
				</div>
				<div style={{ display: "flex", flexDirection: "row", justifyContent:"space-between",  }}>
					<Author
						verySmall
						name={"모트라인 MOTLine"}
						image={
							"https://yt3.ggpht.com/ytc/AL5GRJWahWOoAeQEIJ25Seu0NJrPEJ-x8JDoNxZdZq6jHg=s88-c-k-c0x00ffffff-no-rj"
						}
					/>
					<Link href={`/article/26/`} style={{fontSize:14,textDecoration:'none', color: '#2B6F7D'}}> 시청하기 </Link>
				</div>
			</div>
		</>
	);
}
