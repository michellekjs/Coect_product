import Link from "next/link";
import Image from "next/image";
import Author from "./Author";

import { colors } from "../shared";

import { useMediaQuery } from "react-responsive";

import style from './hover.module.css';

export default function ArticleSummary(props) {
	const isDesktop = useMediaQuery({
		query: "(min-width: 1045px)",
	});
	const isMobile = useMediaQuery({ query: "(max-width: 1045px)" });
	const myLoader = ({ src }) => {
		return `https://i.ytimg.com/vi_webp/${src}/0.webp`
	}


	const styles = {
		container: {
			display: "flex",
			width: "100%",
			// height: 200,
			// marginTop: 20,
			// marginBottom: props.top ? 40 : 30,
			textDecoration: "none",
			color: "black",
			// borderRadius: "10px",
			// backgroundColor: "#FAFAFA",
			// padding: "30px",
            // boxShadow: '5px 5px 5px 5px #F9F9F9',
			height: isMobile? 84.38 : 114,
			padding: isMobile ? 0 : 10,
			boxSizing: "content-box",
		},
		right: {
			flex: 1,
			display: "flex",
			flexDirection: "column",
            justifyContent: 'space-between',
			// height: 200,
			// paddingTop: 8, paddingBottom: 8
			// gap: 26
		},
		title: {
			fontSize: props.top ? 32 : 16,
			fontWeight: 500,
			display: "-webkit-box",
			WebkitBoxOrient: "vertical",
			WebkitLineClamp: 2,
			overflow: "hidden",
			textOverflow: "ellipsis",
		},
		description: {
			marginTop: 5,
			flex: 1,
            fontSize: props.top ? 32 : 14,
			// display: '-webkit-box',
			// WebkitBoxOrient: 'vertical',
			// WebkitLineClamp: 3,
			// overflow: 'hidden',
			// textOverflow: 'ellipsis',
		},
		descriptionLine: {
			display: "-webkit-box",
			WebkitBoxOrient: "vertical",
			WebkitLineClamp: 1,
			overflow: "hidden",
			textOverflow: "ellipsis",
			marginTop: 5,
			marginBottom: 0,
            fontWeight: '100',
		},
		left: {
			// width: props.top ? 360 : 240,
			width: isMobile ? 150 : 203,
			height: isMobile ? 84.38 : 114.2, // 16:9?
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			overflow: "hidden",
			borderRadius: 5,
            marginRight: 12
		},
		thumbnail: {
			width: "100%",
			// height: '100%',
			objectFit: "cover",
		},
	};

	return (
		<Link
			href={`/car/article/${props.article.id}`}
			style={{ textDecoration: "none" }}
		>
			<div style={styles.container} className={isMobile ? null : style.logo}>
				<div style={styles.left}>
					<Image
						style={styles.thumbnail}
						loader= {myLoader}
						src={props.article.videoId}
						width={isMobile ? 150 : 203}
						height={isMobile ? 90 : 114}
						alt = "https://via.placeholder.com/360x218"
					/>
				</div>
				<div style={styles.right}>
					{/* <span style={{ fontSize: 12, color: colors._200 }}>{props.article.channelName}</span> */}
					<Author
						verySmall
						name={props.article.channelName}
						image={props.article.channelImageUrl}
					/>
					<div style={styles.title}>{props.article.title}</div>
					{!isMobile && <span style={{ fontSize: 13, color: colors._400 }}>{props.article.date.replaceAll('-','.')+'.'}</span> }
				</div>
				
			</div>
            
		</Link>
	);
}
