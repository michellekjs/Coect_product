import Link from "next/link";
import Image from "next/image";
import Author from "./Author";
import { useMediaQuery } from "react-responsive";
import { colors } from "../shared";

import style from "./hover.module.css";

export default function KeywordQuote() {
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
					{
						"내관: IRA 법안에 관해서는 상용차 위주로 보조금을 생각했었는데,  몇가지 조건만 만족시키면 개인들이 구매하는 경우에도 보조금을 주겠다고 말하면서 혜택은 더 받을 수 있을 것으로 보입니다..."
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
	);
}
